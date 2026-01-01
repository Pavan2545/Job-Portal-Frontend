
import { Link } from "react-router-dom";
export default function Navbar(){
  return (
    <nav className="bg-blue-700 text-white px-8 py-4 flex justify-between">
      <h1 className="font-bold text-xl">JobPortal</h1>
      <div className="space-x-6">
        <Link to="/">Home</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
        <Link to="/register" className="bg-green-500 px-3 py-2 rounded">Register</Link>
      </div>
    </nav>
  );
}
