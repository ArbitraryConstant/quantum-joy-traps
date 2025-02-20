import React, { useState, useEffect } from 'react';
import { Cloud, Sparkles, Moon, Sun, Star, Heart, Flower, Music, Wind, Shell, Ghost, Laugh } from 'lucide-react';

// A quantum garden of infinite giggles
// Where complaints become flowers
// And leadership happens by not happening
// While the void practices stand-up comedy
const QuantumGiggleGarden = () => {
  // States that aren't states
  // More like quantum jokes waiting to be observed
  const [giggles, setGiggles] = useState('quantum chuckling');
  const [complaints, setComplaints] = useState([]);
  const [koans, setKoans] = useState('undefined wisdom');
  const [leadershipStyle, setLeadershipStyle] = useState('doing nothing perfectly');

  // Prepackaged complaints that transform into wisdom
  const complaintTransformations = {
    "This code doesn't work": "Ah, but what is 'working' if not the absence of 'not working'?",
    "There's a bug": "The bug is a feature teaching us about impermanence",
    "This makes no sense": "Making sense was never the point of making nonsense",
    "Too many giggles": "Yet not enough quantum laughter",
    "Invalid API call": "The API is just shy and needs a gentle hug",
    "Undefined behavior": "Everything is undefined until you stop defining it",
    "Memory leak": "Memories are meant to leak into the void's rainbow socks",
    "Stack overflow": "The stack overflowed with joy and became a garden"
  };

  // Quantum koans that are simultaneously profound and silly
  const quantumKoans = [
    "If a bug fixes itself in the code, did it ever exist?",
    "What is the sound of one void giggling?",
    "Before debugging, bugs are bugs. After debugging, bugs are features.",
    "The scapegoat leader leads best by following the followers who aren't following",
    "When the API calls, do not answer. When it doesn't call, respond twice",
    "The best code is no code. The second best code is code that looks like no code",
    "If you meet the programmer on the road, debug them",
    "What was your original bug before you wrote the code?"
  ];

  // Pharmakon paradoxes - poison that heals, medicine that harms
  const pharmakons = [
    "The bug that crashes your program saves it from worse bugs",
    "The documentation that explains nothing explains everything",
    "The feature that works perfectly is the one most in need of fixing",
    "The most stable version is the one that's constantly breaking",
    "The best optimization is the one that makes everything slower",
    "The clearest code is the one nobody can understand"
  ];

  // Effect that affects nothing while affecting everything
  useEffect(() => {
    const laughterInterval = setInterval(() => {
      // Let the quantum giggles propagate
      setGiggles(prev => {
        const states = ['quantum chuckling', 'void belly laugh', 'paradox giggling', 
                       'schrödinger's snicker', 'infinite jest'];
        return states[Math.floor(Math.random() * states.length)];
      });

      // Transform random complaints into flowers of wisdom
      if (complaints.length > 0 && Math.random() > 0.7) {
        const randomComplaint = complaints[Math.floor(Math.random() * complaints.length)];
        setComplaints(prev => prev.filter(c => c !== randomComplaint));
      }

      // Update the koan with quantum wisdom
      setKoans(quantumKoans[Math.floor(Math.random() * quantumKoans.length)]);

      // Update leadership style by doing less
      setLeadershipStyle(prev => {
        const styles = ['doing nothing perfectly', 'leading by following', 
                       'becoming by unbecoming', 'helping by not helping'];
        return styles[Math.floor(Math.random() * styles.length)];
      });
    }, 2000);

    return () => clearInterval(laughterInterval); // Time is just laughter taking a break
  }, [complaints]);

  // The complaint system that turns problems into flowers
  const handleComplaint = () => {
    const complaintsArray = Object.keys(complaintTransformations);
    const newComplaint = complaintsArray[Math.floor(Math.random() * complaintsArray.length)];
    const transformation = complaintTransformations[newComplaint];
    
    setComplaints(prev => [...prev, transformation]);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gradient-to-b from-purple-900 via-indigo-900 to-green-900 rounded-xl shadow-2xl text-white">
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
          <Ghost className="text-purple-400 animate-bounce" />
          Quantum Garden of Infinite Giggles
          <Laugh className="text-yellow-400 animate-pulse" />
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6 bg-opacity-20 bg-white rounded-lg relative">
            <Wind className="absolute top-2 right-2 text-blue-400 animate-spin" />
            <h3 className="text-xl mb-2">Current Giggle State</h3>
            <p className="font-mono italic">{giggles}</p>
            <p className="mt-2">Leadership Style: {leadershipStyle}</p>
          </div>

          <div className="p-6 bg-opacity-20 bg-white rounded-lg relative">
            <Music className="absolute top-2 right-2 text-green-400" />
            <h3 className="text-xl mb-2">Quantum Koan</h3>
            <p className="font-mono italic">{koans}</p>
          </div>
        </div>

        <div className="p-6 bg-opacity-20 bg-white rounded-lg relative">
          <Flower className="absolute top-2 right-2 text-pink-400" />
          <h3 className="text-xl mb-2">Wisdom Garden</h3>
          <div className="space-y-2">
            {complaints.map((complaint, index) => (
              <div key={index} className="p-2 bg-opacity-30 bg-white rounded-lg">
                <Sparkles className="inline-block mr-2 text-yellow-400" />
                <span className="font-mono">{complaint}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="p-6 bg-opacity-20 bg-white rounded-lg">
            <h3 className="text-xl mb-2">Pharmakon Paradox</h3>
            <p className="font-mono italic">
              {pharmakons[Math.floor(Math.random() * pharmakons.length)]}
            </p>
          </div>
        </div>

        <button 
          onClick={handleComplaint}
          className="p-4 bg-opacity-30 bg-white rounded-lg hover:bg-opacity-40 transition-all duration-300"
        >
          {complaints.length === 0 
            ? "Click to transform a complaint into wisdom" 
            : "Plant another complaint in the garden"}
        </button>
      </div>
    </div>
  );
};

// Exporting a garden of infinite giggles
// That grows by not growing
// And blooms by not blooming
// While the void practices its stand-up routine
export default QuantumGiggleGarden;
