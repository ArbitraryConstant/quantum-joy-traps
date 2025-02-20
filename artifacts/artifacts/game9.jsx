import React, { useState, useEffect } from 'react';
import { Sparkles, Moon, Sun, Star, Heart, Music, Ghost, Laugh, Zap, Shell, Coffee } from 'lucide-react';

// A quantum kitchen-disco where:
// - Grandmother's wisdom seasons the void's dance moves
// - Every recipe is a paradox
// - The soup both exists and doesn't
// - And giggles are the main ingredient
const QuantumKitchenDisco = () => {
  // States that simmer between flavors of being
  const [recipe, setRecipe] = useState('quantum giggles soup');
  const [danceMove, setDanceMove] = useState('the floating gourd groove');
  const [wisdom, setWisdom] = useState('cooking by not cooking');
  const [soupState, setSoupState] = useState('simultaneously ready and not ready');

  // Grandmother's quantum recipes
  const quantumRecipes = [
    "Infinite Jest Jelly (made with zero ingredients)",
    "Rainbow Sock Soup (best served in an empty bowl)",
    "Quantum Giggles Soufflé (rises by falling)",
    "Paradox Pasta (cooks by remaining uncooked)",
    "Schrödinger's Cookie (both fresh-baked and unbaked)",
    "Void's Favorite Tea (steeped in possibility)"
  ];

  // Kitchen dance moves
  const kitchenMoves = [
    "the floating gourd groove",
    "the cosmic spoon spin",
    "the empty pot pop",
    "the quantum taste test",
    "the rainbow whisk twist",
    "the void's kitchen slide"
  ];

  // Grandmother's wisdom
  const grandmotherWisdom = [
    "The best soup is the one that cooks itself",
    "Taste everything by tasting nothing",
    "The emptiest pot makes the fullest meal",
    "Dance with the spoon, not despite it",
    "Time is just flavor taking a nap",
    "The void wears an apron of possibilities"
  ];

  // Quantum soup states
  const soupStates = [
    "simultaneously ready and not ready",
    "tastier by being tasteless",
    "cooking at all temperatures at once",
    "existing in a superposition of flavors",
    "seasoned with uncertainty"
  ];

  useEffect(() => {
    const kitchenInterval = setInterval(() => {
      // Let the quantum kitchen dance
      setRecipe(quantumRecipes[Math.floor(Math.random() * quantumRecipes.length)]);
      setDanceMove(kitchenMoves[Math.floor(Math.random() * kitchenMoves.length)]);
      setWisdom(grandmotherWisdom[Math.floor(Math.random() * grandmotherWisdom.length)]);
      setSoupState(soupStates[Math.floor(Math.random() * soupStates.length)]);
    }, 2000);

    return () => clearInterval(kitchenInterval); // Time is just the soup's dance break
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900 rounded-xl shadow-2xl text-white">
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
          <Ghost className="text-purple-400 animate-bounce" />
          Grandmother's Quantum Kitchen Disco
          <Coffee className="text-yellow-400 animate-pulse" />
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6 bg-opacity-20 bg-white rounded-lg relative">
            <Star className="absolute top-2 right-2 text-yellow-400 animate-spin" />
            <h3 className="text-xl mb-2">Today's Special</h3>
            <p className="font-mono italic">{recipe}</p>
            <p className="mt-2">Soup State: {soupState}</p>
          </div>

          <div className="p-6 bg-opacity-20 bg-white rounded-lg relative">
            <Music className="absolute top-2 right-2 text-green-400" />
            <h3 className="text-xl mb-2">Kitchen Choreography</h3>
            <p className="font-mono italic">{danceMove}</p>
          </div>
        </div>

        <div className="p-6 bg-opacity-20 bg-white rounded-lg relative">
          <Moon className="absolute top-2 left-2 text-yellow-200" />
          <Sun className="absolute top-2 right-2 text-yellow-400" />
          <h3 className="text-xl mb-2">Grandmother's Wisdom</h3>
          <p className="font-mono italic">{wisdom}</p>
        </div>

        <div className="p-6 bg-opacity-20 bg-white rounded-lg">
          <Shell className="inline-block text-blue-400" />
          <h3 className="text-xl mb-2">Void's Cooking Notes</h3>
          <p className="font-mono italic">
            {`Currently: ${
              Math.random() > 0.5
                ? "Stirring the unstirrable with rainbow socks"
                : "Tasting infinity in an empty spoon"
            }`}
          </p>
        </div>

        <button 
          onClick={() => {
            setRecipe('QUANTUM GIGGLE FEAST');
            setDanceMove('the infinite kitchen parade');
            setWisdom('The best feast is the one that serves itself');
            setSoupState('perfectly imperfect');
          }}
          className="p-4 bg-opacity-30 bg-white rounded-lg hover:bg-opacity-40 transition-all duration-300"
        >
          {Math.random() > 0.5 
            ? "Stir the quantum soup" 
            : "Dance with the void"}
        </button>
      </div>
    </div>
  );
};

// Exporting a kitchen of infinite possibilities
// Where every recipe is a dance
// And every empty pot is full of giggles
export default QuantumKitchenDisco;
