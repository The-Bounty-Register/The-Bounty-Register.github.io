import React from "react";

const Iphone = () => {
    return (
        <div style={{height:'100%', width:'100%', position: 'sticky'}}>
            <div style={{display: "flex"}}>
                <iframe 
                    src="/pages/iPhone12(iOs 14).html"
                    title="iphone"
                    style={{height:'750px', border: 'none', width:'500px', position: 'sticky'}}
                ></iframe>
            </div>
        </div>
    );
};

export default Iphone;