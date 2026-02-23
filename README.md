# AF Construcciones - Static Migration & Optimization

This repository contains the source code for the **AF Construcciones y Servicios** website. The project involved migrating the original WordPress site to a **Static HTML/CSS/JS** architecture to improve security and eliminate maintenance costs.

## 🚀 Overview
The primary goal was to move away from a dynamic WordPress environment to a purely static setup. This approach removes the need for database management and PHP hosting, significantly reducing the attack surface and ensuring long-term stability with zero infrastructure overhead.

## 🛠️ Key Improvements

### 1. Asset & Link Resolution
We automated the process of re-mapping asset paths (CSS, JS, and images) that are often broken during static exports. All query parameters were removed, and links were restored to clean, relative paths.

### 2. Performance & Clean Code
The site was stripped of unnecessary bloat, such as artificial loading scripts (`pace.js`), and replaced with lightweight CSS animations. This results in faster perceived load times and a smoother user experience.

### 3. Custom Vanilla JS Gallery
We replaced bulky WordPress gallery plugins with a custom-built, zero-dependency **Vanilla JavaScript Carousel**. It dynamically handles high-resolution images for project showcases (e.g., Estisol, Ribeiro) while maintaining high performance.

## 💻 Tech Stack
- **HTML5 / CSS3 / Vanilla JavaScript**
- **GitHub Pages** (Deployment)

## 🌐 Live Site
The website is hosted at:
[https://afconstruccionesyservicios.com.ar/](https://afconstruccionesyservicios.com.ar/)

---
*By simplifying the tech stack, we achieved a secure, fast, and cost-effective web presence.*
