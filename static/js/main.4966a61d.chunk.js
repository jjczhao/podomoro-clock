(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(8),r=n.n(s),l=(n(16),n(2)),c=n(3),o=n(5),m=n(4),h=n(6),u=(n(17),n(1));var d=function(e){return i.a.createElement("div",{className:e.className},i.a.createElement("h2",{className:"title-labels",id:e.labelId},e.title),i.a.createElement("div",{className:"row justify-content-between"},i.a.createElement("i",{id:e.dBId,className:"fa fa-arrow-down fa-2x col-sm-2 clickable-button",onClick:function(){e.timeLength-1>=1&&e.handleClick(e.timeLength-1)}}),i.a.createElement("h3",{className:"col-sm-4 title-labels",id:e.lengthID},e.timeLength),i.a.createElement("i",{id:e.iBId,className:"fa fa-arrow-up fa-2x col-sm-2 clickable-button",onClick:function(){e.timeLength+1<=60&&e.handleClick(e.timeLength+1)}})))},g=n(9),b=n.n(g),k=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={breakLength:5,sessionLength:25,clockRunning:!1,phase:!0,remainingTime:1500,timerIntervalID:"",cStyle:!1},n.startTimer=n.startTimer.bind(Object(u.a)(n)),n.resetTimer=n.resetTimer.bind(Object(u.a)(n)),n.convertDisplayString=n.convertDisplayString.bind(Object(u.a)(n)),n.setBreakLength=n.setBreakLength.bind(Object(u.a)(n)),n.setSessionLength=n.setSessionLength.bind(Object(u.a)(n)),n.convertTimer=n.convertTimer.bind(Object(u.a)(n)),n.handleCountDown=n.handleCountDown.bind(Object(u.a)(n)),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleCountDown",value:function(){this.state.remainingTime>0?(this.setState({remainingTime:this.state.remainingTime-1}),this.state.remainingTime<=60?this.setState({cStyle:!0}):this.setState({cStyle:!1})):(document.getElementById("beep").play(),this.setState({phase:!this.state.phase,remainingTime:this.state.phase?60*this.state.breakLength:60*this.state.sessionLength}))}},{key:"startTimer",value:function(){this.state.clockRunning?(this.state.timerIntervalID&&this.state.timerIntervalID.clear(),this.setState({clockRunning:!1})):this.setState({clockRunning:!0,timerIntervalID:b()(this.handleCountDown,1e3,{aligned:!0,immediate:!0})})}},{key:"resetTimer",value:function(){this.state.timerIntervalID&&this.state.timerIntervalID.clear(),document.getElementById("beep").pause(),document.getElementById("beep").currentTime=0,this.setState({breakLength:5,sessionLength:25,clockRunning:!1,phase:!0,remainingTime:1500,timerIntervalID:"",cStyle:!1})}},{key:"convertDisplayString",value:function(){var e=Math.floor(this.state.remainingTime/60),t=this.state.remainingTime%60;return this.convertTimer(e)+":"+this.convertTimer(t)}},{key:"convertTimer",value:function(e){return e<10?"0"+e:e}},{key:"setBreakLength",value:function(e){this.state.clockRunning||(this.state.phase||this.setState({remainingTime:60*e}),this.setState({breakLength:e}))}},{key:"setSessionLength",value:function(e){this.state.clockRunning||(this.state.phase&&this.setState({remainingTime:60*e}),this.setState({sessionLength:e}))}},{key:"render",value:function(){return i.a.createElement("div",{id:"timer"},i.a.createElement("div",{className:"row justify-content-center button-rows"},i.a.createElement(d,{className:"col-sm-6",lengthID:"break-length",iBId:"break-increment",dBId:"break-decrement",labelId:"break-label",title:"Break Length",timeLength:this.state.breakLength,handleClick:this.setBreakLength}),i.a.createElement(d,{className:"col-sm-6",lengthID:"session-length",iBId:"session-increment",dBId:"session-decrement",labelId:"session-label",title:"Session Length",timeLength:this.state.sessionLength,handleClick:this.setSessionLength})),i.a.createElement("h3",{className:"title-labels",id:"timer-label"},this.state.phase?"Session":"Break"),i.a.createElement("h3",{id:"time-left",style:this.state.cStyle?{color:"red"}:{color:"black"}},this.convertDisplayString()),i.a.createElement("div",{id:"controlls",className:"row justify-content-center button-rows"},i.a.createElement("div",{className:"clickable-button col-sm-8",id:"start_stop",onClick:this.startTimer},i.a.createElement("i",{className:"fa fa-play fa-2x"}),i.a.createElement("i",{className:"fa fa-pause fa-2x"})),i.a.createElement("i",{id:"reset",className:"fa fa-refresh fa-2x clickable-button col-sm-4",onClick:this.resetTimer})),i.a.createElement("audio",{id:"beep",preload:"auto",src:"https://goo.gl/65cBl1"}))}}]),t}(i.a.Component),f=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"wrapper",className:"text-center"},i.a.createElement("h1",{id:"title"},"Pomodoro Clock"),i.a.createElement(k,null))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.4966a61d.chunk.js.map