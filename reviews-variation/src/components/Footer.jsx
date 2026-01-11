import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3 className="footer-logo">Maska</h3>
          <p className="footer-tagline">
            Crafted with care. Trusted by customers who value taste,
            nutrition, and consistency.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Our Story</li>
              <li>Blogs</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li>FAQs</li>
              <li>Shipping</li>
              <li>Returns</li>
              <li>Track Order</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Follow Us</h4>
            <ul>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Maska Butters. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
