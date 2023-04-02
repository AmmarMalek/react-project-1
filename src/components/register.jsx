import React from 'react';

function register(props) {
    return (
        <>
         <div className="reg-bg d-flex align-items-center justify-content-center position-relative">
            <div className='register position-absolute d-flex align-items-center justify-content-between p-5 flex-wrap'>
                <img className='px-5' src="images/team.svg" alt="" height={"50px"}/>
                <p className='text-white fs-3 px-5'>Hear that? It’s team harmony. Learn how to tackle the <br/>impossible at Team ‘23, April 18–20.</p>
                <a href="" className='nav-link px-5 fs-3'>Register now</a>
            </div>
         </div>   
        </>
    );
}

export default register;