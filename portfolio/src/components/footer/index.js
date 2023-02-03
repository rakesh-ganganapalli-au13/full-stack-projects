import React from "react";
import "./styles.css";
function Footer() {
  return (
    <div>
      <div className="py-2 text-center footer-style">
        &copy; RAKESH GANGANAPALLI @ {new Date().getFullYear()}
      </div>
    </div>
  );
}

export default Footer;
