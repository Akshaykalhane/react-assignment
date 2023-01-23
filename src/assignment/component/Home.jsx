import React from 'react'
import { useState } from 'react'
import Card from './card';
import './home.css';


function Home1({name,style,data}) {
    
    const [show, setShow] = useState(false);
    
    return (<>
        <div className='home-container'>
            {/* <div className="data-container">

<div className="data-main">
                    <h2>name</h2>
                    <h2>domain</h2>
                    <h2>price</h2>
                    <h2>entry</h2>
                    <button className='show-button' onClick={() => setShow(!show)}>{show ? 'hide' : 'show'}</button>
                </div>
                <div className="show-container">
                    {show && <Card />}
                    </div>
            </div> */}

            <div className="data-container">
                <div className="data-main">
                    <p>{data.company && data.company.name}</p>
                    <div className="name-div childname">
                        <h2>Contact</h2>
                    <p>{name}</p>
                    </div>
                    <div className="city-name childname">
                        <h2>City</h2>
                        <p>{data.address && data.address.city }</p>
                    </div>
                    <div className="street-name childname">
                        <h2>Street</h2>
                        <p> { data.address && data.address.street}</p>
                    </div>
                    <button className='show-button' onClick={()=>setShow(!show)} >{ show ? 'hide' : 'show' }</button>
                </div>
                <div className={show && `show-container`}>
                    { show && <Card data={data} /> }
                </div>
            </div>

        </div>
    </>
    )
}

export default Home1