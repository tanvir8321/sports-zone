import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Card, Button } from 'react-bootstrap';
import leagueOne from '../../images/Leauge Logo/image 1.png';
const LeagueCard = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                    <Card className="text-center pt-5">
                    <Card.Img variant="top" className="w-50 mx-auto mb-4" src={leagueOne} />
                    <Card.Body>
                        <Card.Title>Premier League</Card.Title>
                        <Card.Text>
                        Sports type: Football
                        </Card.Text>
                        <Button variant="primary">Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
                    </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default LeagueCard;