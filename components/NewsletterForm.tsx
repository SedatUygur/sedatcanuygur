'use client';

import axios from 'axios';
import React, { useState, FormEvent } from 'react';

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<
    'success' | 'error' | 'loading' | 'idle'
  >('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await axios.post('/api/newsletter', { email });
      setStatus('success');
      setMessage(response.data.message);
      setEmail('');
    } catch (error) {
      setStatus('error');
      if (axios.isAxiosError(error)) {
        setMessage(error.response?.data.error || 'An error occurred.');
      } else {
        setMessage('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <section className="flex flex-col items-center justify-center space-y-6 p-10 text-center">
      <h1 className="text-2xl font-bold">
        {status == 'success'
          ? 'You are all set! Thank you!'
          : status == 'error'
            ? 'Subscription failed!'
            : 'Subscribe to My Newsletter'}
      </h1>
      <p className="text-lg text-black dark:text-white">
        {status == 'success'
          ? "The verification was successful and I'm sure this is a great beginning for something special."
          : status == 'error'
            ? 'Unfortunately, your email was not added to the newsletter list due to reason in the warning message.'
            : 'Join the subscribers list to get the latest news and updates delivered directly to your inbox.'}
      </p>
      <form
        onSubmit={handleSubmit}
        className="mb-4 max-w-md rounded px-8 pt-6 pb-8"
      >
        <div className="input-group flex">
          <input
            className={`mr-1 h-14 grow items-center rounded border px-4 pr-0.5 caret-purple-700 transition delay-75 ease-out outline-none focus-within:border-2 focus-within:border-purple-600 disabled:border-slate-400 ${status == 'error' ? 'border-orange-500' : 'border-purple-600'} `}
            name="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={status === 'loading'}
          />
          <button
            className="focus:shadow-outline rounded bg-violet-700 px-4 py-2 font-bold text-white hover:bg-violet-500 focus:outline-none disabled:bg-slate-400"
            type="submit"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>
        {/* {status === 'success' && <p className="success-message">{message}</p>}
            {status === 'error' && <p className="error-message">{message}</p>} */}
        <div className="server-message pt-4 text-green-600">
          {status === 'success' ? (
            <p className="success-message text-green-600">{message}</p>
          ) : null}
          {status === 'error' ? (
            <p className="error-message text-orange-600">{message}</p>
          ) : null}
        </div>
      </form>
    </section>
  );
};

export default NewsletterForm;
