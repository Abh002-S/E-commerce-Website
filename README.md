# mern - eCommerce Website

## Description

Amern is a full-featured eCommerce website built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It offers a seamless user experience for browsing and purchasing products, with a focus on performance, scalability, and user-friendly design.

## Features

- **User Authentication**: Secure login and registration using JWT (JSON Web Tokens).
- **Product Management**: Admin dashboard to add, edit, and remove products.
- **Shopping Cart**: Add items to the cart, update quantities, and remove items.
- **Order Management**: Place orders and view order history.
- **Payment Integration**: Integrated with payment gateways for secure transactions.
- **Responsive Design**: Fully responsive for mobile, tablet, and desktop views.
- **Search and Filter**: Easily search for and filter products by category, price, etc.
- **Customer Reviews**: Users can leave reviews and rate products.

## Technologies Used

- **Frontend**: React.js, Redux, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT, bcrypt
- **Payment Integration**: PayPal or Stripe API (choose based on your implementation)

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js
- MongoDB

### Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/amern-ecommerce.git
    cd amern-ecommerce
    ```

2. Install dependencies for both the frontend and backend:

    ```bash
    # Install backend dependencies
    cd backend
    npm install

    # Install frontend dependencies
    cd ../frontend
    npm install
    ```

3. Create a `.env` file in the `backend` directory and add your environment variables:

    ```bash
    PORT=5000
    MONGO_URI=your_mongo_uri
    JWT_SECRET=your_jwt_secret
    PAYPAL_CLIENT_ID=your_paypal_client_id
    ```

4. Start the development server:

    ```bash
    # Start backend
    cd backend
    npm run dev

    # Start frontend
    cd ../frontend
    npm start
    ```

5. Visit the website in your browser at `http://localhost:3000`.

## Usage

- **Admin**: Log in as an admin to manage products and orders.
- **Customer**: Browse products, add to cart, and complete purchases securely.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request to propose changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, feel free to reach out:

- **GitHub**: [Abh002-S](https://github.com/Abh002-S)
