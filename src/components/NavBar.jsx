import { Suspense, useState } from "react";
import images from "../constants/images";
import { useStateContext } from "../context/StateContext";
import useCityList from "../customHook/useCityList";
import ResultList from "./ResultCities";
const NavBar = () => {
  const [showResults, setShowResults] = useState(false);
  const { city, setCity } = useStateContext();
  const { result, setResult } = useStateContext();
  const [cities] = useCityList(city);
  const handleInputChange = (e) => {
    setCity(e.target.value);
  };
  return (
    <header className="mr-16 flex h-28 justify-between p-10 align-middle text-xl">
      <h2 className="ml-8 mr-4 h-16 w-2/12 bg-gradient-to-t from-blue-900 via-blue-400 to-blue-50 bg-clip-text text-center text-3xl font-bold uppercase tracking-widest text-gray-100 text-transparent transition-all duration-200 hover:skew-x-2 hover:skew-y-2 hover:scale-110">
        Weather.
      </h2>
      <div className="flex gap-2 text-3xl font-semibold text-white">
        <img src={images.locationLogo} alt="" className="w-8" />
        <span>{result ? `${result.name},${result.country}` : ""}</span>
      </div>
      <div className="relative mx-auto w-full max-w-3xl">
        <form className="ml-24 flex w-full flex-shrink-0 flex-grow-0 basis-5/12 items-center justify-center">
          <input
            type="text"
            placeholder="Search area here."
            className="-mr-16 w-9/12 rounded-full border-none bg-gray-100 px-10 py-3 text-inherit focus:w-full focus:bg-gray-100 focus:outline-none"
            onFocus={() => {
              setShowResults(true);
            }}
            onBlur={() => {
              setTimeout(() => {
                setShowResults(false);
              }, 2);
            }}
            onChange={handleInputChange}
          />
          <button className="border-none bg-gray-100">
            <img src={images.searchLogo} alt="search_logo" width={`30px`} />
          </button>
        </form>
        {showResults && (
          <Suspense
            fallback={
              <div className="absolute ml-28 mt-0.5  w-full rounded-3xl border border-t-0 border-gray-300 bg-gray-100 px-2 py-2 text-center text-gray-500">
                Loading ...
              </div>
            }
          >
            <ResultList cities={cities} setResult={setResult} />
          </Suspense>
        )}
      </div>
    </header>
  );
};

export default NavBar;
