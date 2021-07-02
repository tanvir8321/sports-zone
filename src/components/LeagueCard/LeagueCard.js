import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Card, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
const LeagueCard = (props) => {
    const [ logo, setLogo ] = useState({});
    const {idLeague,strLeague,strSport} = props.singleLeague;
    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setLogo(data.leagues['0']));
    },[idLeague])
    const { strLogo } = logo;
    return (
            <div className="col-12 col-md-6 col-lg-4 mb-4">
                <Card className="text-center pt-5 bg-info">
                <Card.Img variant="top" className="w-50 mx-auto mb-4" src={strLogo} />
                <Card.Body>
                    <Card.Title>{strLeague}</Card.Title>
                    <Card.Text>
                    Sports type: {strSport}
                    </Card.Text>
                    <Link to={`/league/${idLeague}`}><Button variant="primary">Explore <FontAwesomeIcon icon={faArrowRight} /></Button></Link>
                </Card.Body>
                </Card>
            </div>
    );
};

export default LeagueCard;