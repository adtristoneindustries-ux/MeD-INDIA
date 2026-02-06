# MeD INDIA - Companion for Medical Aspirants

A professional multi-page website for medical admission guidance and counseling services.

## 🎯 Features

- **8 Complete Pages**: Home, About, Services, MBBS India, MBBS Abroad, Packages, Blog, Contact
- **Responsive Design**: Mobile-first approach with hamburger menu
- **GSAP Animations**: Smooth scroll animations and transitions
- **Auto Popup Form**: Lead generation form with EmailJS integration
- **WhatsApp Integration**: Floating WhatsApp button on all pages
- **Form Validation**: 10-digit mobile number validation (compulsory)
- **SEO Optimized**: Meta tags and semantic HTML
- **Professional UI/UX**: Clean, modern design with brand colors

## 🎨 Brand Colors

- Navy Blue: `#0F3F63`
- Medical Blue: `#1F6FAF`
- Globe Green: `#6ED36F`
- Accent Yellow: `#F4C430`
- Dark Text: `#2E2E2E`
- Light Background: `#F6F8FA`
- White: `#FFFFFF`

## 📁 Project Structure

```
/med-india-website
│
├── index.html              # Home page
├── about.html              # About page
├── services.html           # Services page
├── mbbs-india.html         # MBBS India page
├── mbbs-abroad.html        # MBBS Abroad page
├── packages.html           # Packages page
├── blog.html               # Blog page
├── contact.html            # Contact page
│
├── css/
│   ├── global.css          # Common styles, navbar, footer
│   ├── home.css            # Home page styles
│   ├── about.css           # About page styles
│   ├── services.css        # Services page styles
│   ├── mbbs-india.css      # MBBS India styles
│   ├── mbbs-abroad.css     # MBBS Abroad styles
│   ├── packages.css        # Packages page styles
│   ├── blog.css            # Blog page styles
│   ├── contact.css         # Contact page styles
│   └── popup.css           # Popup form styles
│
├── js/
│   ├── global.js           # Navbar, WhatsApp, common functions
│   ├── home.js             # Home page animations
│   ├── about.js            # About page animations
│   ├── services.js         # Services page logic
│   ├── mbbs-india.js       # MBBS India animations
│   ├── mbbs-abroad.js      # MBBS Abroad animations
│   ├── packages.js         # Packages page logic
│   ├── blog.js             # Blog page animations
│   ├── contact.js          # Contact form handling
│   └── popup.js            # Popup form logic
│
└── assets/
    ├── images/             # Image files
    ├── icons/              # Icon files
    └── logo/               # Logo files
```

## 🚀 Setup Instructions

1. **Clone or Download** the project files
2. **Open** `index.html` in a web browser
3. **No build process required** - Pure HTML, CSS, JavaScript

## 📧 EmailJS Integration

To enable email functionality:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update the following files with your credentials:
   - `js/popup.js` - Line 2
   - `js/contact.js` - Line 29

```javascript
// Initialize EmailJS
emailjs.init('YOUR_PUBLIC_KEY');

// Send email
await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData);
```

## 📱 WhatsApp Integration

Update the WhatsApp number in `js/global.js`:

```javascript
window.open(`https://wa.me/918610013089?text=${message}`, '_blank');
```

Replace `918610013089` with your actual WhatsApp number (with country code).

## ✅ Form Validation

Both popup and contact forms include:
- **10-digit mobile validation** (compulsory)
- Only numbers allowed (no letters/special characters)
- HTML5 validation with pattern, maxlength, minlength
- JavaScript validation with clear error messages
- Auto-focus on invalid fields

## 🎭 Key Features by Page

### Home Page
- Hero section with call-to-action
- Package banner (Contact for Pricing)
- Animated counters (Years, Students, Admissions)
- Package benefits showcase
- CTA sections

### About Page
- Company introduction
- Mission & Vision cards
- Animated timeline of journey

### Services Page
- Expandable service sections
- Detailed service descriptions
- Interactive accordion

### MBBS India Page
- Admission overview
- Seat types information
- Eligibility criteria
- Admission strategy

### MBBS Abroad Page
- Country cards with hover effects
- 8 popular destinations
- Admission process steps
- Why study abroad section

### Packages Page
- Multiple pricing tiers
- Featured packages
- Interactive package cards
- WhatsApp integration for inquiries

### Blog Page
- Article cards with hover zoom
- Blog metadata (date, author)
- Read more links

### Contact Page
- Contact information
- EmailJS contact form with validation
- FAQ section
- Map placeholder

## 🎨 Animations

All animations are powered by GSAP:
- Scroll-triggered animations
- Fade-in effects
- Slide-in transitions
- Scale animations
- Stagger effects

## 📱 Responsive Design

- Desktop: Full layout
- Tablet: Adjusted grid layouts
- Mobile: Hamburger menu, single column layouts

## 🔧 Customization

### Update Contact Information
Edit the footer in all HTML files:
```html
<li>📧 medindiacag@gmail.com</li>
<li>📞 +91 86100 13089 / +91 96776 71220</li>
<li>📍 India</li>
```

### Update Brand Colors
Edit CSS variables in `css/global.css`:
```css
:root {
  --navy-blue: #0F3F63;
  --medical-blue: #1F6FAF;
  /* ... */
}
```

### Update Package Pricing
Edit `index.html` packages-banner section:
```html
<div class="package-price">Contact for Pricing</div>
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

© 2024 MeD INDIA. All rights reserved.

## 🤝 Support

For support, email medindiacag@gmail.com or call +91 86100 13089 / +91 96776 71220.

---

**Built with ❤️ for Medical Aspirants**
