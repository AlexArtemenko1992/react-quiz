(this["webpackJsonpreact-quiz"]=this["webpackJsonpreact-quiz"]||[]).push([[0],{22:function(e,t,n){e.exports={"menu-toggle":"MenuToggle_menu-toggle__1_cEk",open:"MenuToggle_open__33f02"}},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},51:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),s=n.n(r),i=n(35),o=n.n(i),c=n(2),l=n(8),u=n(9),d=n(11),h=n(10),j=(n(43),n(22)),p=n.n(j),b=function(e){var t=[p.a["menu-toggle"],"fa"];return e.isOpen?(t.push("fa-times-circle"),t.push(p.a.open)):t.push("fa-bars"),Object(a.jsx)("i",{className:t.join(" "),onClick:e.onToggle})},v=(n(44),n(45),function(e){return Object(a.jsx)("div",{className:"backdrop",onClick:e.onClick})}),m=n(16),f=[{to:"/",label:"Quiz List",exact:!0},{to:"/auth",label:"Authorization",exact:!1},{to:"/quiz-creator",label:"Create new quiz",exact:!1}],O=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).clickHandler=function(){e.props.onClose()},e.renderLinks=function(){return f.map((function(t,n){return Object(a.jsx)("li",{className:"link-wrapper",children:Object(a.jsx)(m.b,{to:t.to,className:"link-item",exact:t.exact,onClick:e.clickHandler,children:t.label})},n)}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=["drawer"];return this.props.isOpen||e.push("close"),Object(a.jsxs)(s.a.Fragment,{children:[Object(a.jsx)("nav",{className:e.join(" "),children:Object(a.jsx)("ul",{children:this.renderLinks()})}),this.props.isOpen?Object(a.jsx)(v,{onClick:this.props.onClose}):null]})}}]),n}(s.a.Component),x=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={menu:!1},e.toggleMenuHandler=function(){e.setState({menu:!e.state.menu})},e.menuCloseHandler=function(){e.setState({menu:!1})},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"layout",children:[Object(a.jsx)(b,{onToggle:this.toggleMenuHandler,isOpen:this.state.menu}),Object(a.jsx)(O,{isOpen:this.state.menu,onClose:this.menuCloseHandler}),Object(a.jsx)("main",{className:"layout-wrapper",children:this.props.children})]})}}]),n}(s.a.Component),g=n(4),y=n.n(g),q=n(13),w=n(19),C=(n(51),n(14)),k=n.n(C),z=(n(69),n(70),n(71),function(e){var t=["answer-list_item"];return e.state&&t.push(e.state),Object(a.jsx)("li",{className:t.join(" "),onClick:function(){return e.onAnswerClick(e.answer.id)},children:e.answer.text})}),N=function(e){return Object(a.jsx)("ul",{className:"answer-list",children:e.answers.map((function(t,n){return Object(a.jsx)(z,{answer:t,onAnswerClick:e.onAnswerClick,state:e.state?e.state[t.id]:null},n)}))})},S=function(e){return Object(a.jsxs)("div",{className:"active-quiz",children:[Object(a.jsxs)("p",{className:"active-quiz_header",children:[Object(a.jsxs)("span",{className:"active-quiz_question",children:[Object(a.jsxs)("strong",{children:[e.answerNumber,". "]}),e.question]}),Object(a.jsxs)("small",{children:[e.answerNumber," \u0438\u0437 ",e.quizLength]})]}),Object(a.jsx)(N,{state:e.state,answers:e.answers,onAnswerClick:e.onAnswerClick})]})},F=(n(72),n(73),function(e){var t=["button",e.type];return Object(a.jsx)("button",{className:t.join(" "),disabled:e.disabled,onClick:e.onClick,children:e.children})}),E=function(e){var t=Object.keys(e.results).reduce((function(t,n){return"success"===e.results[n]&&t++,t}),0);return Object(a.jsxs)("div",{className:"finished-quiz",children:[Object(a.jsx)("ul",{children:e.quiz.map((function(t,n){var r=["fa","error"===e.results[t.id]?"fa-times":"fa-check"];return Object(a.jsxs)("li",{children:[n+1,". ",t.question,Object(a.jsx)("i",{className:r.join(" ")})]},n)}))}),Object(a.jsxs)("p",{className:"finished-result",children:["\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e ",t," \u0438\u0437 ",e.quiz.length]}),Object(a.jsxs)("div",{className:"button-group",children:[Object(a.jsx)(F,{onClick:e.onRetry,type:"success",children:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c"}),Object(a.jsx)(F,{onClick:e.onRetryToQuizesList,type:"error",children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0441\u043f\u0438\u0441\u043e\u043a \u0442\u0435\u0441\u0442\u043e\u0432"})]})]})},M=(n(74),function(){return Object(a.jsx)("div",{className:"loader-wrapper",children:Object(a.jsxs)("div",{className:"lds-spinner",children:[Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{})]})})}),H=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={results:{},isFinished:!1,activeQuestion:0,answerState:null,quiz:[],loading:!0},e.onAnswerClickHandler=function(t){if(e.state.answerState){var n=Object.keys(e.state.answerState)[0];if("success"===e.state.answerState[n])return}var a=e.state.quiz[e.state.activeQuestion],r=e.state.results;if(a.rightAnswer===t){r[a.id]||(r[a.id]="success"),e.setState({answerState:Object(w.a)({},t,"success"),results:r});var s=window.setTimeout((function(){e.isQuizFinished()?e.setState({isFinished:!0}):e.setState({activeQuestion:e.state.activeQuestion+1,answerState:null}),window.clearTimeout(s)}),1e3)}else r[a.id]="error",e.setState({answerState:Object(w.a)({},t,"error"),results:r})},e.isQuizFinished=function(){return e.state.activeQuestion+1===e.state.quiz.length},e.onRetryHandler=function(){e.setState({activeQuestion:0,answerState:null,isFinished:!1,results:{}})},e.onRetryToQuizesListHandler=function(){e.props.history.push("/quiz-list")},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(q.a)(y.a.mark((function e(){var t,n,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.prev=1,e.next=4,k.a.get("https://react-quiz-b7605-default-rtdb.europe-west1.firebasedatabase.app/quizes/".concat(t,".json"));case 4:n=e.sent,a=n.data,this.setState({quiz:a,loading:!1}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"quiz",children:[Object(a.jsx)("h1",{className:"quiz-title",children:"Quiz"}),this.state.loading?Object(a.jsx)(M,{}):this.state.isFinished?Object(a.jsx)(E,{results:this.state.results,quiz:this.state.quiz,onRetry:this.onRetryHandler,onRetryToQuizesList:this.onRetryToQuizesListHandler}):Object(a.jsx)(S,{answers:this.state.quiz[this.state.activeQuestion].answers,question:this.state.quiz[this.state.activeQuestion].question,onAnswerClick:this.onAnswerClickHandler,quizLength:this.state.quiz.length,answerNumber:this.state.activeQuestion+1,state:this.state.answerState})]})}}]),n}(s.a.Component),A=(n(75),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={quizes:[],loading:!0},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(q.a)(y.a.mark((function e(){var t,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("https://react-quiz-b7605-default-rtdb.europe-west1.firebasedatabase.app/quizes.json");case 3:t=e.sent,n=[],Object.keys(t.data).forEach((function(e,t){n.push({id:e,name:"Quiz ".concat(t+1)})})),this.setState({quizes:n,loading:!1}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.quizes.map((function(e){return Object(a.jsx)("li",{className:"quiz-list-item",children:Object(a.jsx)(m.b,{to:"/quiz/".concat(e.id),className:"quiz-list-link",children:e.name})},e.id)}));return Object(a.jsx)("div",{className:"quiz-list",children:Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{className:"quiz-list-title",children:"Quiz list"}),this.state.loading?Object(a.jsx)(M,{}):Object(a.jsx)("ul",{className:"quiz-list-group",children:e})]})})}}]),n}(s.a.Component)),V=n(15);n(76),n(77);function Q(e){return!e.valid&&e.touched&&e.shouldValidate}var L=function(e){var t=e.type||"text",n=["input-group"],r="".concat(t,"-").concat(Math.random());return Q(e)&&n.push("invalid"),Object(a.jsxs)("div",{className:n.join(" "),children:[Object(a.jsx)("label",{htmlFor:r,children:e.label}),Object(a.jsx)("input",{type:t,id:r,value:e.value,placeholder:e.placeholder,onChange:e.onChange}),Q(e)?Object(a.jsx)("span",{children:e.errorMessage||"Enter valid value"}):null]})},T=(n(78),function(e){var t="".concat(e.label,"-").concat(Math.random());return Object(a.jsxs)("div",{className:"select",children:[Object(a.jsx)("label",{htmlFor:t,children:e.label}),Object(a.jsx)("select",{id:t,value:e.value,onChange:e.onChange,children:e.options.map((function(e,t){return Object(a.jsx)("option",{value:e.value,children:e.text},t)}))})]})});function R(e,t){return Object(V.a)(Object(V.a)({},e),{},{validation:t,valid:!t,touched:!1,value:"",placeholder:"Enter something..."})}function D(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!t)return!0;var n=!0;return t.required&&(n=""!==e.trim()&&n),n}function _(e){console.log(e);var t=!0;return Object.keys(e).forEach((function(n){t=e[n].valid&&t})),t}var J=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={quiz:[],rightAnswer:1,isFormValid:!1,formControls:{question:R({label:"Enter your question",place:"Enter your question...",errorMessage:"Fiend cant be empty"},{required:!0}),option1:R({label:"Variant 1",place:"Enter your variant...",errorMessage:"Fiend cant be empty",id:1},{required:!0}),option2:R({label:"Variant 2",place:"Enter your variant...",errorMessage:"Fiend cant be empty",id:2},{required:!0}),option3:R({label:"Variant 3",place:"Enter your variant...",errorMessage:"Fiend cant be empty",id:3},{required:!0}),option4:R({label:"Variant 4",place:"Enter your variant...",errorMessage:"Fiend cant be empty",id:4},{required:!0})}},e.addNewQuizHandler=function(){var t=Object(q.a)(y.a.mark((function t(n){var a;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,k.a.post("https://react-quiz-b7605-default-rtdb.europe-west1.firebasedatabase.app/quizes.json",e.state.quiz);case 4:a=t.sent,console.log(a.data),e.setState({quiz:[],rightAnswer:1,isFormValid:!1,formControls:{question:R({label:"Enter your question",place:"Enter your question...",errorMessage:"Fiend cant be empty"},{required:!0}),option1:R({label:"Variant 1",place:"Enter your variant...",errorMessage:"Fiend cant be empty",id:1},{required:!0}),option2:R({label:"Variant 2",place:"Enter your variant...",errorMessage:"Fiend cant be empty",id:2},{required:!0}),option3:R({label:"Variant 3",place:"Enter your variant...",errorMessage:"Fiend cant be empty",id:3},{required:!0}),option4:R({label:"Variant 4",place:"Enter your variant...",errorMessage:"Fiend cant be empty",id:4},{required:!0})}}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}(),e.addQuestionHandler=function(t){t.preventDefault();var n=JSON.parse(JSON.stringify(e.state.quiz)),a=n.length+1,r={question:e.state.formControls.question.value,id:a,rightAnswer:e.state.rightAnswer,answers:[{text:e.state.formControls.option1.value,id:e.state.formControls.option1.id},{text:e.state.formControls.option2.value,id:e.state.formControls.option2.id},{text:e.state.formControls.option3.value,id:e.state.formControls.option3.id},{text:e.state.formControls.option4.value,id:e.state.formControls.option4.id}]};n.push(r),e.setState({quiz:n,rightAnswer:1,isFormValid:!1,formControls:{question:R({label:"Enter your question",place:"Enter your question...",errorMessage:"Fiend cant be empty"},{required:!0}),option1:R({label:"Variant 1",place:"Enter your variant...",errorMessage:"Fiend cant be empty",id:1},{required:!0}),option2:R({label:"Variant 2",place:"Enter your variant...",errorMessage:"Fiend cant be empty",id:2},{required:!0}),option3:R({label:"Variant 3",place:"Enter your variant...",errorMessage:"Fiend cant be empty",id:3},{required:!0}),option4:R({label:"Variant 4",place:"Enter your variant...",errorMessage:"Fiend cant be empty",id:4},{required:!0})}})},e.submitHandler=function(e){e.preventDefault()},e.onChangeHandler=function(t,n){var a=Object(V.a)({},e.state.formControls),r=Object(V.a)({},a[n]);r.touched=!0,r.value=t.target.value,r.valid=D(r.value,r.validation),a[n]=r,e.setState({formControls:a,isFormValid:_(a)})},e.selectChangeHandler=function(t){e.setState({rightAnswer:+t.target.value})},e}return Object(u.a)(n,[{key:"renderControls",value:function(){var e=this;return Object.keys(this.state.formControls).map((function(t,n){var r=e.state.formControls[t];return Object(a.jsxs)(s.a.Fragment,{children:[Object(a.jsx)(L,{placeholder:r.place,label:r.label,value:r.value,errorMessage:r.errorMessage,valid:r.valid,touched:r.touched,shouldValidate:!0,onChange:function(n){return e.onChangeHandler(n,t)}},n),0===n?Object(a.jsx)("hr",{}):null]},n)}))}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"quiz-creator",children:Object(a.jsx)("div",{children:Object(a.jsxs)("form",{onSubmit:this.submitHandler,children:[Object(a.jsx)("h1",{children:"Create new quiz"}),Object(a.jsxs)("h2",{children:["Questions in quiz: ",this.state.quiz.length]}),this.renderControls(),Object(a.jsx)(T,{label:"Select right answer",value:this.state.rightAnswer,onChange:this.selectChangeHandler,options:[{text:1,value:1},{text:2,value:2},{text:3,value:3},{text:4,value:4}]}),Object(a.jsx)(F,{type:"error",onClick:this.addQuestionHandler,disabled:!this.state.isFormValid,children:"Add question"}),Object(a.jsx)(F,{type:"success",onClick:this.addNewQuizHandler,disabled:0===this.state.quiz.length,children:"Create quiz"})]})})})}}]),n}(s.a.Component),I=(n(79),n(37)),P=n.n(I),W=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isFormValid:!1,formControl:{email:{value:"",placeholder:"Enten your email...",type:"email",label:"Email",errorMessage:"Enter correct email for example: test@test.com",valid:!1,touched:!1,validation:{required:!0,email:!0}},password:{value:"",placeholder:"Enter your password...",type:"password",label:"Password",errorMessage:"Enter correct password.Password must contain at least 6 characters",valid:!1,touched:!1,validation:{required:!0,minLength:6}}}},e.loginHandler=Object(q.a)(y.a.mark((function t(){var n,a;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={email:e.state.formControl.email.value,password:e.state.formControl.password.value,returnSecureToken:!0},t.prev=1,t.next=4,k.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDFbJ3JV1ADxSoiS5Rb8P0KEkW2o171ot4",n);case 4:a=t.sent,console.log(a.data),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])}))),e.registrationHandler=Object(q.a)(y.a.mark((function t(){var n,a;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={email:e.state.formControl.email.value,password:e.state.formControl.password.value,returnSecureToken:!0},t.prev=1,t.next=4,k.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDFbJ3JV1ADxSoiS5Rb8P0KEkW2o171ot4",n);case 4:a=t.sent,console.log(a.data),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])}))),e.submitHandler=function(e){e.preventDefault()},e.validate=function(e,t){if(!e)return!0;var n=!0;return t.required&&(n=""!==e.trim()&&n),t.email&&(n=P.a.email(e)&&n),t.minLength&&(n=e.length>=t.minLength&&n),n},e.onChangeHandler=function(t,n){var a=Object(V.a)({},e.state.formControl),r=Object(V.a)({},a[n]);r.value=t.target.value,r.touched=!0,r.valid=e.validate(r.value,r.validation),a[n]=r;var s=!0;Object.keys(a).forEach((function(e){s=a[e].valid&&s})),e.setState({formControl:a,isFormValid:s})},e}return Object(u.a)(n,[{key:"renderInputs",value:function(){var e=this;return Object.keys(this.state.formControl).map((function(t,n){var r=e.state.formControl[t];return Object(a.jsx)(L,{type:r.type,placeholder:r.placeholder,value:r.value,label:r.label,errorMessage:r.errorMessage,valid:r.valid,touched:r.touched,shouldValidate:!0,onChange:function(n){return e.onChangeHandler(n,t)}},"".concat(r.type).concat(n))}))}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"auth",children:Object(a.jsx)("div",{children:Object(a.jsxs)("form",{onSubmit:this.submitHandler,children:[Object(a.jsx)("h1",{children:"Login"}),this.renderInputs(),Object(a.jsx)(F,{type:"success",onClick:this.loginHandler,disabled:!this.state.isFormValid,children:"Login"}),Object(a.jsx)(F,{type:"error",onClick:this.registrationHandler,children:"Registration"})]})})})}}]),n}(s.a.Component);var K=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(x,{children:Object(a.jsxs)(c.c,{children:[Object(a.jsx)(c.a,{path:"/auth",component:W}),Object(a.jsx)(c.a,{path:"/quiz-creator",component:J}),Object(a.jsx)(c.a,{path:"/quiz/:id",component:H}),Object(a.jsx)(c.a,{path:"/",component:A})]})})})};o.a.render(Object(a.jsx)(m.a,{children:Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(K,{})})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.13a1b894.chunk.js.map