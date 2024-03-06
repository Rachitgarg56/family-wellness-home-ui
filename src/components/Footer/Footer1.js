
import './Footer1.css';
import step1Img from '../../assets/footer1-step1.png';
import step2Img from '../../assets/footer1-step2.png';
import step3Img from '../../assets/footer1-step3.png';
import FooterCard from '../FooterCard/FooterCard';

const Footer1 = () => {

    const FooterCards = [
        {
            imgSrc: step1Img,
            text: "Review the process of becoming a certified Family Wellness Instructor."
        },
        {
            imgSrc: step2Img,
            text: "Learn about what you can expect in our instructor training course."
        },
        {
            imgSrc: step3Img,
            text: "Register for a training and complete the instructor course."
        }
    ]

    return (
        <section className='footer1'>

            <h2>HOW TO GET INVOLVED</h2>

            <div className='footer1-container'>

                <div className='footer1-steps'>

                    {FooterCards.map((card) => {
                        return <FooterCard imgSrc={card.imgSrc} text={card.text}/>
                    })}

                </div>

                <hr></hr>

                <div className='footer1-email'>

                    <div className='footer1-email-heading'>
                        <h2>EMAIL UPDATES</h2>
                        <p>Stay up to date with Family Wellness by joining our mailing list today!</p>
                    </div>

                    <div className='footer1-email-form'>
                        <form>
                            <input type='text' placeholder='Email'></input>
                            <button type='button'>SUBSCRIBE TODAY</button>
                        </form>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Footer1;
