# 3D Tire Model Viewer

A interactive 3D tire viewer built with Google's `<model-viewer>` web component. The model rotates smoothly as you scroll, with viewport entry animations.

## Features

- 🎯 **3D Model Viewer** - Interactive tire model using model-viewer
- 📱 **Responsive Design** - Adapts to all screen sizes
- ✨ **Scroll-Based Rotation** - Model rotates (45 degrees max) based on scroll position
- 🎬 **Entry Animations** - Smooth fade-in and slide-up animation when entering viewport
- 🔒 **Non-Interactive** - Prevents zoom, drag, and other interactions - scroll only
- 📲 **AR Support** - Quick Look on iOS and Scene Viewer on Android

## File Structure

```
├── index.html          # Main HTML file
├── styles.css          # Styling and animations
├── script.js           # Scroll interaction logic
├── tyre.glb            # 3D model file (GLB format)
├── poster.webp         # Poster image for model loading
├── ar_icon.png         # AR button icon
├── ar_hand_prompt.png  # AR prompt hand image
└── README.md           # This file
```

## How It Works

1. **Entry Animation**: When the model enters the viewport, it smoothly fades in with a translateY animation
2. **Scroll Rotation**: As you scroll through the model-viewer section, it rotates up to 45 degrees
3. **Viewport Tracking**: Rotation only occurs while the model is visible in the viewport
4. **No Interactions**: All click, drag, and zoom events are disabled - only scroll movement affects the model

## Setup

Simply open `index.html` in a modern web browser. No build process required.

### Requirements

- Modern web browser with ES6 support
- Internet connection (for model-viewer library CDN)

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Notes

- The 3D model rotates a maximum of 45 degrees during scroll
- Top and bottom sections are 700px blank spaces for scrolling room
- All pointer events are disabled on the model to prevent interaction conflicts
- Progress bar shows during model loading

## License

[Kewal Badali]
