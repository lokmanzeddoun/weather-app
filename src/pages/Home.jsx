import Details from "../components/Details";
import NavBar from "../components/NavBar";
import Today from "../components/Today";
const Home = () => {
  return (
    <div className="border-box">
      <NavBar />
      <Today />
      <Details/>
    </div>
  );
};

export default Home;
