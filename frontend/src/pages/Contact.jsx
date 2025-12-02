import React from 'react'
import SideImage from '../assets/side-image.png';
import '../styles/Contact.css';
function Contact() {
    async function userInfo(formData) {
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        const data = { name, email, message };

        try {
            const res = await fetch("https://cafe-temp.onrender.com/frontend/contact/userInfo",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                });
            const result = await res.text();
            console.log(result);
            alert("Form submitted and saved!");
        }
        catch (err) {
            console.error("Error submitting form: ", err);
        }
    }
    return (
        <div className='contact'>
            <div className="leftSide" style={{ backgroundImage: `url(${SideImage})`, color: 'white', height: '100vh' }}></div>
            <div className="rightSide">
                <h1>
                    <form className="text-start" onSubmit={(e) => {
                        e.preventDefault();
                        const formData = new FormData(e.target);
                        userInfo(formData);
                    }}
                        name="userInfo" method="post">
                        <label htmlFor="name">Full Name:</label>
                        <input name="name" placeholder="Enter full name..." type="text" />
                        <label htmlFor="email">Email:</label>
                        <input name="email" placeholder="Enter email..." type="email" />
                        <label htmlFor="message">Message:</label>
                        <textarea rows="6" placeholder="Enter message..." name="message" required></textarea>
                        <button type="submit">Send message</button>

                    </form>
                </h1>
            </div>
        </div>
    )
}

export default Contact