import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import logo from './assets/zoo2you-logo.png';

const highlights = [
  { icon: '🐾', title: 'Interactive Experiences', desc: 'Hands-on animal encounters for every child.' },
  { icon: '🧪', title: 'STEM-Aligned Learning', desc: 'Science-based sessions that spark curiosity.' },
  { icon: '🧤', title: 'Certified Handlers', desc: 'Safety and fun with trained animal experts.' }
];

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/animals', label: 'Our Animals' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/programs', label: 'Programs' },
  { to: '/contact', label: 'Contact' },
];

function Home() {
  return (
    <>
      <header className="w-full flex flex-col items-center pt-8 pb-4">
        <img
          src={logo}
          alt="Zoo to You Logo"
          className="w-80 md:w-[28rem] drop-shadow-xl rounded-3xl border-8 border-white bg-white/80 animate-bounce"
          style={{ boxShadow: '0 8px 32px 0 rgba(34, 139, 34, 0.25)' }}
        />
        <h1 className="mt-6 text-4xl md:text-5xl font-bold text-[#2E7D32] font-baloo drop-shadow-lg text-center">
          Bringing Wildlife Wonders to the Classroom
        </h1>
        <p className="mt-2 text-lg text-[#6D4C41] font-semibold">📍 Based in Bangalore, India</p>
        <div className="mt-6 flex gap-4">
          <button className="bg-[#FF6F61] hover:bg-[#FFD54F] text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-300">
            Book a Demo
          </button>
          <button className="bg-[#4FC3F7] hover:bg-[#FFD54F] text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-300">
            Watch Video
          </button>
        </div>
      </header>
      <section className="w-full max-w-3xl mx-auto mt-8 px-4">
        <div className="bg-white/80 rounded-2xl shadow-xl p-6 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-[#2E7D32] mb-2 text-center">Why take students to the zoo when the zoo can come to them?</h2>
          <p className="text-[#6D4C41] text-center mb-4">"Zoo to You" is a one-of-a-kind mobile education program that delivers engaging, hands-on wildlife encounters right at your school.</p>
          <div className="flex flex-col md:flex-row gap-6 w-full justify-center mt-4">
            {highlights.map((h, i) => (
              <div key={i} className="flex flex-col items-center bg-[#FFD54F]/60 rounded-xl p-4 shadow-md w-full md:w-1/3">
                <span className="text-4xl mb-2">{h.icon}</span>
                <h3 className="font-bold text-lg text-[#2E7D32] mb-1">{h.title}</h3>
                <p className="text-[#6D4C41] text-center text-sm">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const About = () => <div className="p-8 text-center">About Us: Zoo to You brings exotic animals to schools for hands-on, STEM-aligned learning!</div>;
const Animals = () => <div className="p-8 text-center">Our Animals: Guinea Pigs, Parrots, Iguana, Tarantulas, and more!</div>;
const HowItWorks = () => <div className="p-8 text-center">How It Works: We bring the zoo to your school, set up, teach, and clean up!</div>;
const Programs = () => <div className="p-8 text-center">Programs: School visits, camps, events, and more!</div>;
const Contact = () => <div className="p-8 text-center">Contact Us: connect@zootoyou.in | +91-XXXXXXXXXX</div>;

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFD54F] via-[#4FC3F7] to-[#2E7D32] flex flex-col items-center relative overflow-x-hidden">
      <nav className="w-full flex justify-center gap-4 py-4 bg-white/70 shadow-md sticky top-0 z-10">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="font-bold text-[#2E7D32] hover:text-[#FF6F61] px-4 py-2 rounded transition-colors duration-200"
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <main className="flex-1 w-full flex flex-col items-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/animals" element={<Animals />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App; 
   // test change