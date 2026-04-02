// // components/ProtectedRoute.jsx
// import { Navigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';

// const ProtectedRoute = ({ children, allowedRoles }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   if (!user) {
//     return <Navigate to="/login" />;
//   }

//   if (!allowedRoles.includes(user.role)) {
//     return <Navigate to="/unauthorized" />; // Optional
//   }

//   return children;
// };

// export default ProtectedRoute;












import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './context/AuthContext/useAuth';

/**
 * ProtectedRoute component to secure routes that require authentication
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render if authenticated
 * @param {Array<string>} [props.allowedRoles] - Optional roles allowed to access this route
 * @returns {React.ReactNode} - Either the protected component or redirect to login
 */
const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950">
        <div className="w-10 h-10 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  // If user is not logged in
  if (!isAuthenticated || !user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If allowedRoles is specified, check if user has required role
  // We only show Access Denied if the user object is fully loaded and role is explicitly unauthorized
  if (allowedRoles) {
    if (!user.role) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950 transition-colors duration-500">
          <div className="w-10 h-10 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
        </div>
      );
    }

    if (!allowedRoles.includes(user.role)) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-slate-950 p-6 text-center transition-colors duration-500">
          <div className="w-20 h-20 bg-red-50 dark:bg-red-900/20 text-red-500 rounded-3xl flex items-center justify-center mb-6">
            <AlertCircle size={40} />
          </div>
          <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">Access Denied</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-sm mx-auto mb-8">
            You do not have the required permissions to view this dashboard. Please contact support if you believe this is an error.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="px-8 py-3 bg-indigo-600 text-white rounded-2xl font-bold shadow-lg shadow-indigo-200 dark:shadow-none hover:bg-indigo-700 transition-all"
          >
            Return Home
          </button>
        </div>
      );
    }
  }

  return children;
};

export default ProtectedRoute;
