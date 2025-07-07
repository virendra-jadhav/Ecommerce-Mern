
# 🛍️ E-Commerce MERN App

A full-featured e-commerce application built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js), featuring:

- 🧾 Secure payments with **Stripe**
- 📧 Order confirmation emails via **Nodemailer** using **Ethereal**
- 📦 Product catalog, shopping cart, checkout, orders
- 🛒 Admin dashboard (optional)
- 🔐 JWT-based authentication
- 🌐 CORS-enabled frontend/backend separation
- 🚀 Local development with `.env` configuration

---

## 📁 Folder Structure

```
Ecommerce-Mern/
├── client/ # React frontend
│ └── .env # Frontend environment variables
├── server/ # Node.js + Express backend
│ └── .env # Backend environment variables
├── README.md # This file
├── package.json # Project metadata
└── pnpm-lock.yaml # PNPM lock file
```

---

## 🚀 Getting Started

### ✅ Prerequisites

- [Node.js](https://nodejs.org/)
- [PNPM](https://pnpm.io/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Stripe account](https://dashboard.stripe.com/test/apikeys)
- [Ethereal email](https://ethereal.email/create) (for testing emails)

---

## ⚙️ Backend Setup (`server/`)

### 🔐 Environment Variables

Create a file named `.env` in the `server/` directory:

```env
PORT=5000
mongoURI="your-mongodb-uri"
NODE_ENV="development"
JWT_SECRET="your-jwt-secret"
FRONTEND_URL="http://localhost:5173"

# Stripe
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Ethereal Email (via Nodemailer)
EMAIL_HOST=smtp.ethereal.email
EMAIL_PORT=587
EMAIL_USER=your-ethereal@email.com
EMAIL_PASS=your-ethereal-password
```
Replace the values above with actual secrets and test credentials from Stripe and Ethereal.

**📦 Install Backend Dependencies**
```
cd server
pnpm install
```
**▶️ Start Backend Server**
```
pnpm dev
```
By default, it runs on http://localhost:5000.

**🎨 Frontend Setup (client/)**
**🔐 Environment Variables**

Create a .env file inside client/:
```
VITE_STRIPE_PUBLIC_KEY=pk_test_...
VITE_FRONTEND_URL='http://localhost:5173'
VITE_BACKEND_URL='http://localhost:5000/api/v1'

```
**📦 Install Frontend Dependencies**
```
cd client
pnpm install
```
**▶️ Start Frontend App**
```
pnpm dev
```
Frontend runs on http://localhost:5173.

**💳 Payment Flow**

    -Stripe paymentIntent is created from the backend.

    -Webhook handles events like payment_intent.succeeded.

    -If payment is successful:

        -Order status is updated.

        -Cart is cleared.

        -Confirmation email is sent via Ethereal using Nodemailer.

**📧 Email Preview**

Ethereal is for testing only — the email is not actually delivered, but you get a preview link in your terminal after sending:
```
Email sent: <message-id>
Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
```
**📌 Routes Overview**
**🔐 Auth**

    -POST /api/v1/auth/login

    -POST /api/v1/auth/register

**🛒 Cart**

    - GET /api/v1/cart

    - POST /api/v1/cart

    - DELETE /api/v1/cart/:productId

**💳 Orders / Payment**

    -POST /api/checkout → Creates Stripe PaymentIntent

    -POST /api/webhook → Handles payment success/failure

    -GET /api/orders/:userId → Fetch user orders

**✅ Deployment Tips**

    -Use services like Render, Railway, or Vercel.

    -Replace localhost URLs in .env with production domain.

    -Use actual email providers (like SendGrid or Gmail) instead of Ethereal for live usage.

**🛠 Tech Stack**
```
| Tech       | Purpose                 |
| ---------- | ----------------------- |
| MongoDB    | Database                |
| Express.js | Backend Server          |
| React.js   | Frontend UI             |
| Node.js    | Server Runtime          |
| Stripe     | Payments                |
| Nodemailer | Email Notifications     |
| Ethereal   | Fake SMTP (for testing) |
| JWT        | Authentication Tokens   |
| PNPM       | Package Manager         |

```

**👨‍💻 Developer Notes**

    -Use SSH keys with GitHub to push code securely.

    -Webhook route must use express.raw({ type: 'application/json' }).

    -Never commit .env files to GitHub. Use .gitignore.

**🙋‍♂️ Questions?**

Feel free to raise an issue or connect on GitHub if you have any queries or ideas.
