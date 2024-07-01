import Details from "../components/Details";
import NavBar from "../components/NavBar";
import Today from "../components/Today";
import Weekly from "../components/Weekly";
import { useStateContext } from "../context/StateContext";
import useWeather from "../customHook/useWeather";
const Home = () => {
  const { result } = useStateContext();
  // const weather = useWeather(result.latitude, result.longitude);
  return (
    <div className="border-box">
      <NavBar />
      <Today />
      <Details />
      <Weekly />
    </div>
  );
};

export default Home;
