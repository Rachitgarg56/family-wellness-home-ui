
import './FooterCard.css';
import FooterCardBtn from '../FooterCardBtn/FooterCardBtn.js';

const FooterCard = (props) => {
    return (
        <div className='footer1-card'>
            <figure>
                <img alt='' src={props.imgSrc}></img>
            </figure>
            <p>{props.text}</p>
            <FooterCardBtn content="LEARN MORE"/>
        </div>
    )
}

export default FooterCard;
