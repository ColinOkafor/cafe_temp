"use client";
import { React, useState } from 'react'
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/Home.css';
import BannerImage from '../assets/background-image.png';
function Home() {
    const position = [53.54, 10];

    const openGoogleMaps = () => {
        const url = `https://www.google.com/maps?q=${position[0]},${position[1]}`;
        window.open(url, '_blank'); // opens in a new tab
    };
    return (
        <div>
            <div style={{ backgroundImage: `url(${BannerImage})`, color: 'white', paddingTop: '10px', paddingLeft: '10%' }}>
                <div className="headerContainer" >
                    <h1>Cap Cafe</h1>
                    <p> Matcha to match yo taste</p>
                    <Link to="contact">
                        <button style={{ backgroundColor: "rgba(228, 219, 201, 1)" }}>contact now</button>
                    </Link>

                </div>
            </div>

            <br /><br /><br /><br /><br />
            <div style={{ backgroundColor: "rgba(243, 211, 141, 1)", color: 'white', paddingTop: '10px', paddingLeft: '10%', boxShadow: "0px 4px 10px rgba(0,0,0,0.3)" }}>
                <div className="Services" >
                    <h1>Services</h1>
                    <table style={{ width: "95%", textAlign: "left", borderCollapse: "collapse" }}>
                        <tbody>
                            <tr>
                                <td>
                                    <p><h2>Food & Beverage Services:</h2>
                                        <ul>
                                            <li>Coffee, tea, smoothies, pastries, sandwiches, breakfast items, etc..</li>
                                            <li>Usually includes both dine-in and take-out options.</li>
                                        </ul>
                                    </p>
                                </td>
                                <td>
                                    <p>
                                        <h2>Seating & Wifi:</h2>
                                        <ul>
                                            <li>Comfortable seating for customers to work, study, or relax.</li>
                                            <li>Free Wi-Fi is one of the most standard services offered today.</li>
                                        </ul>
                                    </p>
                                </td>
                                <td>
                                    <p><h2>Takeout & Delivery:</h2>
                                        <ul>
                                            <li>Ordering at the counter and taking items to go.</li>
                                            <li>Many cafés partner with Uber Eats, DoorDash, SkipTheDishes, etc..</li>
                                        </ul>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={3}>
                                    <p><h2>Catering Services:</h2> Small catering for meetings, offices, or events.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <br /><br /><br /><br /><br />

            <div className="map" style={{ width: "100%", verticalAlign: "center" }}>
                <MapContainer center={position} zoom={13} style={{ height: "50vh", width: "100%" }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            Colin's Sites <br />
                            <button onClick={openGoogleMaps}>Open in Google Maps</button>
                        </Popup>
                    </Marker>
                </MapContainer>
                );
            </div>
        </div>
    )
}

export default Home