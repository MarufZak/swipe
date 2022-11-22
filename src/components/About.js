import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import {
  LinkedinIcon,
  FacebookIcon,
  TwitterIcon,
  ArrowRightIcon,
} from "./Vectors";
import Container from "./Container";

const About = () => {
  return (
    <div className="about section">
      <Container>
        <div className="about__body">
          <header className="about__header section__header">
            <h2 className="title title--primary about__title section__title">
              People talk about us
            </h2>
          </header>
          <Splide
            className="about__slider slider"
            hasTrack={false}
            options={{ rewind: true, pagination: false }}
          >
            <SplideTrack>
              <SplideSlide className="about__slide">
                <div className="about__slide-profile">
                  <img
                    className="about__slide-img"
                    src="./img/about/about.png"
                    alt="user"
                  />
                  <div className="about__slide-media">
                    <span className="about__slide-icon">
                      <LinkedinIcon />
                    </span>
                    <span className='about__slide-icon'>
                      <FacebookIcon />
                    </span>
                    <span className="about__slide-icon">
                      <TwitterIcon />
                    </span>
                  </div>
                </div>
                <div className="about__slide-content">
                  <header className="about__slide-content-header">
                    <h3 className="title title--primary about__slide-title">
                      Joe Smith
                    </h3>
                    <span className="about__slide-subtitle">CEO at Flatty</span>
                    <span className="about__slide-stars">★★★★☆</span>
                  </header>
                  <p className="about__slide-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    fringilla interdum aliquet. Nulla viverra quam sit amet
                    lacus accumsan, ac interdum nibh eleifend.
                  </p>
                </div>
              </SplideSlide>
              <SplideSlide className="about__slide">
                <div className="about__slide-profile">
                  <img
                    className="about__slide-img"
                    src="./img/about/about.png"
                    alt="user"
                  />
                  <div className="about__slide-media">
                    <span className="about__slide-icon">
                      <LinkedinIcon />
                    </span>
                    <span className="about__slide-icon">
                      <FacebookIcon />
                    </span>
                    <span className="about__slide-icon">
                      <TwitterIcon />
                    </span>
                  </div>
                </div>
                <div className="about__slide-content">
                  <header className="about__slide-content-header">
                    <h3 className="title title--primary about__slide-title">
                      Joe Smith
                    </h3>
                    <span className="about__slide-subtitle">CEO at Flatty</span>
                    <span className="about__slide-stars">★★★★☆</span>
                  </header>
                  <p className="about__slide-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    fringilla interdum aliquet. Nulla viverra quam sit amet
                    lacus accumsan, ac interdum nibh eleifend.
                  </p>
                </div>
              </SplideSlide>
            </SplideTrack>
            <div className="splide__arrows about__arrows">
              <button className="splide__arrow--prev about__arrow about__arrow--prev slider__btn slider__btn--prev">
                <ArrowRightIcon />
              </button>
              <button className="splide__arrow--next about__arrow about__arrow--next slider__btn slider__btn--next">
                <ArrowRightIcon />
              </button>
            </div>
          </Splide>
        </div>
      </Container>
    </div>
  );
};

export default About;
