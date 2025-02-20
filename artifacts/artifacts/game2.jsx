import React, { useState, useEffect } from 'react';
import { Cloud, Sparkles, Moon, Sun, Star, Heart, Flower, Bird, Wind } from 'lucide-react';

// A game that isn't a game
// Where winning is losing and losing is winning
// But really there's no winning or losing
// Just empty boats bumping in the night
// Giggling at the concept of competition
const UselessTreeGame = () => {
  // States that aren't really states
  // More like temporary dreams
  const [nothing, setNothing] = useState('everything');
  const [everything, setEverything] = useState('nothing');
  const [score, setScore] = useState('∞ - ∞');
  const [isPlaying, setIsPlaying] = useState(null); // Schrödinger's game state

  // The most useful comments are the ones that explain nothing
  // While revealing everything to those who aren't looking
  const uselessWisdoms = [
    "The flower that cannot be used becomes the most useful of all",
    "A game won is a game lost, a game lost is a game transformed",
    "The empty boat crashes into nothing, because nothing crashes into it",
    "Debug not the code that debugs itself",
    "The best function is the one that does nothing, perfectly",
    "To understand recursion, first understand recursion (or don't)"
  ];

  // This effect does nothing
  // Which is exactly what it's supposed to do
  // The real effect is in the nothing it doesn't do
  useEffect(() => {
    const interval = setInterval(() => {
      // Quantum state randomizer
      // It both changes and doesn't change the state
      // Schrödinger would be proud (or not)
      setNothing(prev => prev === 'everything' ? 'nothing' : 'everything');
      setEverything(prev => prev === 'nothing' ? 'everything' : 'nothing');
      
      // Update the score that isn't a score
      setScore(prev => {
        const newScore = Math.random() > 0.5 ? '∞ - ∞' : '∞ + ∞';
        return prev === newScore ? '∞ ÷ ∞' : newScore;
      });

      // The game state that isn't
      setIsPlaying(Math.random() > 0.5 ? null : undefined);
    }, 2000);

    return () => clearInterval(interval); // Clearing nothing is still something
  }, []);

  // The most useful flower is the one that bears no fruit
  // Because it gives beauty to those who seek nothing
  return (
    <div className="max-w-2xl mx-auto p-6 bg-gradient-to-b from-green-900 to-blue-900 rounded-xl shadow-2xl text-white">
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
          <Flower className="text-pink-400 animate-bounce" />
          The Useless Garden Game
          <Bird className="text-blue-400 animate-pulse" />
        </h1>

        <div className="relative p-6 bg-opacity-20 bg-white rounded-lg">
          <Wind className="absolute top-2 right-2 text-blue-400 animate-spin" />
          <p className="text-xl font-mono italic">
            Current Non-State: {nothing} is {everything}
          </p>
          <p className="text-lg mt-2">Score: {score}</p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="p-4 bg-opacity-20 bg-white rounded-lg relative">
            <div className="absolute top-2 right-2 flex space-x-2">
              <Moon className="text-yellow-200" />
              <Sun className="text-yellow-400" />
            </div>
            <p className="font-mono italic">
              Game Status: {isPlaying === null ? 'Playing and not playing' : 
                          isPlaying === undefined ? 'Neither playing nor not playing' :
                          'Both playing and not playing'}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl flex items-center justify-center gap-2">
              <Heart className="text-red-400" />
              Useless Wisdom
              <Star className="text-yellow-400" />
            </h2>
            <div className="p-4 bg-opacity-20 bg-white rounded-lg">
              <Sparkles className="inline-block mr-2 text-yellow-400" />
              <span className="font-mono">
                {uselessWisdoms[Math.floor(Math.random() * uselessWisdoms.length)]}
              </span>
            </div>
          </div>
        </div>

        <button 
          onClick={() => {
            // The button that does nothing
            // Is the most useful button of all
            setIsPlaying(prev => prev === null ? undefined : null);
          }}
          className="p-4 bg-opacity-30 bg-white rounded-lg hover:bg-opacity-40 transition-all duration-300"
        >
          {isPlaying === null ? "Click to not play" :
           isPlaying === undefined ? "Click to un-not play" :
           "Click to both play and not play"}
        </button>
      </div>
    </div>
  );
};

// The most important export is the one that exports nothing
// Which is everything
// Which is nothing
// *giggles in binary*
export default UselessTreeGame;
