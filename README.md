# **Authentication App**

This project demonstrates the implementation of a modern authentication system using **React**, **Formik**, **Tailwind CSS**, and **Vercel** for deployment. The main features include **Sign Up** and **Login** forms with validation, a **"Remember Me"** checkbox, and **Toast notifications** for form submission feedback.

## **Technologies Used**

- **Framework**: Typescript, React, Vite
- **Libraries**: TailwindCSS
- **NPM Packages**: Formik, Yup

## **Key Features**

- **Sign Up**: 
  - Allows users to create a new account by providing an email and password.
  - Password validation with strength indicator.
  
- **Login**: 
  - Allows users to log in with email and password.
  - "Remember Me" feature to save the email in local storage.
  
- **Toast Notifications**: 
  - Displays success or error messages after form submission.
  - Auto-hides after a specified duration.
  
- **Responsive Design**: 
  - Fully responsive using Tailwind CSS to ensure the app looks good on mobile and desktop screens.

## **Getting Started**

To get started with this project, clone the repository and follow the instructions below to set up and run it locally.

### **Prerequisites**

- Node.js (>=16)
- npm

### **Setup Instructions**

1. **Clone the repository:**

   ```bash
   git clone https://github.com/YashGangan/auth-frontend.git
   ```

2. **Install dependencies:**

   Navigate to the project directory and install the necessary packages.

   ```bash
   cd auth-frontend
   npm install
   ```

3. **Run the development server:**

   After installing dependencies, start the Vite development server.

   ```bash
   npm run dev
   ```

   This will start the app at `http://localhost:5173`.

Here's a small section you can add to the README to explain the routes:

## **Routes**

The application uses **React Router** to manage navigation between different pages. The key routes in this application are:

- **`/`**: Redirects to the **Sign Up** page. It serves as the default route.
- **`/signup`**: The **Sign Up** page where users can create a new account by providing their email and password.
- **`/login`**: The **Login** page where users can log into their account using their email and password.

## **Folder Structure**

```
/auth-frontend
│
├── /public             # Public assets
├── /src                # Application source code
│   ├── /components     # Reusable components (Button, Input, Toast)
│   ├── /pages          # Pages for SignUp, Login
│   ├── /css            # Tailwind CSS file
│   └── /types          # TypeScript types
├── tailwind.config.js  # Tailwind CSS configuration
├── vite.config.ts      # Vite configuration
└── README.md           # This file
```

## **Customizations**

- **Sign Up Form**: Custom validation logic is implemented using **Formik** and **Yup**.
- **Login Form**: Stores the email in **localStorage** if the "Remember Me" checkbox is selected.
- **Toast**: The **Toast component** displays notifications on successful or failed form submissions.

---

## **Conclusion**

This project serves demonstrates **Typescript** , **React**, **Formik**, and **Tailwind CSS** for form handling, validation, and feedback.