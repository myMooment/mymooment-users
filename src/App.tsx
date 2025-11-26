import React, { useState } from 'react';
import { Send, Infinity } from 'lucide-react';

export default function ComingSoon() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!email) {
      setError('Please enter your email');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email');
      return;
    }

    setSubmitted(true);
    setError('');
    setEmail('');

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-red-500 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-red-800 rounded-full blur-3xl opacity-30"></div>

      <div className="relative z-10 max-w-2xl w-full">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-red-600">
          {/* Header with logo text */}
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-black mb-2">
              <span className="text-red-600">COMING</span>
              <span className="text-red-600"> SOON</span>
            </h1>
            <h2 className="text-4xl md:text-5xl italic text-gray-800 mb-2" style={{ fontFamily: 'cursive' }}>
              M
              <Infinity className='inline w-12 h-12 text-pink-600 mx-1' strokeWidth={2} />
              ment
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-orange-500 mx-auto rounded-full"></div>
          </div>

          {/* Content */}
          <div className="text-center mb-10">
            <p className="text-gray-600 text-lg font-medium mb-2">
              ✨ Something delicious is brewing ✨
            </p>
            <p className="text-gray-500 text-base">
              Get notified the moment we launch and enjoy exclusive early-bird offers
            </p>
          </div>

          {/* Email Input Section */}
          <div className="mb-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError('');
                }}
                onKeyPress={handleKeyPress}
                placeholder="Please enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-red-600 focus:outline-none transition text-gray-800 placeholder-gray-400"
              />
              <button
                onClick={handleSubmit}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition transform hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                <Send size={20} />
                <span className="hidden sm:inline">Notify</span>
              </button>
            </div>
            {error && <p className="text-red-600 text-sm mt-2 font-medium">{error}</p>}
          </div>

          {/* Success message */}
          {submitted && (
            <div className="bg-green-100 border-2 border-green-500 rounded-lg p-4 text-center animate-bounce">
              <p className="text-green-700 font-bold">✓ Thank you! We'll notify you soon.</p>
            </div>
          )}

          {/* Social hint */}
          <div className="text-center pt-6 border-t border-gray-300">
            <p className="text-gray-600 text-sm">
              Follow us for updates and sneak peeks 🍔🍕
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-white">
          <p className="text-sm opacity-90">Stay hungry. Stay tuned.</p>
        </div>
      </div>
    </div>
  );
}