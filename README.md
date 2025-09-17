# LG Arena - Multi-Sport Complex Website

A modern, responsive website for a multi-sport complex built with React, Vite, and Tailwind CSS.

## Features

- **Modern React + Vite Setup**: Fast development experience with hot module replacement
- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **Multi-Sport Facilities**: Showcases 6 different sports facilities (Basketball, Tennis, Swimming, Soccer, Fitness, Volleyball)
- **Clean Architecture**: Organized folder structure with components, pages, and data separation
- **Routing**: Client-side routing with React Router for seamless navigation
- **Interactive Components**: Contact forms, facility filtering, and responsive navigation

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation header with mobile menu
│   ├── Hero.jsx        # Landing page hero section
│   ├── FacilitiesShowcase.jsx  # Facilities preview grid
│   ├── ContactLocation.jsx     # Contact form and info
│   └── Footer.jsx      # Site footer
├── pages/              # Page components
│   ├── Home.jsx        # Landing page
│   ├── Facilities.jsx  # Detailed facilities page
│   └── Contact.jsx     # Contact page
├── data/               # Static data and configuration
│   └── facilities.js   # Sports facilities and contact data
├── App.jsx            # Main app component with routing
├── main.jsx           # Application entry point
└── index.css          # Global styles and Tailwind imports
```

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- Bun (package manager) - [Install Bun](https://bun.sh)

### Installation

1. Install dependencies:
   ```bash
   bun install
   ```

2. Start the development server:
   ```bash
   bun run dev
   ```

3. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build
- `bun run lint` - Run ESLint

## Key Components

### Facilities Data

The `src/data/facilities.js` file contains sample data for 6 sports facilities:
- Basketball Courts
- Tennis Complex  
- Swimming Pool Complex
- Soccer Fields
- Fitness Center
- Volleyball Courts

Each facility includes features, pricing, capacity, operating hours, and amenities.

### Responsive Design

The website is built with a mobile-first approach using Tailwind CSS:
- Responsive navigation with mobile hamburger menu
- Flexible grid layouts that adapt to screen sizes
- Mobile-optimized forms and content sections

### Routing

The application uses React Router for navigation between:
- **Home** (`/`) - Hero section and facilities showcase
- **Facilities** (`/facilities`) - Detailed facility information with filtering
- **Contact** (`/contact`) - Contact form, location info, and FAQ

## Customization

### Adding New Facilities

Add new facility objects to the `facilities` array in `src/data/facilities.js`:

```javascript
{
  id: 7,
  name: "New Sport Facility",
  sport: "newsport",
  description: "Description of the facility",
  features: ["Feature 1", "Feature 2"],
  // ... other properties
}
```

### Styling

The project uses Tailwind CSS with custom color scheme:
- Primary colors: Blue tones (`primary-*`)
- Secondary colors: Gray tones (`secondary-*`)
- Custom components defined in `src/index.css`

### Contact Information

Update contact details in `src/data/facilities.js` in the `contact_info` object.

## Production Deployment

1. Build the project:
   ```bash
   bun run build
   ```

2. The built files will be in the `dist/` directory

3. Deploy the `dist/` folder to your hosting service

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Bun** - Fast JavaScript runtime and package manager

## Browser Support

Modern browsers that support ES2020+ features:
- Chrome 80+
- Firefox 72+
- Safari 13+
- Edge 80+
