(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(8),o=a.n(c),r=(a(15),a(1)),i=a(2),l=a(4),u=a(3),m=a(5),d=(a(6),function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"tasks"},this.props.task.title)}}]),t}(n.Component)),p=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={isChecked:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"updateStatus",value:function(e){this.setState({isChecked:e})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("input",{type:"checkbox",className:"chk-box"}))}}]),t}(n.Component),h=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={todo:"",tasks:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"updateTodo",value:function(e){this.setState({todo:e.target.value})}},{key:"addTask",value:function(){if(this.state.todo){var e={title:this.state.todo,isComplete:!1},t=this.state.tasks.push(e);this.setState({todo:"",taskArray:t})}}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"title"},s.a.createElement("div",null,s.a.createElement("p",{className:"header"},"ToDo List App"),s.a.createElement("p",{className:"footer"},"created by using React")),s.a.createElement("div",{className:"block"},s.a.createElement("input",{type:"text",onChange:function(t){return e.updateTodo(t)},value:this.state.todo,placeholder:"Enter the task",className:"textInput"}),s.a.createElement("p",{className:"btn",onClick:function(){e.addTask()}},"+")),s.a.createElement("div",{className:"task-block"},this.state.tasks.map(function(t,a){return s.a.createElement("div",{className:"task"},s.a.createElement(p,{key:a,task:t,isChecked:e.state.tasks.isComplete})," ",s.a.createElement(d,{key:a,task:t}))})),s.a.createElement("div",{className:"tab-bar"},s.a.createElement("p",{className:"all tab"},"All"),s.a.createElement("p",{className:"completed tab"},"Completed"),s.a.createElement("p",{className:"active tab"},"Active")))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e,t,a){},9:function(e,t,a){e.exports=a(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.bf490ebd.chunk.js.map