import React from 'react'

import about1 from "../assets/images/about1.jpg"
import about2 from "../assets/images/about2.webp"
import about3 from "../assets/images/about3.png"

function About() {
  return (
    <>
    <section className="about-section">
        <div className="about-container">
          <div className="about-image">
            <img src={about1} alt="Our Story" />
          </div>
          <div className="about-content">
            <h2>Our Story</h2>
            <p>Budget Manager, our mission is to empower individuals and families to take control of their finances and achieve their financial goals. The idea for our platform was born when our founders  recognized the need for a user-friendly budget management tool based on their own personal experiences.

Through extensive research and feedback from our growing community, we've developed Budget Manager into a robust and intuitive platform that helps users track their income, expenses, and savings effortlessly. Our goal is to provide a supportive, educational, and empowering environment where everyone can develop healthier financial habits and secure a brighter financial future.

Join us on this journey as we continue to redefine the way people manage their budgets and reach their financial dreams.


            </p>
          </div>
        </div>
        <div className="about-container reverse">
          <div className="about-content">
            <h2>Our Mission</h2>
            <p>
            At Budget Manager, our mission is to empower individuals and families to take control of their financial well-being. Recognizing the challenges of effective budget management, we have developed an intuitive and user-friendly platform to help our users track their income, expenses, and savings with ease.

Our goal is to create a supportive and educational environment where everyone can develop healthier financial habits and secure a brighter financial future. By providing the tools and resources necessary for sound financial decision-making, we strive to redefine the way people manage their budgets and achieve their long-term financial goals.

Through our commitment to innovation and community engagement, we are dedicated to empowering our users to make informed decisions, eliminate financial stress, and unlock their full financial potential.


            </p>
          </div>
          <div className="about-image">
            <img src={about2} alt="Our Mission" />
          </div>
        </div>
        <div className="about-container">
          <div className="about-image">
            <img src={about3} alt="Our Team" />
          </div>
          <div className="about-content">
            <h2>Our Team</h2>
            <p>
            The driving force behind Budget Manager is our dedicated and passionate team. Guided by our mission to empower individuals and families to achieve financial well-being, we've assembled a diverse group of experts who bring a wealth of knowledge and experience to the table.

 our Co-Founder and CEO, has a background in finance and technology, and is dedicated to revolutionizing the way people manage their personal budgets. Archita, our Chief Product Officer, is an experienced UX designer who has helped shape the intuitive and user-friendly interface of our platform.

, our Lead Developer, is the mastermind behind the robust technical infrastructure that powers our platform, ensuring seamless functionality and data security. , our Content Manager, is passionate about financial education and works tirelessly to create informative and engaging resources for our users.

Together, our team is committed to continuous innovation, community engagement, and providing the best possible experience for our users.

 



            </p>
          </div>
        </div>
      </section>
      
      
    </>
  )
}

export default About
