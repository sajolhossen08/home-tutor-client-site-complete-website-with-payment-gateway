import React from 'react';
import './Pricing.css'

const Pricing = () => {
    return (
        <section className="pricing w-100 my-carousel my-5 text-center">
            <h2 className="text-light">System of <span style={{color: '#7db9f8'}}>Pricing</span></h2>
            <div id="carouselExampleIndicators" className = "carousel slide" data-ride="carousel">
                <ol className = "carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className = "active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
            <div className = "carousel-inner carousel-div-height">
                <div className = "carousel-item active">
                    <div className="w-50 mx-auto my-5 pricing-div text-center">
                        <h3>Hourly Price</h3>
                        <h2>1$</h2>
                        <p>Lorem ipsum dolor sit amet. samet. </p>
                        <p>+880-1----55</p>
                    </div>
                </div>
                <div className = "carousel-item">
                    <div className="w-50 mx-auto my-5 pricing-div text-center">
                        <h3>Monthly Price</h3>
                        <h2>10$</h2>
                        <p>Lorem ipsum dolor sit amet. samet. </p>
                        <p>+880-1----55</p>
                    </div>
                </div>
                <div className = "carousel-item">
                    <div className="w-50 mx-auto my-5 pricing-div text-center">
                        <h3>Course Price</h3>
                        <h2>100$</h2>
                        <p>Lorem ipsum dolor sit amet. samet. </p>
                        <p>+880-1----55</p>
                    </div>
                </div>
            </div>
            <a className = "carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className = "carousel-control-prev-icon" aria-hidden="true"></span>
                <span className = "sr-only">Previous</span>
            </a>
            <a className = "carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className = "carousel-control-next-icon" aria-hidden="true"></span>
                <span className = "sr-only">Next</span>
            </a>
            </div>
        </section>
    );
};

export default Pricing;