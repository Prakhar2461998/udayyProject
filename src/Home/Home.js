import React, { useState } from 'react';
import {  useHistory } from 'react-router-dom'
import Iframe from 'react-iframe'
function Home(){
    const [state, setstate] = useState('Enter Url')
    const[statetwo, setstatetwo]=useState('Enter Url')
  
  
    const history= useHistory();
    const handleClick=()=>{
        history.push("/");
    }
    
    return(

        <div>
        <header class="text-gray-700 body-font">
        <div class="container mx-auto flex flex-wrap p-5 shadow-lg flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center  text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl">Udayy App</span>
          </a>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <input class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Enter  Url" type="text" id="urlone" value={state}   onChange={(e)=> setstate(e.target.value)} />
        
          
          <input class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Enter  Url" type="text"  id="urltwo" value={statetwo} onChange={(e)=> setstatetwo(e.target.value)}/>
        
          </nav>
          <button class="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0" onClick={handleClick}>Log Out
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
        <section class="text-gray-700 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 lg:w-1/2 md:w-full ">
            <Iframe url={state}
        width="450px"
        height="450px"
        id="Idone"
        className="myClassname"
        display="initial"
        position="relative"/>
            
            </div>
            <div class="p-4 lg:w-1/2 md:w-full">
            <Iframe url={statetwo}
            width="450px"
            height="450px"            
            id="Idtwo"
            className="myClassname"
            display="initial"
            position="relative"/>
            </div>
          </div>
        </div>
      </section>
        </div>
    )
}

export default Home;

