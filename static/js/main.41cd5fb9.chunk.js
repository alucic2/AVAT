(this.webpackJsonpannotation_tool=this.webpackJsonpannotation_tool||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},178:function(e,t){},179:function(e,t){},180:function(e,t){},186:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(13),r=a.n(o),l=(a(104),a(105),a(36)),c=a.n(l),s=(a(45),a(44),a(12),a(42)),u=a.n(s),d=a(55),h=a(10),f=a(11),b=a(34),v=a(35),m=a(22),g=a(26),p=a(37),j=a(38),O=function(){function e(t){Object(p.a)(this,e),this.objects=t.objects,console.log(this.objects)}return Object(j.a)(e,[{key:"getObjects",value:function(){return this.objects}},{key:"getObjectById",value:function(e){return this.objects[e]}},{key:"getObjectByIdFrame",value:function(e,t){return this.objects[e][t]}},{key:"getAllObjectByFrame",value:function(e){var t,a=[];for(t=0;t<this.objects.length;t++){var n=this.objects[t];if(!(n.frames[n.frames.length-1].frameNumber<e))for(var i=n.frames,o=0;o<i.length;o++)if(i[o].frameNumber===e){a.push(i[o]);break}}return console.log(a),a}}]),e}(),y=a(94),w=a.n(y),E=a(70),S=a.n(E),k=(a(173),[{dataField:"id",text:"ID"},{dataField:"behavior",text:"Beh",editor:{type:E.Type.SELECT,options:[{value:"Lying",label:"lying"},{value:"Sitting",label:"sitting"},{value:"Standing",label:"standing"},{value:"Locomotion",label:"locomotion"},{value:"Consumption",label:"consumption"}]}},{dataField:"is_hidden",text:"Hid"},{dataField:"posture",text:"Pos",editor:{type:E.Type.SELECT,options:{posture:[{value:"Lying sternally",label:"lying_sternally"},{value:"Sitting",label:"sitting"},{value:"Standing",label:"standing"},{value:"Walking ",label:"walking"},{value:"Consumption",label:"consumption"}]}}}]);var D=function(e){var t=function(e){var t=[];if(null==e)return[];for(var a=0;a<e.objects.length;a++){var n=a+1,i=e.objects[a];console.log(i.left),t.push({id:n.toString(),behavior:"None",is_hidden:"False",posture:"None"})}return t}(e.data);return i.a.createElement("div",{style:{width:"15%"}},i.a.createElement(w.a,{condensed:!0,keyField:"id",data:t,columns:k,cellEdit:S()({mode:"click",blurToSave:!0})}))},_=a(193),A=a(78).fabric,C=function(){function e(t,a,n,i,o,r,l){Object(p.a)(this,e),this.top=t,this.left=a,this.id=r,this.behavior=l,this.color=o,this.width=n,this.height=i}return Object(j.a)(e,[{key:"rectangle",value:function(){return new A.Rect({hasRotatingPoint:!1,uniScaleTransform:!0,height:this.height,width:this.width,fill:this.color,borderColor:"#000",opacity:".4",top:this.top,left:this.left})}},{key:"id_text",value:function(){return new A.Text(this.id.toString(),{fontSize:20,top:this.top,left:this.left,uniScaleTransform:!1})}},{key:"behavior",value:function(){}},{key:"generate_no_behavior",value:function(){return new A.Group([this.rectangle(),this.id_text()],{left:this.left,top:this.top,uniScaleTransform:!0})}},{key:"generate_with_behavior",value:function(){}}]),e}();var T=function(){function e(t,a,n){Object(p.a)(this,e),this.frame_data=t,this.canvas_width=a,this.canvas_height=n,this.windowWidth=3840,this.windowHeight=2160}return Object(j.a)(e,[{key:"generate_frame",value:function(){for(var e=[],t=0;t<this.frame_data.length;t++){var a="#"+((1<<24)*Math.random()|0).toString(16);console.log(this.frame_data[t]);var n=new C(this.getTop(this.frame_data[t]),this.getLeft(this.frame_data[t]),this.getWidth(this.frame_data[t]),this.getHeight(this.frame_data[t]),a,t,"TEST").generate_no_behavior();e.push(n)}return e}},{key:"getID",value:function(e){return e.id}},{key:"getWidth",value:function(e){return Math.floor(e.bbox.width/this.windowWidth*this.canvas_width)}},{key:"getHeight",value:function(e){return Math.floor(e.bbox.height/this.windowHeight*this.canvas_height)}},{key:"getTop",value:function(e){return Math.floor(e.bbox.y/this.windowHeight*this.canvas_height)}},{key:"getLeft",value:function(e){return Math.floor(e.bbox.x/this.windowWidth*this.canvas_width)}}]),e}(),x=a(78).fabric,F=(a(91),a(92)),N=new x.Canvas("c",{uniScaleTransform:!0}),R=F({displayName:"Fabric",componentDidMount:function(){var e=r.a.findDOMNode(this);N.initialize(e,{height:.7*window.innerHeight,width:.7*window.innerWidth,backgroundColor:null}),N.on("mouse:up",(function(){M[L]=N.toJSON()})),N.on("saveData",(function(){N.renderAll()}))},render:function(){return i.a.createElement("canvas",null)}}),I=F({displayName:"NewObjects",render:function(){return i.a.createElement("div",{style:{float:"right"}},i.a.createElement(f.a,{onClick:this.addGroup,style:{position:"relative"}},"Add")," ",i.a.createElement(f.a,{onClick:this.remove,style:{position:"relative"}},"Remove")," ")},addGroup:function(){var e="#"+((1<<24)*Math.random()|0).toString(16),t=new C(N.height/2,N.width/2,50,50,e,1,"id: 1").generate_no_behavior();N.add(t),N.setActiveObject(t),N.fire("saveData")},remove:function(){N.remove(N.getActiveObject()),N.fire("saveData")}});var M=[],B=!1,L=0;var W=function(){var e=Object(n.useState)(null),t=Object(h.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)(null),l=Object(h.a)(r,2),s=(l[0],l[1],Object(n.useState)(null)),p=Object(h.a)(s,2),j=p[0],y=p[1];Object(n.useEffect)((function(){null!=j&&(console.log(j),console.log(j.getAllObjectByFrame(2)))}),j);var w=function(e){return new Promise((function(t,a){var n=new FileReader;n.onload=function(e){t(JSON.parse(e.target.result))},n.readAsText(e.target.files[0])}))},E=Object(n.useState)(!1),S=Object(h.a)(E,2),k=S[0],A=S[1],C="ERROR";C=!0===k?"Pause":"Play";var x=Object(n.useState)(!1),F=Object(h.a)(x,2),W=(F[0],F[1]),H=Object(n.useState)(0),P=Object(h.a)(H,2),J=P[0],U=P[1],z=Object(n.useState)(null),q=Object(h.a)(z,2),G=q[0],V=q[1],X=Object(n.useState)(0),Y=Object(h.a)(X,2),K=Y[0],$=Y[1],Q=Object(n.useState)(0),Z=Object(h.a)(Q,2),ee=Z[0],te=Z[1],ae=Object(n.useState)(0),ne=Object(h.a)(ae,2);ne[0],ne[1],M[ee]=N.toJSON();var ie=function(){var e=Object(d.a)(u.a.mark((function e(){var t,a,n,i,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="generated_annotations",a=JSON.stringify(M),n=new Blob([a],{type:"application/json"}),e.next=5,URL.createObjectURL(n);case 5:i=e.sent,(o=document.createElement("a")).href=i,o.download=t+".json",document.body.appendChild(o),o.click(),document.body.removeChild(o);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),oe=Object(n.useState)(!1),re=Object(h.a)(oe,2),le=re[0],ce=re[1],se=function(){return ce(!1)};return i.a.createElement("div",null,i.a.createElement(b.a,{bg:"dark",variant:"dark",className:"bg-5"},i.a.createElement(b.a.Brand,{href:"#home"},"Annotation Tool"),i.a.createElement(v.a,{className:"mr-auto"},i.a.createElement(v.a.Link,{onClick:function(){return ce(!0)}},"Instructions"),i.a.createElement(_.a,{title:"Annotation Type",id:"basic-nav-dropdown"},i.a.createElement(_.a.Item,null,"Square Box"),i.a.createElement(_.a.Divider,null),i.a.createElement(_.a.Item,null,"Key Point"),i.a.createElement(_.a.Divider,null),i.a.createElement(_.a.Item,null,"Wire Frame")),i.a.createElement(_.a,{title:"Export",id:"basic-nav-dropdown"},i.a.createElement(_.a.Item,{onClick:ie},"JSON"),i.a.createElement(_.a.Divider,null),i.a.createElement(_.a.Item,null,"CSV")),i.a.createElement(_.a,{title:"Settings",id:"basic-nav-dropdown"},i.a.createElement(_.a.Divider,null),i.a.createElement(_.a.Item,{disabled:!0},"Input Frame-Rate: ",i.a.createElement("input",{type:"text"})))),i.a.createElement("div",null,i.a.createElement(f.a,{variant:"secondary",disabled:"true"},"Frame # ",parseInt(ee)+" / "+parseInt(15*K)),i.a.createElement(g.a,{style:{float:"left",width:80}},i.a.createElement(g.a.File,{id:"file",label:"Annotation Upload",custom:!0,type:"file",onChange:function(e){w(e).then((function(e){null!=e?y(new O(e)):console.log("ERROR in upload old_annotation")}))}})),i.a.createElement(g.a,{style:{float:"left",width:80}},i.a.createElement(g.a.File,{id:"file",label:"Video Upload",custom:!0,type:"file",onChange:function(e){o(URL.createObjectURL(e.target.files[0])),B=!0}})),i.a.createElement(f.a,{variant:"primary",onClick:function(e){var t=15*K;G.seekTo((G.getCurrentTime()/K*t-1)/t)}},"Prev")," ",i.a.createElement(f.a,{variant:"primary",onClick:function(e){A(!k)}},C)," ",i.a.createElement(f.a,{variant:"primary",onClick:function(e){var t=15*K;M[ee]=N.toJSON(),console.log(ee),console.log(M),G.seekTo((G.getCurrentTime()/K*t+1)/t)}},"Next")," ",i.a.createElement(I,null))),i.a.createElement(m.a,{show:le,onHide:se},i.a.createElement(m.a.Header,{closeButton:!0},i.a.createElement(m.a.Title,null,"Instructions")),i.a.createElement(m.a.Body,null,"TODO: Add instructions"),i.a.createElement(m.a.Footer,null,i.a.createElement(f.a,{variant:"secondary",onClick:se},"Close"))),i.a.createElement("div",{style:{display:"flex"}},i.a.createElement("div",{style:{position:"relative",width:.7*window.innerWidth,height:.7*window.innerHeight}},i.a.createElement(c.a,{onProgress:function(e){console.log(e);var t=15*K;if(t,U(ee/t),te(Math.round(e.played*t)),L=ee,null!=j){N.clear();for(var a=new T(j.getAllObjectByFrame(ee),N.width,N.height).generate_frame(),n=0;n<a.length;n++){var i=a[n];console.log(i),N.add(i),N.setActiveObject(i),N.fire("saveData")}}},ref:function(e){V(e),!0===B&&null!=G&&(console.log("RESET VALUES"),M=new Array(7200),B=!1)},onDuration:function(e){$(parseInt(e)),console.log(e)},url:a,width:"100%",height:"99.999%",playing:k,controls:!1,style:{position:"realtive",float:"left"},volume:0,muted:!0,pip:!1}),i.a.createElement(R,null),i.a.createElement("input",{style:{width:.7*window.innerWidth},type:"range",min:0,max:.999999,step:"any",value:J,onMouseDown:function(e){W(!0)},onChange:function(e){U(parseFloat(e.target.value))},onMouseUp:function(e){W(!1),G.seekTo(parseFloat(e.target.value))}})),i.a.createElement(D,{data:M[ee],style:{float:"right"}})))},H=(a(96),a(78).fabric),P=a(91),J=a(92),U=new P.Reactor({debug:!0}),z=function(e){var t,a={};if(!(e instanceof Object)||Array.isArray(e))throw new Error("keyMirror(...): Argument must be an object.");for(t in e)e.hasOwnProperty(t)&&(a[t]=t);return a}({fabricData:null,activeObject:null}),q=new H.Canvas,G=P.Store({getInitialState:function(){return P.toImmutable({fabricData:{objects:[]},activeObject:!1})},initialize:function(){this.on(z.fabricData,this.saveFabricData),this.on(z.activeObject,this.saveActiveObject)},saveFabricData:function(e,t){return e.set("fabricData",P.toImmutable(t))},saveActiveObject:function(e,t){return e.set("activeObject",t)}});U.registerStores({fabricStore:G});J({displayName:"Fabric",componentDidMount:function(){var e=r.a.findDOMNode(this);alert("Please use the upload functionality. This is a Alpha version and some features may be missing or broken. The video upload option should have the latest features and bug fixes. This sign will be updated when the youtube option is functional. "),q.initialize(e,{height:.8*window.innerHeight,width:.8*window.innerWidth,backgroundColor:null}),q.on("mouse:up",(function(){U.dispatch(z.fabricData,q.toObject()),U.dispatch(z.activeObject,!!q.getActiveObject())})),q.on("saveData",(function(){U.dispatch(z.fabricData,q.toObject()),U.dispatch(z.activeObject,!!q.getActiveObject()),q.renderAll()}))},render:function(){return i.a.createElement("canvas",null)}}),J({displayName:"NewObjects",mixins:[U.ReactMixin],getDataBindings:function(){return{fabricData:["fabricStore","fabricData"],activeObject:["fabricStore","activeObject"]}},render:function(){return this.state.fabricData.get("objects").size,i.a.createElement("div",{style:{float:"right"}},i.a.createElement(f.a,{onClick:this.addSquare,style:{position:"relative"}},"Add Square")," ",i.a.createElement(f.a,{onClick:this.remove,style:{position:"relative"}},"Remove")," ")},addSquare:function(){var e="#"+((1<<24)*Math.random()|0).toString(16),t=new H.Rect({hasRotatingPoint:!1,uniScaleTransform:!0,height:50,width:50,originX:"center",originY:"center",fill:e,borderColor:"#000",opacity:".4",top:q.height/2,left:q.width/2},(function(e){console.log(e)}));q.add(t),q.setActiveObject(t),q.fire("saveData")},remove:function(){q.remove(q.getActiveObject()),q.fire("saveData")}}),J({displayName:"ActiveObject",mixins:[U.ReactMixin],getDataBindings:function(){return{fabricObject:["fabricStore","fabricData","objects",0],activeObject:["fabricStore","activeObject"]}},render:function(){if(console.log(this.state.activeObject),this.state.fabricObject){var e=this.state.fabricObject.get("fill");return console.log(q.getActiveObject()),i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("b",null,"Active Object")),i.a.createElement("div",null,"fill: ",i.a.createElement("span",{style:{color:e}},this.state.fabricObject.get("fill"))),i.a.createElement("div",null,"top: ",this.state.fabricObject.get("top")),i.a.createElement("div",null,"left: ",this.state.fabricObject.get("left")),i.a.createElement("div",null,"angle: ",this.state.fabricObject.get("angle")),i.a.createElement("div",null,"scaleX: ",this.state.fabricObject.get("scaleX")),i.a.createElement("div",null,"scaleY: ",this.state.fabricObject.get("scaleY")))}return console.log(q.getActiveObject()),null}});a(191),a(192);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},99:function(e,t,a){e.exports=a(186)}},[[99,1,2]]]);
//# sourceMappingURL=main.41cd5fb9.chunk.js.map