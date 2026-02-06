# EmailJS Setup Guide for MeD INDIA

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service
1. Go to **Email Services** in dashboard
2. Click **Add New Service**
3. Choose **Gmail** (or your preferred email provider)
4. Connect your company email: **medindiacag@gmail.com**
5. Note down your **Service ID** (e.g., service_abc123)

## Step 3: Create Email Templates

### Template 1: Popup Form (for popup.js)
1. Go to **Email Templates** → **Create New Template**
2. Template Name: `Popup Lead Form`
3. Template Content:
```
Subject: New Lead from Website Popup - {{name}}

From Name: MeD INDIA Website
Reply To: {{email}}

Body:
New lead received from website popup form:

Name: {{name}}
Email: {{email}}
Mobile: {{mobile}}
State: {{state}}

Submitted at: {{current_time}}

Please contact this lead as soon as possible.
```
4. Note down your **Template ID** (e.g., template_xyz789)

### Template 2: Contact Form (for contact.js)
1. Create another template
2. Template Name: `Contact Form Submission`
3. Template Content:
```
Subject: Contact Form - {{name}} ({{course}})

From Name: MeD INDIA Website
Reply To: {{email}}

Body:
New contact form submission:

Name: {{name}}
Email: {{email}}
Mobile: {{phone}}
Country: {{country}}
NEET Score: {{neet_score}}
Course: {{course}}

Additional Details:
{{message}}

Submitted at: {{current_time}}

Please respond within 24 hours.
```
4. Note down your **Template ID**

## Step 4: Get Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., user_abcXYZ123)
3. Copy this key

## Step 5: Update Your Code

### Update popup.js (Line 2):
```javascript
emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your actual Public Key
```

### Update popup.js (Lines 68-69):
```javascript
await emailjs.send(
  'YOUR_SERVICE_ID',    // Replace with Service ID from Step 2
  'YOUR_TEMPLATE_ID',   // Replace with Template ID from Step 3 (Popup)
  formData
);
```

### Update contact.js (Line 30):
```javascript
emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your actual Public Key
```

### Update contact.js (Lines 75-77):
```javascript
await emailjs.send(
  'YOUR_SERVICE_ID',    // Replace with Service ID from Step 2
  'YOUR_TEMPLATE_ID',   // Replace with Template ID from Step 3 (Contact)
  formData
);
```

## Step 6: Test Your Forms
1. Open your website
2. Fill out the popup form → Check if email arrives at medindiacag@gmail.com
3. Fill out the contact form → Check if email arrives
4. Verify all fields are captured correctly

## Important Notes:
- ✅ Mobile validation: Exactly 10 digits required
- ✅ Email validation: Must contain @ and domain (.com, .in, etc.)
- ✅ Free tier: 200 emails/month
- ✅ All form data will be sent to: medindiacag@gmail.com

## Troubleshooting:
- If emails don't arrive, check spam folder
- Verify Service ID, Template ID, and Public Key are correct
- Check browser console for error messages
- Ensure Gmail allows "Less secure app access" if using Gmail

## Example Configuration:
```javascript
// Example with actual IDs (yours will be different)
emailjs.init('user_abc123XYZ');

await emailjs.send(
  'service_gmail123',
  'template_popup456',
  formData
);
```

---
**Support:** If you need help, contact EmailJS support or check their documentation at https://www.emailjs.com/docs/
