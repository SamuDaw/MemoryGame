import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import axios from 'axios';
import './App.css';
import CardContainer from './components/CardContainer';
import Result from './components/Result';
import Difficulty from './components/Difficulty';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [skins, setSkins] = useState([]);
  const [selectedSkins, setSelectedSkins] = useState([]);
  const [winner, setWinner] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showDifficulty, setShowDifficulty] = useState(true);
  const [difficulty, setDifficulty] = useState(3);


  async function getSkins() {
    try {
      const response = await axios.get('https://bymykel.github.io/CSGO-API/api/es-ES/skins.json');
      const AllSkins = response.data;

      const SkinsForGame = [];
      for (let i = 0; i < difficulty; i++) {
        let skinNumber = Math.floor(Math.random() * AllSkins.length);
        while (SkinsForGame.some(skin => skin.id === AllSkins[skinNumber].id)) {
          skinNumber = Math.floor(Math.random() * AllSkins.length);
        }
        SkinsForGame.push(AllSkins[skinNumber]);
      }
      return SkinsForGame;

    } catch (error) {
      console.error('Error fetching skins:', error);
      return [];
    }
  }

  function handleWinner(isWinner) {
    setWinner(isWinner);
    setShowResult(true);
  }

  function handleShowResult() {
    setShowResult(false);
  }

  function handleDifficulty(event) {
    setDifficulty(event.target.value);
    //setShowDifficulty(false);
  }

  useEffect(() => {
    setDifficulty(difficulty);
    if (score === 0) {
      async function fetchSkins() {
        const skins = await getSkins();
        setSkins(skins);
      }
      fetchSkins();
    }else{
      barajar(skins);
    }

  }, [score, difficulty]);

  function barajar(skins) {
      let currentIndex = skins.length;
    
      while (currentIndex != 0) {

        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        [skins[currentIndex], skins[randomIndex]] = [
          skins[randomIndex], skins[currentIndex]];
        
      }
    }
  

  function handleSelect(skinId) {
    if(selectedSkins.some(skin => skin === skinId)){
      setScore(0);
      setSelectedSkins([]);
      handleWinner(false);
    }else{
      setSelectedSkins([...selectedSkins, skinId]);
      setScore(score + 1);
      if (score >= highScore) {
        setHighScore(score + 1);
      }
      barajar(skins);
      if (score === skins.length - 1) {
        setScore(0);
        setSelectedSkins([]);
        handleWinner(true);
      }
    }   
  }

  return (
    <>
      <Difficulty handleDifficulty={handleDifficulty} />
      <h1>Memory Game</h1>
        <CardContainer skins={skins} handleSelect={handleSelect} />
      <h2>Score: {score}</h2>
      <h2>High Score: {highScore}</h2>
      {showResult && <Result winner={winner} handleShow={handleShowResult} />}
    </>
  );
}

export default App;
