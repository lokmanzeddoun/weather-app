/* eslint-disable react/prop-types */

const Item = ({ text, logo }) => {
  return (
    <li className="side-nav__item relative pt-1">
      <a href="#" className="flex text-gray-100">
        <img
          src={logo}
          alt="logo"
          className="mr-1 w-6 fill-current no-underline"
        />
        <span>{text}</span>
      </a>
    </li>
  );
};

export default Item;
