import React from 'react';

function TimerLengthController(props){
    return(
        <div className={props.className}>
            <h2 className="title-labels" id={props.labelId}>{props.title}</h2>
            <div className="row justify-content-between">
                <i id={props.dBId} className="fa fa-arrow-down fa-2x col-sm-2 clickable-button" onClick={function(){
                    if(props.timeLength - 1 >= 1){props.handleClick(props.timeLength - 1);}}}>
                </i>
                <h3 className="col-sm-4 title-labels" id={props.lengthID}>{props.timeLength}</h3>
                <i id={props.iBId} className="fa fa-arrow-up fa-2x col-sm-2 clickable-button" onClick={function(){
                    if(props.timeLength + 1 <= 60){props.handleClick(props.timeLength + 1);}}}>
                </i>
            </div>
        </div>
    );
}




export default TimerLengthController;
