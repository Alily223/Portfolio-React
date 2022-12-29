import React from 'react';

import PayphoneImage from  "../../../static/assets/images/auth/aboutpage/Payphone.jpg"

export default function(){
    return(
        <div className='content-page-wrapper'>
            <div className="left-column" style={{
                background: "url(" + PayphoneImage +") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}/>

            <div className="right-column">
                <div className='Contact-wrapper'>
                    <h3>Contact Me</h3>
                    <div className="Phone-Wrapper">

                        <div className='Title'>
                            <h4>Phone Number : </h4> 
                        </div>
                        
                        <div className='Item'>
                            <p className='Item-Text'> 1-800-CALL-ME</p>
                        </div>
                        
                    </div>
                    
                    <div className="Email-Wrapper">

                        <div className='Title'>
                            <h4>Email : </h4>  
                        </div>
                        
                        <div className='Item'>
                            <p className='Item-Text'> Austin.lilygren@fakeemail.com</p>
                        </div>
                
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}