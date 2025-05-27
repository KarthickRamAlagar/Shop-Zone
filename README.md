# Shop Zone

Shop Zone is a modern, responsive e-commerce application built with cutting-edge technologies to provide a seamless shopping experience. Users can browse products, view details, manage their cart, apply coupon codes, and proceed to payment with ease.

---

## Table of Contents
- [Key Features](#key-features)
- [Technologies, Frameworks, and Libraries Used](#technologies-frameworks-and-libraries-used)
- [Scripts in package.json](#scripts-in-packagejson)
- [How It Works](#how-it-works)
- [Why Use This Application?](#why-use-this-application)
- [Deployment](#deployment)

---

## Key Features

### 🎨 Modern Design System:
- **Color Palette**:
  - **Primary**: Indigo (#1E40AF) for trust and professionalism.
  - **Secondary**: Amber (#F59E0B) for highlighting elements like buttons.
  - **Tertiary**: Emerald (#10B981) for success indicators (e.g., coupon applied).
  - **Background**: Gray (#F9FAFB) for subtle page backgrounds.
  - **Text**: Gray (#111827 for primary text, #6B7280 for secondary text).
- **Typography**:
  - **Font Family**: Inter, sans-serif (modern and clean).
  - **Font Sizes**:
    - Headers: `text-2xl`, `text-3xl`
    - Subheaders: `text-xl`
    - Body: `text-base`
    - Buttons: `text-sm`, `text-base`
  - **Font Weights**:
    - Headings: `font-semibold`
    - Body: `font-normal`

---

## Technologies, Frameworks, and Libraries Used

### 🖥️ Frontend Framework:
- ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) **React**: Core framework for building the UI.

### 🎨 Styling:
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) **Tailwind CSS**: Utility-first CSS framework for responsive and modern styling.
- ![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=white) **Framer Motion**: Library for animations and transitions.

### 🌐 Routing:
- ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) **React Router DOM**: For navigation between pages (e.g., Product List, Product Detail, Cart).

### 🗂️ State Management:
- **useState** and **useEffect**: For managing component state and side effects.
- **localStorage**: For persisting cart data across sessions.

### 🔗 HTTP Requests:
- ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white) **Axios**: For making API calls (if needed for dynamic data fetching).

### ⚡ Build Tool:
- ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) **Vite**: Fast build tool for modern web development.

### 🛠️ Linting and Code Quality:
- ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white) **ESLint**: For enforcing coding standards and best practices.
- **eslint-plugin-react-hooks**: For ensuring proper usage of React hooks.

### 🎨 Icons:
- ![Heroicons](https://img.shields.io/badge/Heroicons-4B5563?style=for-the-badge&logo=heroicons&logoColor=white) **Heroicons**: For modern and customizable SVG icons.

### 🚀 Deployment:
- ![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=github&logoColor=white) **GitHub Pages**: For hosting the application.
- **gh-pages**: For automating deployment to GitHub Pages.

### 🛠️ Utilities:
- **PostCSS**: For processing CSS with plugins like autoprefixer.
- **Util**: For polyfilling Node.js utilities in the browser.

---

## Scripts in package.json

### 🛠️ Development:
- `npm run dev`: Starts the development server using Vite.

### 🏗️ Build:
- `npm run build`: Builds the application for production.

### 🧹 Linting:
- `npm run lint`: Runs ESLint to check for code quality issues.

### 🔍 Preview:
- `npm run preview`: Previews the production build locally.

### 🧪 Testing:
- `npm run test`: Runs Jest tests.

### 🚀 Deployment:
- `npm run predeploy`: Builds the application before deployment.
- `npm run deploy`: Deploys the application to GitHub Pages.

---

## How It Works

### 🛒 User Flow:
- Users can browse products, view product details, add items to the cart, apply coupon codes, and proceed to payment.

### 📱 Responsive Design:
- The application is fully responsive, ensuring a seamless experience on both desktop and mobile devices.

### 🔄 Dynamic Updates:
- Cart updates dynamically using `localStorage` and custom events (`cartUpdated`).

### 🎥 Animations:
- Smooth animations for transitions, modals, and buttons enhance the user experience.

---

## Why Use This Application?

### ✨ Modern Design:
- Built with **Tailwind CSS** and **Framer Motion** for a sleek and professional look.

### 📱 Responsive and Accessible:
- Ensures usability across devices and for users with disabilities.

### 🛍️ Feature-Rich:
- Includes essential e-commerce features like cart management, coupon codes, and payment flow.

### ⚡ Fast and Scalable:
- Developed with **Vite** for fast builds and **React** for scalability.

---

## Deployment

The application is deployed on GitHub Pages and can be accessed at:
[Shop Zone Live Demo](https://KarthickRamAlagar.github.io/Shop-Zone/)

---

Feel free to contribute to this project or report any issues. Happy coding! 🚀
