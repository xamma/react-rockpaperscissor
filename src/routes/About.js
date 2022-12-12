import React from 'react'

const About = () => {
  return (
    <div className='about--screen'>
      <h1>About</h1>
      <p>This is a project made with the <b>React.js</b> Framework and part of a series to learn software-engineering.</p>
      <p>The website is hosted via <b>Github-Pages</b>.</p>
      <p>I wrote the same application in Python and Java to show the differences of the OOP approach.</p>
      <p>The Apps are containerized as well, so you can download the image from my Dockerhub and run them locally on Docker.</p>
      <a className="github--link" href="https://github.com/xamma/python-rockpaperscissor" target="_blank" rel="noreferrer">
        Python-Version
      </a>
      <br></br>
      <a className="github--link" href="https://github.com/xamma/java-rockpaperscissor" target="_blank" rel="noreferrer">
        Java-Version
      </a>
      <br></br>
      <h3>Check my Github for more content</h3>
      <a className="github--link" href="https://github.com/xamma" target="_blank" rel="noreferrer">
        Visit my GitHub
      </a>
    </div>
  )
}

export default About