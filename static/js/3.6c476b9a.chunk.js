(this["webpackJsonpagile-board"]=this["webpackJsonpagile-board"]||[]).push([[3],{47:function(e,t,a){e.exports=a.p+"static/media/agile.ba108974.svg"},48:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(){return r.a.createElement("h1",{className:"brand-text"},"agilify")}},49:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return s}));var n=a(12);function r(e){return function(t,a){var r,s,c=a().users;if(c.userList.some((function(t){var a=t.username,n=t.password;return a===e.username&&n===e.password}))){var u=c.userList.findIndex((function(t){var a=t.username,n=t.password;return a===e.username&&n===e.password}));t((s=u,{type:n.a.UPDATE_LOGIN_STATUS_BY_INDEX,payload:s})),t((r=e.username,{type:n.a.UPDATE_USER_NAME,payload:r}))}}}function s(){return{type:n.a.RESET_USERS}}},50:function(e,t,a){e.exports=a.p+"static/media/like.630b237a.svg"},51:function(e,t,a){e.exports=a.p+"static/media/check.ee1dae7e.svg"},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(15),c=a(47),u=a.n(c),i=a(48),o=function(e){var t=e.currentUser,a=e.resetUsers;return r.a.createElement("header",null,r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:u.a,alt:"Agilify logo"}),r.a.createElement(i.a,null)),r.a.createElement("i",{className:"fa fa-bars hamburger"}),r.a.createElement("nav",{id:"menu"},r.a.createElement("p",null," ",t),r.a.createElement("p",null,r.a.createElement("a",{href:"#",onClick:function(){return a()}},"sign out"))))},l=a(5),d=a(49),m=Object(s.b)((function(e){return{currentUser:e.users.currentUser}}),(function(e){return Object(l.bindActionCreators)({resetUsers:d.a},e)}))(o),f=a(13),p=Object(f.g)((function(e){var t=e.sprintName,a=e.history,n=e.hasAccessToComplete,s=e.moveTaskToComplete;return r.a.createElement("div",{className:"project-header"},r.a.createElement("div",{className:"project-header-title"},r.a.createElement("h1",null,t)),r.a.createElement("div",{className:"project-timeline"},n&&r.a.createElement("button",{type:"button",onClick:function(){return s(),void a.push("/completed")}},"complete")))})),E=a(12);function b(e){return{type:E.a.SWAP_TASKS,payload:e}}function v(e){return{type:E.a.MOVE_TASK,payload:e}}function g(){return{type:E.a.MOVE_TASK_COMPLETE}}var k=Object(s.b)((function(e){return{sprintName:e.tasks.sprintName,hasAccessToComplete:T(e)}}),(function(e){return Object(l.bindActionCreators)({moveTaskToComplete:g},e)}))(p),T=function(e){return 1===e.users.userList.find((function(t){return t.username===e.users.currentUser})).role},N=a(50),j=a.n(N),O=a(51),y=a.n(O),h=a(8),A=function(e){var t=e.type;return r.a.createElement("img",{src:t===h.a.STORY?j.a:y.a,alt:t})},D=function(e){return r.a.createElement("div",{className:"project-board-card-content-list",draggable:!0,onDragStart:function(t){return function(e,t){e.dataTransfer.setData("dragIndex",t)}(t,e.taskId)},onDragOver:function(t){return function(e,t){e.preventDefault()}(t,e.taskId)},onDrop:function(t){return function(t,a){e.swapTasks({dragTaskId:t.dataTransfer.getData("dragIndex"),dropTaskId:a})}(t,e.taskId)}},r.a.createElement("div",null,r.a.createElement("p",null,e.description)),r.a.createElement("div",{className:"project-board-card-content-list-footer"},r.a.createElement("div",{className:"task-id"},r.a.createElement(A,{type:e.type}),r.a.createElement("p",null,e.taskId||"SC-112")),r.a.createElement("div",{className:"assignee"},e.assignee||"ram")))},I=Object(s.b)(null,(function(e){return Object(l.bindActionCreators)({swapTasks:b},e)}))(D),S=r.a.memo((function(e){var t=e.name,a=e.id,n=e.taskList,s=e.moveTask;return r.a.createElement("div",{className:"project-board-card",draggable:!0,onDragStart:function(e){return function(e,t){e.dataTransfer.setData("statusId",t)}(e,a)},onDragOver:function(e){return function(e){e.preventDefault()}(e)},onDrop:function(e){return function(e,t){s({statusId:t,taskId:e.dataTransfer.getData("dragIndex")})}(e,a)}},r.a.createElement("div",{className:"project-board-card-header"},r.a.createElement("p",null,t.replace("_"," "))),r.a.createElement("div",{className:"project-board-card-content"},n.map((function(e,a){return r.a.createElement(I,Object.assign({key:"".concat(t,"-").concat(a," ")},e,{index:a}))}))))})),C=Object(s.b)((function(e,t){return{taskList:L(e,t)}}),(function(e){return Object(l.bindActionCreators)({moveTask:v},e)}))(S),L=function(e,t){return 1===e.users.userList.find((function(t){var a=t.username;t.role;return a===e.users.currentUser})).role?e.tasks.taskList.filter((function(e){return e.status===t.id})):e.tasks.taskList.filter((function(a){var n=a.status,r=a.assignee;return n===t.id&&r===e.users.currentUser}))},U=function(e){var t=e.statusList;return r.a.createElement("div",{className:"project-board"},t.map((function(e){var t=e.statusId,a=e.statusName;return r.a.createElement(C,{key:"Status-".concat(t),id:t,name:a})})))},_=Object(s.b)((function(e){return{statusList:e.status.filter((function(e){return"COMPLETED"!==e.statusName}))}}),(function(e){return Object(l.bindActionCreators)({},e)}))(U);t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null),r.a.createElement("div",{className:"dashboard"},r.a.createElement(k,null),r.a.createElement(_,null)))}}}]);
//# sourceMappingURL=3.6c476b9a.chunk.js.map