import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form data:', formData);
    try {
      console.log('Sending request to:', '/api/auth/signup');
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log('Response status:', res.status);
      console.log(
        'Response headers:',
        Object.fromEntries(res.headers)
      );
      const data = await res.json();
      console.log('Response data:', data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">
        Sign Up
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-5"
      >
        <input
          type="text"
          placeholder="User Name"
          id="username"
          className="bg-slate-100 p-3
          rounded-lg"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-slate-100 p-3
          rounded-lg"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-100 p-3
          rounded-lg"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          Sign Up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to="/sign-in">
          <span className="text-blue-500">Sign In</span>
        </Link>
      </div>
    </div>
  );
}
