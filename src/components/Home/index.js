
import React from 'react';
// import { Link } from "react-router-dom";
import Portrait from "../../assets/Portfolio.jpg";

function Home() {
    return (
        <section className="home my-5">
            <div className="title">
                <h2>Hello, my name is Keith Yanosy</h2>
                <p>Thank you for visiting my portfolio!</p>
                {/* <Link to="portfolio">
                    <button>View my Projects</button>
                </Link> */}
            </div>
            <div className="portrait">
                <img
                    src={Portrait}
                    alt="self portrait"
                />
            </div>
        </section>
    );
}

export default Home;