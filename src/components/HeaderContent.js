import TwitterIcon from "./Vectors/TwitterIcon";
import InstagramIcon from "./Vectors/InstagramIcon";
import FacebookIcon from "./Vectors/FacebookIcon";

const HeaderContent = () => {
  return (
    <div className="header__content container">
      <div className="header__content-body">
        <h1 className="title title--primary header__title">
          Accessible way to start your business
        </h1>
        <p className="header__subtitle">Simple. Customizable. Stylish.</p>
        <button className="btn btn--purple header__button">
          Get demo for free
        </button>
        <div className="header__media">
          <TwitterIcon />
          <InstagramIcon />
          <FacebookIcon />
        </div>
        <a href="/" className="link link--primary link--mark header__link">
          watch full video
        </a>
      </div>
    </div>
  );
};

export default HeaderContent;
