import HeaderContent from './HeaderContent';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="header">
        <Navbar />
        <HeaderContent />
        <img src="./img/header/header_bg.png" srcSet='./img/header/header_bg@380.webp 380w, ./img/header/header_bg@565.webp 565w, ./img/header/header_bg@705.webp 705w, ./img/header/header_bg@845.webp 845w' className="header__bg" alt="rings" sizes='(min-width: 992px) 45rem, 50rem' />
    </header>
  )
}

export default Header;