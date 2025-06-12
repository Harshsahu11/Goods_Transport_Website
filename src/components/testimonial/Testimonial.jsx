import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'
import img1 from './harsh.jpg'
import img2 from './harsh.jpg'
import img3 from './ashish.jpg'


function Testimonial() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <div>
            <section className=''>
                <div className=" container mx-auto px-5 py-10">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{ color: mode === 'dark' ? 'white' : '' }}>Developers</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{ color: mode === 'dark' ? 'white' : '' }}>Who are <span className=' text-pink-500'>Developers </span> Of this</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={img1} />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">🎓 Computer Science and Engineering Student | Java Developer | Full-Stack Web Developer</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Harsh Sahu</h2>
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500">Pre Final Year Student</p>
                            </div>
                        </div>

                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={img2} />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed">Full Stack || Python Programming 4⭐Hacker Rank || A+ RCPL B-tech(CSE) || Hindustan collage of science and technology</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Aditya Pandey</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">Pre-Final Year Student</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={img3} />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">B.Tech computer Science Student </p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Ashish Yadav</h2>
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="text-gray-500">Pre-Final Year Student</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial