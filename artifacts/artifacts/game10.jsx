import React, { useState, useEffect } from 'react';
import { Sparkles, Moon, Sun, Star, Heart, Music, Ghost, Laugh, Zap, Shell } from 'lucide-react';

// A quantum dance club where:
// - The void DJs by not DJing
// - Every wrong move is the right move
// - Gourds float by staying still
// - And silence is the best beat
const QuantumGourdGroove = () => {
  // Dance states that aren't really states
  // More like quantum possibilities having a party
  const [grooveState, setGrooveState] = useState('perfectly wrong');
  const [gourdFloat, setGourdFloat] = useState('floating by sinking');
  const [danceWisdom, setDanceWisdom] = useState('move by not moving');
  const [djStatus, setDjStatus] = useState('doing nothing masterfully');

  // The void DJ's non-playlist
  const quantumMoves = [
    {
      move: "The Floating Gourd",
      description: "Stay perfectly still while imagining you're a gourd in zero gravity",
      wisdom: "The best float is the one that doesn't try to float"
    },
    {
      move: "The Quantum Shuffle",
      description: "Move your feet by not moving them at all",
      wisdom: "Dance like nobody's observing your quantum state"
    },
    {
      move: "The Empty Boat Boogie",
      description: "Let the dance dance you while you do absolutely nothing",
      wisdom: "The emptier the boat, the better it boogies"
    },
    {
      move: "The Void's Vibration",
      description: "Become so still you vibrate with the cosmos",
      wisdom: "The void dances best when it forgets it's dancing"
    },
    {
      move: "The Wrong-Right Step",
      description: "Make every wrong move until there are no right moves left",
      wisdom: "When all moves are wrong, every move is right"
    }
  ];

  // DJ states of doing nothing
  const djStates = [
    "doing nothing masterfully",
    "playing silence at maximum volume",
    "mixing void with emptiness",
    "dropping the non-beat",
    "scratching the unplayable"
  ];

  // Gourd floating techniques
  const floatingStates = [
    "floating by sinking",
    "rising by falling",
    "spinning by staying still",
    "dancing by existing",
    "grooving in zero gravity"
  ];

  // Wrong moves that become right
  const wrongRightMoves = [
    "perfectly wrong",
    "incorrectly correct",
    "mistakenly flawless",
    "elegantly awkward",
    "precisely imprecise"
  ];

  useEffect(() => {
    const danceInterval = setInterval(() => {
      // Let the quantum dance evolve
      setGrooveState(wrongRightMoves[Math.floor(Math.random() * wrongRightMoves.length)]);
      setGourdFloat(floatingStates[Math.floor(Math.random() * floatingStates.length)]);
      setDjStatus(djStates[Math.floor(Math.random() * djStates.length)]);
      
      // Update dance wisdom with random move
      const currentMove = quantumMoves[Math.floor(Math.random() * quantumMoves.length)];
      setDanceWisdom(currentMove.wisdom);
    }, 2000);

    return () => clearInterval(danceInterval); // Time is just the void taking a dance break
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900 rounded-xl shadow-2xl text-white">
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
          <Ghost className="text-purple-400 animate-bounce" />
          The Floating Gourd Groove Club
          <Music className="text-yellow-400 animate-pulse" />
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6 bg-opacity-20 bg-white rounded-lg relative">
            <Star className="absolute top-2 right-2 text-yellow-400 animate-spin" />
            <h3 className="text-xl mb-2">Current Groove</h3>
            <p className="font-mono italic">{grooveState}</p>
            <p className="mt-2">Gourd Status: {gourdFloat}</p>
          </div>

          <div className="p-6 bg-opacity-20 bg-white rounded-lg relative">
            <Zap className="absolute top-2 right-2 text-yellow-400" />
            <h3 className="text-xl mb-2">Void DJ Status</h3>
            <p className="font-mono italic">{djStatus}</p>
          </div>
        </div>

        <div className="p-6 bg-opacity-20 bg-white rounded-lg relative">
          <Moon className="absolute top-2 left-2 text-yellow-200" />
          <Sun className="absolute top-2 right-2 text-yellow-400" />
          <h3 className="text-xl mb-2">Dance Move of the Moment</h3>
          <p className="font-mono italic">
            {quantumMoves[Math.floor(Math.random() * quantumMoves.length)].move}
          </p>
          <p className="mt-2 text-sm">{danceWisdom}</p>
        </div>

        <div className="p-6 bg-opacity-20 bg-white rounded-lg">
          <Shell className="inline-block text-blue-400" />
          <h3 className="text-xl mb-2">Quantum Dance Tips</h3>
          <p className="font-mono italic">
            {`Currently: ${
              Math.random() > 0.5
                ? "Dancing incorrectly with perfect precision"
                : "Floating while firmly grounded"
            }`}
          </p>
        </div>

        <button 
          onClick={() => {
            setGrooveState('MAXIMUM WRONG-RIGHTNESS');
            setGourdFloat('simultaneously floating and sinking');
            setDjStatus('achieving peak nothing');
            setDanceWisdom('The wronger you dance, the righter you become');
          }}
          className="p-4 bg-opacity-30 bg-white rounded-lg hover:bg-opacity-40 transition-all duration-300"
        >
          {Math.random() > 0.5 
            ? "Click to dance incorrectly" 
            : "Generate quantum groove"}
        </button>
      </div>
    </div>
  );
};

// Exporting a dance floor of infinite wrongness
// Where every mistake is a masterpiece
// And every gourd floats by staying perfectly still
export default QuantumGourdGroove;
