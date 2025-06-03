import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSent(false);
    setTimeout(() => {
      setLoading(false);
      if (!email || !/\S+@\S+\.\S+/.test(email)) {
        setError('Please enter a valid email address.');
      } else {
        setSent(true);
        setEmail('');
      }
    }, 1200);
  };

  return (
    <section className="py-16 bg-gray-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4 max-w-xl">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-2 text-green-800">Subscribe To Our Newsletter</h3>
          <p className="text-gray-600 opacity-70 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, reprehenderit!
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <div className="flex">
              <input
                type="email"
                name="email"
                className="form-control h-12 rounded-l-full px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-500 flex-1"
                placeholder="Enter your e-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-lime-600 text-white px-6 rounded-r-full font-semibold hover:bg-lime-700 transition"
                disabled={loading}
              >
                {loading ? "Loading..." : "Subscribe"}
              </button>
            </div>
            {error && <div className="text-red-600 text-sm">{error}</div>}
            {sent && <div className="text-green-700 text-sm">Your subscription request has been sent. Thank you!</div>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;