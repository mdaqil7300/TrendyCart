# TrendyCart - E-Commerce Application

A modern, responsive e-commerce web application built with React and Vite. TrendyCart allows users to browse products, view details, search for items, and manage their shopping cart with ease.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [API Integration](#api-integration)
- [Components](#components)
- [State Management](#state-management)
- [Styling](#styling)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **Product Browsing**: Browse through a wide range of products with detailed information
- **Product Search**: Search functionality to find products quickly
- **Product Details**: View comprehensive information about individual products
- **Shopping Cart**: Add, remove, and manage items in the shopping cart
- **Responsive Design**: Fully responsive UI that works on desktop, tablet, and mobile devices
- **Real-time Cart Count**: Dynamic cart item counter in the navigation bar
- **Modern UI**: Built with Bootstrap 5 and React-Bootstrap for a sleek interface

## 🛠️ Tech Stack

### Frontend
- **React** (v18.2.0) - UI framework
- **Vite** (v4.3.2) - Build tool and dev server
- **React Router DOM** (v6.21.3) - Client-side routing
- **React-Bootstrap** (v2.10.0) - Bootstrap components for React
- **Bootstrap Icons** (v1.11.3) - Icon library
- **Axios** (v1.6.5) - HTTP client for API requests

### Backend
- **Express** (v4.18.2) - Web server framework
- **CORS** (v2.8.5) - Cross-Origin Resource Sharing
- **http-proxy-middleware** (v2.0.6) - API proxy for external services

### Development Tools
- **ESLint** - Code linting
- **Vite Plugin React** - React support in Vite

## 📁 Project Structure

```
TrendyCart/
├── index.html           # Main HTML entry point
├── package.json         # Project dependencies and scripts
├── server.js            # Express server configuration
├── vite.config.js       # Vite configuration
├── src/
│   ├── main.jsx         # React application entry point
│   ├── App.jsx          # Main App component with routing
│   ├── App.css          # App styles
│   ├── index.css        # Global styles
│   ├── components/
│   │   ├── NavBar.jsx       # Navigation bar component
│   │   ├── NavBar.css       # NavBar styles
│   │   ├── Products.jsx     # Products listing component
│   │   ├── ProductCard.jsx  # Individual product card component
│   │   ├── ProductCard.css  # ProductCard styles
│   │   ├── ProductDetails.jsx   # Product details page component
│   │   ├── ProductDetails.css   # ProductDetails styles
│   │   ├── Cart.jsx         # Shopping cart component
│   │   └── Cart.css         # Cart styles
│   ├── context/
│   │   └── CartContextState.jsx  # Cart state management with Context API
│   └── services/
│       └── store-api.js      # API service for backend communication
└── public/              # Static assets
```

## 🚀 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Clone or navigate to the project directory**
   ```bash
   cd TrendyCart
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Start the Express backend server** (in a separate terminal)
   ```bash
   node server.js
   ```

5. **Open your browser**
   - Navigate to `http://localhost:5173` (Vite default port)
   - The backend server runs on `http://localhost:3001`

## 📖 Usage

### Development Workflow

1. **Development Mode**: Run the Vite development server with hot module replacement (HMR)
   ```bash
   npm run dev
   ```

2. **Build for Production**: Create an optimized production build
   ```bash
   npm run build
   ```

3. **Preview Production Build**: Preview the built application locally
   ```bash
   npm run preview
   ```

4. **Linting**: Check code quality and find issues
   ```bash
   npm run lint
   ```

## 🔧 Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite development server with hot reload |
| `npm run build` | Build project for production |
| `npm run lint` | Run ESLint on source files |
| `npm run preview` | Preview production build locally |
| `node server.js` | Start Express backend server |

## 🔌 API Integration

The application uses **Fake Store API** for product data. The Express server includes a proxy middleware that routes all `/api` requests to `https://fakestoreapi.com`.

### API Endpoints

- **Get All Products**: `/api/products`
- **Get Product by ID**: `/api/products/{id}`
- **Get Product Categories**: `/api/products/categories`
- **Get Products by Category**: `/api/products/category/{category}`

### Proxy Configuration

The proxy is configured in `server.js`:
```javascript
app.use('/api', createProxyMiddleware({ 
  target: 'https://fakestoreapi.com', 
  changeOrigin: true 
}));
```

## 🧩 Components

### NavBar
Navigation component with search functionality and cart item counter. Provides links to product listing and cart pages.

### Products
Main product listing component. Fetches and displays all available products with filtering and search capabilities.

### ProductCard
Displays individual product information including image, title, price, and category. Contains "Add to Cart" button.

### ProductDetails
Detailed product page showing comprehensive product information. Allows users to add items to cart and view related details.

### Cart
Shopping cart page displaying all items added by the user. Shows item quantities, prices, and total cost. Allows item removal and quantity adjustment.

## 🗂️ State Management

The application uses **React Context API** for state management, specifically for cart operations.

### CartContextState
- Manages global cart state
- Provides functions to add, remove, and update cart items
- Tracks cart item count
- Persists cart data (optional enhancement)

**Location**: `src/context/CartContextState.jsx`

## 🎨 Styling

The project uses a combination of:
- **Bootstrap 5**: For responsive layout and pre-built components
- **React-Bootstrap**: For Bootstrap components wrapped as React components
- **Custom CSS**: Individual component-specific styles in separate `.css` files

### Style Files
- `src/index.css` - Global styles
- `src/App.css` - App component styles
- `src/components/*.css` - Component-specific styles

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Create a new branch for your feature
2. Make your changes
3. Test your changes thoroughly
4. Submit a pull request with a clear description

## 📝 License

This project is provided as-is. Feel free to use and modify for your needs.

## 📞 Support

For issues, questions, or suggestions, please create an issue in the project repository.

---

**Happy Shopping! 🛒**
