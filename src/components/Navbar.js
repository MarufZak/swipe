import Burger from './Burger';


function Navbar(){

    return <nav className="nav">
        <div className="container">
            <div className="nav__body">
                <a href="/" className="logo">
                    <img src="./img/logo.png" alt="swipe logo" />
                </a>
                <Burger/>
                <div className="nav__content">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="/" className="nav__link link link--primary">About</a>
                        </li>
                        <li className="nav__item">
                            <a href="/" className="nav__link link link--primary">Features</a>
                        </li>
                        <li className="nav__item">
                            <a href="/" className="nav__link link link--primary">Pricing</a>
                        </li>
                        <li className="nav__item">
                            <a href="/" className="nav__link link link--primary">Team</a>
                        </li>
                        <li className="nav__item">
                            <a href="/" className="nav__link link link--primary">FAQ</a>
                        </li>
                        <li className="nav__item">
                            <a href="/" className="nav__link link link--primary">Feedback</a>
                        </li>
                        <li className="nav__item">
                            <a href="/" className="nav__link link link--primary">Blog</a>
                        </li>
                        <li className="nav__item">
                            <a href="/" className="nav__link link link--primary">Contact</a>
                        </li>
                    </ul>
                    <button className="btn btn--white">Buy now</button>
                </div>
            </div>
        </div>
    </nav>
};

export default Navbar;