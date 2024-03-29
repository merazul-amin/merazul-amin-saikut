import React from 'react';
import topImg from "@/assets/top-photo.jpg";
import linkedIn from "@/assets/linkedin.png";
import facebook from "@/assets/facebook.png";
import twitter from "@/assets/twitter.png";
import email from "@/assets/email.png";
import instagram from "@/assets/instagram.png";
import github from "@/assets/github.png";
import Typewriter from 'typewriter-effect';
export const TopBanner = () => {
  return (
    <div className='w-[90% mx-auto]'>
    <div className="hero">
        <div className="hero-content w-[90%] mx-auto flex-col lg:flex-row-reverse">
            <div className='lg:w-[50%] box mx-auto relative'>
                <img src={topImg} alt='/' className="shadow-2xl lg:w-[70%]  mx-auto rounded-lg" />
                <div className='lg:w-[70%] ml-3 lg:ml-0 mt-2 lg:mt-0 absolute top-0 left-0'>
                    <a target='blank' href="https://www.linkedin.com/in/md-merazul-amin/"><img className='w-10 h-10' src={linkedIn} alt="" /></a>
                    <a target='blank' href="https://github.com/merazul-amin"><img className='w-10 h-10 mt-5 bg-sky-600' src={github} alt="" /></a>
                    <a target='blank' href="https://www.facebook.com/merazul.amin"> <img className='w-10  my-5 h-10' src={facebook} alt="" /></a>
                    <a target='blank' href="https://twitter.com/merazul_amin">  <img className='w-10 h-10' src={twitter} alt="" /></a>
                    <a target='blank' href="https://www.instagram.com/merazul_amin/">  <img className='w-10 mt-5 h-10' src={instagram} alt="" /></a>
                    <a className='hidden sm:block' target='blank' href="mailto:merazulamin2122@yahoo.com">  <img className='w-10 mt-5 h-10' src={email} alt="" /></a>
                </div>
            </div>
            <div className='lg:w-[50%] mx-auto my-8 lg:my-0 text-white'>
                <h1 className="text-4xl font-bold">Hi, I am Md <span className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>
                    <Typewriter
                        options={{
                            strings: ['Merazul Amin'],
                            autoStart: true,
                            loop: true,
                        }}
                    /></span></h1>
                <h1 className=''>Junior <span className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>Mern Stack</span> Web Developer</h1>
                <p className="py-6 text-white">
                    Hello good people. I am Merazul Amin Saikut, a Mern Stack Web Developer.  I am from Bangladesh. District is Cumilla. I skilled in different technologies.You can have a look in my resume.
                </p>

                <a href='https://drive.google.com/uc?id=160LITc1ViZ0ncfUAcUC04Tiv4Qc_575g&export=download'> <button className="btn btn-primary">Download My Resume</button></a>
            </div>
        </div>
    </div>
</div>
  )
}
