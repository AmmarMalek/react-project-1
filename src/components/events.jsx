import React from 'react';

function events(props) {
    return (
        <>
            <section className="events row">
                <div className="col-md-4 py-5">
                    <h4 className='text-uppercase'>events</h4>
                    <h1>Hear from today’s fearless builders and innovators</h1>
                    <a href="#">learn more</a>
                </div>
                <div className='col-md-4'>
                    <img src="images/b-4.jpg" alt="" width={'100%'}/>
                </div>
                <div className='col-md-4'>
                    <img src="images/b-5.png" alt="" width={'100%'}/>
                </div>
            </section> 
        </>
    );
}

export default events;