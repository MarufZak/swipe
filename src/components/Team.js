import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { Grid } from "@splidejs/splide-extension-grid";
import Container from "./Container";
import { ArrowRightIcon } from "./Vectors";

const Team = () => {
  return (
    <section className="team section">
      <Container>
        <header className="team__header section__header">
          <h2 className="title title--primary team__title section__title">
            Meet the team Want to join?
          </h2>
          <div className="team__header-buttons section__btn">
            <button className="btn btn--purple team__btn">Join us</button>
            <button className="btn btn--grey team__btn">
              See all openings
            </button>
          </div>
        </header>
        <Splide
          hasTrack={false}
          className="team__slider slider"
          tag="section"
          extensions={{ Grid }}
          options={{
            rewind: true,
            grid: { rows: 2, cols: 4 },
            breakpoints: {
              1324: {
                grid: { rows: 2, cols: 3 },
              },
              992: {
                grid: { rows: 2, cols: 2 },
              },
              576: {
                grid: { rows: 1, cols: 1 },
              },
            },
            pagination: false,
          }}
        >
          <SplideTrack>
            <SplideSlide className="team__item">
              <picture>
                <source src="./img/team/team-1.webp" />
                <img
                  className="team__item-img"
                  src="./img/team/team-1.png"
                  alt="team member"
                />
              </picture>
              <p className="team__item-name">Martin Fury</p>
              <span className="team__item-job">CEO & Co-Founder</span>
            </SplideSlide>
            <SplideSlide className="team__item">
              <picture>
                <source src="./img/team/team-2.webp" />
                <img
                  className="team__item-img"
                  src="./img/team/team-2.png"
                  alt="team member"
                />
              </picture>
              <p className="team__item-name">Timoty Crash</p>
              <span className="team__item-job">CTO & Co-Founder</span>
            </SplideSlide>
            <SplideSlide className="team__item">
              <picture>
                <source src="./img/team/team-3.webp" />
                <img
                  className="team__item-img"
                  src="./img/team/team-3.png"
                  alt="team member"
                />
              </picture>
              <p className="team__item-name">Miranda Loudy</p>
              <span className="team__item-job">Global HRD</span>
            </SplideSlide>
            <SplideSlide className="team__item">
              <picture>
                <source src="./img/team/team-4.webp" />
                <img
                  className="team__item-img"
                  src="./img/team/team-4.png"
                  alt="team member"
                />
              </picture>
              <p className="team__item-name">Jim Partners</p>
              <span className="team__item-job">Chief Product Officer</span>
            </SplideSlide>
            <SplideSlide className="team__item">
              <picture>
                <source src="./img/team/team-5.webp" />
                <img
                  className="team__item-img"
                  src="./img/team/team-5.png"
                  alt="team member"
                />
              </picture>
              <p className="team__item-name">Joe Lee</p>
              <span className="team__item-job">Lead Product Designer</span>
            </SplideSlide>
            <SplideSlide className="team__item">
              <picture>
                <source src="./img/team/team-6.webp" />
                <img
                  className="team__item-img"
                  src="./img/team/team-6.png"
                  alt="team member"
                />
              </picture>
              <p className="team__item-name">Alex Sosnovskyi</p>
              <span className="team__item-job">
                Technical Lead & Senior Software Engineer
              </span>
            </SplideSlide>
            <SplideSlide className="team__item">
              <picture>
                <source src="./img/team/team-7.webp" />
                <img
                  className="team__item-img"
                  src="./img/team/team-7.png"
                  alt="team member"
                />
              </picture>
              <p className="team__item-name">Andy Gupta</p>
              <span className="team__item-job">CMO & Marketing Operations</span>
            </SplideSlide>
            <SplideSlide className="team__item">
              <picture>
                <source src="./img/team/team-8.webp" />
                <img
                  className="team__item-img"
                  src="./img/team/team-8.png"
                  alt="team member"
                />
              </picture>
              <p className="team__item-name">Dan Wize-Nicon</p>
              <span className="team__item-job">UI/UX Designer</span>
            </SplideSlide>
            <SplideSlide className="team__item">
              <picture>
                <source src="./img/team/team-1.webp" />
                <img
                  className="team__item-img"
                  src="./img/team/team-1.png"
                  alt="team member"
                />
              </picture>
              <p className="team__item-name">Martin Fury</p>
              <span className="team__item-job">CEO & Co-Founder</span>
            </SplideSlide>
            <SplideSlide className="team__item">
              <picture>
                <source src="./img/team/team-2.webp" />
                <img
                  className="team__item-img"
                  src="./img/team/team-2.png"
                  alt="team member"
                />
              </picture>
              <p className="team__item-name">Timoty Crash</p>
              <span className="team__item-job">CTO & Co-Founder</span>
            </SplideSlide>
            <SplideSlide className="team__item">
              <picture>
                <source src="./img/team/team-3.webp" />
                <img
                  className="team__item-img"
                  src="./img/team/team-3.png"
                  alt="team member"
                />
              </picture>
              <p className="team__item-name">Miranda Loudy</p>
              <span className="team__item-job">Global HRD</span>
            </SplideSlide>
            <SplideSlide className="team__item">
              <picture>
                <source src="./img/team/team-4.webp" />
                <img
                  className="team__item-img"
                  src="./img/team/team-4.png"
                  alt="team member"
                />
              </picture>
              <p className="team__item-name">Jim Partners</p>
              <span className="team__item-job">Chief Product Officer</span>
            </SplideSlide>
            <SplideSlide className="team__item">
              <picture>
                <source src="./img/team/team-5.webp" />
                <img
                  className="team__item-img"
                  src="./img/team/team-5.png"
                  alt="team member"
                />
              </picture>
              <p className="team__item-name">Joe Lee</p>
              <span className="team__item-job">Lead Product Designer</span>
            </SplideSlide>
            <SplideSlide className="team__item">
              <picture>
                <source src="./img/team/team-6.webp" />
                <img
                  className="team__item-img"
                  src="./img/team/team-6.png"
                  alt="team member"
                />
              </picture>
              <p className="team__item-name">Alex Sosnovskyi</p>
              <span className="team__item-job">
                Technical Lead & Senior Software Engineer
              </span>
            </SplideSlide>
            <SplideSlide className="team__item">
              <picture>
                <source src="./img/team/team-7.webp" />
                <img
                  className="team__item-img"
                  src="./img/team/team-7.png"
                  alt="team member"
                />
              </picture>
              <p className="team__item-name">Andy Gupta</p>
              <span className="team__item-job">CMO & Marketing Operations</span>
            </SplideSlide>
            <SplideSlide className="team__item">
              <picture>
                <source src="./img/team/team-8.webp" />
                <img
                  className="team__item-img"
                  src="./img/team/team-8.png"
                  alt="team member"
                />
              </picture>
              <p className="team__item-name">Dan Wize-Nicon</p>
              <span className="team__item-job">UI/UX Designer</span>
            </SplideSlide>
          </SplideTrack>
          <div className="splide__arrows team__slider-arrows">
            <button className="splide__arrow splide__arrow--prev team__slider--prev slider__btn slider__btn--prev">
              <ArrowRightIcon />
            </button>
            <button className="splide__arrow splide__arrow--next team__slider--next slider__btn slider__btn--next">
              <ArrowRightIcon />
            </button>
          </div>
        </Splide>
      </Container>
    </section>
  );
};

export default Team;
