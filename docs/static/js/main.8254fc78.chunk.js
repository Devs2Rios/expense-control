(this["webpackJsonpexpense-control"]=this["webpackJsonpexpense-control"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(8),s=n.n(c),r=(n(17),n(2)),i=n(3),l=n(6),o=(n(18),n(0));function j(e){var t,n=new Map([[!0,{display:"none"}],[!1,{display:"block"}]]),c=Object(a.useState)(""),s=Object(r.a)(c,2),i=s[0],l=s[1],j=Object(a.useState)(""),u=Object(r.a)(j,2),d=u[0],b=u[1],x=Object(a.useState)(""),O=Object(r.a)(x,2),m=O[0],h=O[1],p=Object(a.useState)(!0),f=Object(r.a)(p,2),v=f[0],g=f[1],N=function(e){g((function(e){return!e}))};return Object(o.jsxs)("div",{children:[Object(o.jsxs)("form",{style:n.get(v),onSubmit:function(t){if(t.preventDefault(),i&&d&&m){var n={title:i,amount:+d,date:new Date(m)};e.onSaveExpenseData(n),l(""),b(""),h(""),g((function(e){return!e}))}},children:[Object(o.jsxs)("div",{className:"new-expense__controls",children:[Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Title"}),Object(o.jsx)("input",{type:"text",value:i,onChange:function(e){l(e.target.value)}})]}),Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Amount"}),Object(o.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:d,onChange:function(e){b(e.target.value)}})]}),Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Date"}),Object(o.jsx)("input",{type:"date",min:"2000-01-01",max:(t=new Date,new Date(t.getTime()-6e4*t.getTimezoneOffset()).toISOString().split("T")[0].replace(/\//g,"-")),value:m,onChange:function(e){h(e.target.value)}})]})]}),Object(o.jsxs)("div",{className:"new-expense__buttons",children:[Object(o.jsx)("div",{className:"new-expense__actions",children:Object(o.jsx)("button",{onClick:N,id:"cancel-new-expense-button",type:"cancel",children:"Cancel"})}),Object(o.jsx)("div",{className:"new-expense__actions",children:Object(o.jsx)("button",{type:"submit",children:"Add Expense"})})]})]}),Object(o.jsx)("div",{className:"new-expense__open-ui",children:Object(o.jsx)("button",{className:"add-ui-btn",style:n.get(!v),onClick:N,children:"Add New Expense"})})]})}n(20);var u=function(e){return Object(o.jsx)("div",{className:"new-expense",children:Object(o.jsx)(j,{onSaveExpenseData:function(t){var n=Object(l.a)(Object(l.a)({},t),{},{id:"e".concat(e.expenses.length+1)});e.onAddExpense(n)}})})},d=(n(21),function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),a=e.date.getFullYear();return Object(o.jsxs)("div",{className:"expense-date",children:[Object(o.jsx)("div",{className:"expense-date__month",children:t}),Object(o.jsx)("div",{className:"expense-date__year",children:a}),Object(o.jsx)("div",{className:"expense-date__day",children:n})]})}),b=(n(22),function(e){var t="card "+e.className;return Object(o.jsx)("div",{className:t,children:e.children})}),x=(n(23),function(e){var t=Object(a.useState)(e.title),n=Object(r.a)(t,2),c=n[0],s=n[1];return Object(o.jsxs)(b,{className:"expense-item",children:[Object(o.jsx)(d,{date:e.date}),Object(o.jsxs)("div",{className:"expense-item__description",children:[Object(o.jsx)("h2",{children:c}),Object(o.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]}),Object(o.jsx)("button",{onClick:function(){s("Updated!")},children:"Change Title"})]})});n(24),n(25);function O(e){var t=new Intl.DateTimeFormat("us",{month:"short"}).format(new Date((new Date).getFullYear(),e.month,1));return Object(o.jsxs)("div",{className:"chart-bar",children:[Object(o.jsx)("div",{className:"bar"}),Object(o.jsx)("span",{style:{width:"1rem",borderRadius:"2px",backgroundColor:"#5f2fff",position:"absolute",transform:"translate(0, ".concat(6*(1-e.percent),"rem)"),height:"".concat(6*e.percent,"rem")}}),Object(o.jsx)("p",{className:"month",children:t})]})}function m(e){var t=Array.from({length:12},(function(e,t){return t}));return Object(o.jsxs)("div",{className:"chart",children:[Object(o.jsxs)("div",{className:"chart-el header",children:[Object(o.jsx)("p",{children:"Filter by year:"}),Object(o.jsx)("select",{id:"years",onChange:e.selectYear,children:["All"].concat(Object(i.a)(e.years)).map((function(e,t){return Object(o.jsx)("option",{value:e,children:e},"year".concat("".concat(t).padStart(3,0)))}))})]}),Object(o.jsx)("div",{className:"chart-el months",children:t.map((function(t){var n=e.items.filter((function(e){return new Date(e.date).getMonth()===t}));return Object(o.jsx)(O,{id:"month".concat(t),month:t,percent:n.length>0?n.reduce((function(e,t){return e+t.amount}),0)/e.total:0},t)}))})]})}n(26);function h(e){return Object(o.jsxs)(b,{className:"expenses",children:[Object(o.jsx)(m,{years:e.years,year:e.year,total:e.total,items:e.items,selectYear:e.handleYear}),e.items.map((function(e){return Object(o.jsx)(x,{title:e.title,amount:e.amount,date:e.date},e.id)}))]})}var p=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}];function f(){var e=function(e){return Object(i.a)(new Set(e.map((function(e){return e.date.getFullYear()}))))},t=function(e,t){return"All"!==t?e.filter((function(e){return e.date.getFullYear()===t})):e},n=function(e){return e.reduce((function(e,t){return e+t.amount}),0)},c=Object(a.useState)(p),s=Object(r.a)(c,2),l=s[0],j=s[1],d=Object(a.useState)(e(l)),b=Object(r.a)(d,2),x=b[0],O=b[1],m=Object(a.useState)("All"),f=Object(r.a)(m,2),v=f[0],g=f[1],N=Object(a.useState)(t(Object(i.a)(l),v)),w=Object(r.a)(N,2),y=w[0],_=w[1],S=Object(a.useState)(n(y)),D=Object(r.a)(S,2),A=D[0],C=D[1];return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(u,{expenses:l,onAddExpense:function(a){l.push(a),j(l),_(t(Object(i.a)(l),v)),O(e(l)),C(n(t(Object(i.a)(l),v)))}}),Object(o.jsx)(h,{items:y,years:x,year:v,total:A,handleYear:function(e){var a="All"!==e.target.value?Number(e.target.value):e.target.value;g(a),_(t(Object(i.a)(l),a)),C(n(t(Object(i.a)(l),a)))}})]})}s.a.createRoot(document.getElementById("root")).render(Object(o.jsx)(f,{}))}],[[27,1,2]]]);
//# sourceMappingURL=main.8254fc78.chunk.js.map