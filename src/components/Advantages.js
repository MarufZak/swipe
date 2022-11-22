import Container from "./Container";

const Advantages = () => {
  return (
    <section className="advantages section">
      <Container>
        <div className="advantages__body">
          <header className="advantages__header section__header">
            <h3 className="title title--secondary advantages__title section__title">
              Watch video to discover advantages
            </h3>
          </header>
          <img
            className="advantages__img"
            src="./img/advantages/advantages@1732.jpg"
            srcSet="./img/advantages/advantages@300.webp 300w, ./img/advantages/advantages@1232.webp 1232w, ./img/advantages/advantages@2189.webp 2189w, ./img/advantages/advantages@2430.webp 2430w"
            sizes="90vw"
            alt="workers"
          />
        </div>
      </Container>
    </section>
  );
};

export default Advantages;
