import React from 'react';

function header(props) {

  function product(){
    document.querySelector('.drop-down').classList.toggle('active');
    document.querySelector('.drop-down2').classList.remove('active');
    document.querySelector('.drop-down3').classList.remove('active');
}

function close(){
  document.querySelector('.drop-down').classList.remove('active');
}

function teams(){
  document.querySelector('.drop-down2').classList.toggle('active');
  document.querySelector('.drop-down').classList.remove('active');
  document.querySelector('.drop-down3').classList.remove('active');
}

function close2(){
document.querySelector('.drop-down2').classList.remove('active');
}

function support(){
  document.querySelector('.drop-down3').classList.toggle('active');
  document.querySelector('.drop-down2').classList.remove('active');
  document.querySelector('.drop-down').classList.remove('active');
}

function close3(){
  document.querySelector('.drop-down3').classList.remove('active');
  }

    return (
        <>
    <div className='position-relative'>
    <nav class="navbar navbar-expand-lg navbar-light py-4 header">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">
        <img src="images/mainlogo.svg" alt="logo" height={"25px"} />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon text-dark"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-dark fs-4 ps-5" href="#" id="navbarDropdown products" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={product}>
            Products
          </a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-dark fs-4 ps-5" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={teams}>
            For teams
          </a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-dark fs-4 ps-5" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={support}>
            Support
          </a>
        </li>
      </ul>
      <button className='btn fs-4 px-4 try-now text-white'>Try now</button>
      <button className='btn px-4 fs-4 ms-2 buy-now'>Buy now</button>
      <i class="fa-solid fa-magnifying-glass fs-4 ms-2 text-secondary"></i>
    <span className='devider'></span>
    <div className='account d-flex align-items-center gap-4 py-2 px-2'>
      <i class="fa-solid fa-user fs-4 ps-3"></i>
      <span className='fs-4 text-primary'>My account</span>
      <i class="fa-solid fa-caret-down text-primary"></i>
    </div>
    </div>
  </div>
</nav>

<section className="position-absolute drop-down border-top border-1 border-bottom">

<i class="fa-solid fa-xmark fs-1 position-absolute" onClick={close}></i>

      <div className="row">
        <div className="col-md-8 border-end border-1 border-remove">
          <h4>FEATURED</h4>

          <div className="row">
            <div className="col-md-6">
            <div className='d-flex py-4 align-items-center gap-5'>
              <div className="img-logo p-3">
                <img src="images/jira.svg" alt="" width={"40px"} />
              </div>
              <div>
                <h5>jira software</h5>
                <p>project and issue tracking</p>
              </div>
            </div>

            <div className='d-flex py-4 align-items-center gap-5'>
              <div className="img-logo p-3">
                <img src="images/jira service.svg" alt="" width={"40px"} />
              </div>
              <div>
                <h5>Jira Service Management</h5>
                <p>High-velocity ITSM</p>
              </div>
            </div>
          </div>
            <div className="col-md-6">
            <div className='d-flex py-4 align-items-center gap-5'>
              <div className="img-logo p-3">
                <img src="images/confluence.svg" alt="" width={"40px"} />
              </div>
              <div>
                <h5>confluence</h5>
                <p>Content collaboration</p>
              </div>
            </div>

            <div className='d-flex py-4 align-items-center gap-5'>
              <div className="img-logo p-3">
                <img src="images/trello.svg" alt="" width={"40px"} />
              </div>
              <div>
                <h5>Trello</h5>
                <p>Visual project management</p>
              </div>
            </div>
            </div>
          </div>

          <a href="#" className='py-5'>View all products <i class="fa-solid fa-arrow-right"></i></a>

          <div className='product py-2 px-5 me-5 mt-4'>
              <div className='d-flex  align-items-center justify-content-between'>
                  <div className='d-flex align-items-center justify-content-center'>
                  <i class="fa-solid fa-lightbulb"></i>
                  <div>
                    <h5>New Products from point A</h5>
                    <p>innovations from atlassian</p>
                  </div>
                  </div>
                  <a href="#" className='py-5'>View all <i class="fa-solid fa-arrow-right"></i></a>
              </div>
              <div className="row">
            <div className="col-md-6">
            <div className='d-flex py-4 align-items-center gap-5'>
              <div className="img-logo p-3">
                <img src="images/jira.svg" alt="" width={"40px"} />
              </div>
              <div>
                <h5>jira software</h5>
                <p>project and issue tracking</p>
              </div>
            </div>

          </div>
            <div className="col-md-6">
            <div className='d-flex py-4 align-items-center gap-5'>
              <div className="img-logo p-3">
                <img src="images/confluence.svg" alt="" width={"40px"} />
              </div>
              <div>
                <h5>confluence</h5>
                <p>Content collaboration</p>
              </div>
            </div>

            </div>
          </div>
          </div>
          <hr className='my-5' />
          <h5>Marketplace</h5>
          <p>Connect thousands of apps for all your Atlassian products <i class="fa-solid fa-arrow-right"></i> </p>


        </div>
        <div className="col-md-4 px-5 position-relative">
          <h4>BROWSE BY SOLUTION</h4>
          <div className='pt-5'>
                <h4>Agile & DevOps</h4>
                <p>Run a world-class agile software organization from discovery to delivery and operations</p>
          </div>
          <div className='pt-3'>
                <h4>IT Service Management</h4>
                <p>Enable dev, IT ops, and business teams to deliver great service at high velocity</p>
          </div>
          <div className='pt-3'>
                <h4>Work Management</h4>
                <p>Empower autonomous teams without losing organizational alignment</p>
          </div>

          <h4 className='py-5'>BROWSE BY TEAM TYPE</h4>
          <ul>
            <li>
              <a href="#">Enterprise</a>
            </li>
            <li>
              <a href="#">Small business</a>
            </li>
            <li>
              <a href="#">Startup</a>
            </li>
            <li>
              <a href="#">None-profit</a>
            </li>
          </ul>
        </div>
      </div>

</section>


<section className="position-absolute drop-down2 border-top border-1 border-bottom">

<i class="fa-solid fa-xmark fs-1 position-absolute" onClick={close2}></i>

      <div className="row">
        <div className="col-md-8 border-end border-1 border-remove">

          <div className="row">
          <div className="col-md-4">
          <h4>FEATURED</h4>

          <div className='pt-5'>
            <h4>Startups</h4>
            <p>Great for Startup, from incubator to IPO</p>
          </div>
          <div className='pt-3'>
            <h4>Small business</h4>
            <p>Get the right tools for your growing business</p>
          </div>
          <div className='pt-3'>
            <h4>Enterprise</h4>
            <p>learn how we make big teams successful</p>
          </div>
          </div>
          <div className="col-md-4">
              <h4>BY TEAM FUNCTION</h4>

              <div className='pt-5'>
                <h4>Software</h4>
                <p>Plan, build, & ship quality products</p>
              </div>
              <div className='pt-3'>
                <h4>Marketing</h4>
                <p>Bring together a winning strategy</p>
              </div>
              <div className='pt-3'>
                <h4>HR</h4>
                <p>Streamline people management</p>
              </div>
              <div className='pt-3'>
                <h4>Legal</h4>
                <p>Operate securely and reliably</p>
              </div>
              <div className='pt-3'>
                <h4>Government</h4>
                <p>Efficient, secure, mission focused</p>
              </div>
          </div>
          <div className="col-md-4">
          <h4>---</h4>
              <div className='pt-5'>
                <h4>Operations</h4>
                <p>Run Your business Efficient</p>
              </div>
              <div className='pt-3'>
                <h4>IT</h4>
                <p>Provide great service and Support</p>
              </div>
              <div className='pt-3'>
                <h4>Finance</h4>
                <p>Simplify all Finance processes</p>
              </div>
              <div className='pt-3'>
                <h4>Incident response</h4>
                <p>Respond, resolve, & learn from incidents</p>
              </div>
          </div>
          </div>
        </div>
        <div className="col-md-4 px-5 position-relative">
              <div>
                <h4>Marketplace</h4>
                <p>Apps that enhance Atlassian products</p>
              </div>
              <div className='py-3'>
                <h4>Developers</h4>
                <p>Docs and resources to build atlassion apps</p>
              </div>
              <hr/>
              <div className='py-3'>
                <h4>Trust & security</h4>
                <p>Compliance, privacy, platform roadmap, and more</p>
              </div>
              <hr />
              <div className='py-3'>
                <h4>Work Life blog</h4>
                <p>Stories on culture, tech, teams, and tips</p>
              </div>
        </div>
      </div>

</section>


<section className="position-absolute drop-down3 border-top border-1 border-bottom">

<i class="fa-solid fa-xmark fs-1 position-absolute" onClick={close3}></i>

      <div className="row">
        <div className="col-md-8 border-end border-1 border-remove">

          <div className="row">
          <div className="col-md-4">
          <h4>RESOURCES</h4>

          <div className='pt-5'>
            <h4>Documentation</h4>
            <p>Guides to all of our products</p>
          </div>
          <div className='pt-3'>
            <h4>Atlassian Migration Program</h4>
            <p>Tools and guidance for migrating</p>
          </div>
          <div className='pt-3'>
            <h4>Cloud roadmap</h4>
            <p>Upcoming feature releases</p>
          </div>

          <div className='pt-3'>
            <h4>Purchasing & licensing</h4>
            <p>FAQs about our policies</p>
          </div>
          </div>
          <div className="col-md-4">
              <h4>SUPPORT SERVICES</h4>

              <div className='pt-5'>
                <h4>Enterprise services</h4>
                <p>Personal support for large teams</p>
              </div>
              <div className='pt-3'>
                <h4>Partner support</h4>
                <p>Trusted third-party consultants</p>
              </div>
              <div className='pt-3'>
                <h4>Atlassian Support</h4>
                <p>A resource hub for team and admins</p>
              </div>
          </div>
          <div className="col-md-4">
          <h4>LEARN & CONNECT</h4>
              <div className='pt-5'>
                <h4>About Us</h4>
                <p>our mission and history</p>
              </div>
              <div className='pt-3'>
                <h4>careers</h4>
                <p>job openings, values, and more</p>
              </div>
              <div className='pt-3'>
                <h4>Atlassian University</h4>
                <p>Training and certifications for all skill levels</p>
              </div>
              <div className='pt-3'>
                <h4>Atlassian Community</h4>
                <p>A forum for connecting, sharing, and learning</p>
              </div>
          </div>
          </div>
        </div>
        <div className="col-md-4 px-5 position-relative">
              <div>
                <h4>Marketplace</h4>
                <p>Apps that enhance Atlassian products</p>
              </div>
              <div className='py-3'>
                <h4>Developers</h4>
                <p>Docs and resources to build atlassion apps</p>
              </div>
              <hr/>
              <div className='py-3'>
                <h4>Trust & security</h4>
                <p>Compliance, privacy, platform roadmap, and more</p>
              </div>
              <hr />
              <div className='py-3'>
                <h4>Work Life blog</h4>
                <p>Stories on culture, tech, teams, and tips</p>
              </div>
        </div>
      </div>

</section>
</div>
        </>
    );
}

export default header;