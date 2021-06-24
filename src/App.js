import Header from "./components/Header/Header";
import LeagueCard from "./components/LeagueCard/LeagueCard";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/responsive.css';
function App() {
  return (
    <div>
      <Header></Header>
      <div className="bg-league py-5">
        <LeagueCard></LeagueCard>
      </div>
    </div>
  );
}

export default App;
