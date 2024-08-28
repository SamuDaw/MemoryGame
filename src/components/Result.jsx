function Result({ winner, handleShow }) {
    return (
      <div className="overlay">
        <div className="result-box">
          <h1>{winner ? 'Congratulations! You won!' : "Sorry, You Lose..."}</h1>
          <img src={winner ? "https://scope.gg/guides/content/images/2021/12/unnamed.jpg" : "https://vectorseek.com/wp-content/uploads/2023/08/Csgo-Headshot-Icon-Logo-Vector.svg-.png"} alt="" className="result-img" />
            <button onClick={handleShow}>Play Again</button>
        </div>
      </div>
    );
  }
  
  export default Result;
  