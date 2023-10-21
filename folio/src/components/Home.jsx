import React from 'react'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full'>
        <div className='h-full flex flex-col justify-center w-full px-8 max-w-screen-lg'>
            <h6 className='text-primary pb-1'>Hi, my name is</h6>
            <h2 className='font-bold text-5xl sm:text-8xl'>Yaswanth Sai Vendra</h2>
            <p className='max-w-3xl text-gray-400 py-2'>
                I am an UnderGrad with Knowledge in the fields of FullStack Web Development, Web Security,
                Network Security and Blockchain Development. I do code, play ctfs, hunt bugs and contribute
                to opensource.
            </p>

        </div>
    </div>
  )
}

export default Home