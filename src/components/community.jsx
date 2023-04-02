import React from 'react';

function community(props) {
    return (
        <>
            <section className="community row">
                <div className="col-md-4 mt-5 pt-5">
                    <h5 className='text-uppercase'>team essentials</h5>
                    <h1>
                    Explore resources to unleash the potential <br/> of your team
                    </h1>
                </div>
                <div className="col-md-8">
                    <img src="images/community.jpg" className='img-fluid' alt="" />
                    <div className='content text-center p-4'>
                        <h2 className='py-2'>Atlassian Community</h2>
                        <p className='py-2'>Connect globally and meet locally to get more out of our products.</p>
                        <div className='d-flex align-items-center justify-content-center py-2 flex-wrap'>
                        <a href="#" className='nav-link px-5'>search the forum</a>
                        <a href="#" className='nav-link px-5'>join our community</a>
                        </div>
                    </div>
                </div>
            </section> 
        </>
    );
}

export default community;