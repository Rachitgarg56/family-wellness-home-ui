
import './Header.css';
import logo from '../../assets/wellness-logo.png';

const Header = () => {
    return (
        <header>

            <div className='header-top'>
                <div className='logo'>
                    {/* <img alt='logo' src='https://cdn.iconscout.com/icon/free/png-256/free-health-fitness-care-safe-fresh-heart-1-4142.png'></img> */}
                    <img alt='logo' src={logo}></img>
                </div>

                <div className='heading'>
                    <h1>Family Wellness</h1>
                    <h3>Massage Therapy</h3>
                </div>
            </div>

            <nav>
                <p>HOME</p>
                <p>ABOUT</p>
                <p>SERVICES</p>
                <p>FAQ</p>
                <p>CONTACT</p>
            </nav>

        </header>
    )
}

export default Header;
