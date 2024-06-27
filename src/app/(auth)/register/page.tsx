// app/auth/register/page.tsx
import React from 'react';
const RegisterPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Register</h1>
      <form className="mt-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button type="submit" className="mt-6 w-full py-2 px-4 bg-blue-600 text-white rounded-md">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
