# AF Construcciones - Static Migration & Optimization

This repository contains the source code for the **AF Construcciones y Servicios** website. Originally built as a dynamic WordPress site utilizing the "Illdy" theme, this project serves as a showcase of taking a heavyweight CMS platform and optimizing it into a blazingly fast, secure, and modern **Static HTML/CSS/JS site**.

## 🚀 The Objective
The goal of this project was to migrate the company's website away from a database-dependent WordPress environment into a purely static architecture. This approach eliminates security vulnerabilities (such as SQL injections or brute-forcing the admin panel), removes the need for PHP/MySQL hosting, and drops the Time to First Byte (TTFB) to milliseconds by serving flat files directly.

## 🛠️ Optimizations & Features Developed

During the migration and refactoring process, several advanced optimizations were performed to clean up the Wget export and modernize the user experience:

### 1. Link & Asset Resolution
When statically exporting WordPress using tools like `Wget`, query parameters in filenames (e.g., `style.css?v=1.0`) get URL-encoded or replaced by underscores, breaking CSS and images. 
- **Fix:** Automated Python scripts were developed to traverse the DOM of all exported files, successfully identifying and re-mapping hundreds of broken `%3F` and `%252F` asset links back to their correct local relative paths.

### 2. URL Refactoring (Extensionless Routing)
WordPress exports often generate messy URLs like `index.php/gallery/index.html`.
- **Fix:** The directory structure was completely refactored. `index.php` wrapper folders were removed, and all internal HTML `href` links were cleaned to point strictly to the directories (`/gallery/`). 
- **Nginx Configuration:** The `nginx.conf` (`try_files $uri $uri/ $uri.html =404;`) was optimized to natively serve these clean URLs without displaying `.html` extensions.

### 3. Removal of "Pace.js" & Artificial Loaders
The original "Illdy" theme came coupled with an artificial global loading screen (`pace.js`) that forcibly delayed the rendering of the DOM on every click.
- **Fix:** A surgical cleanup was performed across all HTML templates to strip the Pace.js scripts, its CSS overlays, and the theme's watermarks from the footer.
- **Modernization:** The clunky loading screen was replaced with a custom, highly performant CSS `@keyframes` `fade-in` animation globally bound to the `<body>` tag, providing a seamless and instant perceived load time without JavaScript overhead.

### 4. Custom Vanilla JS Dynamic Carousel
The original site featured static, bulky image grids on the project pages (e.g., *Estisol*, *Ribeiro*).
- **Fix:** A custom Python static crawler was built to scan the downloaded `wp-content/uploads/` directory, mapping the tiny WordPress thumbnails (e.g. `foto-300x225.jpg`) to their highest available resolution counterparts on disk (`foto-1024x768.jpg`).
- **Feature:** We developed a custom **Vanilla JavaScript and CSS Carousel** entirely from scratch (zero dependencies). It dynamically extracts the high-res images from the static DOM and rebuilds them into an interactive slider featuring:
    - A main image viewport with stylized borders.
    - Clickable navigation arrows.
    - A synchronized, horizontally-scrollable thumbnail strip.
    - Smooth auto-rotation intervals (4 seconds).

## 💻 Tech Stack
- **HTML5 / CSS3 / Vanilla JavaScript** (Zero framework dependencies)
- **Python 3** (Used for DOM traversal, Regex cleanup, and file mapping scripts)
- **Nginx / Docker** (Local testing and routing configuration)
- **GitHub Pages** (Production deployment)

## 🌐 Live Preview
The site is hosted securely and for free via GitHub Pages. It can be accessed at:
[https://valeryjl.github.io/AF-web](https://valeryjl.github.io/AF-web)
*(Make sure GitHub Pages is enabled in Settings -> Pages -> main branch)*

---
*This optimization dropped the hosting requirements to zero and ensured maximum Lighthouse performance scores across the board.*
