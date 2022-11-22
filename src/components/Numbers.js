import Container from "./Container";

const Numbers = () => {
  return (
    <section className="numbers section">
      <picture>
        <source
          type="image/webp"
          sizes="(min-width: 992px) 27rem, 15rem"
          srcSet="./img/numbers/numbers_bg@200.webp 200w, ./img/numbers/numbers_bg@452.webp 452w, ./img/numbers/numbers_bg@524.webp 524w"
        />
        <img
          sizes="(min-width: 992px) 27rem, 15rem"
          src="./img/numbers/numbers_bg@524.png"
          srcSet="./img/numbers/numbers_bg@200.png 200w, ./img/numbers/numbers_bg@452.png 452w, ./img/numbers/numbers_bg@524.png 524w"
          className="numbers__bg"
          alt="triangles"
        />
      </picture>
      <Container>
        <div className="numbers__body">
          <div className="numbers__header">
            <span className="numbers__uptitle">since 2019</span>
            <h2 className="title title--secondary numbers__title">
              In numbers
            </h2>
          </div>
          <div className="numbers__content">
            <article className="numbers__cart">
              <div>
                <h5 className="title title--primary numbers__cart-title">
                  Happy clients
                </h5>
                <p className="numbers__cart-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  fringilla interdum aliquet.
                </p>
              </div>
              <span className="numbers__cart-num">1000+</span>
            </article>
            <article className="numbers__cart">
              <div>
                <h5 className="title title--primary numbers__cart-title">
                  Products created
                </h5>
                <p className="numbers__cart-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  fringilla interdum aliquet.
                </p>
              </div>
              <span className="numbers__cart-num">20+</span>
            </article>
            <article className="numbers__cart">
              <div>
                <h5 className="title title--primary numbers__cart-title">
                  Investments received
                </h5>
                <p className="numbers__cart-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  fringilla interdum aliquet.
                </p>
              </div>
              <span className="numbers__cart-num">$5M+</span>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Numbers;
