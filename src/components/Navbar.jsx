import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <h2>FitLife</h2>
      </div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/workouts">Workouts</Link>
        <Link to="/nutrition">Nutrition</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Navbar;