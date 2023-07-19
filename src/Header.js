import './Header.css';
import logo from './images/ironhack-logo-xs.png';
import menu from './images/menu-top-xs.png';

const Header = () => {
    return ( 
        <header>
            <nav>
                <img src={ logo } alt="ironhacklogo" />
                <img src={ menu } alt="hamburger" />
            </nav>
            <h1>Say hello to ReactJS</h1>
            <p>You will learn how to use the most popular frontend library and become a super Ninja developer.</p>
            <button>Awesome!</button>
        </header>
    );
}
 
export default Header;
