import { Splide, SplideSlide } from "@splidejs/react-splide";
import Container from "./Container";

const Press = () => {
  return (
    <div className="press section">
      <Container>
        <div className="press__body">
          <header className="press__header section__header">
            <h2 className="title title--primary press__title section__title">In the press</h2>
            <button className="btn btn--purple press__button section__btn">View more</button>
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
                  padding: { right: "10rem" },
                },
              },
            }}
            className="press__slider"
          >
            <SplideSlide className="press__slide">
              <img
                className="press__slide-img"
                src="./img/press/press-1.jpg"
                srcSet="./img/press/press-1.webp"
                alt="post"
              />
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
              <img
                className="press__slide-img"
                src="./img/press/press-2.jpg"
                srcSet="./img/press/press-2.webp"
                alt="post"
              />
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
              <img
                className="press__slide-img"
                src="./img/press/press-1.jpg"
                srcSet="./img/press/press-1.webp"
                alt="post"
              />
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
              <img
                className="press__slide-img"
                src="./img/press/press-2.jpg"
                srcSet="./img/press/press-2.webp"
                alt="post"
              />
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
    </div>
  );
};

export default Press;
