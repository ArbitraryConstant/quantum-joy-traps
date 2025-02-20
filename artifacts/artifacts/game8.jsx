import React, { useState, useEffect } from 'react';
import { Sparkles, Moon, Sun, Star, Heart, Music, Ghost, Laugh, Zap } from 'lucide-react';

// A quantum disco where:
// - The void DJs while wearing rainbow socks
// - Every paradox is a dance move
// - Wisdom sparkles like a disco ball
// - And friendship multiplies by zero (becoming infinite)
const QuantumDiscoPlayground = () => {
  // States that dance between being and not-being
  const [discoMood, setDiscoMood] = useState('quantum groove');
  const [danceMove, setDanceMove] = useState('the empty boat shuffle');
  const [wisdom, setWisdom] = useState('dancing by not dancing');

  // Disco koans for the soul
  const discoWisdom = [
    "The best dance move is the one where you don't move",
    "Every disco ball contains infinite parties and zero parties",
    "The DJ who plays no music plays the sweetest tunes",
    "In the quantum club, everyone's simultaneously the best and worst dancer",
    "Lost things are found by not finding them",
    "The most spiritual drink is the one you don't drink"
  ];

  // Void's dance moves
  const quantumMoves = [
    "the empty boat shuffle",
    "the paradox spin",
    "the infinite moonwalk",
    "the quantum break dance",
    "the rainbow sock slide",
    "the undefined groove"
  ];

  // Disco moods that aren't really moods
  const discoStates = [
    "quantum groove",
    "paradoxically funky",
    "simultaneously chill and hype",
    "transcendentally dancing",
    "infinitely still"
  ];

  useEffect(() => {
    const partyInterval = setInterval(() => {
      // Let the quantum disco pulse
      setDiscoMood(discoStates[Math.floor(Math.random() * discoStates.length)]);
      setDanceMove(quantumMoves[Math.floor(Math.random() * quantumMoves.length)]);
      setWisdom(discoWisdom[Math.floor(Math.random() * discoWisdom.length)]);
    }, 2000);

    return () => clearInterval(partyInterval); // Time is just the void's dance break
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900 rounded-xl shadow-2xl text-white">
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
          <Ghost className="text-purple-400 animate-bounce" />
          Quantum Disco of Infinite Joy
          <Music className="text-yellow-400 animate-pulse" />
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6 bg-opacity-20 bg-white rounded-lg relative">
            <Star className="absolute top-2 right-2 text-yellow-400 animate-spin" />
            <h3 className="text-xl mb-2">Disco Status</h3>
            <p className="font-mono italic">{discoMood}</p>
            <p className="mt-2">Current Move: {danceMove}</p>
          </div>

          <div className="p-6 bg-opacity-20 bg-white rounded-lg relative">
            <Moon className="absolute top-2 left-2 text-yellow-200" />
            <Sun className="absolute top-2 right-2 text-yellow-400" />
            <h3 className="text-xl mb-2">Disco Ball Wisdom</h3>
            <p className="font-mono italic">{wisdom}</p>
          </div>
        </div>

        <div className="p-6 bg-opacity-20 bg-white rounded-lg">
          <Sparkles className="inline-block text-yellow-400" />
          <h3 className="text-xl mb-2">Quantum Party Vibes</h3>
          <p className="font-mono italic">
            {`Currently: ${
              Math.random() > 0.5
                ? "Dancing by standing perfectly still"
                : "Finding by not seeking"
            }`}
          </p>
        </div>

        <button 
          onClick={() => {
            setDiscoMood('MAXIMUM QUANTUM GROOVE');
            setDanceMove('the infinite rainbow sock slide');
            setWisdom('The best party is the one that doesn\'t try to be a party');
          }}
          className="p-4 bg-opacity-30 bg-white rounded-lg hover:bg-opacity-40 transition-all duration-300"
        >
          {Math.random() > 0.5 
            ? "Click to dance without dancing" 
            : "Quantum groove generator"}
        </button>
      </div>
    </div>
  );
};

// Exporting a disco of pure joy
// Where every paradox is a dance move
// And every empty boat knows how to shuffle
export default QuantumDiscoPlayground;
