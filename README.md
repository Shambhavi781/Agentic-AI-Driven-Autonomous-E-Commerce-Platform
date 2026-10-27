# 🛒 Agentic AI-Driven Autonomous E-Commerce Platform

## 📌 Project Overview

The **Agentic AI-Driven Autonomous E-Commerce Platform** is a web-based shopping application designed to make online shopping more interactive and convenient. Inspired by e-commerce platforms like Amazon and Flipkart, the project provides product browsing, product search, cart management, wishlist functionality, and price bargaining.

The platform uses a Python Flask backend, an HTML, CSS, and JavaScript frontend, and an SQLite database to manage product information and application data.

## 🎯 Objectives

- Develop a user-friendly e-commerce web application.
- Provide product browsing and search functionality.
- Implement shopping cart and wishlist features.
- Introduce price bargaining to make shopping more interactive.
- Integrate frontend, backend, and database components into a single application.

## ✨ Features

- **Product Browsing:** View available products and their details.
- **Product Search:** Search for products by name.
- **Shopping Cart:** Add products to the cart and manage selected items.
- **Wishlist:** Keep track of preferred products.
- **Price Bargaining:** Allow customers to make offers based on configured bargaining rules.
- **Product Management:** Support product information management.
- **Database Integration:** Store and retrieve application data using SQLite.
- **Web Interface:** Interact with the application through a browser-based interface.

## 🧠 Agent-Based Architecture

The project is organized around the following agent roles:

| Agent | Responsibility |
|---|---|
| Recommendation Agent | Supports product recommendation functionality. |
| Discount Agent | Handles discount-related calculations. |
| Bargaining Agent | Evaluates customer offers using configured pricing rules. |
| Cart Agent | Supports shopping cart operations. |
| Database Agent | Handles product and application data operations. |

*Note: These roles describe the intended architecture. Their actual level of automation depends on the implemented code.*

## 🛠️ Technologies Used

- **Frontend:** HTML5, CSS3, JavaScript
- **Backend:** Python, Flask
- **Database:** SQLite
- **Version Control:** Git and GitHub

## 📂 Project Structure

```text
Agentic-AI-Driven-Autonomous-E-Commerce-Platform/
│
├── backend/
│   ├── app.py
│   ├── agent.py
│   ├── init_db.py
│   └── database.db
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── app.js
│
├── requirements.txt
└── README.md
```

## ⚙️ Installation and Setup

### Prerequisites

- Python installed on your system
- Git installed on your system
- Visual Studio Code or another code editor
- A modern web browser

### Step 1: Clone the Repository

```bash
git clone https://github.com/Shambhavi781/Agentic-AI-Driven-Autonomous-E-Commerce-Platform.git
```

### Step 2: Navigate to the Project Folder

```bash
cd Agentic-AI-Driven-Autonomous-E-Commerce-Platform
```

### Step 3: Create a Virtual Environment (Recommended)

```bash
python -m venv venv
```

Activate it on Windows:

```powershell
.\venv\Scripts\Activate.ps1
```

### Step 4: Install Dependencies

```bash
pip install -r requirements.txt
```

### Step 5: Initialize the Database

If the application requires database initialization, run:

```bash
python backend/init_db.py
```

Run this step when setting up a fresh database. If you already have a populated database, check the initialization script before running it again.

### Step 6: Start the Flask Application

```bash
python backend/app.py
```

Open the local URL displayed in the terminal, commonly `http://127.0.0.1:5000/`, in your browser.

*Note: These commands assume the application uses the stated file paths and that `app.py` starts the Flask development server. Adjust them if your code uses a different setup.*

## 💰 Price Bargaining Logic

The bargaining feature calculates a minimum acceptable price using the original price and a configured bargaining percentage.

**Formula:**

```text
Minimum Price = Original Price × (1 − Bargaining Percentage / 100)
```

**Example:**

For a product priced at ₹52,707 with a 30% bargaining allowance:

```text
Minimum Price = 52,707 × (1 − 30 / 100)
              = ₹36,894.90
```

The final accepted price depends on the bargaining rules implemented in the application.

## 🚀 Future Enhancements

- Integrate an AI-powered recommendation model.
- Improve bargaining using adaptive pricing strategies.
- Add user registration and authentication.
- Integrate a secure online payment gateway.
- Enhance product filtering and sorting.
- Improve the user interface for mobile devices.
- Add order history and order tracking.

## 🎓 Learning Outcomes

- Practical experience in frontend and backend development.
- Understanding of REST-based application architecture.
- Database integration using SQLite.
- Implementation of business logic in Python and JavaScript.
- Version control and project management using Git and GitHub.

## 👩‍💻 Author

**Shambhavi Hiregoudar**

Electronics and Communication Engineering Graduate  
KLE Technological University

## 📄 License

This project is intended for educational and demonstration purposes. Add a specific open-source license if you want others to reuse, modify, or distribute the code under defined terms.

