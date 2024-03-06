import './FooterCardBtn.css';

const FooterCardBtn = (props) => {

    const customStyle = props.customStyle;

    return (
        <button style={customStyle}>{props.content}</button>
    )
}

export default FooterCardBtn;