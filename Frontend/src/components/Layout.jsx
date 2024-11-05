import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6">Welcome to the App</h1>
      <nav className="flex justify-center space-x-4 mb-4">
        <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link>
        <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
      </nav>
      <Outlet /> {/* Render the nested routes here */}
    </div>
  );
};

export default Layout;
