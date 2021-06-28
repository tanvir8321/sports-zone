import React from 'react';
import { faBasketballBall, faMale, faFlag, faMapPin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ListGroup, Jumbotron } from 'react-bootstrap';
import Header from '../Header/Header';
import Female from '../../images/female.png';
import './ExploreMore.css';

const ExploreMore = () => {
    return (
        <div>
            <Header></Header>
            <div className="container mt-3">
                <Jumbotron className="bg-primary text-white p-3">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6">
                            <h1>Premier League</h1>
                            <ListGroup as="ul">
                                <ListGroup.Item as="li" className="bg-transparent border-0 px-0 py-1"><FontAwesomeIcon icon={faMapPin}/> Founded: February 20, 1992</ListGroup.Item>
                                <ListGroup.Item as="li" className="bg-transparent border-0 px-0 py-1"><FontAwesomeIcon icon={faFlag}/> Country: England</ListGroup.Item>
                                <ListGroup.Item as="li" className="bg-transparent border-0 px-0 py-1"><FontAwesomeIcon icon={faBasketballBall}/> Sport Type: Football</ListGroup.Item>
                                <ListGroup.Item as="li" className="bg-transparent border-0 px-0 py-1"><FontAwesomeIcon icon={faMale}/> Gender: Male</ListGroup.Item>
                            </ListGroup>
                        </div>
                        <div className="col-12 col-md-6">
                            <img className="img-fluid height-control d-block ml-md-auto mt-sm-3" src={Female} alt="" srcset="" />
                        </div>
                    </div>
                </Jumbotron>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis eligendi assumenda recusandae ipsum libero ea molestiae odit. Ducimus, atque quam nulla dolorum laudantium nemo placeat eum! Aperiam quam at nulla.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis eligendi assumenda recusandae ipsum libero ea molestiae odit. Ducimus, atque quam nulla dolorum laudantium nemo placeat eum! Aperiam quam at nulla.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis eligendi assumenda recusandae ipsum libero ea molestiae odit. Ducimus, atque quam nulla dolorum laudantium nemo placeat eum! Aperiam quam at nulla.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis eligendi assumenda recusandae ipsum libero ea molestiae odit. Ducimus, atque quam nulla dolorum laudantium nemo placeat eum! Aperiam quam at nulla.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis eligendi assumenda recusandae ipsum libero ea molestiae odit. Ducimus, atque quam nulla dolorum laudantium nemo placeat eum! Aperiam quam at nulla.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis eligendi assumenda recusandae ipsum libero ea molestiae odit. Ducimus, atque quam nulla dolorum laudantium nemo placeat eum! Aperiam quam at nulla.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis eligendi assumenda recusandae ipsum libero ea molestiae odit. Ducimus, atque quam nulla dolorum laudantium nemo placeat eum! Aperiam quam at nulla.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis eligendi assumenda recusandae ipsum libero ea molestiae odit. Ducimus, atque quam nulla dolorum laudantium nemo placeat eum! Aperiam quam at nulla.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis eligendi assumenda recusandae ipsum libero ea molestiae odit. Ducimus, atque quam nulla dolorum laudantium nemo placeat eum! Aperiam quam at nulla.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis eligendi assumenda recusandae ipsum libero ea molestiae odit. Ducimus, atque quam nulla dolorum laudantium nemo placeat eum! Aperiam quam at nulla.</p>
            </div>
        </div>
    );
};

export default ExploreMore;