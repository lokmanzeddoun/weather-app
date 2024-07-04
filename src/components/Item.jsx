/* eslint-disable react/prop-types */
const Item = ({ text, logo, isActive, onClick  }) => {
  return (
    <li className={`side-nav__item${isActive ? "--active" : ""} relative pt-1`}>
      <button  className="flex text-gray-100" onClick={onClick}>
        <img
          src={logo}
          alt="logo"
          className="mr-1 w-6 fill-current no-underline"
        />
        <span>{text}</span>
      </button>
    </li>
  );
};

export default Item;
