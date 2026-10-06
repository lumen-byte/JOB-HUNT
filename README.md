<div align="center">
  
# 🚀 Job Hunt 

A modern, full-stack job discovery and application management portal built with the **MERN Stack**.

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](#)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](#)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](#)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](#)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](#)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](#)

</div>

---

## 🌟 Introduction
**Job Hunt** is a comprehensive platform designed to bridge the gap between job seekers and recruiters. Candidates can seamlessly browse job postings, upload their resumes, and apply for roles. Recruiters can post jobs, manage applications, and streamline their hiring workflows in one unified dashboard.

---

## ✨ Key Features

* 🔐 **Secure Authentication:** JWT-based authentication and role-based access control (RBAC) for Job Seekers and Recruiters.
* 📁 **Cloud Media Management:** Resume (PDF) and profile picture uploads handled flawlessly via **Multer** and stored securely on **Cloudinary**.
* 🎨 **Modern User Interface:** Highly responsive and sleek design built using **Tailwind CSS**, **Radix UI**, and animated with **Framer Motion**.
* ⚡ **Optimized Performance:** Blazing fast frontend powered by **Vite** and **React**.
* 🧠 **Persistent State:** Robust state management utilizing **Redux Toolkit** and `redux-persist` to maintain user sessions across reloads.
* ☁️ **Cloud Deployment:** Frontend hosted on **Vercel** and backend deployed on **Render**.

---

## 🛠️ Tech Stack

### Frontend
- **React.js** (Vite)
- **Redux Toolkit** (State Management)
- **Tailwind CSS** (Styling)
- **Radix UI & Framer Motion** (Accessible Primitives & Animations)
- **Axios** (Data Fetching)

### Backend
- **Node.js** & **Express.js** (REST API)
- **MongoDB** with **Mongoose** (Database)
- **JSON Web Tokens (JWT)** & **Bcrypt** (Auth & Security)
- **Cloudinary** & **Multer** (File Uploads)

---

## 🚀 Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/en/) and [Git](https://git-scm.com/) installed.

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/your-username/JobHunt.git
cd JobHunt
```

**2. Setup Backend**
```bash
cd backend
npm install
```
Create a `.env` file in the `backend` directory and add the following variables:
```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```
Start the backend server:
```bash
npm run server
```

**3. Setup Frontend**
Open a new terminal tab and navigate to the frontend folder:
```bash
cd frontend
npm install
```
Start the Vite development server:
```bash
npm run dev
```

---

## 📂 Project Structure

```text
JobHunt/
├── backend/            # Express.js REST API
│   ├── controllers/    # Route controllers (logic)
│   ├── middlewares/    # Custom middlewares (Auth, Multer)
│   ├── models/         # Mongoose schemas
│   ├── routes/         # API routes
│   └── utils/          # Helper functions (Cloudinary config, etc)
└── frontend/           # React.js App
    ├── src/
    │   ├── components/ # Reusable UI components
    │   ├── pages/      # Page views (Home, Login, Dashboard)
    │   └── store/      # Redux setup and slices
    └── package.json
```

---

<div align="center">
Made with ❤️ by Abhimanyu
</div>
