import React from 'react';
import './aboutus.css'; // Import the CSS file


function RadioNitroz() {
    return (
        <div>
            <div id="aboutus">
                <div className="heading">
                    <p>About us</p>
                </div>
                <div className="bodycontent">
                    <p>
                    <p>
				 It is with immense pleasure and an enthusiastic heart that we, the creative team behind Radio NITroz, welcome you to the world of amusement and entertainment. At NIT Durgapur, we believe that college life is meant to be relished, and Radio NITroz is on a mission to add that extra flavor to your already colorful journey. Our intention to provide you with entertainment started way back in 2006, which led us to start the club, and since then Radio NITroz has come a long way since after we moved to Youtube community with exciting Podcasts,Success story and Freshers intro. Remember the days when you could tune into Radio NITroz via VLC and dedicate songs to your loved ones? It was a fantastic feeling to be showered with love and appreciation! We organize various events throughout the year that cater to different interests. Take, for instance, our 'Meme-RaN-Tine' event, where participants can showcase their sense of humor, or 'Movie Mystics,' where we pose exciting riddles related to movies. We believe that talent is just a word until you reveal it, and to expose your talent is our excitement as we came up with our most exciting event 'Talent X' and also our 'Voice It Out' event that provides a platform for live poem recitations, creating a striking ambiance for all. And how can we forget 'Khol E Dil,' where your confession isn't left unconfessed anymore! We also cherish our cultural heritage and organize events such as 'Matki Fod' on the auspicious occasion of Janmashtami and 'Shaam-E-Noor,' an online event on Diwali to celebrate, where every smile of yours is shared with our ever-growing family.And how can we forget Recstacy (now Nityamini) - the Cultural Fest of NIT Durgapur, where we host a myriad of exciting events like Dare you and pull N move! As a team, we make sure that every event we organize becomes a milestone. Our club is more like a family that aims to connect with people, acting as college media and spreading joy and laughter throughout the campus. So, come join us, and let's fill our lives with some fun and entertainment!
				 We work on the motto to make life a bit easy and fun, so we comes up with innovative ideas of fun events like 'Meme-RaN-Tine' where participants can show off their sence of humor, 'Movie Mystics' with its exciting and interesting riddles. Everybody is talented because everyone has something to express, with this objective we projected 'College Ke Tashanbaaz' which can earn them some fame. Then 'Voice It Out was a live poem recitation event which provided a striking rostrum to everyone. To reduce the burden of onea hearts we organised 'Khol-E-Dil. We also arranged several events based on our cultural values like 'Matki Fod' on the auspicious occasion of Janmashtami and 'Shaam-E-Noor' for special diwali vibes. Then we also did 'Funtastic' for our freshers as a fun and T-shirt painting event. Our 'Jukebox' event arena during Aarohan (Techno - Management Fest of NIT Durgapur) is so attractive among students. We also have a lot of events during Recstacy (Now Nityamini) which is the Cultural Fest of NIT Durgapur. We work as a team to make sure that every event is a milestone. Our Social outreach has grown a lot for a variety of exciting events. The basic intention of the formation of this club or better say family is to communicate with the "Aam Janta" of NIT Durgapur, be a college media and fill the campus with our Bakar and Fun.
			    </p>
                    </p>
                </div>
            </div>
            
            <div className="contact">
                <p>CONTACT US</p>
            </div>

            <div className="container">
                <div className="header-content">
                    <span id="menu-icon" onClick={toggleMenu}><img src="images/menu.svg" alt="Menu" /></span>
                    <span id="header-right-menu">

                    </span>
                </div>
                <div className="inner-container">
                    <div className="tile1">
                        <div className="tile1-heading">Get in touch</div>
                        <div className="form-row">We are here for you! How can we help?</div>
                        <form>
                            <div className="form-row">
                                <input type="text" className="form-field" placeholder="Enter your name" />
                            </div>
                            <div className="form-row">
                                <input type="text" className="form-field" placeholder="Enter your email address" />
                            </div>
                            <div className="form-row">
                                <textarea className="form-field" placeholder="Go ahead we are listening..."></textarea>
                            </div>
                            <div className="form-row">
                                <input type="button" className="form-field btn" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}


function toggleMenu() {
    var menuElement = document.getElementById("header-right-menu");
    if (menuElement.style.display === "block") {
        menuElement.style.display = "none";
    } else {
        menuElement.style.display = "block";
    }
}


export default RadioNitroz;

