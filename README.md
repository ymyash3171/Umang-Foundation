# Umang Foundation - Home Page

A professional, responsive home page for Umang Foundation built with React, CSS, and HTML.

## Project Structure

```
umang-foundation/
├── public/
│   └── index.html          # Main HTML entry point
├── src/
│   ├── components/         # React components
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Services.js
│   │   ├── Impact.js
│   │   ├── GetInvolved.js
│   │   └── Footer.js
│   ├── styles/             # Component-specific CSS
│   │   ├── Header.css
│   │   ├── Hero.css
│   │   ├── About.css
│   │   ├── Services.css
│   │   ├── Impact.css
│   │   ├── GetInvolved.css
│   │   └── Footer.css
│   ├── App.js              # Main App component
│   ├── App.css             # Global app styles
│   └── index.js            # React entry point
├── package.json            # Project dependencies
└── README.md               # This file
```

## Features

✨ **Responsive Design** - Mobile-friendly layout that works on all devices
🎨 **Modern UI** - Clean and professional design with smooth animations
🔧 **React Components** - Modular and reusable component structure
💻 **Pure CSS** - Beautiful styling without any external CSS libraries
📱 **Mobile Optimized** - Optimized for mobile, tablet, and desktop viewing
♿ **Accessible** - Semantic HTML and accessible components

## Sections

1. **Header** - Navigation menu with logo and quick links
2. **Hero** - Eye-catching banner with call-to-action buttons
3. **About** - Foundation information with impact statistics
4. **Services** - Core programs and services offered
5. **Impact** - Success stories and achievements
6. **Get Involved** - Multiple ways to participate with contact form
7. **Footer** - Links, contact information, and social media

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Steps to Run

1. **Navigate to project directory:**
   ```bash
   cd c:\Users\Hp\Umang-Home
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   The application will automatically open in your default browser at `http://localhost:3000`

4. **Build for production:**
   ```bash
   npm run build
   ```

## Technologies Used

- **React** 18.2.0 - JavaScript library for UI components
- **ReactDOM** 18.2.0 - React package for working with the DOM
- **CSS3** - Modern CSS with flexbox and grid layouts
- **HTML5** - Semantic HTML structure

## Customization

### Change Colors
Edit the CSS files in `src/styles/` to modify the color scheme. Primary colors are:
- Primary Blue: `#2196F3`
- Dark Blue: `#1565C0`
- Accent Purple: `#667eea`
- Accent Pink: `#f5576c`

### Update Content
Edit the component files in `src/components/` to update text, images, and information specific to your organization.

### Add Images
Replace emoji placeholders with actual images by updating the component JSX files.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## File Sizes

- HTML: ~1 KB
- CSS: ~12 KB (across all files)
- React Components: ~8 KB
- Total: ~21 KB (before minification)

## Performance Features

- Smooth scroll behavior
- CSS animations and transitions
- Optimized grid layouts
- Mobile-first responsive design
- Lightweight and fast loading

## Contact Form Integration

The contact form is functional on the frontend. To make it work end-to-end, you need to:
1. Set up a backend API endpoint
2. Update the form submission handler in `GetInvolved.js`
3. Connect it to your email service or database

## License

This project is created for Umang Foundation. All rights reserved.

## Support

For issues, questions, or modifications, contact the development team.

---

**Built with ❤️ for Umang Foundation**
