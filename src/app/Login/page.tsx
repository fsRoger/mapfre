// pages/login.tsx

import React from "react";
import LoginForm from "../components/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold mb-6">Página de Login</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
