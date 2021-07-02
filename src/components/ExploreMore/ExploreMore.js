import React from 'react';
import { faBasketballBall, faMale, faFlag, faMapPin, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ListGroup, Jumbotron } from 'react-bootstrap';
import Header from '../Header/Header';
import './ExploreMore.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import maleLeague from '../../images/male.png';
import femaleLeague from '../../images/female.jpg';
import spineer from '../../images/spineer.gif';
import Footer from '../Footer/Footer';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const ExploreMore = () => {
    let { id } = useParams();
    const [leagueDetail, setLeagueDetail] = useState({});
    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setLeagueDetail(data.leagues['0']));
    },[id])

    const { dateFirstEvent, strCountry, strSport, strGender, strDescriptionEN, strLeague, strLogo } = leagueDetail;
    return (
        <div>
            <Header>
                <img src={strLogo} alt="" />
            </Header>
            <div className="container">
                <div className="row justify-content-center">
                    <Link className="btn btn-primary mt-3" to='/'><FontAwesomeIcon icon={faArrowLeft}/> Back</Link>
                </div>
            </div>
            <div className="container mt-3">
                <Jumbotron className="bg-info text-white p-3">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6">
                            <h1>{ strLeague }</h1>
                            <ListGroup as="ul">
                                <ListGroup.Item as="li" className="bg-transparent border-0 px-0 py-1"><FontAwesomeIcon icon={faMapPin}/> Founded: {dateFirstEvent}</ListGroup.Item>
                                <ListGroup.Item as="li" className="bg-transparent border-0 px-0 py-1"><FontAwesomeIcon icon={faFlag}/> Country: { strCountry }</ListGroup.Item>
                                <ListGroup.Item as="li" className="bg-transparent border-0 px-0 py-1"><FontAwesomeIcon icon={faBasketballBall}/> Sport Type: { strSport }</ListGroup.Item>
                                <ListGroup.Item as="li" className="bg-transparent border-0 px-0 py-1"><FontAwesomeIcon icon={faMale}/> Gender: { strGender }</ListGroup.Item>
                            </ListGroup>
                        </div>
                        <div className="col-12 col-md-6">
                            {
                                strGender === 'Male' ? <img className="img-fluid height-control d-block ml-md-auto mt-sm-3" src={maleLeague} alt="" srcset="" /> : strGender === 'Female' ? <img className="img-fluid height-control d-block ml-md-auto mt-sm-3" src={femaleLeague} alt="" srcset="" /> : <img className="img-fluid height-control d-block ml-md-auto mt-sm-3" src={spineer} alt="" srcset="" />
                            }
                            
                        </div>
                    </div>
                </Jumbotron>
                <p>{ strDescriptionEN }</p>
            </div>
            <footer className="container py-5">
                <ListGroup as="ul" className="list-group-horizontal justify-content-center">
                    <ListGroup.Item as="li" className="bg-transparent border-0 mx-2 p-2 fbColor text-center"><FontAwesomeIcon className="footerIconSize" icon={faFacebookF}/></ListGroup.Item>
                    <ListGroup.Item as="li" className="bg-transparent border-0 mx-2 p-2 twitterColor text-center"><FontAwesomeIcon className="footerIconSize" icon={faTwitter}/></ListGroup.Item>
                    <ListGroup.Item as="li" className="bg-transparent border-0 mx-2 p-2 youtubeColor text-center"><FontAwesomeIcon className="footerIconSize" icon={faYoutube}/></ListGroup.Item>
                </ListGroup>
            </footer>
            <Footer></Footer>
        </div>
    );
};

export default ExploreMore;