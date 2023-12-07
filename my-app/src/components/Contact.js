import "../App.scss";


const Contact = () => {
    return (
        <>
            <div className="contact-page">
                <div className="text-zone">
                    <h2>REACH OUT</h2>
                    <div className="contact-form">
                        <form>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeHolder="Name" required/>
                                </li>
                                <li className="half">
                                    <input type="email" name="email" placeHolder="Email" required/>
                                </li>
                                <li>
                                    <input type="text" name="subject" placeHolder="Subject"/>
                                </li>
                                <li>
                                    <textarea placeholder="Message" name="message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="send"/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
 }

 export default Contact;