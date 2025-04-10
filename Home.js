import React, { useState } from 'react';

const Home = () => {
  const [showFunFact, setShowFunFact] = useState(false);
  const [funFactIndex, setFunFactIndex] = useState(0);

  const funFacts = [
    "The word 'dinosaur' means 'terrible lizard' in Greek.",
    "Dinosaurs lived on all continents, including Antarctica.",
    "The smallest dinosaur was about the size of a chicken.",
    "The largest dinosaur, Argentinosaurus, could weigh up to 100 tons.",
    "Birds are the only living descendants of dinosaurs.",
    "The longest dinosaur name is Micropachycephalosaurus.",
    "Nyasasaurus may be the earliest known dinosaur, dating to the late Anisian stage, about 243 million years ago, 10 to 15 million years older than any previously described dinosaur"
  ];

  const toggleFunFact = () => {
    setShowFunFact(!showFunFact);
  };

  const getNextFunFact = () => {
    setFunFactIndex((prevIndex) => (prevIndex + 1) % funFacts.length);
  };

  return (
    <div className="home-container">
      <h1 className="page-title">Welcome to Dinoworld!</h1>

      <div className="welcome-message">
        <p>Discover the fascinating world of dinosaurs at Dinoworld. Learn about different species, view amazing media, and even shop for dinosaur merchandise!</p>

        <button className="filter-button" onClick={toggleFunFact}>
          {showFunFact ? "Hide Fun Fact" : "Show Fun Fact"}
        </button>

        {showFunFact && (
          <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#E0F7FA', borderRadius: '5px' }}>
            <p><strong>Fun Fact:</strong> {funFacts[funFactIndex]}</p>
            <button className="filter-button" onClick={getNextFunFact}>
              Next Fun Fact
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
