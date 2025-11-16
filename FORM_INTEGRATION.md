# Form integration guide

This document explains two simple ways to handle Contact and Booking forms for a static site: Formspree (easy API endpoint) and Netlify Forms (if you host on Netlify).

1) Formspree (recommended for quick setup)
  - Go to https://formspree.io and create a free endpoint.
  - Replace the `action` attribute in `index.html`'s contact form with the Formspree URL (e.g., `https://formspree.io/f/your-form-id`).
  - Formspree supports email forwarding and webhooks for more advanced handling.
  - Client-side script included in `assets/js/script.js` will POST the form using fetch and show a success or error message.

2) Netlify Forms (recommended if you deploy to Netlify)
  - Deploy the site to Netlify.
  - Add `netlify` attribute to the form element: `<form name="contact" netlify>` and remove the external `action` if you want Netlify to capture submissions.
  - For AJAX handling keep `data-netlify="true"` and add a hidden input `<input type="hidden" name="form-name" value="contact">`.
  - Netlify will surface submissions in the Netlify dashboard and can forward to email or Zapier.

3) Calendly booking
  - For bookings, embed Calendly or link to your Calendly public link.
  - Embedding: use Calendly's embed snippet (script tag) or a simple link to the scheduling page.

4) Privacy and spam
  - Use reCAPTCHA or Formspree's spam protection for production.
  - Add a privacy statement in the contact section if you collect personal data.

5) Next steps
  - If you want server-side processing (store in DB), create a small server endpoint (Node/Python) and point forms to that endpoint instead.
