import './Footer2.css';
import FooterCardBtn from '../FooterCardBtn/FooterCardBtn';
import footerImg from '../../assets/footer2-icon.png';

const Footer2 = () => {

    const customStyle = {
        padding: "1rem 2rem",
        backgroundColor: "white",
        color: "#E22426",
        fontWeight: "700",
        fontSize: "15px",
        borderRadius: "40px",
        border: "none"
    }

    return (
        <section className='footer2'>

            <div className='footer2-main'>

                <div className='footer2-main-left'>
                    <figure><img alt='logo-img' src={footerImg}></img></figure>
                    <p>FAMILY WELLNESS ASSOCIATES</p>
                    <pre>
                        2550 Stover St.<br/>
                        Building B201<br/>
                        Fort Collins, CO 80525
                    </pre>
                    <p>Toll Free Phone & FAX 1-888-543-9054</p>
                    <p>families@familywellness.com</p>
                </div>

                <div className='footer2-main-right'>
                    <div className='footer2-main-right-container'>
                        <div className='hamburger hide'><i class="fa-solid fa-bars"></i></div>
                        <ul>
                            <li style={{color: "black"}}>HOME</li>
                            <li>ABOUT US</li>
                            <li>PROGRAM</li>
                            <li>TRAINING</li>
                            <li>CONTACT US</li>
                        </ul>
                        <FooterCardBtn customStyle={customStyle} content="BECOME AN INSTRUCTOR"/>
                        <FooterCardBtn customStyle={customStyle} content="HOST A TRAINING" />
                    </div>
                </div>

            </div>

            <div className='footer2-copyright'>
                <p>© Family Wellness, 2024  |  Privacy Policy</p>
            </div>

        </section>
    )
}

export default Footer2;
