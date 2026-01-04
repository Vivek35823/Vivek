# VIVEK Library - Individual HTML Pages System

This directory contains the individual HTML pages for each library item, similar to the Events system.

## 📁 File Structure

```
library/
├── library-l1.html          # Letter to Alasinga Perumal
├── library-l2.html          # Karma-Yoga
├── library-l3.html          # Bhakti-Yoga
├── library-l4.html          # Raja-Yoga
├── library-l5.html          # Addresses on Bhakti-Yoga
├── library-l6.html          # On Caste
├── library.css              # Shared CSS styles
└── fileMap.ts               # URL mapping configuration
```

## 🎨 Features

Each library item HTML page includes:

- **Responsive Design**: Mobile-friendly layout that adapts to all screen sizes
- **Bilingual Support**: Ready to support both English and Bengali content
- **Navigation**: Back button to return to the main library page
- **Hero Section**: Eye-catching header with item category and title
- **Content Display**: Professional reading layout with:
  - Author attribution
  - Main content with proper typography
  - Featured quotes with styling
  - Decorative dividers
  - Footer with editorial board credit

## 🔗 Linking System

From the main `Library.tsx` React component, items link to their respective HTML pages:

```
library-l1.html  → Letter to Alasinga Perumal
library-l2.html  → Karma-Yoga
library-l3.html  → Bhakti-Yoga
library-l4.html  → Raja-Yoga
library-l5.html  → Addresses on Bhakti-Yoga
library-l6.html  → On Caste
```

## 📝 Adding New Library Items

To add a new library item:

1. **Create HTML file**: Copy an existing `library-lX.html` file and customize:
   - Update title, category, and content
   - Modify the hero section
   - Update author information
   - Replace the main content

2. **Update constants.tsx**: Add the new item to `MOCK_LIBRARY` array

3. **Update fileMap.ts**: Add mapping for the new item ID

4. **Use consistent ID**: Ensure the file name (library-lX.html) matches the item ID

## 🎯 File Naming Convention

- Library files: `library-lX.html` where X is the item ID (l1, l2, l3, etc.)
- Shared CSS: `library.css`
- Configuration: `fileMap.ts`

## 🌐 CSS Classes & Styling

All HTML pages use a shared `library.css` file with:

- Navigation styling
- Hero section animations
- Content section layouts
- Responsive breakpoints
- Print-friendly styles
- Smooth scrolling effects

## 🎬 Animations

Built-in animations include:
- Fade-in effect on page load
- Slide-up animations for content
- Hover effects on buttons
- Pulse animation on decorative dividers

## 📱 Responsive Breakpoints

- Desktop: 1024px and above
- Tablet: 768px to 1023px
- Mobile: Below 768px
- Extra small: Below 480px

## ♿ Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Alt-friendly image descriptions
- Keyboard navigation support
- High contrast colors
- Skip navigation links (can be added)

## 🚀 Performance

- Lightweight individual pages
- Minimal CSS duplication
- Optimized images
- Fast load times
- Caching-friendly static files

## 📖 Content Management

Each HTML file can be edited directly or regenerated from the React component data. Update `constants.tsx` with new content and regenerate HTML files as needed.

---

**Last Updated**: December 2024
**System**: VIVEK Foundation - Library Management
