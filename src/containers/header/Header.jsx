import React, { useState } from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

function Header() {
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const validateEmail = () => {
		if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			setMessage("You Have Been Successfully Subscribed!");
			setEmail("");
		} else {
			setMessage("Error! Please enter a valid email address.");
		}
	};
	return (
		<div className="gpt3__header section__padding" id="home">
			<div className="gpt3__header-content">
				<h1 className="gradient__text">
					Let’s Build Something amazing with GPT-3 OpenAI
				</h1>
				<p>
					Yet bed any for travelling assistance indulgence unpleasing. Not
					thoughts all exercise blessing. Indulgence way everything joy
					alteration boisterous the attachment. Party we years to order allow
					asked of.
				</p>
				<div className="gpt3__header-content__input">
					<div className="gpt3__header-content__input-container">
						<input
							type="email"
							placeholder="Your Email Address"
							value={email}
							onChange={handleEmailChange}
						/>
						<button type="button" onClick={validateEmail}>
							Get Started
						</button>
					</div>
					<div className="gpt3__header-content__input-validation-message">
						<small>{message}</small>
					</div>
				</div>
				<div className="gpt3__header-content__people">
					<img src={people} alt="people" />
					<p>1,600 people requested access a visit in last 24 hours</p>
				</div>
			</div>
			<div className="gpt3__header-image">
				<img src={ai} alt="ai" />
			</div>
		</div>
	);
}

export default Header;
