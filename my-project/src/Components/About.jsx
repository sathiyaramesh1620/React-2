import React from 'react'
import img from "../assets/about.svg"
import Button from '../Layout/Button'
import Heading from '../Layout/Heading'
import {Link} from "react-scroll"
const About = () => {
  return (
    <div className=" md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 mt-14">
<div className=" w-full md:w-2/4">
<img src={img} alt="img" />
</div>
        <div className="w-full md:w-2/4 text-center space-y-2">
        <Heading title1="About" title2="Us?" />
            <p className=" text-lightText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt rerum quam, soluta temporibus molestias maxime similique nesciunt qui maiores voluptatum ullam. Soluta explicabo officia quam recusandae, ducimus nam error voluptatum.</p>
            <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title="Contact Us" />
        </Link>

        </div>
    </div>
  )
}

export default About