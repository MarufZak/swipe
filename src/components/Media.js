import Container from "./Container";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { ArrowRightIcon } from "./Vectors";

const Media = () => {
  return (
    <div className="media section">
      <Container>
        <div className="media__body">
          <header className="media__header section__header">
            <h2 className="title title--primary media__title section__title">
              In social media
            </h2>
            <button className="btn btn--grey media__btn section__btn">
              Go to Instagram
            </button>
          </header>
          <Splide
            className="media__slider slider"
            hasTrack={false}
            options={{
              rewind: true,
              perPage: 5,
              breakpoints: {
                992: {
                  perPage: 3,
                },
                576: {
                  perPage: 2,
                },
                400: {
                  perPage: 1,
                },
              },
            }}
          >
            <SplideTrack>
              <SplideSlide>
                <img
                  className="media__slide-img"
                  src="./img/media/media-1.jpg"
                  srcSet="./img/media/media-1.webp"
                  alt="post"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  className="media__slide-img"
                  src="./img/media/media-2.jpg"
                  srcSet="./img/media/media-2.webp"
                  alt="post"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  className="media__slide-img"
                  src="./img/media/media-3.jpg"
                  srcSet="./img/media/media-3.webp"
                  alt="post"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  className="media__slide-img"
                  src="./img/media/media-4.jpg"
                  srcSet="./img/media/media-4.webp"
                  alt="post"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  className="media__slide-img"
                  src="./img/media/media-5.jpg"
                  srcSet="./img/media/media-5.webp"
                  alt="post"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  className="media__slide-img"
                  src="./img/media/media-4.jpg"
                  srcSet="./img/media/media-4.webp"
                  alt="post"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  className="media__slide-img"
                  src="./img/media/media-5.jpg"
                  srcSet="./img/media/media-5.webp"
                  alt="post"
                />
              </SplideSlide>
            </SplideTrack>
            <div className="splide__arrows">
              <button className="splide__arrow splide__arrow--prev media__slider-arrow slider__btn slider__btn--prev">
                <ArrowRightIcon />
              </button>
              <button className="splide__arrow splide__arrow--next media__slider-arrow slider__btn slider__btn--next">
                <ArrowRightIcon />
              </button>
            </div>
          </Splide>
        </div>
      </Container>
    </div>
  );
};

export default Media;
