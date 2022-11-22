import Container from "./Container";
const Techs = () => {
  return (
    <div className="techs section">
      <Container>
        <div className="techs__body">
          <header className="section__header">
            <h3 className="title title--secondary techs__title section__title">
              No need to know any technologies
            </h3>
          </header>
          <div className="techs__item">
            <img
              className="techs__item-img"
              sizes="(max-width: 992px) 70vw, (max-width: 576px) 90vw, 35vw`"
              src="./img/techs/techs@692.jpg"
              srcSet="./img/techs/techs@310.webp 310w, ./img/techs/techs@692.webp 692w, ./img/techs/techs@1036.webp 1036w"
              alt="balls"
            />
            <article className="techs__item-content">
              <h4 className="title title--secondary techs__item-title">
                Easy to understand
              </h4>
              <p className="techs__item-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                fringilla interdum aliquet. Nulla viverra quam sit amet lacus
                accumsan, ac interdum nibh eleifend. Aliquam at elit at diam
                congue aliquam at eu felis. Vestibulum sed massa bibendum, porta
                ex consectetur, commodo tellus.
              </p>
              <p className="techs__item-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                fringilla interdum aliquet. Nulla viverra quam sit amet lacus
                accumsan, ac interdum nibh eleifend. Aliquam at elit at diam
                congue aliquam at eu felis.
              </p>
              <a
                className="link link--mark link--primary techs__item-link"
                href="/"
              >
                learn more
              </a>
            </article>
          </div>
          <div className="techs__item">
            <article className="techs__item-content">
              <h4 className="title title--secondary techs__item-title">
                Easy to change
              </h4>
              <p className="techs__item-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                fringilla interdum aliquet. Nulla viverra quam sit amet lacus
                accumsan, ac interdum nibh eleifend. Aliquam at elit at diam
                congue aliquam at eu felis. Vestibulum sed massa bibendum, porta
                ex consectetur, commodo tellus.
              </p>
              <p className="techs__item-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                fringilla interdum aliquet. Nulla viverra quam sit amet lacus
                accumsan, ac interdum nibh eleifend. Aliquam at elit at diam
                congue aliquam at eu felis.
              </p>
              <a
                className="link link--mark link--primary techs__item-link"
                href="/"
              >
                learn more
              </a>
            </article>
            <img
              className="techs__item-img"
              sizes="35vw"
              src="./img/change/change@471.png"
              srcSet="./img/change/change@330.webp 330w, ./img/change/change@471.webp 471w,"
              alt="triangles"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Techs;
