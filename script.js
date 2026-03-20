// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    event.target.removeEventListener('progress', onProgress);
  } else {
    progressBar.classList.remove('hide');
  }
};

const modelViewer = document.querySelector('model-viewer');
modelViewer.addEventListener('progress', onProgress);

// Prevent zoom on scroll and touch
modelViewer.addEventListener('wheel', (event) => {
  event.preventDefault();
}, { passive: false });

modelViewer.addEventListener('touchmove', (event) => {
  // Allow single-touch panning but prevent pinch zoom
  if (event.touches.length > 1) {
    event.preventDefault();
  }
}, { passive: false });

// Also prevent mousewheel zoom
document.addEventListener('wheel', (event) => {
  if (event.target === modelViewer || modelViewer.contains(event.target)) {
    event.preventDefault();
  }
}, { passive: false });

// Rotate model based on scroll position
let modelInView = false;

// Intersection Observer to detect when model enters viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      modelInView = true;
      modelViewer.classList.add('in-view');
    } else {
      modelInView = false;
    }
  });
});

observer.observe(modelViewer);

window.addEventListener('scroll', () => {
  if (!modelInView) return; // Only rotate if model is in viewport
  
  // Get model-viewer position relative to viewport
  const rect = modelViewer.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  
  // Calculate how much of the model is visible (0 to 1)
  const modelTop = rect.top;
  const modelHeight = rect.height;
  
  // When model top reaches top of viewport, start rotation
  const scrollProgress = Math.max(0, Math.min(1, (viewportHeight - modelTop) / (viewportHeight + modelHeight)));
  
  // Rotate only 45 degrees max as scroll moves through the model-viewer
  const rotation = scrollProgress * 90;
  
  // Apply rotation using cameraOrbit attribute (theta phi radius)
  modelViewer.setAttribute('camera-orbit', `-${rotation}deg 75deg 100%`);
});