import React from 'react'

function About() {
  return (
   <div
   id="about"
   className="w-full sm:h-[100vh] min-h-[100vh] bg-[#eee] text-[#444]">
   <div className="max-w-[1000px] mx-auto px-5 pt-36 sm:pt-5 flex flex-col justify-center items-center h-full md:flex-row">
     <div className="flex flex-col flex-1 justify-center">
       <p className="text-lg">Welcome to</p>
       <h2 className="text-4xl inline sm:text-5xl font-bold text-[#978300ee]">
         Sagarmatha Fruits Store
       </h2>
       <p className="text-[#333] text-sm sm:text-base text-justify py-3 max-w-[700px]">
         We are a family owned business that has been operating for over a
         decade. We are located in the heart of Narayanghat, Chitwan Nepal.
         We specialize in providing the freshest fruits to our customers.
       </p>
     </div>
     <div>
       <img src="" alt="Fruits" className="h-auto w-[80%] md:w-[70%] mx-auto rounded-full shadow-[#fefefe] dark:shadow-gray-800" />
     </div>
   </div>
 </div>
  )
}

export default About