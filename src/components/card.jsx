import React,{useState} from 'react';
import API from './API/serviceAPI'

function Card(props) {
    const [data, setdata] = useState(API);
    return (
        <>
    <section className="service row">
        {data.map(ele=>{
            return(
                <>
            <div className="col-md-4">
            <div className="card">
                <img src={ele.img} className="card-img-top" alt="..."/>
            <div className="card-body p-5">
                <h2 className="fw-bolder card-title text-center">{ele.title}</h2>
                <p className="fs-4 fw-normal card-text text-center">{ele.info}</p>
                <a href="#" className="fs-4 nav-link text-center">{ele.link}</a>
            </div>
            </div>
        </div>
                </>
            )
        })}
        </section>
        
        </>
    );
}

export default Card;