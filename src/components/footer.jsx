import React from 'react';

function footer(props) {
    return (
        <>
           <section className="footer">
                <div className="row border-bottom">
                    <div className="col-md-2">
                        <img src="images/logo-gray.svg" alt="" width={'70%'}/>
                    </div>
                    <div className="col-md-10">
                    <div className="row">
                        <div className="col-md-3">
                            <h4 className='pb-3'>PRODUCTS</h4>
                            <ul>
                                <li><a href="#" className='nav-link'>jira software</a></li>
                                <li><a href="#" className='nav-link'>jira align</a></li>
                                <li><a href="#" className='nav-link'>jira service managment</a></li>
                                <li><a href="#" className='nav-link'>Confluence</a></li>
                                <li><a href="#" className='nav-link'>Trello</a></li>
                                <li><a href="#" className='nav-link'>Bitbucket</a></li>
                                <li className='py-4'><a href="#" className='nav-link text-primary fw-bold'>View all products</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                        <h4 className='pb-3'>RESOURCES</h4>
                            <ul>
                                <li><a href="#" className='nav-link'>Technical Support</a></li>
                                <li><a href="#" className='nav-link'>Purchasing & licensing</a></li>
                                <li><a href="#" className='nav-link'>Atlassian Community</a></li>
                                <li><a href="#" className='nav-link'>Knowledge base</a></li>
                                <li><a href="#" className='nav-link'>Marketplace</a></li>
                                <li><a href="#" className='nav-link'>My Account</a></li>
                                <li className='py-4'><a href="#" className='nav-link text-primary fw-bold'>Create support ticket</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                        <h4 className='pb-3'>EXPAND & LEARN</h4>
                            <ul>
                                <li><a href="#" className='nav-link'>Partners</a></li>
                                <li><a href="#" className='nav-link'>Training & Certification</a></li>
                                <li><a href="#" className='nav-link'>Documentation</a></li>
                                <li><a href="#" className='nav-link'>Developer Resources</a></li>
                                <li><a href="#" className='nav-link'>Enterprise services</a></li>
                                <li className='py-4'><a href="#" className='nav-link text-primary fw-bold'>View all resources</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                        <h4 className='pb-3'>ABOUT ATLASSIAN</h4>
                            <ul>
                                <li><a href="#" className='nav-link'>Company</a></li>
                                <li><a href="#" className='nav-link'>Careers</a></li>
                                <li><a href="#" className='nav-link'>Events</a></li>
                                <li><a href="#" className='nav-link'>Blogs</a></li>
                                <li><a href="#" className='nav-link'>Atlassian Foundation</a></li>
                                <li><a href="#" className='nav-link'>Investor Relations</a></li>
                                <li><a href="#" className='nav-link'>Trust & Security</a></li>
                                <li className='py-4'><a href="#" className='nav-link text-primary fw-bold'>Contact us</a></li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="d-flex links flex-wrap">
                    <ul>
                    <li>
                    <i class="fa-solid fa-globe"></i>
                    <select class="selectpicker" data-width="fit">
                    <option data-content='<span class="flag-icon flag-icon-us"></span> English'>English</option>
                    <option  data-content='<span class="flag-icon flag-icon-mx"></span> Español'>Español</option>
                    </select>
                    </li>
                        <li><a href="#" className='nav-link'>Privacy policy</a></li>
                        <li><a href="#" className='nav-link'>Terms</a></li>
                        <li><a href="#" className='nav-link'>Modern Slavery Act</a></li>
                        <li><a href="#" className='nav-link'>Modern Slavery Act</a></li>
                        <li><a href="#" className='nav-link'>Copyright © 2023 Atlassian</a></li>
                    </ul>
                    <div className="social ps-5">
                        <ul>
                            <li>
                                <i class="fa-brands fa-square-facebook"></i>
                            </li>
                            <li>
                                <i class="fa-brands fa-twitter"></i>
                            </li>
                            <li>
                            <i class="fa-brands fa-linkedin"></i>
                            </li>
                            <li>
                            <i class="fa-brands fa-youtube"></i>
                            </li>
                        </ul>
                    </div>
                </div>
           </section> 
        </>
    );
}

export default footer;