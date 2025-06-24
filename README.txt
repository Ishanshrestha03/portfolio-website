Ishan Shrestha Portfolio Website - README
========================================

Overview
--------
This is a modern, single-page portfolio website for Ishan Shrestha, designed to showcase projects, resume, and contact information in a visually appealing and interactive way. The site is built with HTML, CSS, and JavaScript, and features smooth animations, a dynamic background, and custom user-requested enhancements.

Main Features
-------------
1. **Modern Dark Theme**: The site uses a sleek, dark color palette with accent colors for a professional, modern look.
2. **Animated Hero Section**: The hero section features a large heading ("Hi, I'm Ishan") with a typing animation that repeats every 5 seconds, and a rotating philosophical quote below it.
3. **Project Showcase**: Projects are displayed in a responsive grid, each with a description and technology stack.
4. **Resume Section**: A dedicated section and button link to a separate resume page (with PDF download).
5. **Contact Form**: A styled contact form that submits via Web3Forms, with a thank-you message on success.
6. **Animated Background**: Uses Vanta.js for a sci-fi "Net" animated background.
7. **AOS Animations**: Smooth scroll and fade-in effects using the AOS library.
8. **Social Icons**: Spotify and LinkedIn icons in the header, linking to your profiles.
9. **Scroll Down Arrow**: Animated arrow in the hero section that scrolls the page down when clicked.
10. **Mobile Responsive**: Layout and icons adjust for all screen sizes.

Detailed Steps & Customizations
------------------------------
1. **Initial Setup**
   - Created `index.html`, `style.css`, and `script.js` for the main site.
   - Added a favicon (SVG with initials) and set up meta tags for SEO and social sharing.

2. **Hero Section**
   - Large heading: `<h1 class="excited">Hi, I'm Ishan</h1>`
   - Typing animation implemented in JavaScript, repeats every 5 seconds, and pauses when the tab is not visible.
   - Rotating philosophical quote below the heading, randomly selected on each refresh.
   - Scroll-down arrow with bounce animation; clicking it scrolls the page down smoothly.

3. **About, Projects, Resume, and Contact Sections**
   - About: Short professional bio.
   - Projects: Two main projects (Budgetify and LEGO) with tech stack and bullet points.
   - Resume: Button links to a separate `resume.html` page and PDF download.
   - Contact: Form submits via Web3Forms API, with success message on completion.

4. **Animations & Visual Effects**
   - **AOS (Animate On Scroll)**: Fade-up and delay effects for sections and project cards.
   - **Vanta.js**: Animated "Net" background for a sci-fi vibe.
   - **Custom CSS**: Shadows, rounded corners, and transitions for a modern look.

5. **Header & Navigation**
   - Logo with initials and full name.
   - Navigation links to each section and resume page.
   - Hamburger menu for mobile navigation.
   - **Spotify Icon**: SVG icon, links to your Spotify profile, styled to match the theme.
   - **LinkedIn Icon**: SVG icon, links to your LinkedIn profile, styled to match the theme, placed before Spotify.
   - Both icons are flex items in the header for perfect alignment and spacing.

6. **Responsive Design**
   - CSS media queries adjust layout, icon size, and spacing for tablets and mobile devices.
   - Social icons shrink and align horizontally on smaller screens.

7. **JavaScript Enhancements**
   - Typing animation for the hero text, with interval and pause/resume on tab visibility.
   - Scroll-down arrow scrolls the page by ~85% of the viewport height on click.
   - Contact form AJAX submission and success message handling.
   - Hamburger menu toggling for mobile navigation.

8. **Deployment**
   - Site is ready for deployment on Netlify (drag-and-drop or CLI).
   - All assets are local except for AOS, Vanta.js, and Three.js (CDN links).
   - Instructions provided for updating the live site after changes.

How to Customize
----------------
- **Change Social Links**: Update the `href` in the LinkedIn and Spotify icon `<a>` tags in `index.html`.
- **Add Projects**: Duplicate a `.project-card` div in the Projects section and update the content.
- **Change Resume**: Replace `IshanResume.pdf` and update the link/button as needed.
- **Edit Bio/Contact Info**: Update the About section and contact form email.
- **Change Quotes**: Update the quotes array in `script.js`.

How to Deploy/Update
--------------------
1. Make your changes locally.
2. If using Netlify, drag-and-drop the folder or use the Netlify CLI to deploy.
3. To update, repeat the deploy process or push to your connected Git repository.

Credits & Libraries Used
------------------------
- [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
- [Vanta.js](https://www.vantajs.com/)
- [Three.js](https://threejs.org/)
- [Web3Forms](https://web3forms.com/)
- LinkedIn and Spotify SVG icons (official brand colors)

Contact
-------
For any questions or further customization, contact Ishan Shrestha via the contact form on the site or at the email provided. 