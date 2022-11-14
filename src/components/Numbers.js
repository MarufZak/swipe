

const Numbers = () => {
  return <div className="numbers">
    <img className="numbers__bg" src="./img/numbers_bg.png" alt="triangles" />
    <div className="container">
        <div className="numbers__body">
            <div>
                <span className="numbers__uptitle">since 2019</span>
                <h2 className="title title--secondary numbers__title">In numbers</h2>
            </div>
            <div className="numbers__content">
                <div className="numbers__cart">
                    <div>
                        <h5 className="title title--primary numbers__cart-title">Happy clients</h5>
                        <p className="numbers__cart-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla interdum aliquet.</p>
                    </div>
                    <span className="numbers__cart-num">
                        1000+
                    </span>
                </div>
                <div className="numbers__cart">
                    <div>
                        <h5 className="title title--primary numbers__cart-title">Products created</h5>
                        <p className="numbers__cart-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla interdum aliquet.</p>
                    </div>
                    <span className="numbers__cart-num">
                        20+
                    </span>
                </div>
                <div className="numbers__cart">
                    <div>
                        <h5 className="title title--primary numbers__cart-title">Investments received</h5>
                        <p className="numbers__cart-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla interdum aliquet.</p>
                    </div>
                    <span className="numbers__cart-num">
                        $5M+
                    </span>
                </div>
            </div>
        </div>
    </div>
  </div>
}

export default Numbers