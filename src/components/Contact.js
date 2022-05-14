const Contact = () => {
    return(
        <div>
            <h6>Have any questions or feedback for us? We'd be happy to hear from you! Fill out the contact form below and we'll be in touch.</h6>
            <form className="contactForm" action="submit">
                <label htmlFor="name">
                    <input type="text" name="name" placeholder="Your Name"/>
                </label>
                <label htmlFor="emailAddress">
                    <input type="email" name="email" id="email" placeholder="Email Address" required/>
                </label>
                <label htmlFor="message">
                    <textarea name="message" id="message" cols="40" rows="10"></textarea>
                </label>
                <button>Get In Touch!</button>
            </form>
        </div>
    )
}

export default Contact;