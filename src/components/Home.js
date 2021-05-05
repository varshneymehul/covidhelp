import React from 'react';

import { Link } from 'react-router-dom';

import MainBox from './MainBox';
import ambulance from '../assets/ambulance.svg';
import injection from '../assets/injection.svg';
import oxygen from '../assets/oxygen.svg';
import beds from '../assets/bed.svg';
import blood from '../assets/blood.svg';
import chat from '../assets/chat.svg';
import food from '../assets/food.svg';
import testing from '../assets/testing.svg';
import medicines from '../assets/medicines.svg';
import './stylesheets/Home.css';
function Home() {
  const styles = {
    textDecoration: 'none',
    color: 'black',
  };
  return (
    <div className="boxes">
      <Link style={styles} to="/injection">
        <MainBox imgSrc={injection} heading="Remdesivir" />
      </Link>
      <Link style={styles} to="/beds">
        <MainBox imgSrc={beds} heading="Beds" />
      </Link>
      <Link style={styles} to="/blood">
        <MainBox imgSrc={blood} heading="Blood Plasma" />
      </Link>
      <Link style={styles} to="/medicines">
        <MainBox imgSrc={medicines} heading="Medicines" />
      </Link>
      <Link style={styles} to="/oxygen">
        <MainBox imgSrc={oxygen} heading="Oxygen" />
      </Link>
      <Link style={styles} to="/testing">
        <MainBox imgSrc={testing} heading="Testing Centres" />
      </Link>
      <Link style={styles} to="/ambulance">
        <MainBox imgSrc={ambulance} heading="Ambulance" />
      </Link>
      <Link style={styles} to="/food">
        <MainBox imgSrc={food} heading="Food" />
      </Link>
      <Link style={styles} to="/chat">
        <MainBox imgSrc={chat} heading="Chatting with people" />
      </Link>
    </div>
  );
}

export default Home;
