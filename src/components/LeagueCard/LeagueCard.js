import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Card, Button } from 'react-bootstrap';
import leagueOne from '../../images/Leauge Logo/image 1.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const LeagueCard = (props) => {
    console.log(props.singleLeague)
    const {idLeague,strLeague,strLeagueAlternate,strSport} = props.singleLeague;
    return (
            <div className="col-12 col-md-6 col-lg-4 mb-4">
                <Card className="text-center pt-5">
                <Card.Img variant="top" className="w-50 mx-auto mb-4" src={leagueOne} />
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