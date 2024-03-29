import React from 'react'

function Footer() {
  return (
   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
    <div className='mx-auto space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
    </div>
    <div className='mx-auto  space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>COMMUNITY</h5>
        <p>Accessibility</p>
        <p>Thats a fake site</p>
        <p>Thats a clone</p>
        <p>Referals accepted</p>
        <p>rito </p>
    </div>
    <div className='mx-auto  space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>HOST</h5>
        <p>Learn Next Js</p>
        <p>Learn React</p>
        <p>Learn Tailwind</p>
        <p>Learn Mern stack</p>
        <p>Learn Springboot</p>
    </div>
    <div className='mx-auto  space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>SUPPORT</h5>
        <p>Help centre</p>
        <p>Trust & Safety</p>
        <p>Say Hi Youtube</p>
        <p>Contact Us</p>
        <p>Email Us</p>
    </div>
   </div>
  )
}

export default Footer