import React , { useState }from 'react';
import {  useHistory } from 'react-router-dom'

function Login() {





  const history= useHistory();
  const handleClick=()=>{
      history.push("/Home");
  }
    return (

        <div>

            <header class="text-gray-700 body-font">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center shadow-lg">
                    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span class="ml-3 text-xl">Udayy App</span>
                    </a>
                    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">

                    </nav>
                    <button class="inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </header>


            <section class="text-gray-700 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
                    <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                        <h1 class="title-font font-medium text-3xl text-gray-900">Udayy builds a solid foundation in literacy and numeracy for children in Grades 1-5
                        </h1>
                        <p class="leading-relaxed mt-4">Udayy is a pioneering, mathematical thinking platform for children.
                        We use interactive games in a small classroom to create a rich and engaging learning environment for children.</p>
                    </div>
                    <div class="lg:w-2/6 md:w-1/2 bg-gray-200 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Login </h2>
                        <input class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Username" type="text"  />
                        <input class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Password" type="password"  />

                        <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"  onClick={handleClick}>Login here</button>
                        <p class="text-xs text-gray-500 mt-3"></p>
                             
                    </div>
                </div>
            </section>

        </div>
    )
}
export default Login;