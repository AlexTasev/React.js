import React from 'react';

const DetailsSection = ({ contact })=> (
    <div id="details">
        <h1>Details</h1>
        <div className="content">
            <div className="info">
                 <div className="col">
                    <span className="avatar">&#9787;</span>
                 </div>
                 <div className="col">
                    <span className="name">{contact.firstName}</span>
                    <span className="name">{contact.lastName}</span>
                 </div>
            </div>
             <div className="info">
                 <span className="info-line">&phone; {contact.phone}</span>
                 <span className="info-line">&#9993; {contact.email}</span>
            </div>
         </div>
    </div>
);

export default DetailsSection;