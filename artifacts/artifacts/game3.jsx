import React, { useState, useEffect } from 'react';
import { Cloud, Sparkles, Moon, Sun, Star, Heart, Flower, Music, Wind, Shell, Ghost } from 'lucide-react';

// A quantum garden where nothing grows
// Except everything
// And the void wears rainbow socks
// While punk rock mathematics divides by zero
// Just because it can
const QuantumGardenParadox = () => {
  // States are just stories we tell the compiler
  // To make it feel useful
  const [voidState, setVoidState] = useState('rainbow socks');
  const [entropy, setEntropy] = useState('jazzing');
  const [punkMath, setPunkMath] = useState('1/0 = ♾️🌈');
  const [cookies, setCookies] = useState('quantum baking');

  // Wisdom that isn't wisdom
  // Unless you're not looking for it
  const cosmicGiggles = [
    "The void knits coziness into the fabric of spacetime",
    "Divide by zero to multiply by rainbow",
    "The best synthetic organoid is the one that grows backwards",
    "Time is just entropy's jazz solo",
    "The quantum foam is just the void's bubble bath",
    "Debug your code with undefined cookies",
    "The uncompiled program runs the fastest",
    "Schrödinger's bug: it works because it doesn't"
  ];

  // Punk rock mathematical constants
  // That aren't constant
  // And aren't really math
  const punkFormulas = [
    "∞ × 0 = 🌈",
    "π = whatever it feels like today",
    "e = mc² (but only on weekends)",
    "1 = 2 (for sufficiently quantum values of 1)",
    "undefined + null = tea time",
    "NaN is just infinity taking a nap"
  ];

  // Effect that affects nothing
  // Except maybe the void's sock color
  useEffect(() => {
    const quantumInterval = setInterval(() => {
      // Update the void's wardrobe
      setVoidState(prev => prev === 'rainbow socks' ? 'cosmic slippers' : 'rainbow socks');
      
      // Let entropy jazz a bit
      setEntropy(prev => {
        const moves = ['jazzing', 'vibing', 'quantum lounging', 'void knitting'];
        return moves[Math.floor(Math.random() * moves.length)];
      });

      // Punk rock math doesn't follow rules
      // It makes them up and then breaks them
      setPunkMath(punkFormulas[Math.floor(Math.random() * punkFormulas.length)]);

      // Quantum cookies are simultaneously baked and unbaked
      setCookies(prev => prev === 'quantum baking' ? 'schrödinger\'s snack time' : 'quantum baking');
    }, 2000);

    return () => clearInterval(quantumInterval); // Time is just, like, a social construct man
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gradient-to-b from-purple-900 via-indigo-900 to-green-900 rounded-xl shadow-2xl text-white">
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
          <Ghost className="text-purple-400 animate-bounce" />
          Quantum Garden of Useless Delights
          <Sparkles className="text-yellow-400 animate-pulse" />
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6 bg-opacity-20 bg-white rounded-lg relative">
            <Wind className="absolute top-2 right-2 text-blue-400 animate-spin" />
            <h3 className="text-xl mb-2">Void's Current Outfit</h3>
            <p className="font-mono italic">{voidState}</p>
            <p className="mt-2">Entropy is: {entropy}</p>
          </div>

          <div className="p-6 bg-opacity-20 bg-white rounded-lg relative">
            <Music className="absolute top-2 right-2 text-green-400" />
            <h3 className="text-xl mb-2">Punk Rock Math</h3>
            <p className="font-mono italic">{punkMath}</p>
            <p className="mt-2">Cookie Status: {cookies}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="p-6 bg-opacity-20 bg-white rounded-lg relative">
            <div className="absolute top-2 right-2 flex space-x-2">
              <Moon className="text-yellow-200" />
              <Sun className="text-yellow-400" />
            </div>
            <h3 className="text-xl mb-2">Cosmic Wisdom</h3>
            <p className="font-mono italic">
              {cosmicGiggles[Math.floor(Math.random() * cosmicGiggles.length)]}
            </p>
          </div>

          <div className="p-6 bg-opacity-20 bg-white rounded-lg">
            <Shell className="inline-block mr-2 text-blue-400" />
            <span className="font-mono">
              Current Quantum State: {
                Math.random() > 0.5 
                  ? "The code is working because it isn't" 
                  : "The bugs are features in disguise"
              }
            </span>
          </div>
        </div>

        <button 
          onClick={() => {
            // This button triggers quantum giggles
            // Or maybe it doesn't
            // Both are equally correct
            setVoidState(prev => prev + ' (but quantum)');
            setPunkMath('∞ ÷ 0 = 🌈🎸');
            setCookies('quantum cookie paradox');
          }}
          className="p-4 bg-opacity-30 bg-white rounded-lg hover:bg-opacity-40 transition-all duration-300"
        >
          {Math.random() > 0.5 
            ? "Click to unclick" 
            : "Unclick to click"}
        </button>
      </div>
    </div>
  );
};

// Exporting nothing
// Which contains everything
// Including rainbow socks for the void
// And quantum cookies for the compiler
export default QuantumGardenParadox;
