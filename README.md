# TAPIS GLOBAL INTERNATIONAL - Premium Flooring Website

## Overview
A luxury, responsive multi-page website for TAPIS GLOBAL INTERNATIONAL PVT LTD, featuring a dark luxury theme with gold accents. The website showcases premium flooring solutions including carpets, rugs, and marble tiles.

## Project Structure

```
tapis-website/
├── index.html           # Home page with hero section and enquiry form
├── about.html           # Company information, mission, vision, and achievements
├── products.html        # Complete product catalog with categories
├── projects.html        # Portfolio of completed projects
├── contact.html         # Contact form, location info, and FAQ
├── css/
│   └── styles.css       # Main stylesheet (dark luxury theme)
├── js/
│   └── script.js        # JavaScript for interactivity
├── images/              # Placeholder for product and project images
└── README.md            # This file
```

## Features

### Design Elements
- **Dark Luxury Theme**: Black (#1a1a1a) background with gold (#d4af37) accents
- **Responsive Layout**: Mobile-first design that works on all devices
- **Modern UI**: Clean, contemporary design with premium aesthetics
- **Smooth Animations**: Fade-in effects and hover animations
- **Professional Typography**: Elegant font choices and spacing

### Pages

#### 1. **Home (index.html)**
- Hero section with large heading and call-to-action
- Quick enquiry form on the right side
- Featured product collections grid
- Company highlights section
- Newsletter subscription

#### 2. **About (about.html)**
- Company story and legacy
- Mission and vision statements
- Why choose TAPIS GLOBAL section
- Team members showcase
- Achievements and statistics
- Certifications and awards

#### 3. **Products (products.html)**
- Hand-woven carpets collection
- Contemporary rugs collection
- Marble & tiles collection
- Detailed product specifications
- Price ranges and customization options
- Product features overview

#### 4. **Projects (projects.html)**
- Luxury hospitality projects
- Residential projects
- Commercial & corporate projects
- Cultural & public spaces
- Project statistics
- Client testimonials
- Project portfolio

#### 5. **Contact (contact.html)**
- Contact information (phone, email, address, hours)
- Comprehensive contact form
- Service locations worldwide
- Frequently Asked Questions (FAQ)
- Newsletter subscription
- Multiple contact methods

### Interactive Features
- **Responsive Hamburger Menu**: Mobile navigation menu
- **Form Validation**: Email and required field validation
- **Smooth Scrolling**: Internal navigation with smooth scroll
- **Hover Effects**: Product and project cards with elevation effects
- **Scroll Animation**: Elements fade in as you scroll
- **Toast Notifications**: Success/error messages

## Technical Stack

- **HTML5**: Semantic markup
- **CSS3**: 
  - CSS Grid and Flexbox for layouts
  - CSS Variables for theming
  - Media queries for responsiveness
  - Animations and transitions
- **JavaScript (Vanilla)**:
  - DOM manipulation
  - Form handling and validation
  - Event listeners
  - Intersection Observer API
  - LocalStorage ready

## CSS Variables (Color Scheme)

```css
--primary-color: #1a1a1a (Dark Black)
--secondary-color: #2a2a2a (Lighter Black)
--accent-color: #d4af37 (Gold)
--text-color: #ffffff (White)
--text-light: #b0b0b0 (Light Gray)
--hover-color: #f5f5f5 (Off-White)
```

## Responsive Breakpoints

- **Desktop**: Full layout (1200px+)
- **Tablet**: Optimized for medium screens (768px - 1199px)
- **Mobile**: Optimized for small screens (< 768px)
- **Extra Small**: Extra small devices (< 480px)

## How to Use

### Opening the Website
1. Open `index.html` in a web browser
2. Or drag and drop `index.html` into a browser window
3. Or right-click on `index.html` and select "Open with" → Your browser

### Navigation
- Click logo to return to home
- Use navigation menu to browse pages
- On mobile, click hamburger menu (☰) to toggle navigation
- Use footer links to quickly navigate

### Forms
- Fill in all required fields (marked with *)
- Form validation will prevent submission if fields are incomplete
- Success messages appear at the top of the page
- Form data is logged to browser console for demonstration

### Customization

#### Change Colors
Edit `css/styles.css` and modify CSS variables:
```css
:root {
    --primary-color: #1a1a1a;    /* Change main background */
    --secondary-color: #2a2a2a;  /* Change secondary background */
    --accent-color: #d4af37;     /* Change gold accent */
    --text-color: #ffffff;       /* Change text color */
}
```

#### Add Products
1. Open `products.html`
2. Copy a product card:
```html
<div class="product-card">
    <div class="product-image">🧵</div>
    <div class="product-info">
        <h3>Product Name</h3>
        <p>Description</p>
        <div class="product-specs">
            Specifications here
        </div>
    </div>
</div>
```
3. Paste and customize with your product info

#### Add Projects
1. Open `projects.html`
2. Follow similar pattern as products
3. Add project cards to appropriate sections

#### Replace Images
- Create an `images/` folder with your images
- Replace emoji placeholders with actual images:
```html
<!-- Replace this: -->
<div class="product-image">🧵</div>

<!-- With this: -->
<div class="product-image">
    <img src="images/product-name.jpg" alt="Product Name">
</div>
```

#### Update Company Information
Search and replace:
- Company name: "TAPIS GLOBAL INTERNATIONAL PVT LTD"
- Contact email: info@tapisglobal.com
- Phone: +971-4-123-4567
- Address: 123 Luxury Avenue, Dubai, UAE
- Business hours as needed

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations

- Lightweight CSS with no frameworks
- Vanilla JavaScript (no dependencies)
- Optimized animations (60fps)
- Lazy loading ready for images
- Responsive images for mobile

## SEO Considerations

- Semantic HTML structure
- Proper heading hierarchy (H1, H2, H3)
- Meta tags for pages (update as needed)
- Descriptive alt text for images
- Proper link structures

## Accessibility

- Semantic HTML elements
- Keyboard navigation support
- ARIA labels on interactive elements
- Color contrast ratios meet WCAG standards
- Form labels properly associated

## Future Enhancements

Potential additions:
- Backend database for products
- E-commerce functionality
- Blog section
- Image gallery lightbox
- Multi-language support
- Advanced search and filtering
- User accounts and wishlists
- Integration with CMS
- Live chat support
- Analytics tracking

## File Sizes

- HTML files: ~20-30KB each
- CSS file: ~25KB
- JavaScript file: ~8KB
- Total (uncompressed): ~150KB

## License

Created for TAPIS GLOBAL INTERNATIONAL PVT LTD - All rights reserved.

## Support

For modifications or customizations:
1. Edit HTML files directly for content changes
2. Modify CSS for styling changes
3. Update JavaScript for functionality changes
4. Consult documentation in code comments

---

**Website Version**: 1.0
**Last Updated**: May 2024
**Created**: Professional Web Design
