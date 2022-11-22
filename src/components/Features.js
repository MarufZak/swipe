import {
  SettingsIcon,
  BoardIcon,
  UserIcon,
  LightIcon,
  StarIcon,
  CarIcon,
  ResetIcon,
  TimerIcon,
} from "./Vectors";
import Container from "./Container";

const Features = () => {
  return (
    <div className="features section">
      <Container>
        <div className="features__body">
          <header className="features__header section__header">
            <h2 className="features__title title title--primary section__title">
              Get to know our main features
            </h2>
            <button className="btn btn--purple features__btn section__btn">
              Buy now
            </button>
          </header>
          <div className="features__carts">
            <img
              className="features__img features__img--first"
              src="./img/features/features-1.png"
              alt="figure"
            />
            <img
              className="features__img features__img--second"
              src="./img/features/features-2.png"
              alt="figure"
            />
            <img
              className="features__img features__img--third"
              src="./img/features/features-3.png"
              alt="figure"
            />
            <div className="features__cart">
              <h5 className="title title--secondary features__cart-title">
                Simple
              </h5>
              <p className="features__cart-text ">
                Here you will not find complex technological solutions that will
                baffle you.
              </p>
              <ul className="features__cart-list">
                <li className="features__cart-item">
                  <span className="features__cart-icon">
                    <SettingsIcon />
                  </span>
                  <span className="features__cart-desc">
                    Save your resources on development
                  </span>
                </li>
                <li className="features__cart-item">
                  <span className="features__cart-icon">
                    <BoardIcon />
                  </span>
                  <span className="features__cart-desc">
                    Easy to understand
                  </span>
                </li>
                <li className="features__cart-item">
                  <span className="features__cart-icon">
                    <UserIcon />
                  </span>
                  <span className="features__cart-desc">User friendly</span>
                </li>
              </ul>
            </div>
            <div className="features__cart">
              <h5 className="title title--secondary features__cart-title">
                Customizable
              </h5>
              <p className="features__cart-text ">
                You can reuse blocks and individual elements to create something
                unique on your website.
              </p>
              <ul className="features__cart-list">
                <li className="features__cart-item">
                  <span className="features__cart-icon">
                    <ResetIcon />
                  </span>
                  <span className="features__cart-desc">
                    Reuse the sections and create your own style
                  </span>
                </li>
                <li className="features__cart-item">
                  <span className="features__cart-icon">
                    <TimerIcon />
                  </span>
                  <span className="features__cart-desc">Save your time</span>
                </li>
                <li className="features__cart-item">
                  <span className="features__cart-icon">
                    <SettingsIcon />
                  </span>
                  <span className="features__cart-desc">
                    Save your resources on development
                  </span>
                </li>
                <li className="features__cart-item">
                  <span className="features__cart-icon">
                    <LightIcon />
                  </span>
                  <span className="features__cart-desc">Unique design</span>
                </li>
              </ul>
            </div>
            <div className="features__cart">
              <h5 className="title title--secondary features__cart-title">
                Stylish
              </h5>
              <p className="features__cart-text ">
                Right and without unnecessary tinsel, just scroll through this
                template and you will see.
              </p>
              <ul className="features__cart-list">
                <li className="features__cart-item">
                  <span className="features__cart-icon">
                    <LightIcon />
                  </span>
                  <span className="features__cart-desc">Unique design</span>
                </li>
                <li className="features__cart-item">
                  <span className="features__cart-icon">
                    <StarIcon />
                  </span>
                  <span className="features__cart-desc">
                    Unforgettable 3D elements and trendy glass-effect
                  </span>
                </li>
                <li className="features__cart-item">
                  <span className="features__cart-icon">
                    <CarIcon />
                  </span>
                  <span className="features__cart-desc">
                    Design that drives an industry
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Features;
