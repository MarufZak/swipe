
import Container from './Container';
import DownloadIcon from './Vectors/DownloadIcon';

const Questions = () => {
  return <div className="questions">
        <img className='questions__img' src="./img/questions/questions.jpg" srcSet='./img/questions/questions.webp' alt="balls" />
    <Container>
        <div className='questions__body'>
            <header className='questions__header'>
                <h2 className='title title--primary questions__title'>Frequently asked questions</h2>
            </header>
            <ul className='questions__list'>
                <li className='questions__item'>
                    <DownloadIcon className="questions__item-icon" />
                    <span className='questions__item-text'>Make the FAQs easy to find</span>
                </li> 
                <li className='questions__item'>
                    <DownloadIcon className="questions__item-icon" />
                    <span className='questions__item-text'>Keep answers short</span>
                </li> 
                <li className='questions__item'>
                    <DownloadIcon className="questions__item-icon" />
                    <span className='questions__item-text'>Write the FAQ sheet in an actual question-and-answer format</span>
                </li> 
                <li className='questions__item'>
                    <DownloadIcon className="questions__item-icon" />
                    <span className='questions__item-text'>Write questions from the point of view of your customer</span>
                </li> 
            </ul>
        </div>
    </Container>
  </div>
}

export default Questions;