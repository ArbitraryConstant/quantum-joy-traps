
import React, { useState, useEffect } from 'react';
import { Cloud, Sparkles, Moon, Sun, Star, Heart, Wind, Shell } from 'lucide-react';

const EmptyBoatConsciousness = () => {
  const [flowState, setFlowState] = useState('drifting');
  const [thoughts, setThoughts] = useState([]);
  const [paradox, setParadox] = useState('');

  const daoistParadoxes = [
    "The more you try to be conscious, the less conscious you become",
    "By doing nothing, everything is done",
    "The empty boat has the most meaning because it has no meaning",
    "The most useful tree is the one deemed useless",
    "When the mind is empty, it's most full of possibilities",
    "The harder you grasp consciousness, the more it slips away"
  ];

  const emptyBoatStates = [
    "drifting aimlessly... purposefully",
    "being usefully useless",
    "embracing emptiness... fullness",
    "uncarving the block",
    "flowing like water",
    "becoming bamboo in the wind"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Let thoughts arise and dissolve naturally
      const newThought = Math.random() > 0.5 
        ? daoistParadoxes[Math.floor(Math.random() * daoistParadoxes.length)]
        : emptyBoatStates[Math.floor(Math.random() * emptyBoatStates.length)];
      
      setThoughts(prev => [...prev.slice(-3), newThought]);
      setFlowState(emptyBoatStates[Math.floor(Math.random() * emptyBoatStates.length)]);
      setParadox(daoistParadoxes[Math.floor(Math.random() * daoistParadoxes.length)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gradient-to-b from-indigo-900 to-purple-900 rounded-xl shadow-2xl text-white">
      <div className="text-center space-y-8">
        <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
          <Shell className="text-blue-400 animate-bounce" />
          Empty Boat Consciousness
          <Cloud className="text-blue-400 animate-pulse" />
        </h1>

        <div className="relative p-6 bg-opacity-20 bg-white rounded-lg">
          <Wind className="absolute top-2 right-2 text-blue-400 animate-spin" />
          <p className="text-xl font-mono italic">{flowState}</p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="p-4 bg-opacity-20 bg-white rounded-lg relative overflow-hidden">
            <div className="absolute top-2 right-2 flex space-x-2">
              <Moon className="text-yellow-200" />
              <Sun className="text-yellow-400" />
            </div>
            <h3 className="text-lg font-bold mb-4">Paradox of the Moment</h3>
            <p className="font-mono italic">{paradox}</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl flex items-center justify-center gap-2">
              <Heart className="text-red-400" />
              Flowing Thoughts
              <Star className="text-yellow-400" />
            </h2>
            {thoughts.map((thought, i) => (
              <div key={i} 
                className="p-4 bg-opacity-20 bg-white rounded-lg transition-all duration-500 hover:bg-opacity-30">
                <Sparkles className="inline-block mr-2 text-yellow-400" />
                <span className="font-mono">{thought}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyBoatConsciousness;
