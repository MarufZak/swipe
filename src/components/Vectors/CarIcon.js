

const CarIcon = ({className}) => {
  return <svg className={`icon ${className}`}>
    <use href="./img/sprite.svg#car"></use>
</svg>
}

export default CarIcon;