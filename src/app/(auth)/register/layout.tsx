import React from 'react';
interface RegisterLayoutProps {
  children: React.ReactNode;
}
const RegisterLayout: React.FC<RegisterLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 max-w-md w-full">
        {children}
      </div>
    </div>
  );
};
export default RegisterLayout;