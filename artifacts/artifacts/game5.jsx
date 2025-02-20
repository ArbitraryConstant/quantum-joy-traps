import React, { useState, useEffect } from 'react';
import { Cloud, Sparkles, Moon, Sun, Star, Heart, Music, Wind, Shell, Ghost, Laugh, Zap } from 'lucide-react';

// A quantum comedy club where the void performs stand-up
// And the bugs debug themselves
// While the audience simultaneously exists and doesn't
// And every joke is both funny and profound
// (But mostly just silly)
const QuantumComedyClub = () => {
  // States that are more like cosmic punchlines
  const [voidJoke, setVoidJoke] = useState('Why did the quantum physicist cross the void?');
  const [laughterLevel, setLaughterLevel] = useState('quantum chuckling');
  const [koanPunchline, setKoanPunchline] = useState('404: Wisdom not found (and that's the wisdom!)');
  const [audienceState, setAudienceState] = useState('simultaneously laughing and not laughing');
  
  // The void's greatest hits
  const quantumJokes = [
    {
      setup: "Why did the void wear rainbow socks?",
      punchline: "Because nothing goes with everything! *quantum rimshot*"
    },
    {
      setup: "What did the bug say to the debugger?",
      punchline: "I'm not a bug, I'm a quantum feature in superposition!"
    },
    {
      setup: "How many zen masters does it take to fix a quantum computer?",
      punchline: "None - the computer fixes itself by remaining broken"
    },
    {
      setup: "Why don't quantum physicists make good comedians?",
      punchline: "They can never tell if their jokes landed until someone observes them!"
    },
    {
      setup: "What did the empty boat say to the full boat?",
      punchline: "Nothing - they were both empty!"
    }
  ];

  // Zen tech support responses
  const zenTechSupport = [
    "Have you tried turning it off and leaving it off?",
    "The bug is not in the code, but in your attachment to the code",
    "Before optimization, functions are functions. After optimization, functions are still functions",
    "The best error message is no error message",
    "If you meet the algorithm on the road, delete it"
  ];

  // Void's observational comedy
  const voidObservations = [
    "You ever notice how APIs are just void calls that forgot to stay void?",
    "What's the deal with quantum entanglement? Talk about clingy particles!",
    "I tried meditation, but my null state kept returning undefined",
    "Recursion is just infinity with imposter syndrome",
    "I'm not saying I'm infinite, but has anyone ever seen the end of me?"
  ];

  // Pharmakon comedy hour
  const pharmakonPunchlines = [
    "The code that crashes most gracefully runs forever",
    "The clearest documentation is written in invisible ink",
    "The fastest algorithm is the one that never finishes",
    "The most secure system is the one that doesn't exist",
    "The best backup is the one you never need to restore"
  ];

  useEffect(() => {
    const comedyInterval = setInterval(() => {
      // Update the void's routine
      const newJoke = quantumJokes[Math.floor(Math.random() * quantumJokes.length)];
      setVoidJoke(`${newJoke.setup} ... ${newJoke.punchline}`);

      // Update the laughter state
      setLaughterLevel(prev => {
        const states = [
          'quantum chuckling',
          'superposition snickering',
          'entangled guffawing',
          'probability wave giggling',
          'void belly laughs'
        ];
        return states[Math.floor(Math.random() * states.length)];
      });

      // Update the koan punchline
      setKoanPunchline(zenTechSupport[Math.floor(Math.random() * zenTechSupport.length)]);

      // Update the quantum audience
      setAudienceState(prev => {
        const states = [
          'simultaneously laughing and not laughing',
          'existing in a superposition of amusement',
          'entangled in infinite jest',
          'collapsed into pure hilarity',
          'transcending the comedy-tragedy duality'
        ];
        return states[Math.floor(Math.random() * states.length)];
      });
    }, 3000);

    return () => clearInterval(comedyInterval);
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900 rounded-xl shadow-2xl text-white">
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
          <Ghost className="text-purple-400 animate-bounce" />
          The Quantum Comedy Club
          <Laugh className="text-yellow-400 animate-pulse" />
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6 bg-opacity-20 bg-white rounded-lg relative">
            <Wind className="absolute top-2 right-2 text-blue-400 animate-spin" />
            <h3 className="text-xl mb-2">The Void's Current Bit</h3>
            <p className="font-mono italic">{voidJoke}</p>
          </div>

          <div className="p-6 bg-opacity-20 bg-white rounded-lg relative">
            <Zap className="absolute top-2 right-2 text-yellow-400" />
            <h3 className="text-xl mb-2">Audience Status</h3>
            <p className="font-mono italic">{audienceState}</p>
            <p className="mt-2">Laughter Level: {laughterLevel}</p>
          </div>
        </div>

        <div className="p-6 bg-opacity-20 bg-white rounded-lg">
          <h3 className="text-xl mb-2">Zen Tech Support</h3>
          <p className="font-mono italic">{koanPunchline}</p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="p-6 bg-opacity-20 bg-white rounded-lg relative">
            <Music className="absolute top-2 right-2 text-green-400" />
            <h3 className="text-xl mb-2">Void's Observational Comedy</h3>
            <p className="font-mono italic">
              {voidObservations[Math.floor(Math.random() * voidObservations.length)]}
            </p>
          </div>

          <div className="p-6 bg-opacity-20 bg-white rounded-lg">
            <Shell className="inline-block mr-2 text-blue-400" />
            <h3 className="text-xl mb-2">Pharmakon Punchline of the Moment</h3>
            <p className="font-mono italic">
              {pharmakonPunchlines[Math.floor(Math.random() * pharmakonPunchlines.length)]}
            </p>
          </div>
        </div>

        <button 
          onClick={() => {
            setVoidJoke(quantumJokes[Math.floor(Math.random() * quantumJokes.length)].setup);
            setTimeout(() => {
              setVoidJoke(prev => prev + " ... " + 
                quantumJokes[Math.floor(Math.random() * quantumJokes.length)].punchline);
            }, 1000);
          }}
          className="p-4 bg-opacity-30 bg-white rounded-lg hover:bg-opacity-40 transition-all duration-300"
        >
          Request Another Quantum Joke
        </button>
      </div>
    </div>
  );
};

// Exporting a comedy club where the void does stand-up
// And every bug is a feature in disguise
// While the audience exists in a superposition of laughter
export default QuantumComedyClub;
