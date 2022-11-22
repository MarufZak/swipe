import { Splide, SplideSlide } from "@splidejs/react-splide";
import Container from "./Container";

const Press = () => {
  return (
    <section className="press section">
      <Container>
        <div className="press__body">
          <header className="press__header section__header">
            <h2 className="title title--primary press__title section__title">
              In the press
            </h2>
            <button className="btn btn--purple press__button section__btn">
              View more
            </button>
          </header>
          <Splide
            options={{
              perPage: 2,
              padding: { right: "20rem" },
              pagination: false,
              arrows: false,
              breakpoints: {
                768: {
                  perPage: 1,
                  padding: 0,
                },
              },
              autoplay: true,
              rewind: true,
            }}
            className="press__slider slider"
          >
            <SplideSlide className="press__slide">
              <picture>
                <source srcSet="./img/press/press-1@200.webp 200w , ./img/press/press-1@496.webp 496w , ./img/press/press-1@649.webp 649w, ./img/press/press-1@833.webp 833w" />
                <source srcSet="./img/press/press-1@200.jpg 200w , ./img/press/press-1@325.jpg 325w , ./img/press/press-1@499.jpg 499w, ./img/press/press-1@833.jpg 833w" />
                <img
                  className="press__slide-img"
                  src="./img/press/press-1@833.jpg"
                  alt="post"
                  sizes="(min-width: 768px) 30vw, 77vw"
                />
              </picture>
              <button className="btn btn--blue press__slide-btn">
                Must to read
              </button>
              <h4 className="title title--primary press__slide-title">
                Newsletters template: blog posts, articles, features, sales
              </h4>
              <a
                className="link link--primary link--mark press__slider-link"
                href="/"
              >
                read more
              </a>
            </SplideSlide>
            <SplideSlide className="press__slide">
              <picture>
                <source srcSet="./img/press/press-2@200.webp 200w , ./img/press/press-2@403.webp 403w, ./img/press/press-2@563.webp 563w, ./img/press/press-2@745.webp 745w, ./img/press/press-2@812.webp 812w" />
                <source srcSet="./img/press/press-2@200.jpg 200w, ./img/press/press-2@372.jpg 372w, ./img/press/press-2@517.jpg 517w, ./img/press/press-2@622.jpg 622w, ./img/press/press-2@812.jpg 812w" />
                <img
                  className="press__slide-img"
                  src="./img/press/press-2@812.jpg"
                  alt="post"
                  sizes="(min-width: 768px) 30vw, 77vw"
                />
              </picture>
              <button className="btn btn--blue press__slide-btn">New</button>
              <h4 className="title title--primary press__slide-title">
                Nextgen - new temlate about games and industry
              </h4>
              <a
                className="link link--primary link--mark press__slider-link"
                href="/"
              >
                read more
              </a>
            </SplideSlide>
            <SplideSlide className="press__slide">
              <picture>
                <source srcSet="./img/press/press-1@200.webp 200w , ./img/press/press-1@496.webp 496w , ./img/press/press-1@649.webp 649w, ./img/press/press-1@833.webp 833w" />
                <source srcSet="./img/press/press-1@200.jpg 200w , ./img/press/press-1@325.jpg 325w , ./img/press/press-1@499.jpg 499w, ./img/press/press-1@833.jpg 833w" />
                <img
                  className="press__slide-img"
                  src="./img/press/press-1@833.jpg"
                  alt="post"
                  sizes="(min-width: 768px) 30vw, 77vw"
                />
              </picture>
              <button className="btn btn--blue press__slide-btn">
                Must to read
              </button>
              <h4 className="title title--primary press__slide-title">
                Enigma Software for startups is the best choice
              </h4>
              <a
                className="link link--primary link--mark press__slider-link"
                href="/"
              >
                read more
              </a>
            </SplideSlide>
            <SplideSlide className="press__slide">
              <picture>
                <source srcSet="./img/press/press-2@200.webp 200w , ./img/press/press-2@403.webp 403w, ./img/press/press-2@563.webp 563w, ./img/press/press-2@745.webp 745w, ./img/press/press-2@812.webp 812w" />
                <source srcSet="./img/press/press-2@200.jpg 200w, ./img/press/press-2@372.jpg 372w, ./img/press/press-2@517.jpg 517w, ./img/press/press-2@622.jpg 622w, ./img/press/press-2@812.jpg 812w" />
                <img
                  className="press__slide-img"
                  src="./img/press/press-2@812.jpg"
                  alt="post"
                  sizes="(min-width: 768px) 30vw, 77vw"
                />
              </picture>
              <button className="btn btn--blue press__slide-btn">New</button>
              <h4 className="title title--primary press__slide-title">
                Newsletters template: blog posts, articles, features, sales
              </h4>
              <a
                className="link link--primary link--mark press__slider-link"
                href="/"
              >
                read more
              </a>
            </SplideSlide>
          </Splide>
        </div>
      </Container>
    </section>
  );
};

export default Press;
