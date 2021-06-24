import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Card, Button } from 'react-bootstrap';
import leagueOne from '../../images/Leauge Logo/image 1.png';
const LeagueCard = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                    <Card>
                    <Card.Img variant="top" src={leagueOne} />
                    <Card.Body>
                        <Card.Title>Premier League</Card.Title>
                        <Card.Text>
                        Sports type: Football
                        </Card.Text>
                        <Button variant="primary">Explore <FontAwesomeIcon icon={faCoffee} /></Button>
                    </Card.Body>
                    </Card>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Card>
                    <Card.Img variant="top" src={leagueOne} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Card>
                    <Card.Img variant="top" src={leagueOne} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default LeagueCard;