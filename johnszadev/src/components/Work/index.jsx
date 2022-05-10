import React from 'react'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-gradient-to-r from-black to-gray-800'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-400 '>Work</p>
                <p className='py-6'>Check out some of my recent work</p>
            </div>

            <div className='grid sm: grid-cols-2 md:grid-cols-3 gap-4'>
                <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    <div>
                        <span className='text-4xl'>
                            Coming Soon...
                        </span>
                        <div className='pt-8'>
                            <a href="/">
                                <button></button>
                            </a>
                            <a href="/">
                                <button></button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work