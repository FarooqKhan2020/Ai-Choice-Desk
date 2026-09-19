'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section className="bg-gradient-to-br from-cyan-400 via-cyan-500 to-cyan-600 py-20">
      <div className="container mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold text-[#0B1220] mb-4">
            Make your next software decision with better data.
          </h2>
          <p className="text-[#0B1220]/80 mb-8">
            AI-software reviews vetted data to help you choose.
          </p>

          <form onSubmit={handleSubmit} className="flex gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email here"
              className="flex-1 px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 bg-[#0B1220] text-white font-semibold rounded-lg hover:bg-[#1a2332] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
