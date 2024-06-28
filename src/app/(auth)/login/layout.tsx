// app/auth/login/loginLayout.tsx
import React from 'react';
interface LoginLayoutProps {
  children: React.ReactNode;
}
const LoginLayout: React.FC<LoginLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 max-w-md w-full">
        {children}
      </div>
    </div>
  );
};
export default LoginLayout;
