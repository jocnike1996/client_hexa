import './App.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import background1 from '/src/assets/bac.png'
import background from '/src/assets/background.png'
import aboutUs from '/src/assets/aboutUs.png'
import logoFooter from '/src/assets/hexa.svg'
import { useState } from 'react';

import axios from 'axios';


function App() {

    const [contactForm, setContactForm] = useState({
        fullname: '', email: '', message: ''
    })
    const handelChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setContactForm((prev: any) => ({ ...prev, [name]: value }));
    }
    const [status, setStatus] = useState('');
    const handelSubmit = async (e: any) => {
        e.preventDefault();

        setStatus('Sending...');
        try {
            const response = await axios.post("http://localhost:5000/send", contactForm);
            setStatus("✅ Message sent successfully!");
            setContactForm({ fullname: "", email: "", message: "" }); // Clear form
        } catch (error) {
            console.error("Error:", error);
            setStatus("❌ Failed to send message.");
        }
        // alert(JSON.stringify(contactForm));
    }


    return (
        <>
            {/* Removed <body> tag, replaced with a div */}
            <div className='main_body'>
                {/* header */}
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <a className="navbar-rand" href="#">
                            <img
                                src="/hexa.png"
                                alt="Hexagon logo"
                                height={60}
                            />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#portfolio">Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">About us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="btn btn-contact" href="#contact">Contact us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* slider */}
                <div className="slider w-100">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation
                        pagination={{ clickable: true }}
                        spaceBetween={0}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        slidesPerView={1}
                        className="w-100"
                    >
                        <SwiperSlide>
                            <div className="d-flex justify-content-center align-items-center w-100">
                                <img src={background1} alt="Slide 1" className="img-fluid w-100" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="d-flex justify-content-center align-items-center w-100">
                                <img src={background} alt="Slide 2" className="img-fluid w-100" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <section id="about" className="about-section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-4 mb-lg-0 ">
                                <div className="about-image">
                                    <img src={aboutUs} alt="About Us" className="img-fluid mx-4 mx-lg-5 object-fit-cover" />
                                </div>
                            </div>
                            <div className="col-lg-6 m-lg-0">
                                <div className="about-content text-justify">
                                    <h2>About us</h2>
                                    <p className="about-description">About us description</p>
                                    <p className="about-text me-lg-5 ">
                                        Welcome to Hexa Digital, where creativity meets strategy in the dynamic world of digital marketing.
                                        We were founded on a passion for innovation and a commitment to results. Our team of digital enthusiasts
                                        is dedicated to helping brands like yours thrive online.
                                    </p>
                                    <a href="#" className="btn-read-more">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="clients-section">
                    <div className="container">
                        <h2>Our Clients</h2>
                        <div className="row justify-content-center">
                            <div className="col-6 col-md-4 col-lg-2 mb-4">
                                <div className="client-logo">SC</div>
                            </div>
                            <div className="col-6 col-md-4 col-lg-2 mb-4">
                                <div className="client-logo">LC</div>
                            </div>
                            <div className="col-6 col-md-4 col-lg-2 mb-4">
                                <div className="client-logo">GS</div>
                            </div>
                            <div className="col-6 col-md-4 col-lg-2 mb-4">
                                <div className="client-logo">BD</div>
                            </div>
                            <div className="col-6 col-md-4 col-lg-2 mb-4">
                                <div className="client-logo">LB</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact" className="contact-section py-5" style={{ backgroundColor: '#454545ff', color: '#fff' }}>
                    <div className="container">
                        <div className="row align-items-center">
                            {/* Left: Contact Form */}
                            <div className="col-lg-6 mb-4 mb-lg-0">
                                <h2 className="fw-bold mb-0" style={{ fontSize: '59px' }}>Contact us</h2>
                                <p className="mb-4" style={{ fontSize: '29px', fontWeight: 400 }}>Send us a message</p>

                                <form className="contact-form" onSubmit={handelSubmit}>
                                    <div className="mb-3">
                                        <input
                                            name="fullname"
                                            type="text"
                                            onChange={handelChange}
                                            style={{ width: '70%' }}
                                            className="form-control bg-secondary-subtle border-0"
                                            placeholder="Full Name"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            name="email"
                                            type="email"
                                            onChange={handelChange}
                                            style={{ width: '70%' }}
                                            className="form-control bg-secondary-subtle border-0"
                                            placeholder="Email"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <textarea
                                            name="message"
                                            onChange={handelChange}
                                            className="form-control bg-secondary-subtle border-0"
                                            placeholder="Your Message"
                                            rows={6}
                                            required
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-dark px-4 py-2">Submit</button>
                                </form>
                            </div>

                            {/* Right: Logo and Contact Info */}
                            <div className="col-lg-6 d-flex flex-column align-items-center text-center">
                                <div>
                                    <img
                                        src={logoFooter}
                                        alt="Footer Logo"
                                        className="rounded-circle bg-light d-flex align-items-center justify-content-center mb-4"
                                        style={{ width: '200px', height: '200px' }}
                                    />
                                </div>

                                <div className="ms-lg-5 ms-0 mt-2 d-flex flex-column align-items-center align-items-md-start text-center text-md-start">
                                    <div className="ms-lg-3 ms-0 d-flex align-items-center mb-2">
                                        <i className="fas fa-phone-alt me-2 fa-rotate-90" style={{ fontSize: '29px' }}></i>
                                        <span style={{ fontSize: '20px' }}>+977 9860811940</span>
                                    </div>
                                    <div className="ms-lg-3 ms-0 d-flex align-items-center">
                                        <i className="fas fa-envelope me-2" style={{ fontSize: '29px' }}></i>
                                        <span style={{ fontSize: '20px' }}>gospelknight55@gmail.com</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <footer className="footer">
                    <div className="container">
                        <p>Copyright 2024 All Rights Reserved Company Name</p>
                    </div>
                </footer>

            </div>
        </>
    )
}

export default App;
