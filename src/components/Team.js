import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { Grid } from "@splidejs/splide-extension-grid";
import "@splidejs/react-splide/css";
import Container from "./Container";
import ArrowRightIcon from "./Vectors/ArrowRightIcon";

const Team = () => {
  return (
    <div className="teams">
      <Splide
        hasTrack={false}
        className="teams__slider"
        tag="section"
        extensions={{ Grid }}
        options={{
          rewind: true,
          grid: { rows: 2, cols: 4, gap: { col: "6rem", row: "2rem" } },
          breakpoints: {
            1324: {
                grid: { rows: 2, cols: 3}
            },
            992: {
                grid: { rows: 2, cols: 2}
            },
            576: {
                grid: { rows: 1, cols: 1}
            }
          },
          pagination: false
        }}
      >
        <Container>
            <header className="teams__header">
                <h2 className="title title--primary teams__title">Meet the team Want to join?</h2>
                <div className="teams__header-buttons">
                    <button className="btn btn--purple">Join us</button>
                    <button className="btn btn--grey">See all openings</button>
                </div>
            </header>
          <SplideTrack className="teams__slider-track">
            <SplideSlide className="teams__item">
              <picture>
                <source src="./img/team/team-1.webp" />
                <img
                  className="teams__item-img"
                  src="./img/team/team-1.png"
                  alt="team member"
                />
              </picture>
              <span className="teams__item-name">Martin Fury</span>
              <span className="teams__item-job">CEO & Co-Founder</span>
            </SplideSlide>
            <SplideSlide className="teams__item">
              <picture>
                <source src="./img/team/team-2.webp" />
                <img
                  className="teams__item-img"
                  src="./img/team/team-2.png"
                  alt="team member"
                />
              </picture>
              <span className="teams__item-name">Timoty Crash</span>
              <span className="teams__item-job">CTO & Co-Founder</span>
            </SplideSlide>
            <SplideSlide className="teams__item">
              <picture>
                <source src="./img/team/team-3.webp" />
                <img
                  className="teams__item-img"
                  src="./img/team/team-3.png"
                  alt="team member"
                />
              </picture>
              <span className="teams__item-name">Miranda Loudy</span>
              <span className="teams__item-job">Global HRD</span>
            </SplideSlide>
            <SplideSlide className="teams__item">
              <picture>
                <source src="./img/team/team-4.webp" />
                <img
                  className="teams__item-img"
                  src="./img/team/team-4.png"
                  alt="team member"
                />
              </picture>
              <span className="teams__item-name">Jim Partners</span>
              <span className="teams__item-job">Chief Product Officer</span>
            </SplideSlide>
            <SplideSlide className="teams__item">
              <picture>
                <source src="./img/team/team-5.webp" />
                <img
                  className="teams__item-img"
                  src="./img/team/team-5.png"
                  alt="team member"
                />
              </picture>
              <span className="teams__item-name">Joe Lee</span>
              <span className="teams__item-job">Lead Product Designer</span>
            </SplideSlide>
            <SplideSlide className="teams__item">
              <picture>
                <source src="./img/team/team-6.webp" />
                <img
                  className="teams__item-img"
                  src="./img/team/team-6.png"
                  alt="team member"
                />
              </picture>
              <span className="teams__item-name">Alex Sosnovskyi</span>
              <span className="teams__item-job">
                Technical Lead & Senior Software Engineer
              </span>
            </SplideSlide>
            <SplideSlide className="teams__item">
              <picture>
                <source src="./img/team/team-7.webp" />
                <img
                  className="teams__item-img"
                  src="./img/team/team-7.png"
                  alt="team member"
                />
              </picture>
              <span className="teams__item-name">Andy Gupta</span>
              <span className="teams__item-job">
                CMO & Marketing Operations
              </span>
            </SplideSlide>
            <SplideSlide className="teams__item">
              <picture>
                <source src="./img/team/team-8.webp" />
                <img
                  className="teams__item-img"
                  src="./img/team/team-8.png"
                  alt="team member"
                />
              </picture>
              <span className="teams__item-name">Dan Wize-Nicon</span>
              <span className="teams__item-job">UI/UX Designer</span>
            </SplideSlide>
            <SplideSlide className="teams__item">
              <picture>
                <source src="./img/team/team-1.webp" />
                <img
                  className="teams__item-img"
                  src="./img/team/team-1.png"
                  alt="team member"
                />
              </picture>
              <span className="teams__item-name">Martin Fury</span>
              <span className="teams__item-job">CEO & Co-Founder</span>
            </SplideSlide>
            <SplideSlide className="teams__item">
              <picture>
                <source src="./img/team/team-2.webp" />
                <img
                  className="teams__item-img"
                  src="./img/team/team-2.png"
                  alt="team member"
                />
              </picture>
              <span className="teams__item-name">Timoty Crash</span>
              <span className="teams__item-job">CTO & Co-Founder</span>
            </SplideSlide>
            <SplideSlide className="teams__item">
              <picture>
                <source src="./img/team/team-3.webp" />
                <img
                  className="teams__item-img"
                  src="./img/team/team-3.png"
                  alt="team member"
                />
              </picture>
              <span className="teams__item-name">Miranda Loudy</span>
              <span className="teams__item-job">Global HRD</span>
            </SplideSlide>
            <SplideSlide className="teams__item">
              <picture>
                <source src="./img/team/team-4.webp" />
                <img
                  className="teams__item-img"
                  src="./img/team/team-4.png"
                  alt="team member"
                />
              </picture>
              <span className="teams__item-name">Jim Partners</span>
              <span className="teams__item-job">Chief Product Officer</span>
            </SplideSlide>
            <SplideSlide className="teams__item">
              <picture>
                <source src="./img/team/team-5.webp" />
                <img
                  className="teams__item-img"
                  src="./img/team/team-5.png"
                  alt="team member"
                />
              </picture>
              <span className="teams__item-name">Joe Lee</span>
              <span className="teams__item-job">Lead Product Designer</span>
            </SplideSlide>
            <SplideSlide className="teams__item">
              <picture>
                <source src="./img/team/team-6.webp" />
                <img
                  className="teams__item-img"
                  src="./img/team/team-6.png"
                  alt="team member"
                />
              </picture>
              <span className="teams__item-name">Alex Sosnovskyi</span>
              <span className="teams__item-job">
                Technical Lead & Senior Software Engineer
              </span>
            </SplideSlide>
            <SplideSlide className="teams__item">
              <picture>
                <source src="./img/team/team-7.webp" />
                <img
                  className="teams__item-img"
                  src="./img/team/team-7.png"
                  alt="team member"
                />
              </picture>
              <span className="teams__item-name">Andy Gupta</span>
              <span className="teams__item-job">
                CMO & Marketing Operations
              </span>
            </SplideSlide>
            <SplideSlide className="teams__item">
              <picture>
                <source src="./img/team/team-8.webp" />
                <img
                  className="teams__item-img"
                  src="./img/team/team-8.png"
                  alt="team member"
                />
              </picture>
              <span className="teams__item-name">Dan Wize-Nicon</span>
              <span className="teams__item-job">UI/UX Designer</span>
            </SplideSlide>
          </SplideTrack>
        </Container>
        <div className="splide__arrows teams__slider-arrows">
          <button className="splide__arrow splide__arrow--prev teams__slider-prev">
            <ArrowRightIcon />
          </button>
          <button className="splide__arrow splide__arrow--next teams__slider-next">
            <ArrowRightIcon />
          </button>
        </div>
      </Splide>
    </div>
  );
};

export default Team;
