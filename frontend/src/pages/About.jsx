import React from 'react'
import BannerImage from '../assets/background-image.png';
import '../styles/About.css';

function About() {
    return (
        <div className="about">
            <div className="aboutTop" style={{ backgroundImage: `url(${BannerImage})`, color: 'white' }}></div>
            <div className="aboutBottom">
                <h1>About Us</h1>
                <p>Welcome to our café — a warm and inviting space where great coffee and good company come together. We believe in serving fresh, high-quality drinks and simple, delicious food made with care. Whether you're stopping in for your morning latte, grabbing a quick bite on the go, or settling in to study or relax, our café is designed to make you feel at home.

                    We’re passionate about creating a friendly environment, offering excellent service, and brewing every cup to perfection. From our locally roasted coffee beans to our selection of pastries and sandwiches, everything we serve is crafted to brighten your day.

                    Take a seat, unwind, and enjoy the comfort of your neighborhood café.</p>
            </div>
        </div>
    )
}

export default About