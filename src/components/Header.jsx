import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-slate-100 text-black font-bold p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My App</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link to="/create" className="hover:underline">Create User</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
