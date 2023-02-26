import React from 'react';

const HeaderStyle = ({headerSpan}) => {

    return (
        <div>
            <p sx={{textAlign:'center'}}>
        {
            headerSpan.split('').map((span,index)=>{return <span key={index}>
             {
                index < headerSpan.length/2 ? <span style={{color: '#1cc2e7', fontWeight: '700', fontSize:'40px'}}>{span}</span> :  <span style={{color: '#0bcbd4', fontWeight: '700', fontSize:'40px'}}>{span}</span>
             }
            </span>})
        }
     </p>
        </div>
    );
};

export default HeaderStyle;