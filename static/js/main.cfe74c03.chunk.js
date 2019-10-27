(this["webpackJsonptelemetry-web"]=this["webpackJsonptelemetry-web"]||[]).push([[0],{219:function(e,t,a){},237:function(e,t,a){},238:function(e,t,a){},240:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a(7),i=a(6),o=a(8),s=a(4),l=a.n(s),c=function(e,t,a){return{datasets:[{spanGaps:!1,showLine:!0,label:e,yAxisID:t,fill:!0,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:a}]}},p=function(e,t,a,n){return e?{query:{filter:{compositeFilter:{filters:[{propertyFilter:{op:"GREATER_THAN_OR_EQUAL",property:{name:"published_at"},value:{stringValue:t.toISOString()}}},{propertyFilter:{op:"EQUAL",property:{name:"event"},value:{stringValue:n}}}],op:"AND"}},kind:[{name:"ParticleEvent"}],projection:[{property:{name:"data"}},{property:{name:"published_at"}}]}}:{query:{filter:{compositeFilter:{filters:[{propertyFilter:{op:"GREATER_THAN_OR_EQUAL",property:{name:"published_at"},value:{stringValue:t.toISOString()}}},{propertyFilter:{op:"LESS_THAN_OR_EQUAL",property:{name:"published_at"},value:{stringValue:a.toISOString()}}},{propertyFilter:{op:"EQUAL",property:{name:"event"},value:{stringValue:n}}}],op:"AND"}},kind:[{name:"ParticleEvent"}],projection:[{property:{name:"data"}},{property:{name:"published_at"}}]}}},u=a(0),d=a.n(u),m=a(68),g=function(e){function t(){var e,a;Object(n.a)(this,t);for(var o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return(a=Object(r.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).render=function(){return d.a.createElement("div",null,d.a.createElement(m.a,{data:a.props.data,options:a.props.options}))},a}return Object(o.a)(t,e),t}(d.a.Component),h=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(i.a)(t).call(this,e))).initMap=function(){var e=new window.google.maps.Map(document.getElementById("map"),f.map.defaults);a.setState({map:e,loaded:!0})},a.drawLineOnMap=function(){a.props.data&&a.props.data.length>0?(a.state.map.panTo(new window.google.maps.LatLng(a.props.data[Math.floor(a.props.data.length/2)].lat,a.props.data[Math.floor(a.props.data.length/2)].lng)),null===a.lines?a.lines=new window.google.maps.Polyline({path:a.props.data,map:a.state.map}):(a.lines.setMap(a.state.map),a.lines.setPath(a.props.data))):null!==a.lines&&a.lines.setMap(null)},a.componentWillMount=function(){window.initMap=a.initMap;var e=document.createElement("script");e.async=!0,e.src=f.map.getSrcUrl(),document.body.appendChild(e)},a.render=function(){return a.state.loaded&&a.drawLineOnMap(),d.a.createElement("div",{id:"map"})},a.lines=null,a.state={map:null,loaded:!1},a}return Object(o.a)(t,e),t}(d.a.Component),f={datastore:{projectId:"telemetry-urban-sm",getQueryUrl:function(){return"https://datastore.googleapis.com/v1/projects/"+this.projectId+":runQuery?prettyPrint=true&alt=json"},generatePayload:function(e,t){return{method:"POST",headers:{Authorization:"Bearer "+e,Accept:"application/json","Content-Type":"application/json"},body:t}},datasets:[{label:"Temperature",id:"Temperature",handler:function(e,t){var a=t.entity.properties.data.stringValue.split(" "),n={};n.y=parseFloat(a[0]),n.x=l()(t.entity.properties.published_at.stringValue),e.length>0&&n.x.unix()-l()(e[e.length-1].x).unix()>600&&e.push({y:NaN,x:n.x}),e.push(n)},parser:function(e,t,a){return c(e,t,a)},element:function(e){return d.a.createElement(g,{data:e||{},options:this.options})},options:{animation:{duration:500},scales:{xAxes:[{gridLines:{display:!1},type:"time",distribution:"linear",scaleLabel:{display:!0,labelString:"Time"}}],yAxes:[{id:"Temperature",position:"left",gridLines:{display:!1},scaleLabel:{display:!0,labelString:"Temperature (C)"}}]}}},{label:"Power",id:"Power",handler:function(e,t){var a={};a.y=parseFloat(t.entity.properties.data.stringValue),a.x=l()(t.entity.properties.published_at.stringValue),e.length>0&&a.x.unix()-l()(e[e.length-1].x).unix()>600&&e.push({y:NaN,x:a.x}),e.push(a)},parser:function(e,t,a){return c(e,t,a)},element:function(e){return d.a.createElement(g,{data:e||{},options:this.options})},options:{animation:{duration:500},scales:{xAxes:[{gridLines:{display:!1},type:"time",distribution:"linear",scaleLabel:{display:!0,labelString:"Time"}}],yAxes:[{id:"Power",position:"left",gridLines:{display:!1},scaleLabel:{display:!0,labelString:"State of Charge (%)"}}]}}},{label:"Location",id:"Location",handler:function(e,t){var a=t.entity.properties.data.stringValue.split(","),n=parseInt(parseInt(a[3])/100)+parseFloat(parseFloat(a[3])%100)/60,r=parseInt(parseInt(a[5])/100)+parseFloat(parseFloat(a[5])%100)/60,i={lat:n="S"===a[4]?-n:n,lng:r="W"===a[6]?-r:r};e.push(i)},parser:function(e,t,a){return a},element:function(e){return d.a.createElement(h,{data:e||[]})}}]},oauth:{clientId:"361835365952-be92snngmdj4q3p52bs05u31qd8vq4gb.apps.googleusercontent.com"},map:{apiKey:"AIzaSyC5l2tTNWl1b3vliRAbpWD_r3jZXrV85kA",getSrcUrl:function(){return"https://maps.googleapis.com/maps/api/js?key="+this.apiKey+"&callback=initMap"},defaults:{center:{lat:49.267941,lng:-123.24736},zoom:12}}},b=a(70),v=a.n(b),y=a(12),E=a.n(y),O=a(23),T=a(71),x=a.n(T),j=function(e){function t(){var e,a;Object(n.a)(this,t);for(var o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return(a=Object(r.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).render=function(){return a.props.liveMode||a.props.updating?d.a.createElement("button",{className:"button is-rounded is-info is-small is-loading",onClick:a.props.getDataHandler,disabled:!0},"Update"):d.a.createElement("button",{className:"button is-rounded is-info is-small",onClick:a.props.getDataHandler},"Update")},a}return Object(o.a)(t,e),t}(d.a.Component),w=(a(219),a(44)),k=(a(237),function(e){function t(){var e,a;Object(n.a)(this,t);for(var o=arguments.length,s=new Array(o),c=0;c<o;c++)s[c]=arguments[c];return(a=Object(r.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).render=function(){var e={Today:l()(),Yesterday:l()().subtract(1,"days")};return d.a.createElement("div",{className:"columns"},d.a.createElement("div",{className:"column"},d.a.createElement(w.DatetimePickerTrigger,{className:"input is-rounded is-small",shortcuts:e,moment:a.props.startTime,onChange:a.props.onChangeStart},d.a.createElement("input",{type:"text",value:a.props.startTime.format("YYYY-MM-DD HH:mm"),readOnly:!0}))),d.a.createElement("div",{className:"column"},d.a.createElement(w.DatetimePickerTrigger,{className:"input is-rounded is-small",shortcuts:e,moment:a.props.endTime,onChange:a.props.onChangeEnd,disabled:null===a.props.endTime},d.a.createElement("input",{type:"text",value:null===a.props.endTime?"Current":a.props.endTime.format("YYYY-MM-DD HH:mm"),readOnly:!0,disabled:null===a.props.endTime}))))},a}return Object(o.a)(t,e),t}(d.a.Component)),C=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(i.a)(t).call(this,e))).startTimeChangeHandler=function(e){a.setState({startTime:e})},a.endTimeChangeHandler=function(e){a.setState({endTime:e})},a.liveUpdateHandler=function(e){e.target.checked?(a.setState({liveMode:!0,endTime:null}),a.intervalHandler()):(clearTimeout(a.timeout),a.setState({liveMode:!1}),a.endTimeChangeHandler(l()()))},a.intervalHandler=Object(O.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.updateMetrics();case 2:a.state.liveMode&&(a.timeout=setTimeout(a.intervalHandler,2e3));case 3:case"end":return e.stop()}}),e)}))),a.getDataHandler=function(){var e=Object(O.a)(E.a.mark((function e(t,n,r,i){var o,s,l;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=p(a.state.liveMode,a.state.startTime,a.state.endTime,r),null!==t&&(o.query.startCursor=t),e.next=4,fetch(f.datastore.getQueryUrl(),f.datastore.generatePayload(a.props.token,JSON.stringify(o)));case 4:return s=e.sent,e.next=7,s.json();case 7:if(l=e.sent,e.prev=8,"entityResults"in l.batch&&l.batch.entityResults.forEach((function(e){i(n,e)})),"NOT_FINISHED"!==l.batch.moreResults){e.next=14;break}return e.next=13,a.getDataHandler(l.batch.endCursor,n,r,i);case 13:return e.abrupt("return",e.sent);case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(8),console.log(e.t0);case 19:return e.abrupt("return",n);case 20:case"end":return e.stop()}}),e,null,[[8,16]])})));return function(t,a,n,r){return e.apply(this,arguments)}}(),a.getData=Object(O.a)(E.a.mark((function e(){var t,n,r,i,o,s,l,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={},n=!0,r=!1,i=void 0,e.prev=4,o=f.datastore.datasets[Symbol.iterator]();case 6:if(n=(s=o.next()).done){e.next=15;break}return l=s.value,e.next=10,a.getDataHandler(null,[],l.id,l.handler);case 10:c=e.sent,t[l.id]=l.parser(l.label,l.id,c);case 12:n=!0,e.next=6;break;case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(4),r=!0,i=e.t0;case 21:e.prev=21,e.prev=22,n||null==o.return||o.return();case 24:if(e.prev=24,!r){e.next=27;break}throw i;case 27:return e.finish(24);case 28:return e.finish(21);case 29:return e.abrupt("return",t);case 30:case"end":return e.stop()}}),e,null,[[4,17,21,29],[22,,24,28]])}))),a.updateMetrics=Object(O.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({updating:!0}),e.next=3,a.getData();case 3:t=e.sent,a.setState({updating:!1,data:t});case 5:case"end":return e.stop()}}),e)}))),a.render=function(){return d.a.createElement("div",null,d.a.createElement("div",{className:"container notification"},d.a.createElement("div",{className:"columns"},d.a.createElement("div",{className:"column is-narrow"},d.a.createElement(k,{startTime:a.state.startTime,endTime:a.state.endTime,onChangeStart:a.startTimeChangeHandler,onChangeEnd:a.endTimeChangeHandler})),d.a.createElement("div",{className:"column"},d.a.createElement("div",{className:"columns is-mobile"},d.a.createElement("div",{className:"toggle column is-narrow"},d.a.createElement(x.a,{defaultChecked:a.state.liveMode,onChange:a.liveUpdateHandler})),d.a.createElement("div",{className:"column is-narrow"},d.a.createElement(j,{liveMode:a.state.liveMode,getDataHandler:a.updateMetrics,updating:a.state.updating})))))),f.datastore.datasets.map((function(e,t){return d.a.createElement("div",{className:"container notification has-background-white-bis",key:t},e.element(a.state.data[e.id]))})))},a.state={startTime:l()(),endTime:l()(),liveMode:!1,updating:!1,data:{}},a}return Object(o.a)(t,e),t}(d.a.Component),S=(a(238),a(239),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(i.a)(t).call(this,e))).oauthSuccess=function(e){a.setState({loggedOn:!0,token:e.accessToken})},a.oauthFailure=function(e){console.log(e,"Oauth Failed.")},a.infoHide=function(){a.setState({infoOn:!1})},a.render=function(){var e=d.a.createElement("div",{className:"container"},d.a.createElement("div",{className:"notification is-info"},"Welcome! If it's your first time here, the toggle sets whether the data is updated live. Otherwise, you can grab specific data by selecting your time range, then pressing \"Update\". You may encounter errors if you're not authorized to access the datastore. You can close this message on the top right.",d.a.createElement("button",{onClick:a.infoHide,className:"delete"}))),t=d.a.createElement("div",{className:"container notification is-link floater"},"To get started, log in to generate an OAuth token.");return a.state.loggedOn?d.a.createElement("div",null,a.state.infoOn?e:void 0,d.a.createElement(C,{token:a.state.token})):d.a.createElement("div",null,t,d.a.createElement("div",{className:"login"},d.a.createElement(v.a,{clientId:f.oauth.clientId,buttonText:"Login",onSuccess:a.oauthSuccess,onFailure:a.oauthFailure})))},a.state={infoOn:!0,loggedOn:!1,token:void 0},a}return Object(o.a)(t,e),t}(d.a.Component)),N=a(43);a.n(N).a.render(d.a.createElement(S,null),document.getElementById("root"))},72:function(e,t,a){e.exports=a(240)}},[[72,1,2]]]);
//# sourceMappingURL=main.cfe74c03.chunk.js.map