import React from 'react'

function Loader() {
    return (
        <>
        <div className="androide my-5">            
        <div className="droid">
        <div className="radios">
          <div className="radio short" />
          <div className="radio long" />
        </div>
        <div className="head">
          <div className="band one" />
          <div className="band two" />
          <div className="eyes">
            <div className="eye one" />
            <div className="eye two" />
          </div>
          <div className="band three" />
        </div>
        <div className="body">
          <div className="lines one" />
          <div className="lines two" />
          <div className="circle one" />
          <div className="circle two" />
          <div className="circle three" />
        </div>
      </div>
        <div className="text my-5">
            <span>LOADING</span>
        </div>
        </div>
        </>
    )
}

export default Loader
