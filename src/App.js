import React from "react";
import emailjs from "emailjs-com";
import { Helmet } from "react-helmet";

const App = () => {
	function sendEmail(e) {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_2dwv6jn",
				"template_1cqgydb",
				e.target,
				"user_VkO53ZkCRh4gsqAClpkB1"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	}
	return (
		<>
			<Helmet>
				<meta
					name="keywords"
					content="financial plan, investment, invest, grow, finance, money, manage, mutual fund, share"
				/>
				<meta name="description" content="Get your financial plan now" />
				<meta name="copyright" content="Growfin" />
				<meta name="language" content="ES" />
			</Helmet>
			<header id="header" className="fixed-top d-flex align-items-center">
				<div className="container d-flex align-items-center justify-content-between">
					<div className="logo">
						<h1>
							<a href="index.html">Growfin</a>
						</h1>
					</div>

					<nav id="navbar" className="navbar">
						<ul>
							<li>
								<a className="nav-link scrollto active" href="#hero">
									Home
								</a>
							</li>
							<li>
								<a className="nav-link scrollto" href="#about">
									About
								</a>
							</li>
							<li>
								<a className="nav-link scrollto" href="#services">
									Services
								</a>
							</li>
							<li>
								<a className="nav-link scrollto " href="#features">
									features
								</a>
							</li>
							{/* <li>
								<a className="nav-link scrollto" href="#team">
									Team
								</a>
							</li>
							<li>
								<a className="nav-link scrollto" href="#pricing">
									Pricing
								</a>
							</li> */}
							{/* <li className="dropdown">
								<a href="#">
									<span>Drop Down</span> <i className="bi bi-chevron-down"></i>
								</a>
								<ul>
									<li>
										<a href="#">Drop Down 1</a>
									</li>
									<li className="dropdown">
										<a href="#">
											<span>Deep Drop Down</span>{" "}
											<i className="bi bi-chevron-right"></i>
										</a>
										<ul>
											<li>
												<a href="#">Deep Drop Down 1</a>
											</li>
											<li>
												<a href="#">Deep Drop Down 2</a>
											</li>
											<li>
												<a href="#">Deep Drop Down 3</a>
											</li>
											<li>
												<a href="#">Deep Drop Down 4</a>
											</li>
											<li>
												<a href="#">Deep Drop Down 5</a>
											</li>
										</ul>
									</li>
									<li>
										<a href="#">Drop Down 2</a>
									</li>
									<li>
										<a href="#">Drop Down 3</a>
									</li>
									<li>
										<a href="#">Drop Down 4</a>
									</li>
								</ul>
							</li> */}
							<li>
								<a className="nav-link scrollto" href="#contact">
									Contact
								</a>
							</li>
							<li>
								<div data-aos="fade-up" data-aos-delay="800">
									<a
										href="#contact"
										className="btn-get-started scrollto"
										style={{
											backgroundColor: "#3498db",
											color: "#fff",
											borderRadius: "50px",
											padding: "8px 25px",
											marginLeft: "30px",
										}}
									>
										Get Financial Plan
									</a>
								</div>
							</li>
						</ul>
						<i className="bi bi-list mobile-nav-toggle"></i>
					</nav>
				</div>
			</header>
			<section id="hero" className="d-flex align-items-center">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
							<h1 data-aos="fade-up" classNameName="mb-3">
								Grow and Manage your portfolio with Growfin
							</h1>
							<h2 data-aos="fade-up" data-aos-delay="400">
								We are team of talented and creative people
							</h2>
							<div data-aos="fade-up" data-aos-delay="800">
								<a href="#about" className="btn-get-started scrollto">
									Get Started
								</a>
							</div>
						</div>
						<div
							className="col-lg-6 order-1 order-lg-2 hero-img"
							data-aos="fade-left"
							data-aos-delay="200"
						>
							<img
								src="assets/img/hero-img.png"
								className="img-fluid animated"
								alt=""
							/>
						</div>
					</div>
				</div>
			</section>

			<main id="main">
				<section id="about" className="about">
					<div className="container">
						<div className="section-title" data-aos="fade-up">
							<h2>About Us</h2>
						</div>

						<div className="row content">
							{/* <div className="col-lg-6" data-aos="fade-up" data-aos-delay="150">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</p>
								<ul>
									<li>
										<i className="ri-check-double-line"></i> Ullamco laboris
										nisi ut aliquip ex ea commodo consequat
									</li>
									<li>
										<i className="ri-check-double-line"></i> Duis aute irure
										dolor in reprehenderit in voluptate velit
									</li>
									<li>
										<i className="ri-check-double-line"></i> Ullamco laboris
										nisi ut aliquip ex ea commodo consequat
									</li>
								</ul>
							</div> */}
							<div
								className="col-lg-12 pt-4 pt-lg-0"
								data-aos="fade-up"
								data-aos-delay="300"
							>
								<h4>
									At Growfin, our goal is to help people save their time and
									money with just a few clicks, and our team will build, manage
									and grow your financial portfolio. We are on mission to give
									you atleast <strong>10% returns</strong> and make you
									financial strong by beating inflation
									<br />
								</h4>
								<h4 style={{ textAlign: "center" }}>
									<strong>
										(All your money will be yours, only we will help you manage
										and increase your income).
									</strong>
								</h4>
								{/* <a href="#" className="btn-learn-more">
									Learn More
								</a> */}
							</div>
						</div>
					</div>
				</section>

				<section id="services" className="services">
					<div className="container">
						<div className="section-title" data-aos="fade-up">
							<h2>Services</h2>
							<p>What we do with your finance?</p>
						</div>

						<div className="row">
							<div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
								<div
									className="icon-box"
									data-aos="fade-up"
									data-aos-delay="100"
								>
									<div className="icon">
										<i className="bx bxl-dribbble"></i>
									</div>
									<h4 className="title">
										<a href="">Financial Planning</a>
									</h4>
									<p className="description">
										At Growfin we understand everyone having different finance
										and needs. Our Experts will analyse all those needs and make
										a financial plan that perfectly fulfil your need.
									</p>
								</div>
							</div>

							<div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
								<div
									className="icon-box"
									data-aos="fade-up"
									data-aos-delay="200"
								>
									<div className="icon">
										<i className="bx bx-file"></i>
									</div>
									<h4 className="title">
										<a href="">Discussing</a>
									</h4>
									<p className="description">
										After Financial Planning we will discuss and explain you
										that plan with minimum guarantee return that will definitely
										beat inflation.
									</p>
								</div>
							</div>

							<div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
								<div
									className="icon-box"
									data-aos="fade-up"
									data-aos-delay="300"
								>
									<div className="icon">
										<i className="bx bx-money"></i>
									</div>
									<h4 className="title">
										<a href="">Investing</a>
									</h4>
									<p className="description">
										After discussion we will make a one portfolio that contains
										all the information related to where we investing money like
										mutual funds, stock, properties, insurance, Fixed deposits
										and lot more.(All the access related to single penny will be
										only yours)
									</p>
								</div>
							</div>

							<div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
								<div
									className="icon-box"
									data-aos="fade-up"
									data-aos-delay="400"
								>
									<div className="icon">
										<i className="bx bx-world"></i>
									</div>
									<h4 className="title">
										<a href="">Updating</a>
									</h4>
									<p className="description">
										As Time changes market also changes so it's our prime
										responsibility to not only keep you updating related to
										market but also suggest you best out of them by our
										financial experts.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="features" className="features">
					<div className="container">
						<div className="section-title" data-aos="fade-up">
							<h2>Features</h2>
							<p>What Makes us different from others</p>
						</div>

						<div className="row" data-aos="fade-up" data-aos-delay="300">
							<div className="col-lg-3 col-md-4">
								<div className="icon-box">
									<i className="ri-store-line" style={{ color: "#ffbb2c" }}></i>
									<h3>
										<a href="">Guaranteed Returns</a>
									</h3>
								</div>
							</div>
							<div className="col-lg-3 col-md-4 mt-4 mt-md-0">
								<div className="icon-box">
									<i
										className="ri-paint-brush-line"
										style={{ color: "#5578ff" }}
									></i>
									<h3>
										<a href="">Financial Stability</a>
									</h3>
								</div>
							</div>
							<div className="col-lg-3 col-md-4 mt-4 mt-md-0">
								<div className="icon-box">
									<i
										className="ri-calendar-todo-line"
										style={{ color: "#e80368" }}
									></i>
									<h3>
										<a href="">Save your Time</a>
									</h3>
								</div>
							</div>
							<div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
								<div className="icon-box">
									<i
										className="ri-bar-chart-box-line"
										style={{ color: "#e361ff" }}
									></i>
									<h3>
										<a href="">Grow Your Money</a>
									</h3>
								</div>
							</div>
							<div className="col-lg-3 col-md-4 mt-4">
								<div className="icon-box">
									<i
										className="ri-database-2-line"
										style={{ color: "#47aeff" }}
									></i>
									<h3>
										<a href="">Financial Security</a>
									</h3>
								</div>
							</div>
							<div className="col-lg-3 col-md-4 mt-4">
								<div className="icon-box">
									<i
										className="ri-gradienter-line"
										style={{ color: "#ffa76e" }}
									></i>
									<h3>
										<a href="">Accessible Portfolio</a>
									</h3>
								</div>
							</div>
							<div className="col-lg-3 col-md-4 mt-4">
								<div className="icon-box">
									<i
										className="ri-file-list-3-line"
										style={{ color: "#11dbcf" }}
									></i>
									<h3>
										<a href="">Market Update </a>
									</h3>
								</div>
							</div>
							<div className="col-lg-3 col-md-4 mt-4">
								<div className="icon-box">
									<i
										className="ri-price-tag-2-line"
										style={{ color: "#4233ff" }}
									></i>
									<h3>
										<a href="">Experts Suggestions</a>
									</h3>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section id="faq" className="faq">
					<div className="container">
						<div className="section-title" data-aos="fade-up">
							<h2>Frequently Asked Questions</h2>
						</div>

						<div
							className="row faq-item d-flex align-items-stretch"
							data-aos="fade-up"
							data-aos-delay="100"
						>
							<div className="col-lg-5">
								<i className="ri-question-line"></i>
								<h4>Who can grow and manage their money from Growfin?</h4>
							</div>
							<div className="col-lg-7">
								<p>
									Everyone with minimum monthly money balance 5000Rs will able
									to grow and manage their money from Growfin
								</p>
							</div>
						</div>

						<div
							className="row faq-item d-flex align-items-stretch"
							data-aos="fade-up"
							data-aos-delay="200"
						>
							<div className="col-lg-5">
								<i className="ri-question-line"></i>
								<h4>
									Can I use my money if I require that money for some reason
									after taking service from Growfin?
								</h4>
							</div>
							<div className="col-lg-7">
								<p>
									All the access of money will be yours and you've full access
									to take decision of your money
								</p>
							</div>
						</div>

						<div
							className="row faq-item d-flex align-items-stretch"
							data-aos="fade-up"
							data-aos-delay="300"
						>
							<div className="col-lg-5">
								<i className="ri-question-line"></i>
								<h4>How Growfin will manage and grow my money?</h4>
							</div>
							<div className="col-lg-7">
								<p>
									At Growfin We have financial experts that will make a
									financial plan and invest your money in the trusted and
									booming markets.
								</p>
							</div>
						</div>

						<div
							className="row faq-item d-flex align-items-stretch"
							data-aos="fade-up"
							data-aos-delay="400"
						>
							<div className="col-lg-5">
								<i className="ri-question-line"></i>
								<h4>What are my benefits for using Growfin?</h4>
							</div>
							<div className="col-lg-7">
								<p>
									By using Growfin you save your valuable time and you will able
									to grow money with us by guaranteed returns. Also you will get
									you whole financial plan in the simplest manner with all
									access of your money.
								</p>
							</div>
						</div>

						<div
							className="row faq-item d-flex align-items-stretch"
							data-aos="fade-up"
							data-aos-delay="500"
						>
							<div className="col-lg-5">
								<i className="ri-question-line"></i>
								<h4>Is Growfin taking guarantee for the good returns?</h4>
							</div>
							<div className="col-lg-7">
								<p>
									Yes, At Growfin we take the guarantee for the best possible
									return (With Atleast 10%) that will beat inflation surely.
								</p>
							</div>
						</div>
					</div>
				</section>

				<section id="contact" className="contact">
					<div className="container">
						<div className="section-title" data-aos="fade-up">
							<h2>Contact Us</h2>
						</div>

						<div className="row">
							<div
								className="col-lg-4 col-md-6"
								data-aos="fade-up"
								data-aos-delay="100"
							>
								<div className="contact-about">
									<h3>Growfin</h3>
									<p>
										At Growfin, our goal is to help people save their time and
										money with just a few clicks, and our team will build,
										manage and grow your financial portfolio. We are on mission
										to give you atleast 10% returns and make you financial
										strong by beating inflation
									</p>
									<div className="social-links">
										<a href="#" className="twitter">
											<i className="bi bi-twitter"></i>
										</a>
										<a href="#" className="facebook">
											<i className="bi bi-facebook"></i>
										</a>
										<a
											href="https://www.instagram.com/growfin121/"
											className="instagram"
											target="_blank"
										>
											<i className="bi bi-instagram"></i>
										</a>
										<a href="#" className="linkedin">
											<i className="bi bi-linkedin"></i>
										</a>
									</div>
								</div>
							</div>

							<div
								className="col-lg-5 col-md-12"
								data-aos="fade-up"
								data-aos-delay="300"
							>
								<h6>
									<strong>
										We Love to hear your feedback and who are interested to take
										service from Growfin
										<br />
										We will reach out to you in Two business hours
									</strong>
								</h6>
								<p>
									Initial customers will get one more benefits from our side
								</p>
								<form className="php-email-form" onSubmit={sendEmail}>
									<div className="form-group">
										<input
											type="text"
											name="from_name"
											className="form-control"
											id="from_name"
											placeholder="Your Full Name"
											required
										/>
									</div>
									<div className="form-group">
										<input
											type="email"
											className="form-control"
											name="email"
											id="email"
											placeholder="Your Email"
											required
										/>
									</div>
									<div className="form-group">
										<input
											type="number"
											className="form-control"
											name="number"
											id="number"
											placeholder="Your Mobile Number"
											required
										/>
									</div>
									<div className="form-group">
										<input
											type="text"
											className="form-control"
											name="subject"
											id="subject"
											placeholder="Subject"
											required
										/>
									</div>
									<div className="form-group">
										<textarea
											className="form-control"
											name="message"
											rows="5"
											placeholder="Message"
											required
										></textarea>
									</div>
									{/* <div className="my-3">
										<div className="loading">Loading</div>
										<div className="error-message"></div>
										<div className="sent-message">
											Your message has been sent. Thank you!
										</div>
									</div> */}
									<div className="text-center">
										<button type="submit">Send Message</button>
									</div>
								</form>
							</div>

							<div
								className="col-lg-3 col-md-6 mt-4 mt-md-0"
								data-aos="fade-up"
								data-aos-delay="200"
							>
								<div className="info">
									<div>
										<i className="ri-map-pin-line"></i>
										<p>
											<a style={{ color: "#000000" }} href="#">
												Growfin
											</a>
										</p>
									</div>

									<div>
										<i className="ri-mail-send-line"></i>
										<p>
											<a
												style={{ color: "#000000" }}
												href="mailto:shriyashjadhav370@gmail.com"
											>
												shriyashjadhav370@gmail.com
											</a>
										</p>
									</div>

									<div>
										<i className="ri-phone-line"></i>
										<p>
											<a style={{ color: "#000000" }} href="tel:+919594522804">
												+91 9594522804
											</a>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export default App;
