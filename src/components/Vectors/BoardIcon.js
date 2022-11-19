

const BoardIcon = ({className}) => {
  return <svg className={`icon ${className}`}>
    <use href="./img/sprite.svg#board"></use>
</svg>
}

export default BoardIcon;