import React from 'react'

export default function About(props) {
  let myStyle={
    color: props.mode==='light'?'black':'white',
    backgroundColor: props.mode==='light'?'white':'#161515'
  }

  return (
    <div className="container" style={myStyle}>
      <h1 className='my-3'>About TextUtils</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            About changing case of the text
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div className="accordion-body" style={myStyle}>
            <strong>This feature is used to modify the case of the text.</strong> In this application user can change the whole text into uppercase and lowercase as well in just one click!
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            About removing extra space in the text
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body" style={myStyle}>
            <strong>This feature helps to remove the unwanted space used in the text.</strong> It helps to improve the appearance of the text to make it visually attracted and remove the redundant space used in the text.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Other features
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body" style={myStyle}>
            This application can be used to <strong>copy the text to clipboard</strong> and it can also be used to <strong>count the number of words and characters</strong> used in the text.
            Also this application can be used in both modes i.e. <strong>dark mode and light mode.</strong>
          </div>
        </div>
      </div>
    </div>
    </div>   
  )
}
