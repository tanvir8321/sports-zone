import Header from "./components/Header/Header";
import LeagueCard from "./components/LeagueCard/LeagueCard";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/responsive.css';
import Footer from "./components/Footer/Footer";
import ExploreMore from "./components/ExploreMore/ExploreMore";
function App() {
  return (
    <div>
      {/* <Header></Header>
      <div className="bg-league py-5">
        <LeagueCard></LeagueCard>
      </div>
      <Footer></Footer> */}
      <ExploreMore></ExploreMore>
    </div>
  );
}

export default App;
