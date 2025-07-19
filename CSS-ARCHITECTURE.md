# CSS Architecture Documentation

## Overview

This portfolio website uses a modular CSS architecture to improve maintainability, readability, and performance. The CSS is organized into logical components that can be developed and maintained independently.

## File Structure

```
assets/
└── css/
    ├── style.css           # Main styles and layout
    ├── aws-theme.css       # AWS theme variables and colors
    ├── aws-components.css  # AWS-styled components
    ├── aws-style.css       # Additional AWS styling
    └── color-fixes.css     # Color-specific fixes and overrides
```

## CSS Variables

All colors and key values are defined as CSS variables in `base.css` for easy maintenance:

```css
:root {
  --primary-color: #232f3e;     /* AWS dark blue/navy */
  --secondary-color: #ff9900;   /* AWS orange */
  --hover-orange: #ec7211;      /* AWS orange hover */
  --text-color: #232f3e;        /* Main text color */
  --light-bg: #f8f9fa;          /* Light background */
  --link-color: #0073bb;        /* Link color */
  --heading-color: #232f3e;     /* Heading color */
  --border-color: #eaeded;      /* Border color */
  --button-text: #ffffff;       /* Button text color */
  --hover-bg: #31465f;          /* Hover background */
  --card-shadow: 0 1px 1px 0 rgba(0,28,36,.1), 0 1px 3px 1px rgba(0,28,36,.1);
  --card-shadow-hover: 0 1px 3px 0 rgba(0,28,36,.15), 0 4px 8px 3px rgba(0,28,36,.15);
}
```

## Component System

The CSS uses a component-based approach with reusable classes:

- `aws-card` - Card component with consistent styling
- `aws-button` - Primary button style
- `aws-button-secondary` - Secondary button style

## Responsive Design

The responsive design is handled in `responsive.css` with media queries for different screen sizes:

- Desktop (default)
- Tablet (max-width: 991px)
- Mobile (max-width: 768px)
- Small Mobile (max-width: 575px)

## Build Process

The CSS can be optimized for production using the build script:

```
npm run build
```

This will:
1. Concatenate all CSS files into one
2. Minify the CSS
3. Output the optimized file to `build/assets/css/styles.min.css`

## AWS Theme

The CSS implements AWS design language with:
- AWS color palette
- Amazon Ember font
- AWS-style components
- Consistent spacing and typography