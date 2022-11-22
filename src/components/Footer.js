import Container from './Container';

const Footer = () => {
  return <footer className="footer">
    <img className='footer__bg' src="./img/footer/footer.png" srcSet='./img/footer/footer.webp' alt="rings" />
    <Container>
        <div className='footer__body'>
            <div className='footer__info'>
                <a className='footer__logo' href="/">
                    <img src="./img/logo-light.png" alt="logo" />
                </a>
                <p className='footer__info-location'>Kyiv, Ukraine</p>
                <p className='footer__info-email'>hello.craftengine@gmail.com</p>
                <span className='footer__info-author'>Made with ❤️ by <a href="/">Craftengine</a></span>
                <p className='footer__info-rights'>© Swipe. All rights reserved. Powered by <a href="/">Webflow</a></p>
            </div>
            <div className='footer__lists'>
                <ul className='footer__list'>
                    <li className='footer__list-item'>
                        <a className='footer__list-link' href="/">About</a>
                    </li>
                    <li className='footer__list-item'>
                        <a className='footer__list-link' href="/">Features</a>
                    </li>
                    <li className='footer__list-item'>
                        <a className='footer__list-link' href="/">Pricing</a>
                    </li>
                    <li className='footer__list-item'>
                        <a className='footer__list-link' href="/">Team</a>
                    </li>
                </ul>
                <ul className='footer__list'>
                    <li className='footer__list-item'>
                        <a className='footer__list-link' href="/">FAQ</a>
                    </li>
                    <li className='footer__list-item'>
                        <a className='footer__list-link' href="/">Feedback</a>
                    </li>
                    <li className='footer__list-item'>
                        <a className='footer__list-link' href="/">Blog</a>
                    </li>
                    <li className='footer__list-item'>
                        <a className='footer__list-link' href="/">Contact</a>
                    </li>
                </ul>
                <ul className='footer__list'>
                    <li className='footer__list-item'>
                        <a className='footer__list-link' href="/">Twitter</a>
                    </li>
                    <li className='footer__list-item'>
                        <a className='footer__list-link' href="/">Facebook</a>
                    </li>
                    <li className='footer__list-item'>
                        <a className='footer__list-link' href="/">Instagram</a>
                    </li>
                    <li className='footer__list-item'>
                        <a className='footer__list-link' href="/">Licensing</a>
                    </li>
                </ul>
            </div>
        </div>
    </Container>
  </footer>
}

export default Footer;