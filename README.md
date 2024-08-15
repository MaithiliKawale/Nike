# E-Commerce Website

This is an e-commerce website designed to display a range of shoes. Built with React and Redux on the frontend, and Node.js and Express.js on the backend, the application provides a seamless shopping experience. Users can browse products, add them to their cart, and complete purchases using Stripe for payment processing. Session management is used to maintain user state throughout the shopping process.

## Features

- **Product Display**: Browse a curated catalog of shoes with detailed information and images.
- **Shopping Cart**: Add items to your cart and manage them with ease.
- **Checkout Process**: Secure payment processing with Stripe integration.
- **Session Management**: Handle user sessions to maintain cart state and user activity.
- **Responsive Design**: Optimized for various devices.

## Technologies Used

- **Frontend**: React, Redux, HTML, CSS
- **Backend**: Node.js, Express.js
- **Payment Integration**: Stripe
- **State Management**: Redux
- **Session Management**: Express-session
- **Version Control**: Git

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/ecommerce-website.git
    ```
2. Navigate to the project directory:
    ```bash
    cd ecommerce-website
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

## Running the Application

To run the application locally, follow these steps:

1. **Start the Development Server**:

    Open your terminal, navigate to the project directory, and start the development server using:

    ```bash
    npm start
    ```

2. **Open the Application in Your Browser**:

    Once the server is running, open your web browser and visit:

    ```
    http://localhost:3000
    ```

    You should see the application running locally.

## Deployment

1. Ensure your deployment environment is properly configured.
2. Build the application for production:
    ```bash
    npm run build
    ```
3. Deploy the application by uploading the build files to your hosting provider.

## Limitations and Future Enhancements

- **Filtering Functionality**: The current version does not include filtering options for products.
- **Authentication**: User authentication is not implemented.
- **Environment Variables**: No environment variables are used.
- **Additional Payment Options**: Consider integrating additional payment gateways in future versions.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please submit a pull request or create an issue.

## Contact

For any inquiries, please contact maithilikawale16@gmail.com.
