
import SettingsIcon from './Vectors/SettingsIcon';
import BoardIcon from './Vectors/BoardIcon';
import UserIcon from './Vectors/UserIcon';
import LightIcon from './Vectors/LightIcon';
import StarIcon from './Vectors/StarIcon';
import CarIcon from './Vectors/CarIcon';
import ResetIcon from './Vectors/ResetIcon';
import TimerIcon from './Vectors/TimerIcon';

const Features = () => {
  return <div className="features">
    <div className="container">
        <div className="features__body">
            <header className='features__header'>
                <h2 className='features__title title title--primary'>Get to know our main features</h2>
                <button className='btn btn--purple features__btn'>Buy now</button>
            </header>
            <div className='features__carts'>
                <img className='features__img features__img--first' src="./img/features-1.png" alt="figure" />
                <img className='features__img features__img--second' src="./img/features-2.png" alt="figure" />
                <img className='features__img features__img--third' src="./img/features-3.png" alt="figure" />
                <div className="features__cart">
                    <h5 className="title title--primary features__cart-title">Simple</h5>
                    <p className="features__cart-text">
                        Here you will not find complex technological solutions that will baffle you.
                    </p>
                    <ul className="features__cart-list">
                        <li className="features__cart-item">
                            <SettingsIcon />
                            <span className='features__cart-desc'>
                                Save your resources on development
                            </span>
                        </li>
                        <li className="features__cart-item">
                            <BoardIcon />
                            <span className='features__cart-desc'>
                                Easy to understand
                            </span>
                        </li>
                        <li className="features__cart-item">
                            <UserIcon />
                            <span className='features__cart-desc'>
                                User friendly
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="features__cart">
                    <h5 className="title title--primary features__cart-title">Customizable</h5>
                    <p className="features__cart-text">
                        You can reuse blocks and individual elements to create something unique on your website.
                    </p>
                    <ul className="features__cart-list">
                        <li className="features__cart-item">
                            <ResetIcon />
                            <span className='features__cart-desc'>
                                Reuse the sections and create your own style
                            </span>
                        </li>
                        <li className="features__cart-item">
                            <TimerIcon />
                            <span className='features__cart-desc'>
                                Save your time
                            </span>
                        </li>
                        <li className="features__cart-item">
                            <SettingsIcon />
                            <span className='features__cart-desc'>
                                Save your resources on development
                            </span>
                        </li>
                        <li className="features__cart-item">
                            <LightIcon />
                            <span className='features__cart-desc'>
                                Unique design
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="features__cart">
                    <h5 className="title title--primary features__cart-title">Stylish</h5>
                    <p className="features__cart-text">
                        Right and without unnecessary tinsel, just scroll through this template and you will see.
                    </p>
                    <ul className="features__cart-list">
                        <li className="features__cart-item">
                            <LightIcon />
                            <span className='features__cart-desc'>
                                Unique design
                            </span>
                        </li>
                        <li className="features__cart-item">
                            <StarIcon />
                            <span className='features__cart-desc'>
                                Unforgettable 3D elements and trendy glass-effect
                            </span>
                        </li>
                        <li className="features__cart-item">
                            <CarIcon />
                            <span className='features__cart-desc'>
                                Design that drives an industry
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  </div>
}

export default Features;