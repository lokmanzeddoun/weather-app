import images from "../constants/images";

const NavBar = () => {
  return (
    <header className="mr-16 flex  h-28 justify-between p-10 align-middle text-xl">
      <h2 className="ml-8 mr-4 h-16 text-3xl  bg-gradient-to-t from-blue-900 via-blue-400 to-blue-50 bg-clip-text  font-bold uppercase tracking-widest text-gray-100 text-transparent hover:skew-x-2 hover:skew-y-2 hover:scale-110 transition-all duration-200 text-center w-2/12">
        Weather.
      </h2>
      <div className="flex gap-2 font-semibold text-white text-3xl">
        <img src={images.locationLogo} alt="" className="w-8" />
        <span>Algiers,Algeria</span>
      </div>
      <form className="flex w-full flex-shrink-0 flex-grow-0 basis-5/12 items-center justify-center">
        <input
          type="text"
          placeholder="Search area here ."
          className="-mr-12 w-9/12 rounded-full border-none bg-gray-100 px-8 text-inherit py-3 focus:outline-none focus:w-full focus:bg-gray-100"
        />
        <button className="border-none bg-gray-100">
          <img src={images.searchLogo} alt="search_logo" width={`30px`} />
        </button>
      </form>
    </header>
  );
};

export default NavBar;
