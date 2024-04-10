import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "skyblue",
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
        }}
      >
        <nav>Home</nav>
      </Link>

      <Link to="/about">
        <nav>About</nav>
      </Link>

      <Link to="/contact">
        <nav>Contact</nav>
      </Link>
    </div>
  );
};

export default Header;
