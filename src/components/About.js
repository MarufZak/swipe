import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import Container from './Container';
import LinkedinIcon from './Vectors/LinkedinIcon';
import FacebookIcon from './Vectors/FacebookIcon';
import TwitterIcon from './Vectors/TwitterIcon';
import ArrowRightIcon from './Vectors/ArrowRightIcon';

const About = () => {
  return <div className="about">
    <Container>
        <div className='about__body'>
            <header className='about__header'>
                <h2 className='title title--primary about__title'>People talk about us</h2>
            </header>
            <Splide hasTrack={false} options={{rewind: true}}>
                <div className='about__slider'>
                    <SplideTrack>
                        <SplideSlide className='about__slide'>
                            <div className='about__slide-profile'>
                                <img className='about__slide-img' src="./img/about/about.png" alt="user" />
                                <div className='about__slide-media'>
                                    <LinkedinIcon className="about__slide-icon" />
                                    <FacebookIcon className="about__slide-icon" />
                                    <TwitterIcon className="about__slide-icon" />
                                </div>
                            </div>
                            <div className='about__slide-content'>
                                <header className='about__slide-content-header'>
                                    <h3 className='title title--primary about__slide-title'>Joe Smith</h3>
                                    <span className='about__slide-subtitle'>CEO at Flatty</span>
                                    <span className='about__slide-stars'>★★★★☆</span>
                                </header>
                                <p className='about__slide-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla interdum aliquet. Nulla viverra quam sit amet lacus accumsan, ac interdum nibh eleifend.</p>
                            </div>
                        </SplideSlide>
                        <SplideSlide className='about__slide'>
                            <div className='about__slide-profile'>
                                <img className='about__slide-img' src="./img/about/about.png" alt="user" />
                                <div className='about__slide-media'>
                                    <LinkedinIcon className="about__slide-icon" />
                                    <FacebookIcon className="about__slide-icon" />
                                    <TwitterIcon className="about__slide-icon" />
                                </div>
                            </div>
                            <div className='about__slide-content'>
                                <header className='about__slide-content-header'>
                                    <h3 className='title title--primary about__slide-title'>Joe Smith</h3>
                                    <span className='about__slide-subtitle'>CEO at Flatty</span>
                                    <span className='about__slide-stars'>★★★★☆</span>
                                </header>
                                <p className='about__slide-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla interdum aliquet. Nulla viverra quam sit amet lacus accumsan, ac interdum nibh eleifend.</p>
                            </div>
                        </SplideSlide>
                    </SplideTrack>
                    <div className='splide__arrows about__arrows'>
                        <button className='splide__arrow--prev about__arrow about__arrow--prev'>
                            <ArrowRightIcon />
                        </button>
                        <button className='splide__arrow--next about__arrow about__arrow--next'>
                            <ArrowRightIcon />
                        </button>
                    </div>
                </div>
            </Splide>
        </div>
    </Container>
  </div>
}

export default About;