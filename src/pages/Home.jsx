import Details from "../components/Details";
import NavBar from "../components/NavBar";
import Today from "../components/Today";
import Weekly from "../components/Weekly";
const Home = () => {
  return (
    <div className="border-box ">
      <NavBar />
      <Today />
      <Details />
      <Weekly />
    </div>
  );
};

export default Home;
