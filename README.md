# E-Commerce Shoe Store

## Overview

This project is an e-commerce website designed for selling shoes, similar in design and functionality to Nike's online store. The application allows users to browse a selection of shoes, add items to their cart, and make purchases using Stripe for payment processing.

## Features

- **User Authentication and Session Management**
  - Secure user authentication using sessions.
  - Persistent user sessions for a seamless shopping experience.

- **Shoe Catalog**
  - Dynamic listing of available shoes.
  - Detailed product pages with images, descriptions, and pricing information.

- **Shopping Cart and Checkout**
  - Add and remove shoes from the shopping cart.
  - Real-time cart updates using Redux state management.
  - Secure payment processing with Stripe.

- **Order Management**
  - Users can view their order history and order details.
  - Admin interface for managing shoe inventory and orders.

## Technologies Used

- **Front-End**
  - React.js: For building the user interface.
  - Redux: For state management across the application.
  - HTML/CSS: For structuring and styling the website.

- **Back-End**
  - Node.js: For handling server-side logic.
  - Express.js: As the web framework for building RESTful APIs.
  - MongoDB: For storing product data, user information, and orders.

- **Payment Processing**
  - Stripe: For handling secure payment transactions.

- **Session Management**
  - Express-Session: For managing user sessions across different requests.

## Installation

### Prerequisites

- Node.js (v14.x or later)
- MongoDB (local or cloud instance)
- Stripe Account

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/e-commerce-shoe-store.git
   cd e-commerce-shoe-store
