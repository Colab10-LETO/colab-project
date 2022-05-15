import Footer from "./Footer";

const Contact = () => {
    return(
        <div className="guideBackground">
            <div className="contactWrapper">
                <h6>Have any questions or feedback for us? We'd be happy to hear from you! Fill out the contact form below and we'll be in touch.</h6>
            <form className="contactForm" action="https://formsubmit.co/hello.thriftfinder@gmail.com" method="POST">
                <label htmlFor="name">
                    <input className="contactInput" type="text" name="name" placeholder="Name"/>
                </label>
                <label htmlFor="emailAddress">
                    <input className="contactInput" type="text" name="email" id="email" placeholder="Email Address" required/>
                </label>
                <label htmlFor="message">
                    <textarea className="contactInput" name="message" id="message" placeholder="Message" rows="10"></textarea>
                </label>
                <button className="contactSubmitButton" type="submit">Get In Touch!</button>
            </form>
            </div>
            
            <Footer />
        </div>
    )
}

export default Contact;