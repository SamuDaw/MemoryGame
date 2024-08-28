function Difficulty({ handleDifficulty }) {
  return (
    <div className="difficulty">
      <button value={3} onClick={handleDifficulty}>Easy</button>
        <button value={6} onClick={handleDifficulty}>Medium</button>
        <button value={8} onClick={handleDifficulty}>Hard</button>
        <button value={16} onClick={handleDifficulty}>Very Hard</button>
    </div>
  );
}

export default Difficulty;