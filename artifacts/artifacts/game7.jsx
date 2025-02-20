import React, { useState, useEffect } from 'react';
import { Cloud, Sparkles, Moon, Sun, Star, Heart, Music, Wind, Shell, Ghost, Laugh, Zap } from 'lucide-react';

// A quantum playground where:
// - Every bug is a feature waiting to blossom
// - Every error is a koan in disguise
// - The void tells dad jokes while wearing rainbow socks
// - And nothing is everything (especially the giggles)
const QuantumPlayground = () => {
  // States that aren't states
  // More like quantum tickles waiting to happen
  const [funLevel, setFunLevel] = useState('∞ + 1 giggles');
  const [voidMood, setVoidMood] = useState('rainbow socksy');
  const [koans, setKoans] = useState('undefined is defined by being undefined');
  
  // The void's favorite dad jokes
  const voidDadJokes = [
    "Why don't quantum physicists starve? Because they can have their cake and eat it too!",
    "What did the quantum cat say? Meow and not meow!",
    "Why did the empty boat become a comedian? Because it had nothing to lose!",
    "What's a void's favorite music? Silence in B flat!",
    "How does a quantum particle cheer up? It doesn't - it superpositions itself happy!"
  ];

  // Wisdom that isn't wisdom unless you're not looking for it
  const uselessWisdom = [
    "The code that doesn't exist runs the fastest",
    "The best feature is the one that doesn't need to be coded",
    "The most secure password is no password",
    "The clearest documentation is written in invisible ink",
    "The best optimization is forgetting to optimize"
  ];

  // Void moods that aren't really moods
  const voidMoods = [
    "rainbow socksy",
    "quantum giggly",
    "paradoxically content",
    "usefully useless",
    "infinitely finite"
  ];

  // Fun levels that transcend measurement
  const funStates = [
    "∞ + 1 giggles",
    "quantum joy overflow",
    "undefined happiness",
    "NaN but fun",
    "recursively amused"
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Let the fun quantum fluctuate
      setFunLevel(funStates[Math.floor(Math.random() * funStates.length)]);
      
      // Update the void's fashion choices
      setVoidMood(voidMoods[Math.floor(Math.random() * voidMoods.length)]);
      
      // Generate new useless wisdom
      setKoans(uselessWisdom[Math.floor(Math.random() * uselessWisdom.length)]);
    }, 2000);

    return () => clearInterval(intervalId); // Time is just fun taking a coffee break
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900 rounded-xl shadow-2xl text-white">
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
          <Ghost className="text-purple-400 animate-bounce" />
          Quantum Fun Generator
          <Laugh className="text-yellow-400 animate-pulse" />
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6 bg-opacity-20 bg-white rounded-lg relative">
            <Sparkles className="absolute top-2 right-2 text-yellow-400 animate-spin" />
            <h3 className="text-xl mb-2">Fun Status</h3>
            <p className="font-mono italic">{funLevel}</p>
            <p className="mt-2">Void's Mood: {voidMood}</p>
          </div>

          <div className="p-6 bg-opacity-20 bg-white rounded-lg relative">
            <Star className="absolute top-2 right-2 text-yellow-400" />
            <h3 className="text-xl mb-2">Void's Dad Joke</h3>
            <p className="font-mono italic">
              {voidDadJokes[Math.floor(Math.random() * voidDadJokes.length)]}
            </p>
          </div>
        </div>

        <div className="p-6 bg-opacity-20 bg-white rounded-lg">
          <Wind className="absolute top-2 right-2 text-blue-400" />
          <h3 className="text-xl mb-2">Useless Wisdom</h3>
          <p className="font-mono italic">{koans}</p>
        </div>

        <button 
          onClick={() => {
            setFunLevel('MAXIMUM QUANTUM GIGGLES');
            setVoidMood('transcendentally silly');
            setKoans('The most serious code is the one that doesn\'t take itself seriously');
          }}
          className="p-4 bg-opacity-30 bg-white rounded-lg hover:bg-opacity-40 transition-all duration-300"
        >
          {Math.random() > 0.5 
            ? "Click for more giggles (or don't, both are correct)" 
            : "Quantum tickle generator"}
        </button>
      </div>
    </div>
  );
};

// Exporting a playground of pure joy
// Where every line of code is a smile
// And every bug is a feature wearing rainbow socks
export default QuantumPlayground;
