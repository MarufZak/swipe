import {useRef} from 'react';

const Burger = () => {
  const burger = useRef();
  const burgerClick = ()=>{
    burger.current.parentElement.classList.toggle('open');
    document.body.classList.toggle('hidden');
  };
  return <div ref={burger} onClick={burgerClick} className="burger">
    <span></span>
    <span></span>
    <span></span>
  </div>
}

export default Burger;