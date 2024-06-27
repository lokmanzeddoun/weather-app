/* eslint-disable react/prop-types */

const Card = ({logo,time,degree}) => {
  return (
    <div className="ml-4 flex flex-col items-center justify-center  text-xl font-medium text-white w-1/12">
      <span className="">{time}</span>
      <img src={logo} alt="logo" width={"80%"} />
        <h2 className="">{degree}&deg; </h2>
    </div>
  );
}

export default Card