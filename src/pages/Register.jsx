import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';
import { handleInputChange } from '../utilities/handleInputChange';

const Register = () => {
  const { handleAuth } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
  });

  const onRegistrationSubmit = async (e) => {
    e.preventDefault();

    const resp = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          token: '5678',
          user: {
            name: formData.name,
            surname: formData.surname,
            email: formData.email,
          },
        });
      }, 2000);
    });

    handleAuth(resp);

    navigate('/posts');
  };
  return (
    <div>
      <form className="mx-auto max-w-md">
        <div className="group relative z-0 mb-5 w-full">
          {/* Email */}
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
            placeholder="Insert Your Email"
            required
          />
          <label
            htmlFor="floating_email"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
          >
            Email address
          </label>
        </div>

        {/* Password */}
        <div className="group relative z-0 mb-5 w-full">
          <input
            type="password"
            name="floating_password"
            id="floating_password"
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
            placeholder="*********"
            required
          />
          <label
            htmlFor="floating_password"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
          >
            Password
          </label>
        </div>

        {/* Name */}
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="group relative z-0 mb-5 w-full">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
              placeholder="Insert Your Name"
              required
            />
            <label
              htmlFor="floating_first_name"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
            >
              First name
            </label>
          </div>

          {/* Surname */}
          <div className="group relative z-0 mb-5 w-full">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
              placeholder="Insert Your Surname"
              required
            />
            <label
              htmlFor="floating_last_name"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
            >
              Last name
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
        >
          Submit
        </button>

        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
          Already Signed Up?{' '}
          <Link
            to="/login"
            className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
          >
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
