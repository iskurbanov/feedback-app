import axios from 'axios'
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  const name = useRef()
  const email = useRef()
  const password = useRef()
  const password2 = useRef()

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password2.current.value !== password.current.value) {
      password.current.setCustomValidity("Passwords don't match")
    } else {
      const user = {
        name: name.current.value,
        email: email.current.value,
        password: password.current.value
      }
      try {
        axios.post('/apps/feedback', user)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error)
      }
    }
  }


  return (
    <div className="bg-gray-50 flex flex-col justify-center py-24">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={onSubmit}>
            <div>
              <label htmlFor="name" className="block font-medium text-gray-700">
                Full Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  ref={name}
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  ref={email}
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  ref={password}
                  required
                  min="6"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block font-medium text-gray-700">
                Confirm Password
              </label>
              <div className="mt-1">
                <input
                  id="password2"
                  name="password2"
                  type="password"
                  autoComplete="current-password"
                  ref={password2}
                  required
                  min="6"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm font-medium text-white bg-black hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                Sign up
              </button>
              {/* <p className="mt-2 text-center text-gray-600">
                Or{' '}
                <Link to="/login" className="font-medium text-black hover:text-black">
                  Sign in here
                </Link>
              </p> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}


export default Register