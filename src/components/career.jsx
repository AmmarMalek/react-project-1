import React from 'react';

function career(props) {
    return (
        <>
           <section className="career text-center position-relative">
            <h4 className='text-uppercase'>careers</h4>
            <h1>We can’t do it alone</h1>
            <p className='pt-4'>We have an ambitious road ahead, and we’re looking for people to join <br/> our global team to help shape the future of Atlassian.</p>
            <button className='py-2 px-4'>Join the team</button>
            <img src="images/bg-1.png" className='bg-1 img-fluid position-absolute' alt="" width={'550px'}/>
            <img src="images/bg-2.png" className='bg-2 img-fluid position-absolute' alt="" width={'550px'}/>
           </section> 
        </>
    );
}

export default career;