import Container from "./Container";

const Sponsors = () => {
  return (
    <section className="sponsors section">
      <Container>
        <div className="sponsors__body">
          <img className="sponsors__img" src="./img/basic/logo.png" alt="sponsor" />
          <img
            className="sponsors__img"
            src="./img/basic/webflow.png"
            alt="sponsor"
          />
          <img className="sponsors__img" src="./img/basic/logo.png" alt="sponsor" />
          <img
            className="sponsors__img"
            src="./img/basic/webflow.png"
            alt="sponsor"
          />
        </div>
      </Container>
    </section>
  );
};

export default Sponsors;
