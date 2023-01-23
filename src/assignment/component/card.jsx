import React from 'react'

import { useState } from 'react';

function Card({data}) {
  return (
    <>
    <div className="more-info">
        <h2>Description</h2>
        <p>{data.company && data.company.catchPhrase}</p>
        <div className="contact-info">
            <div className="contact-ele">
              <h2>contact person</h2>
              <p>{data.name}</p>
            </div>
            <div className="contact-ele">
              <h2>Address</h2>
              <p>{data.address && `${data.address.suite} ${data.address.street} ${data.address.city} ${data.address.zipcode}`}</p>
            </div>
            <div className="designation">
              <h2>Designation</h2>
              <p>Proprietor</p>
            </div>
            <div className="city-name">
              <h2>city</h2>
              <p>{data.address.city}</p>
            </div>
            <div className="email">
              <h2>email</h2>
              <p>{data.email}</p>
            </div>
            <div className="street">
              <h2>Street</h2>
              <p>{data.address.street}</p>
            </div>
            <div className="phone">
              <h2>phone</h2>
              <p>{data.phone}</p>
            </div>
            <div className="website">
              <h2>website</h2>
              <p>{data.website}</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Card