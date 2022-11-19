
const UserIcon = ({className}) => {
  return <svg className={`icon ${className}`}>
      <use href="./img/sprite.svg#user"></use>
</svg>
}

export default UserIcon