import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import '../styles/Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <InstagramIcon />
                <FacebookIcon />
                <XIcon />
                <WhatsAppIcon />
            </div>
            <hr />
            <p>&copy; 2025 sites by colin</p>
        </div>
    )
}

export default Footer