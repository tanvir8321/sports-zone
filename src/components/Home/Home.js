import React from 'react';
// import Header from "./components/Header/Header";
import LeagueCard from "../LeagueCard/LeagueCard";
// import Footer from "./components/Footer/Footer";
import { useState } from 'react';
import { useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const Home = () => {
    const [league, setLeague] = useState([]);
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
        fetch(url)
            .then(res => res.json())
            .then(data => setLeague(data.leagues));

    }, [])
    // league.map(lg => console.log(lg))
    return (
        <div>
            <Header>
                <h1>Sports Zone</h1>
            </Header>
            <div className="bg-league py-5">
                <div className="container">
                    <div className="row">
                        {
                            league.slice(38, 60).map(singleLeague => <LeagueCard singleLeague={singleLeague}></LeagueCard>)
                        }
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;