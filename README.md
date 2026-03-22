# Responsive React Website

A modern, fully responsive React website built with clean code and best practices.

## Features

✅ **Fully Responsive** - Works seamlessly on all device sizes (mobile, tablet, desktop)
✅ **Mobile-First Design** - Built with a mobile-first approach using CSS media queries
✅ **Sticky Navigation** - Responsive hamburger menu for mobile devices
✅ **Modern Components** - Reusable React components (Header, Hero, Features, Footer)
✅ **CSS Animations** - Smooth transitions and hover effects
✅ **Performance Optimized** - Fast loading and efficient rendering

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:

```bash
cd "React App"
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/
│   ├── Header.js        (Navigation with responsive menu)
│   ├── Header.css
│   ├── Hero.js          (Hero section with CTA buttons)
│   ├── Hero.css
│   ├── Features.js      (Features grid)
│   ├── Features.css
│   ├── Footer.js        (Footer with links)
│   └── Footer.css
├── styles/
│   └── index.css        (Global responsive styles)
├── App.js               (Main app component)
├── App.css
└── index.js             (React entry point)

public/
└── index.html           (HTML template)
```

## Responsive Breakpoints

The website is optimized for:

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 600px - 767px
- **Small Mobile**: Below 480px

## Available Scripts

### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm build`

Builds the app for production to the `build` folder.

### `npm test`

Launches the test runner.

### `npm eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

## Technologies Used

- **React 18** - UI library
- **CSS3** - Styling with media queries for responsiveness
- **JavaScript ES6+** - Modern JavaScript features

## Features Implemented

### Header Component

- Sticky navigation bar with gradient background
- Responsive hamburger menu for mobile
- Smooth navigation links
- 4-level responsive typography

### Hero Section

- Eye-catching gradient background
- Call-to-action buttons
- Placeholder image area
- Text and image side-by-side layout (responsive grid)

### Features Section

- Responsive grid layout (3 columns → 1 column)
- 6 feature cards with icons
- Hover effects and animations
- Auto-fit grid for dynamic layout

### Footer

- 4-column footer layout (responsive)
- Social media links
- Contact information
- Copyright year (dynamic)

## CSS Features Used

- **CSS Grid** - For responsive layouts
- **Flexbox** - For alignment and spacing
- **Media Queries** - For responsive design
- **Gradients** - For modern backgrounds
- **Transitions** - For smooth animations
- **Transform** - For interactive effects

## Customization

### Colors

Edit the gradient colors in:

- `src/components/Header.css`
- `src/components/Hero.css`
- `src/components/Footer.css`

### Fonts

Modify the font family in `src/styles/index.css`

### Content

Update content in respective component files:

- `src/App.js` - Main layout
- `src/components/Header.js` - Navigation links
- `src/components/Hero.js` - Hero section text and buttons
- `src/components/Features.js` - Features data
- `src/components/Footer.js` - Footer content

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please create an issue in the project repository.
