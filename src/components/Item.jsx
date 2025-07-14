/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
const Item = ({ text, logo, isActive, onClick }) => {
  return (
    <li className={`side-nav__item${isActive ? "--active" : ""} relative pt-1`}>
      <button className="flex text-gray-100" onClick={onClick} aria-label={text}>
        <img
          src={logo}
          alt={`${text} icon`}
          className="mr-1 w-6 fill-current no-underline"
        />
        <span>{text}</span>
      </button>
    </li>
  );
};

Item.propTypes = {
  text: PropTypes.string.isRequired,
  logo: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Item;
