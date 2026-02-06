# Quick Start Guide - MeD INDIA Website

## ✅ What's Included

✓ 8 Complete HTML Pages
✓ 10 CSS Files (Modular & Organized)
✓ 10 JavaScript Files (Page-specific)
✓ Responsive Design
✓ GSAP Animations
✓ Auto Popup Form
✓ WhatsApp Integration
✓ EmailJS Ready

## 🚀 How to Run

1. **Open the website**
   - Simply open `index.html` in any modern web browser
   - No server or build process required!

2. **Navigate through pages**
   - Use the navigation menu to explore all pages
   - Test on mobile by resizing your browser

## 🔧 Quick Customizations

### 1. Update Contact Email (Important!)

**File**: All HTML files (popup form section)
**Line**: Search for `medindiacag@gmail.com`
**Replace with**: Your actual email address

### 2. Update WhatsApp Number

**File**: `js/global.js`
**Line**: 32
```javascript
window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
```
**Replace**: `919876543210` with your WhatsApp number (include country code)

### 3. Setup EmailJS (For Form Submissions)

**Step 1**: Go to https://www.emailjs.com/ and create a free account

**Step 2**: Create an email service (Gmail, Outlook, etc.)

**Step 3**: Create an email template with these variables:
- `{{name}}`
- `{{email}}`
- `{{mobile}}`
- `{{state}}`
- `{{subject}}`
- `{{message}}`

**Step 4**: Update these files:

**File**: `js/popup.js` (Line 44-45)
```javascript
emailjs.init('YOUR_PUBLIC_KEY');
await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData);
```

**File**: `js/contact.js` (Line 38-39)
```javascript
emailjs.init('YOUR_PUBLIC_KEY');
await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData);
```

### 4. Add Your Logo

**Location**: `assets/logo/`
**Update**: Replace logo text in all HTML files with:
```html
<a href="index.html" class="logo">
  <img src="assets/logo/your-logo.png" alt="MeD INDIA">
</a>
```

### 5. Add Images

**Location**: `assets/images/`
**Usage**: Replace placeholder backgrounds in:
- About page: `.about-image`
- Blog page: `.blog-image`
- Country flags: `.country-flag`

## 📱 Test Checklist

- [ ] Open `index.html` in browser
- [ ] Test navigation menu
- [ ] Test mobile menu (resize browser)
- [ ] Check popup form (appears after 3 seconds)
- [ ] Test WhatsApp button
- [ ] Test all page links
- [ ] Check animations on scroll
- [ ] Test contact form
- [ ] Verify responsive design

## 🎨 Color Customization

**File**: `css/global.css` (Lines 7-13)
```css
:root {
  --navy-blue: #0F3F63;
  --medical-blue: #1F6FAF;
  --globe-green: #6ED36F;
  --accent-yellow: #F4C430;
  --dark-text: #2E2E2E;
  --light-bg: #F6F8FA;
  --white: #FFFFFF;
}
```

## 🌐 Deployment

### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Upload all files
3. Enable GitHub Pages in settings
4. Your site will be live at `username.github.io/repo-name`

### Option 2: Netlify (Free)
1. Go to https://www.netlify.com/
2. Drag and drop your project folder
3. Your site will be live instantly

### Option 3: Traditional Hosting
1. Upload all files to your hosting via FTP
2. Ensure `index.html` is in the root directory
3. Access via your domain

## 🐛 Troubleshooting

**Popup not showing?**
- Check browser console for errors
- Ensure `popup.js` is loaded
- Clear browser cache

**Animations not working?**
- Verify GSAP CDN is loading
- Check internet connection
- Open browser console for errors

**Forms not submitting?**
- Verify EmailJS credentials
- Check browser console
- Ensure EmailJS script is loaded

**WhatsApp not opening?**
- Verify phone number format (with country code)
- Test on mobile device
- Check `global.js` for correct number

## 📞 Need Help?

Email: medindiacag@gmail.com
Phone: +91 98765 43210

## 🎉 You're All Set!

Your professional medical admission website is ready to go live!

**Next Steps**:
1. Customize content
2. Add your images and logo
3. Setup EmailJS
4. Test thoroughly
5. Deploy to hosting

Good luck! 🚀
