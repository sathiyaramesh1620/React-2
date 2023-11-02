import React from 'react'
import Figure from 'react-bootstrap/Figure';
import img4 from "../assets/four.jpg"
const About = () => {
  return (
    <div>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                <Figure>
      <Figure.Image
        width={700}
        height={700}
        alt="171x180"
        src={img4} rounded
      />
      <Figure.Caption>
        Nulla vitae elit libero, a pharetra augue mollis interdum.
      </Figure.Caption>
    </Figure>


                </div>
                <div className="col-md-6 text-center" >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus vitae itaque nesciunt omnis enim sunt, suscipit animi amet quibusdam expedita velit aliquid consequuntur quae voluptatem maxime dolor accusantium. Corporis, maxime!
                </div>
            </div>
        </div>

    </div>
  )
}

export default About