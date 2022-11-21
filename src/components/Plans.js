import DoneIcon from './Vectors/DoneIcon';
import CloseIcon from './Vectors/CloseIcon';

const Plans = () => {
  return <div className = "plans section">
    <div className = "container">
      <header className='section__header'>
        <h2 className='title title--primary plans__title section__title'>Price plans</h2>
      </header>
      <div className = "plans__body">
        <div className = "plans__carts" >
          <img className = 'plans__img plans__img--second' src = "./img/plans/plans-1.png" srcSet = './img/plans/plans-1.webp' alt = "circle" />
          <img className = 'plans__img plans__img--first' src = "./img/plans/plans-2.png" srcSet = './img/plans/plans-2.webp ' alt = "circle" />
          <div className = "plans__cart" >
            <h3 className = 'plans__cart-title'>Basic</h3> 
            <ul className = "plans__cart-list" >
                <li className = "plans__cart-item">
                  <DoneIcon/> 
                <span className = 'plans__cart-desc' >Free 30 - days trial period </span> </li> 
                <li className = "plans__cart-item" >
                  <DoneIcon/> 
                <span className = 'plans__cart-desc' >Professional design and guidelines for customization</span> 
                </li><li className = "plans__cart-item" >
                  <DoneIcon/> 
                <span className = 'plans__cart-desc' >Unlimited amount of pages to change </span> 
                </li> 
                <li className = "plans__cart-item unavailable" >
                  <CloseIcon/> 
                <span className = 'plans__cart-desc' >Unlimited amount of pages to change </span> 
                </li> 
                <li className = "plans__cart-item unavailable" >
                  <CloseIcon/> 
                <span className = 'plans__cart-desc' >Advenced security components </span> 
                </li> 
            </ul>
            <div className = 'plans__cart-additional' >
              <h2 className = 'title title--secondary' > $29 <span>/month</span></h2> 
              <button className = 'btn btn--purple' > Buy now </button>
            </div> 
          </div> 
          <div className="plans__cart">
      <h3 className = 'plans__cart-title' >Pro</h3>
      <ul className = "plans__cart-list" >
        <li className = "plans__cart-item" >
          <DoneIcon/><span className='plans__cart-desc' >Free 30 - days trial period </span></li>
          <li className = "plans__cart-item">
            < DoneIcon />
            <span className = 'plans__cart-desc' >  Professional design and guidelinesfor customization  </span>
             </li> 
             <li className = "plans__cart-item">
              <DoneIcon />
              <span className='plans__cart-desc'>Unlimited amount of pages to change</span> 
              </li> 
              <li className="plans__cart-item" >
                <DoneIcon/><span className = 'plans__cart-desc'>Unlimited amount of pages to change </span>
                </li>
                <li className="plan__cart-item" >
                  <DoneIcon/> <span className='plans__cart-desc'>Advenced security components </span>
                  </li> 
                  </ul> 
                  <div className='plans__cart-additional'>
                    <h2 className='title title--secondary'>$39 <span> /month</span > </h2> 
                    <button className = 'btn btn--purple' > Buy now </button> 
                    </div> 
          </div> 
        </div> 
      </div> 
    </div> 
  </div>
}

export default Plans;