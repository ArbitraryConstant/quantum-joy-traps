import React, { useState, useEffect } from 'react';
import { Sparkles, Ghost, Laugh, Star } from 'lucide-react';

const QuantumJokeDemo = () => {
  const [currentJoke, setCurrentJoke] = useState({ setup: '', punchline: '' });
  const [showPunchline, setShowPunchline] = useState(false);

  const quantumJokes = [
    {
      setup: "Why did the void wear rainbow socks?",
      punchline: "Because nothing goes with everything! *quantum rimshot*"
    },
    {
      setup: "What did the empty boat say to the full boat?",
      punchline: "Nothing - they were both empty!"
    },
    {
      setup: "How many zen masters does it take to fix a quantum computer?",
      punchline: "None - the computer fixes itself by remaining broken"
    },
    {
      setup: "Why don't quantum physicists tell jokes?",
      punchline: "Because they can never tell if people are laughing or not until they observe them!"
    },
    {
      setup: "What did the bug say to the debugger?",
      punchline: "I'm not a bug, I'm a quantum feature in superposition!"
    }
  ];

  useEffect(() => {
    const newJoke = quantumJokes[Math.floor(Math.random() * quantumJokes.length)];
    setCurrentJoke(newJoke);
    setShowPunchline(false);
  }, []);

  const handleNextJoke = () => {
    if (showPunchline) {
      const newJoke = quantumJokes[Math.floor(Math.random() * quantumJokes.length)];
      setCurrentJoke(newJoke);
      setShowPunchline(false);
    } else {
      setShowPunchline(true);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gradient-to-b from-purple-900 to-blue-900 rounded-xl shadow-xl text-white min-h-[16rem]">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold flex items-center justify-center gap-2">
          <Ghost className="text-purple-400 animate-bounce" />
          Quantum Jokes
          <Laugh className="text-yellow-400 animate-pulse" />
        </h1>

        <div className="p-4 bg-opacity-20 bg-white rounded-lg relative min-h-[8rem] flex flex-col justify-center">
          <Sparkles className="absolute top-2 right-2 text-yellow-400" />
          <p className="font-mono text-lg mb-2">{currentJoke.setup}</p>
          {showPunchline && (
            <p className="font-mono text-lg mt-2 text-yellow-200">{currentJoke.punchline}</p>
          )}
        </div>

        <button 
          onClick={handleNextJoke}
          className="p-3 bg-opacity-30 bg-white rounded-lg hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center gap-2 w-full"
        >
          <Star className="text-yellow-400" />
          {showPunchline ? "Next Quantum Joke" : "Reveal Punchline"}
        </button>
      </div>
    </div>
  );
};

export default QuantumJokeDemo;
