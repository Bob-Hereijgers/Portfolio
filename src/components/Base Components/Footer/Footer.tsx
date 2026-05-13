import "./footer.css";

interface FooterProps {
  // Add props here if needed
}

const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="footer-wrapper">
      <div className="footer-content">
        <div className="footer-social">
          <a 
            href="https://www.linkedin.com/in/bob-hereijgers" 
            target="_blank" 
            rel="noopener noreferrer"
            className="linkedin-button"
            aria-label="Connect with me on LinkedIn"
          >
            <svg 
              className="linkedin-icon" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C0.792 0 0 0.774 0 1.729v20.542C0 23.227 0.792 24 1.771 24h20.451c0.979 0 1.771-0.773 1.771-1.729V1.729C24 0.774 23.203 0 22.225 0z"/>
            </svg>
            <span>Connect with me on LinkedIn</span>
          </a>
        </div>
        <h5 className="footer-text">
          © {currentYear} Bob Hereijgers. All rights reserved.
        </h5>
      </div>
    </footer>
  );
};

export default Footer;