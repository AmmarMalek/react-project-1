import React from 'react';

function home(props) {
    return (
        <>
           <section className='home'>
                    <div className="content">
                        <h1 className='heading'>It's possible <br />
                            <em className='ms-5'>with teamwork</em>
                        </h1>
                    </div>
                    <div className="img-div">
                        <img src="images/banner-1.jpg" alt="" className='img-fluid' />
                    </div>
                </section>
        </>
    );
}

export default home;