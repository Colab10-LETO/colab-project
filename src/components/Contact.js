const Contact = () => {
    return(
        <div>
            <form action="submit">
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