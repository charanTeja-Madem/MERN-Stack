E-Commerce REST API
A simple E-Commerce RESTful API built with Node.js, Express, and MongoDB.

Tech Stack
Runtime: Node.js
Framework: Express.js (v5)
Database: MongoDB (using Mongoose)
Authentication: bcryptjs (password hashing)
Project Structure
E-COMMERCE/
+-- APIs/             # Route handlers
�   +-- productAPI.js
�   +-- userAPI.js
+-- MiddleWares/      # Custom middleware (auth, validation, etc.)
+-- Models/           # Mongoose schemas/models
�   +-- productModel.js
�   +-- userModel.js
+-- server.js         # Entry point
+-- package.json      # Dependencies and scripts
+-- res.http          # HTTP client file for testing
Prerequisites
Node.js installed
MongoDB installed and running locally
Installation & Setup
Install dependencies:

npm install
Database Connection: The application connects to a local MongoDB instance at mongodb://localhost:27017/ecomdb. Ensure MongoDB is running.

Start the server:

node server.js
API Endpoints
User API (/users-api)
Method	Endpoint	Description
GET	/users	Get all users
POST	/users	Create a new user (with hashed password)
PUT	/user-cart/user-id/:uid/product-id/:pid	Add/Update product in user's cart
Product API (/products-api)
Method	Endpoint	Description
GET	/products	Get all products
POST	/products	Add a new product
Features
User Registration: Securely hashes passwords using bcryptjs before saving to the database.
Cart Management: Logic to add new products to a cart or increment the quantity if the product already exists.
Data Modeling: Utilizes Mongoose for robust schema definition and validation.
Global Error Handling: Simple error middleware included in server.js.
