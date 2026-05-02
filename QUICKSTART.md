# TAPIS GLOBAL - Quick Start Guide

## Getting Started

### 1. Open the Website
- **Windows**: Double-click `index.html` or drag it to your browser
- **Mac/Linux**: Right-click `index.html` → Open with → Your Browser
- **Direct**: Type file path in browser address bar

### 2. Website Structure at a Glance

```
TAPIS GLOBAL Website
│
├── 🏠 Home Page (index.html)
│   ├── Luxury hero section with form
│   ├── Featured collections
│   └── Why Choose Us
│
├── ℹ️ About (about.html)
│   ├── Company story
│   ├── Mission & Vision
│   ├── Team showcase
│   └── Certifications
│
├── 🛍️ Products (products.html)
│   ├── Hand-woven carpets
│   ├── Contemporary rugs
│   └── Marble & tiles
│
├── 🏆 Projects (projects.html)
│   ├── Hospitality projects
│   ├── Residential projects
│   ├── Commercial projects
│   └── Client testimonials
│
└── 📧 Contact (contact.html)
    ├── Contact form
    ├── Location info
    ├── FAQ section
    └── Newsletter signup
```

## Key Features

✅ **Dark Luxury Theme** - Black & gold color scheme
✅ **Fully Responsive** - Mobile, tablet, and desktop
✅ **Modern UI** - Professional, premium design
✅ **Interactive Forms** - With validation and feedback
✅ **Smooth Animations** - Hover effects and transitions
✅ **No Dependencies** - Pure HTML, CSS, JavaScript
✅ **Easy to Customize** - Well-organized code
✅ **SEO Ready** - Semantic HTML structure

## Color Scheme

| Element | Color | Code |
|---------|-------|------|
| Background | Dark Black | #1a1a1a |
| Secondary BG | Lighter Black | #2a2a2a |
| Accent/Gold | Gold | #d4af37 |
| Text | White | #ffffff |
| Text Light | Light Gray | #b0b0b0 |

## Customization Quick Tips

### Change Company Name
Find and replace "TAPIS GLOBAL INTERNATIONAL PVT LTD" with your company name

### Change Contact Info
- Email: info@tapisglobal.com
- Phone: +971-4-123-4567
- Address: 123 Luxury Avenue, Dubai, UAE
- Hours: Mon-Sat 9AM-6PM

### Add Your Logo
Replace the text logo with an image:
```html
<!-- Replace logo text -->
<a href="index.html" class="logo">
    <img src="images/logo.png" alt="Company Logo" style="height: 50px;">
</a>
```

### Change Gold Color
Edit CSS variables in `css/styles.css`:
```css
--accent-color: #d4af37;  /* Change to your preferred color */
```

### Add Product Images
```html
<div class="product-image">
    <img src="images/product-1.jpg" alt="Product Name">
</div>
```

## Form Handling

### Enquiry Form Validation
- Requires: Name, Email, Message
- Email format must be valid
- Form data logs to browser console
- Shows success message on submission

### Contact Form Features
- 6 inquiry types to select from
- Company and phone optional
- Project scope field for details
- Validates all required fields

## Navigation

### Main Menu Links
1. Home - index.html
2. About - about.html
3. Products - products.html
4. Projects - projects.html
5. Contact - contact.html

### Footer Links
Quick access to all pages plus:
- Social media placeholders
- Newsletter signup
- Business information

## Mobile Responsive Features

✓ Hamburger menu on mobile (< 768px)
✓ Touch-friendly buttons and forms
✓ Optimized font sizes
✓ Stack layout on small screens
✓ Full navigation accessibility

## Browser Testing

Test on:
- Chrome (Windows/Mac)
- Firefox
- Safari (Mac/iOS)
- Edge
- Mobile Safari (iPhone)
- Chrome Mobile (Android)

## Adding New Pages

1. Copy `products.html` as template
2. Update content and page title
3. Keep navigation menu identical
4. Add link to navigation in all pages
5. Keep same CSS and JS includes

## File Editing Tips

### HTML
- Keep structure and classes for styling
- Update page content inside main sections
- Maintain footer structure

### CSS
- Use CSS variables for colors
- Add responsive media queries at bottom
- Test on mobile devices

### JavaScript
- Form validation happens automatically
- Hamburger menu works on all pages
- Scroll animations included

## Performance Tips

✓ Lightweight files - under 50KB total
✓ No external dependencies needed
✓ Smooth 60fps animations
✓ Fast page load times
✓ Optimized for all devices

## SEO Optimization

To improve search rankings:
1. Add meta descriptions to each page
2. Use descriptive alt text on images
3. Include keywords in headings
4. Update meta tags in `<head>`
5. Create sitemap.xml for search engines

## Backup & Version Control

1. Create backup before major changes
2. Use version control (Git recommended)
3. Test changes on all devices
4. Keep original files as reference

## Deployment

When ready to go live:

### Shared Hosting
1. Upload files to hosting server
2. Update domain DNS
3. Test all pages on live domain
4. Set up SSL certificate

### Local Testing
1. Use Live Server in VS Code
2. Or use Python: `python -m http.server`
3. Or use Node: `npx http-server`

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Forms not working | Check browser console for errors |
| Menu not showing | Check if CSS file loaded properly |
| Styling looks off | Clear browser cache (Ctrl+Shift+Delete) |
| Images not loading | Check image file paths in HTML |
| Mobile menu stuck | Try refreshing page |

## Additional Resources

### To Add Features:
- Image gallery lightbox: Use Lightbox2 or similar
- Blog section: Create blog.html with posts
- E-commerce: Add shopping cart functionality
- Multi-language: Use language switcher

### Tools You Might Need:
- Image optimizer: TinyPNG, ImageOptim
- CSS preprocessor: SASS/SCSS
- Build tool: Webpack, Parcel
- Testing: Chrome DevTools, BrowserStack

## Support & Help

- Check README.md for full documentation
- Review code comments in HTML/CSS/JS
- Test in different browsers
- Use browser DevTools for debugging
- Validate HTML: https://validator.w3.org/
- Check CSS: https://jigsaw.w3.org/css-validator/

## Next Steps

1. ✅ Website created - open index.html
2. → Customize company information
3. → Add your products and projects
4. → Upload images
5. → Test on all devices
6. → Deploy to web server
7. → Monitor and update regularly

---

**Happy website building!** 🎉

For detailed customization guide, see README.md
