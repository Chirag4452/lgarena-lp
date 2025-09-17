# LG87 Play Arena Design System

## Overview

This design system provides a comprehensive set of design tokens, components, and guidelines for building consistent, accessible, and beautiful interfaces for the LG87 Play Arena sports complex website.

## 🎨 Color Palette

### Primary Red Palette (Energetic but Professional)
Our primary color system uses an energetic red that conveys passion and energy while maintaining professionalism suitable for a sports facility.

```css
--color-primary-50: #fef2f2   /* Lightest tint */
--color-primary-500: #ef4444  /* Main brand color */
--color-primary-600: #dc2626  /* Hover states */
--color-primary-700: #b91c1c  /* Active states */
```

**Usage:**
- **Primary-500**: Main brand color, primary buttons, links
- **Primary-600**: Hover states, secondary emphasis
- **Primary-50**: Light backgrounds, subtle highlights

### Neutral Gray Scale
Professional gray scale for text, backgrounds, and UI elements.

```css
--color-neutral-0: #ffffff     /* Pure white */
--color-neutral-100: #f1f5f9   /* Light backgrounds */
--color-neutral-500: #64748b   /* Body text */
--color-neutral-800: #1e293b   /* Headings */
--color-neutral-900: #0f172a   /* Darkest text */
```

### Status Colors
Semantic colors for different states and feedback.

- **Success**: `#22c55e` - Confirmations, success messages
- **Warning**: `#f59e0b` - Cautions, pending states  
- **Error**: `#ef4444` - Errors, validation failures
- **Info**: `#3b82f6` - Information, neutral alerts

## 🔤 Typography

### Font Family
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

### Typography Scale
```css
/* Headings */
h1, .text-h1: 3rem-6rem (responsive)
h2, .text-h2: 1.875rem-2.25rem  
h3, .text-h3: 1.5rem-1.875rem
h4, .text-h4: 1.25rem-1.5rem

/* Body Text */
.text-base: 1rem
.text-lg: 1.125rem
.text-xl: 1.25rem
```

### Usage Examples
```html
<h1 class="text-h1">Main Page Title</h1>
<h2 class="text-h2">Section Heading</h2>
<p class="text-lg">Large body text</p>
<p class="responsive-text">Responsive body text</p>
```

## 🎛️ Component System

### Buttons

#### Button Sizes
```html
<button class="btn btn-xs">Extra Small</button>
<button class="btn btn-sm">Small</button>  
<button class="btn btn-md">Medium</button>
<button class="btn btn-lg">Large</button>
<button class="btn btn-xl">Extra Large</button>
```

#### Button Variants
```html
<!-- Primary Actions -->
<button class="btn-primary">Book Facility</button>

<!-- Secondary Actions -->
<button class="btn-secondary">Learn More</button>

<!-- Outline Style -->
<button class="btn-outline">Cancel</button>

<!-- Ghost Style -->
<button class="btn-ghost">Skip</button>

<!-- Status Buttons -->
<button class="btn-success">Confirm</button>
<button class="btn-warning">Caution</button>
<button class="btn-error">Delete</button>
```

### Cards

#### Basic Cards
```html
<div class="card">
  <div class="card-header">
    <h3>Card Title</h3>
  </div>
  <div class="card-body">
    <p>Card content goes here</p>
  </div>
  <div class="card-footer">
    <button class="btn-primary">Action</button>
  </div>
</div>
```

#### Interactive Cards
```html
<div class="card-hover">
  <div class="card-body">
    <h3>Clickable Card</h3>
    <p>Hover for effect</p>
  </div>
</div>
```

#### Gradient Cards
```html
<div class="card-gradient">
  <div class="card-body">
    <h3>Featured Content</h3>
  </div>
</div>
```

### Forms

#### Form Structure
```html
<form>
  <div class="form-group">
    <label class="form-label">Name</label>
    <input type="text" class="form-input" placeholder="Enter name">
    <div class="form-help">Helper text goes here</div>
  </div>
  
  <div class="form-group">
    <label class="form-label">Message</label>
    <textarea class="form-textarea" rows="4"></textarea>
    <div class="form-error">Error message</div>
  </div>
  
  <button type="submit" class="btn-primary">Submit</button>
</form>
```

#### Form Controls
```html
<select class="form-select">
  <option>Option 1</option>
</select>

<input type="checkbox" class="form-checkbox">
<input type="radio" class="form-radio">
```

## 📐 Spacing System

### Spacing Scale
```css
--space-xs: 0.5rem    /* 8px */
--space-sm: 0.75rem   /* 12px */
--space-md: 1rem      /* 16px */
--space-lg: 1.5rem    /* 24px */
--space-xl: 2rem      /* 32px */
--space-2xl: 3rem     /* 48px */
--space-3xl: 4rem     /* 64px */
--space-4xl: 6rem     /* 96px */
```

### Layout Classes
```html
<div class="section-padding">Section with standard padding</div>
<div class="responsive-padding">Responsive padding</div>
<div class="container-custom">Content container</div>
```

## 🌟 Shadows & Elevation

### Shadow Scale
```css
--shadow-sm: Subtle shadow
--shadow-md: Standard shadow  
--shadow-lg: Elevated shadow
--shadow-xl: High elevation
--shadow-glow: Brand glow effect
```

### Usage
```html
<div class="shadow-md">Standard elevation</div>
<div class="shadow-glow">Special brand effect</div>
```

## 📱 Responsive Strategy

### Breakpoints
```css
xs: 475px    /* Small phones */
sm: 640px    /* Phones */  
md: 768px    /* Tablets */
lg: 1024px   /* Laptops */
xl: 1280px   /* Desktops */
2xl: 1536px  /* Large screens */
3xl: 1600px  /* Ultra-wide */
```

### Mobile-First Approach
```html
<!-- Responsive grid -->
<div class="grid-responsive">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Responsive text -->
<p class="responsive-text">Scales with screen size</p>
```

## 🎭 Utilities

### Badges
```html
<span class="badge-primary">New</span>
<span class="badge-success">Active</span>
<span class="badge-warning">Pending</span>
<span class="badge-error">Error</span>
```

### Alerts
```html
<div class="alert-info">Information message</div>
<div class="alert-success">Success message</div>  
<div class="alert-warning">Warning message</div>
<div class="alert-error">Error message</div>
```

### Text Utilities
```html
<p class="line-clamp-1">Single line with ellipsis</p>
<p class="line-clamp-2">Two lines with ellipsis</p>
<p class="line-clamp-3">Three lines with ellipsis</p>
```

## 🌙 Dark Mode

### Enabling Dark Mode
Add `class="dark"` to html element or use JavaScript toggle:

```javascript
document.documentElement.classList.toggle('dark');
```

### Dark Mode Styles
The system automatically adapts colors for dark mode:
- Cards become dark with light borders
- Form inputs adapt to dark backgrounds  
- Text colors invert appropriately

## 🎬 Animations

### Animation Classes
```html
<div class="animate-fade-in">Fades in</div>
<div class="animate-slide-up">Slides up</div>
<div class="animate-scale-in">Scales in</div>
<div class="animate-pulse-slow">Slow pulse</div>
```

### Custom Animations
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

## ♿ Accessibility

### Focus Management
- All interactive elements have visible focus indicators
- Focus rings use brand colors with proper contrast
- Tab order is logical and intuitive

### Color Contrast
- All text meets WCAG AA standards
- Status colors have sufficient contrast
- Interactive elements are clearly distinguishable

### Screen Readers
- Semantic HTML structure
- Proper ARIA labels where needed
- Alternative text for images

## 📋 Best Practices

### Do's
✅ Use design tokens instead of hardcoded values  
✅ Follow the component structure consistently  
✅ Test in both light and dark modes  
✅ Ensure mobile-first responsive design  
✅ Maintain consistent spacing patterns  

### Don'ts
❌ Don't create new colors without system approval  
❌ Don't break the grid system  
❌ Don't ignore accessibility guidelines  
❌ Don't mix different button styles inconsistently  
❌ Don't use arbitrary spacing values  

## 🚀 Usage Examples

### Complete Component Example
```html
<div class="section-padding">
  <div class="container-custom">
    <h2 class="text-h2 text-center mb-8">Our Facilities</h2>
    
    <div class="grid-responsive">
      <div class="card-hover">
        <div class="card-body">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-h4">Basketball Courts</h3>
            <span class="badge-primary">Popular</span>
          </div>
          <p class="text-neutral-600 mb-6">
            Professional courts with premium equipment
          </p>
          <button class="btn-primary w-full">Book Now</button>
        </div>
      </div>
    </div>
  </div>
</div>
```

This design system ensures consistency, maintainability, and a professional appearance across the entire LG87 Play Arena website while remaining flexible for future enhancements.
