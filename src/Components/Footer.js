import React from "react";
import "./Footer.css";
import { FaSquareXTwitter, FaInstagram, FaReddit } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer class="footer">
            <p>Copyright @ <span>Ibrahim Omar</span></p>
            <div class="icon">
                <FaSquareXTwitter />
                <FaInstagram />
                <FaReddit />
            </div>
        </footer>
    )
}

export default Footer;