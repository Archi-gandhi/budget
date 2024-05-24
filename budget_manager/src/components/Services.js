import React from 'react';
import service1 from "../assets/images/services5.jpg"
import service2 from "../assets/images/service2.jpeg"
import service3 from "../assets/images/service3.jpeg"
import service4 from "../assets/images/service4.png"


const Services = () => {
  return (
    <div className="services-section" id='services'>
      <h2 className="services-section__title">Our Services</h2>
      <div className="services-section__container">
        <div className="services-section__card">
          <div className="services-section__card-image">
            <img src={service1} alt="Expense Tracking" />
          </div>
          <h3 className="services-section__card-title">Expense Tracking</h3>
          <p className="services-section__card-description">
            Our advanced expense tracking feature allows you to easily categorize
            and monitor your spending, giving you a clear picture of where your
            money is going.
          </p>
        </div>
        <div className="services-section__card">
          <div className="services-section__card-image">
            <img src={service2} alt="Budget Planning" />
          </div>
          <h3 className="services-section__card-title">Budget Planning</h3>
          <p className="services-section__card-description">
            With our intuitive budget planning tools, you can create customized
            budgets, set spending limits, and receive alerts to keep your
            finances on track.
          </p>
        </div>
        <div className="services-section__card">
          <div className="services-section__card-image">
            <img src={service3} alt="Financial Analysis" />
          </div>
          <h3 className="services-section__card-title">Financial Analysis</h3>
          <p className="services-section__card-description">
            Our advanced financial analysis features provide detailed insights
            and reports, helping you make informed decisions about your money and
            reach your financial goals.
          </p>
        </div>
        <div className="services-section__card">
          <div className="services-section__card-image">
            <img src={service4} alt="Investment Tracking" />
          </div>
          <h3 className="services-section__card-title">Investment Tracking</h3>
          <p className="services-section__card-description">
            Easily monitor your investment portfolio and track your returns with
            our comprehensive investment tracking tools.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
