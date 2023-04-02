import React,{useState} from 'react';

function Work(props) {

    const [data, setdata] = useState({img:"images/banner-2.png" ,title:"Make work flow across teams while connecting back to company goals", link:"Work differently, together", img2:"images/confluence.svg", img2heading:"Confluence", img2info:"Content collaboration", img3:"images/trello.svg", img3heading:"Trello", img3info:"Visual project management", img4:"images/jira-work-management.svg", img4heading:"Jira  work management", img4info:"Business team collaboration" });

    function workManagement(){
        setdata({img:"images/banner-2.png" ,title:"Make work flow across teams while connecting back to company goals", link:"Work differently, together", img2:"images/confluence.svg", img2heading:"Confluence", img2info:"Content collaboration", img3:"images/trello.svg", img3heading:"Trello", img3info:"Visual project management", img4:"images/jira-work-management.svg", img4heading:"Jira  work management", img4info:"Business team collaboration" })

        document.querySelector('.div-hide1').classList.remove('active');
        document.querySelector('.div-hide2').classList.remove('active');
        document.querySelector('.div-hide3').classList.remove('active');
    }

    function itServices(){
        setdata({img:"images/banner-3.png" ,title:"Enable your dev, IT ops, and business teams to deliver great service experiences", link:"Deliver at high velocity", img2:"images/jira service.svg", img2heading:"Jira Service Management", img2info:"High-velocity ITSM" })

       document.querySelector('.div-hide1').classList.add('active');
       document.querySelector('.div-hide2').classList.add('active');
       document.querySelector('.div-hide3').classList.remove('active');
    }

    function agile(){
        setdata({img:"images/banner-4.png" ,title:"Run a world-class agile software company—from discovery to delivery and operations", link:"Explore Open DevOps", img2:"images/jira.svg", img2heading:"jira software", img2info:"Project and issue tracking", img3:"images/Jira align.svg", img3heading:"Jira Align", img3info:"Enterprise Agile planning", img4:"images/compass.svg", img4heading:"Compass", img4info:"Developer experience platform", img5:"images/bitbucket.svg", img5heading:"bitbucket", img5info:"Code & CI/CD"})

        document.querySelector('.div-hide1').classList.remove('active');
        document.querySelector('.div-hide2').classList.remove('active');
        document.querySelector('.div-hide3').classList.add('active');
    }

    return (
        <>
            <section className='work'>
                <h1 className='text-center'>Atlassian solutions are designed for all types of work</h1>
                <div className="d-flex align-items-center justify-content-center flex-wrap">
                    <button className='rounded-pill fs-2 m-5' onClick={workManagement}>Work Management</button>
                    <button className='rounded-pill fs-2 m-5' onClick={itServices}>IT Service Management</button>
                    <button className='rounded-pill fs-2 m-5' onClick={agile}>Agile and DevOps</button>
                </div>
                <div className="work-details row py-5">
                    <div className="col-md-4">
                        <h1 className='py-4'>{data.title}</h1>
                        <a href="#">{data.link} <i class="fa-solid fa-arrow-right"></i></a>
                        <div className='d-flex py-4 align-items-center gap-5'>
                            <div className="img-logo p-3">
                                <img src={data.img2} alt="" width={"40px"} />
                            </div>
                            <div>
                            <h5>{data.img2heading}</h5>
                            <p>{data.img2info}</p>
                            </div>
                        </div>

                        <div className='d-flex py-4 align-items-center gap-5 div-hide1'>
                            <div className="img-logo p-3">
                                <img src={data.img3} alt="" width={"40px"} />
                            </div>
                            <div>
                            <h5>{data.img3heading}</h5>
                            <p>{data.img3info}</p>
                            </div>
                        </div>

                        <div className='d-flex py-4 align-items-center gap-5 div-hide2'>
                            <div className="img-logo p-3">
                                <img src={data.img4} alt="" width={"40px"} />
                            </div>
                            <div>
                            <h5>{data.img4heading}</h5>
                            <p>{data.img4info}</p>
                            </div>
                        </div>

                        <div className='d-flex py-4 align-items-center gap-5 div-hide3'>
                            <div className="img-logo p-3">
                                <img src={data.img5} alt="" width={"40px"} />
                            </div>
                            <div>
                            <h5>{data.img5heading}</h5>
                            <p>{data.img5info}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <img src={data.img} alt="" width={"100%"}/>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Work;