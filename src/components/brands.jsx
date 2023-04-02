import React from 'react';

function brands(props) {
    return (
        <>
            <h3 className='text-center fw-5'>Join the teams that achieve the impossible every day</h3>   
            <a href="#" className='fw-5 play fs-3 text-center nav-link'><i class="fa-solid fa-circle-play"></i> watch a customer story</a>
            <section className="brands row">
                <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12">
                    <a href="#">
                        <img src="images/kiva.svg" alt="" />
                    </a>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12">
                    <a href="#">
                        <img src="images/twitter.svg" alt="" />
                    </a>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12">
                    <a href="#">
                        <img src="images/redfin.svg" alt="" />
                    </a>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12">
                    <a href="#">
                        <img src="images/nasa.svg" alt="" />
                    </a>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12">
                    <a href="#">
                        <img src="images/audi.svg"></img>
                    </a>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12">
                    <a href="#">
                        <img src="images/castlight.svg" alt="" />
                    </a>
                </div>
            </section>
        </>
    );
}

export default brands;