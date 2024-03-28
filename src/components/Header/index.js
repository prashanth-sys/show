import "./index.css";

const Header = () => (
  <nav className="nav-container">
    <img
      src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1711614998/3_2x_1_qqhrv7.png"
      alt="Logo"
      className="image-logo"
    />
    <div className="nav-list-container">
      <h1 className="nav-heading">Wedding Invitation</h1>
      <ul className="list-items">
        <li className="list">HOME</li>
        <li className="list">WEDDING</li>
        <li className="list">TRAVEL</li>
        <li className="list">GALLERY</li>
        <li className="list">RSVP</li>
        <li className="list">GIFT REGISTRY</li>
      </ul>
    </div>
    <img
      src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1711615286/6_2x_1_oh1jul.png"
      alt="Logo"
      className="image-logo"
    />
  </nav>
);
export default Header;
