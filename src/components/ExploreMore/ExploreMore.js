import React from 'react';
import { faBasketballBall, faMale, faFlag, faMapPin } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ListGroup, Jumbotron } from 'react-bootstrap';
import Header from '../Header/Header';
import Female from '../../images/female.png';
import './ExploreMore.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const ExploreMore = () => {
    let { id } = useParams();
    const [leagueDetail, setLeagueDetail] = useState({});
    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setLeagueDetail(data));
    },[])
    console.log(leagueDetail);
    return (
        <div>
            <Header></Header>
            <div className="container mt-3">
                <Jumbotron className="bg-primary text-white p-3">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6">
                            <h1>Premier League ({id}) ---</h1>
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
            <footer className="container py-5">
                <ListGroup as="ul" className="list-group-horizontal justify-content-center">
                    <ListGroup.Item as="li" className="bg-transparent border-0 mx-2 p-2 fbColor text-center"><FontAwesomeIcon className="footerIconSize" icon={faFacebookF}/></ListGroup.Item>
                    <ListGroup.Item as="li" className="bg-transparent border-0 mx-2 p-2 twitterColor text-center"><FontAwesomeIcon className="footerIconSize" icon={faTwitter}/></ListGroup.Item>
                    <ListGroup.Item as="li" className="bg-transparent border-0 mx-2 p-2 youtubeColor text-center"><FontAwesomeIcon className="footerIconSize" icon={faYoutube}/></ListGroup.Item>
                </ListGroup>
            </footer>
        </div>
    );
};

export default ExploreMore;