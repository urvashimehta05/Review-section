import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">Maska Butters</h1>

        <ul className="header-nav">
          <li className="nav-item">Home</li>
          <li className="nav-item">Products</li>
          <li className="nav-item">Blogs</li>
          <li className="nav-item">Contact</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
