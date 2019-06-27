import React from 'react';
import TimeController from './TimerLengthController';
import accurateInterval from 'accurate-interval';




class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            breakLength: 5,
            sessionLength: 25,
            clockRunning: false,
            phase: true,
            remainingTime:  25 * 60,
            timerIntervalID: '',
            cStyle:false
        };
        this.startTimer = this.startTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.convertDisplayString = this.convertDisplayString.bind(this);
        this.setBreakLength = this.setBreakLength.bind(this);
        this.setSessionLength = this.setSessionLength.bind(this);
        this.convertTimer = this.convertTimer.bind(this);
        this.handleCountDown = this.handleCountDown.bind(this);
    }

    handleCountDown(){
        if(this.state.remainingTime > 0){
            this.setState({remainingTime: this.state.remainingTime - 1});
            if(this.state.remainingTime <= 60){
                this.setState({cStyle:true});
            }else{
                this.setState({cStyle:false});
            }
        }else{
            document.getElementById('beep').play();
            this.setState({phase: !this.state.phase, remainingTime: this.state.phase ? this.state.breakLength * 60 : this.state.sessionLength * 60});
        }
    }

    startTimer() {
        if(!this.state.clockRunning){
            this.setState({
                clockRunning: true,
                timerIntervalID: accurateInterval(this.handleCountDown, 1000, {aligned:true, immediate:true})
            });
        }else{
            this.state.timerIntervalID && this.state.timerIntervalID.clear();
            this.setState({
                clockRunning:false,
            });
            
        }   
    }

    resetTimer(){
        this.state.timerIntervalID && this.state.timerIntervalID.clear();
        document.getElementById('beep').pause();
        document.getElementById('beep').currentTime = 0;
        this.setState({
            breakLength: 5,
            sessionLength: 25,
            clockRunning: false,
            phase: true,
            remainingTime: 25 * 60,
            timerIntervalID:'',
            cStyle:false
        });
    }


    convertDisplayString(){
        let remainingMinutes = Math.floor(this.state.remainingTime / 60); 
        let remainingSeconds = this.state.remainingTime % 60;
        return this.convertTimer(remainingMinutes) + ':' + this.convertTimer(remainingSeconds);
    }

    convertTimer(t){
        return t < 10 ? '0' + t: t;
    }

    setBreakLength(bLength){
        if(!this.state.clockRunning){
            if(!this.state.phase)
                this.setState({remainingTime:bLength*60});
            this.setState({breakLength:bLength});
        }
    }
    
    setSessionLength(sLength){
        if(!this.state.clockRunning){
            if(this.state.phase)
                this.setState({remainingTime:sLength*60});
            this.setState({sessionLength:sLength});
        }
    }

    render(){
        return(
            <div id="timer">
                <div className="row justify-content-center button-rows">
                    <TimeController className="col-sm-6" lengthID="break-length" iBId="break-increment" dBId="break-decrement" labelId="break-label" title="Break Length" timeLength={this.state.breakLength} handleClick={this.setBreakLength}></TimeController>
                    <TimeController className="col-sm-6" lengthID="session-length" iBId="session-increment" dBId="session-decrement" labelId="session-label" title="Session Length" timeLength={this.state.sessionLength} handleClick={this.setSessionLength}></TimeController>
                </div>
                
                <h3 className="title-labels" id="timer-label">{this.state.phase ? "Session" : "Break"}</h3>
                <h3 id="time-left" style={this.state.cStyle ? {color:"red"} : {color:"black"}}>{this.convertDisplayString()}</h3>
                <div id="controlls" className="row justify-content-center button-rows">
                    <div className="clickable-button col-sm-8" id="start_stop" onClick={this.startTimer}>
                        <i className="fa fa-play fa-2x" ></i>
                        <i className="fa fa-pause fa-2x"></i>
                    </div>
                    <i id="reset" className="fa fa-refresh fa-2x clickable-button col-sm-4" onClick={this.resetTimer}></i>
                </div>
                
                <audio id="beep" preload="auto" 
          src="https://goo.gl/65cBl1"></audio>
            </div>
        );
    }
    
}


export default Timer;