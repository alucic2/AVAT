(this.webpackJsonpannotation_tool=this.webpackJsonpannotation_tool||[]).push([[0],{116:function(e,t,n){e.exports=n(224)},121:function(e,t,n){},122:function(e,t,n){},194:function(e,t){},195:function(e,t){},196:function(e,t){},224:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(13),i=n.n(l),r=(n(121),n(122),n(39)),c=n.n(r),s=(n(51),n(48),n(11),n(46)),u=n.n(s),d=n(64),h=n(6),f=n(12),m=n(37),b=n(38),g=n(23),v=n(29),p=n(49),y=n(24),w=n(25),E=function(){function e(t){Object(y.a)(this,e),this.objects=t.objects,console.log(this.objects)}return Object(w.a)(e,[{key:"getObjects",value:function(){return this.objects}},{key:"getObjectById",value:function(e){return this.objects[e]}},{key:"getObjectByIdFrame",value:function(e,t){return this.objects[e][t]}},{key:"getAllObjectByFrame",value:function(e){var t,n=[];for(t=0;t<this.objects.length;t++){var a=this.objects[t];if(!(a.frames[a.frames.length-1].frameNumber<e))for(var o=a.frames,l=0;l<o.length;l++)if(o[l].frameNumber===e){n.push(o[l]);break}}return console.log(n),n}}]),e}(),k=n(40),j=n.n(k),O=n(21),S=n.n(O),C=(n(86),[{value:"inactive",label:"Inactive"},{value:"walking",label:"Walking"},{value:"running",label:"Running"},{value:"play_solo",label:"Play Solo"},{value:"play_social",label:"Play Social"},{value:"head_tossing",label:"Head Tossing"},{value:"interacting",label:"Interacting with pen features"},{value:"drinking",label:"Drinking"},{value:"eating",label:"Eating"},{value:"fighting",label:"Fighting"},{value:"defacating",label:"Defacating"},{value:"other_active",label:"Other"},{value:"unknown",label:"Unknown"}]),x=[{value:"Lying sternally",label:"lying_sternally"},{value:"Sitting",label:"sitting"},{value:"Standing",label:"standing"},{value:"Walking ",label:"walking"},{value:"Consumption",label:"consumption"}];O.Type.SELECT,O.Type.SELECT;var _=n(232),T=(n(100),n(53).fabric),A=function(){function e(t,n,a,o,l,i,r){Object(y.a)(this,e),this.top=t,this.left=n,this.id=i,this.behavior=r,this.color=l,this.width=a,this.height=o}return Object(w.a)(e,[{key:"rectangle",value:function(){return new T.Rect({hasRotatingPoint:!1,uniScaleTransform:!0,height:this.height,width:this.width,fill:this.color,borderColor:"#000",opacity:".4",top:this.top,left:this.left})}},{key:"id_text",value:function(){return new T.Text(this.id.toString(),{fontSize:20,top:this.top,left:this.left,uniScaleTransform:!1})}},{key:"behavior",value:function(){}},{key:"generate_no_behavior",value:function(e){var t=new T.Group;t.addWithUpdate(this.rectangle()),t.addWithUpdate(this.id_text());var n,a=this.id;return t.toObject=(n=t.toObject,function(e){return T.util.object.extend(n.call(this,e),{local_id:a})}),e.add(t),e.on({"object:scaling":function(e){var t=e.target.item(1),n=e.target,a=n.width/(n.width*n.scaleX),o=n.height/(n.height*n.scaleY);t.set("scaleX",a),t.set("scaleY",o)}}),t}},{key:"generate_mouse_no_behavior",value:function(e){var t,n,a,o;new T.Text(this.id.toString(),{fontSize:20,top:this.top,left:this.left,uniScaleTransform:!1});e.on("mouse:down",(function(l){n=!0;var i=e.getPointer(l.e);a=i.x,o=i.y;i=e.getPointer(l.e);var r=new T.Rect({left:a,top:o,originX:"left",originY:"top",width:i.x-a,height:i.y-o,angle:0,fill:"rgba(255,0,0,0.5)",transparentCorners:!1,uniScaleTransform:!0});t=r,e.add(t)})),e.on("mouse:move",(function(l){if(n){var i=e.getPointer(l.e);a>i.x&&t.set({left:Math.abs(i.x)}),o>i.y&&t.set({top:Math.abs(i.y)}),t.set({width:Math.abs(a-i.x)}),t.set({height:Math.abs(o-i.y)}),e.renderAll()}})),e.on("mouse:up",(function(t){n=!1,e.off("mouse:down"),e.off("mouse:up")}))}},{key:"generate_with_behavior",value:function(){}}]),e}();var F=function(){function e(t,n,a,o,l){Object(y.a)(this,e),this.frame_data=t,this.canvas_width=n,this.canvas_height=a,this.windowWidth=l,this.windowHeight=o}return Object(w.a)(e,[{key:"generate_frame",value:function(){for(var e=[],t=0;t<this.frame_data.length;t++){var n="#"+((1<<24)*Math.random()|0).toString(16);console.log(this.frame_data[t]);var a=new A(this.getTop(this.frame_data[t]),this.getLeft(this.frame_data[t]),this.getWidth(this.frame_data[t]),this.getHeight(this.frame_data[t]),n,t,"TEST").generate_no_behavior();e.push(a)}return e}},{key:"getID",value:function(e){return e.id}},{key:"getWidth",value:function(e){return Math.floor(e.bbox.width/this.windowWidth*this.canvas_width)}},{key:"getHeight",value:function(e){return Math.floor(e.bbox.height/this.windowHeight*this.canvas_height)}},{key:"getTop",value:function(e){return Math.floor(e.bbox.y/this.windowHeight*this.canvas_height)}},{key:"getLeft",value:function(e){return Math.floor(e.bbox.x/this.windowWidth*this.canvas_width)}}]),e}(),N=(n(53).fabric,n(53).fabric),B=n(100),D=function(){function e(){Object(y.a)(this,e)}return Object(w.a)(e,[{key:"generate_polygon",value:function(e,t){var n,a=!0,o=new Array,l=new Array,i=!1;e.forEachObject((function(e){e.selectable=!1}));var r=new function(){e.selection=!1,e.on("mouse:down",(function(e){e.target&&e.target.id===o[0].id&&r.polygon.generatePolygon(o),a&&r.polygon.addPoint(e)})),e.on("mouse:up",(function(e){})),e.on("mouse:move",(function(t){if(n&&"line"==n.class){var a=e.getPointer(t.e);n.set({x2:a.x,y2:a.y});var l=i.get("points");l[o.length]={x:a.x,y:a.y},i.set({points:l}),e.renderAll()}e.renderAll()}))};r.polygon={drawPolygon:function(){a=!0,o=new Array,l=new Array},addPoint:function(t){var a=Math.floor(999901*Math.random())+99,r=(new Date).getTime()+a,c=new N.Circle({radius:5,fill:"#ffffff",stroke:"#333333",strokeWidth:.5,left:t.e.layerX/e.getZoom(),top:t.e.layerY/e.getZoom(),selectable:!1,hasBorders:!1,hasControls:!1,originX:"center",originY:"center",id:r,objectCaching:!1});0===o.length&&c.set({fill:"red"});var s=[t.e.layerX/e.getZoom(),t.e.layerY/e.getZoom(),t.e.layerX/e.getZoom(),t.e.layerY/e.getZoom()],u=new N.Line(s,{strokeWidth:2,fill:"#999999",stroke:"#999999",class:"line",originX:"center",originY:"center",selectable:!1,hasBorders:!1,hasControls:!1,evented:!1,objectCaching:!1});if(i){var d=e.getPointer(t.e);(s=i.get("points")).push({x:d.x,y:d.y});var h=new N.Polygon(s,{stroke:"#333333",strokeWidth:1,fill:"#cccccc",opacity:.3,selectable:!1,hasBorders:!1,hasControls:!1,evented:!1,objectCaching:!1});e.remove(i),e.add(h),i=h,e.renderAll()}else{var f=[{x:t.e.layerX/e.getZoom(),y:t.e.layerY/e.getZoom()}];h=new N.Polygon(f,{stroke:"#333333",strokeWidth:1,fill:"#cccccc",opacity:.3,selectable:!1,hasBorders:!1,hasControls:!1,evented:!1,objectCaching:!1});i=h,e.add(h)}n=u,o.push(c),l.push(u),e.add(u),e.add(c),e.selection=!1},generatePolygon:function(o){var r=new Array;B.each(o,(function(t,n){r.push({x:n.left,y:n.top}),e.remove(n)})),B.each(l,(function(t,n){e.remove(n)})),console.log(o),console.log(l);for(var c,s=new N.Group,u=0;u<o.length;u++)s.addWithUpdate(o[u]),s.addWithUpdate(l[u]);return s.toObject=(c=s.toObject,function(e){return N.util.object.extend(c.call(this,e),{local_id:t})}),e.add(s),e.remove(n),e.remove(i),n=null,i=null,a=!1,e.selection=!0,e.forEachObject((function(e){e.selectable=!0})),s}}}}]),e}();function M(){return o.a.createElement("div",null,o.a.createElement("h3",null,"Keybinds:"),"There are preset keybinds setup to make it easier to use the tool without having to click around. If done properly a combination of mouse and keyboard actions speed up the annotation process.",o.a.createElement("br",null),o.a.createElement("br",null),"* ",o.a.createElement("kbd",null,"1")," : Mode Switch: Bounding Box",o.a.createElement("br",null),"* ",o.a.createElement("kbd",null,"2")," : Mode Switch: Key Point",o.a.createElement("br",null),"* ",o.a.createElement("kbd",null,"3")," : Mode Switch: Segmentation",o.a.createElement("br",null),"* ",o.a.createElement("kbd",null,"a")," : Add annotation",o.a.createElement("br",null),"* ",o.a.createElement("kbd",null,"r")," : Remove selected annotation",o.a.createElement("br",null),"* ",o.a.createElement("kbd",null,"q")," : Skip backward frame(s)",o.a.createElement("br",null),"* ",o.a.createElement("kbd",null,"s")," : Save annotation",o.a.createElement("br",null),"* ",o.a.createElement("kbd",null,"w")," : Pause/Play",o.a.createElement("br",null),"* ",o.a.createElement("kbd",null,"e")," : Skip forward frame(s)",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("h3",null,"Uploading Video:"),"Ensure that you know the framerate, vertical and horizontal resolution of the video chosen to be annotated. These values should be entered into the settings tab into their respective fields.",o.a.createElement("br",null),o.a.createElement("br",null),"Click on the right side browse button. All other buttons on the screen shuold be disabled until the video has been uploaded. Currenntly ```.mp4``` format is the best choice and tested for.",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("h3",null,"Annotations"),o.a.createElement("br",null),"There are currently three kinds of annotations.",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("h4",null,"Bounding Box:"),"This forms a square around the desired object. There should be small squares at the edges of the bounding box which can be used to resize the box. The number on the top left of the box is used to identify the placement of the box in the table to the right.",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("h4",null,"Key Point:"),"This generates an object with multiple points and lines attached to each other. They should be arranged around the obejct where the singular circle with one connecting line is the head and progress to each of the other limbs. ***Note: This feature is currently in development and there will be bugs in using this.***",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("h4",null,"Segmentation:"),"Upon generating this each click on the video generates a point which eventually will transform to a set of interconnected points. To complete the polygon click on the original point generated (which is the red colored point) ***Note: Unline the Bounding Box, segmentation cant be edited after generated. To fix a mistake remove the annotation and continue from the start.***")}var P=n(112),R=n.n(P),I=(n(204),[{dataField:"id",text:"ID",headerStyle:function(){return{width:"40px",left:0}}},{dataField:"global_id",text:"Glo",headerStyle:function(){return{width:"50px",left:0}},editCellStyle:function(e,t,n,a){return{backgroundColor:e>2101?"#00BFFF":"#00FFFF"}}},{dataField:"status",text:"Status",editor:{type:O.Type.SELECT,options:C}},{dataField:"is_hidden",text:"Curr",editor:{type:O.Type.CHECKBOX,value:"Start:Stop"}},{dataField:"behavior",text:"Behavior",editor:{type:O.Type.SELECT,options:x}},{dataField:"remove",text:"Del",formatter:function(e,t){return o.a.createElement("button",{className:"btn btn-danger btn-xs",onClick:function(){return e=t.id,K[$].splice(e,1),console.log(X.getObjects()[e]),X.remove(X.getObjects()[e].remove()),void X.fire("saveData");var e},label:"Del"})}}]);var L=n(53).fabric,W=n(110),U=-1,J=1920,H=1080,z=1;console.log(window.screen.width),console.log(window.screen.height);window.screen.width;var V=window.screen.height;V>=1440?(J=1920,H=1080):V>=1080?(J=1280,H=720):V>=1024?(J=1152,H=648):V>=768&&(J=1024,H=576);var X=new L.Canvas("c",{uniScaleTransform:!0}),Y=W({displayName:"Fabric",componentDidMount:function(){var e=i.a.findDOMNode(this);X.initialize(e,{height:H,width:J,backgroundColor:null}),X.on("mouse:up",(function(){ee($)})),X.on("object:added",ee($)),X.on("object:removed",ee($)),X.on("object:modified",ee($)),X.on("saveData",(function(){X.renderAll()}))},render:function(){return o.a.createElement("canvas",null)}}),Z=[[]],K=[[]],q=!1,G=!0,$=0,Q="";function ee(e){Z[e]=X.toJSON(),console.log("SAVED")}var te=function(){var e=Object(a.useState)(0),t=Object(h.a)(e,2),n=t[0],l=t[1],i=Object(a.useState)(0),r=Object(h.a)(i,2),s=r[0],y=r[1],w=function(){var e="#"+((1<<24)*Math.random()|0).toString(16);if(null==K[Se]&&(K[Se]=[]),ee(Se),0===n){K[Se].push({id:s,global_id:null,status:"None",is_hidden:"Start",behavior:"None"});new A(X.height/2,X.width/2,50,50,e,s,"None",X).generate_no_behavior(X)}else if(1===n)alert("KeyPoint annotation are currently unavailable");else if(2===n){K[Se].push({id:s,status:"None",is_hidden:0,posture:"None"});(new D).generate_polygon(X,s)}y(s+1),X.fire("saveData")},k=function(){y(s+1);var e=X.getActiveObject().toJSON().local_id;console.log(X.getActiveObject().toJSON());for(var t=0;t<K[Se].length;t++)if(K[Se][t].id===e){K[Se].splice(t,1);break}X.remove(X.getActiveObject()),X.fire("saveData")},O=Object(a.useState)(null),C=Object(h.a)(O,2),x=C[0],T=C[1],N=Object(a.useState)(null),B=Object(h.a)(N,2),P=(B[0],B[1],Object(a.useState)(null)),L=Object(h.a)(P,2),W=L[0],V=L[1];Object(a.useEffect)((function(){null!=W&&(console.log(W),console.log(W.getAllObjectByFrame(2)))}),W);var te=function(e){return new Promise((function(t,n){var a=new FileReader;a.onload=function(e){t(JSON.parse(e.target.result))},a.readAsText(e.target.files[0])}))},ne=Object(a.useState)(!1),ae=Object(h.a)(ne,2),oe=ae[0],le=ae[1],ie=function(e){le(!oe)},re="ERROR";re=!0===oe?"Pause":"Play";var ce=Object(a.useState)(!1),se=Object(h.a)(ce,2),ue=(se[0],se[1]),de=Object(a.useState)(0),he=Object(h.a)(de,2),fe=he[0],me=he[1],be=Object(a.useState)(null),ge=Object(h.a)(be,2),ve=ge[0],pe=ge[1];null!=ve&&null!=ve.player&&null!=ve.player.player&&null!=ve.player.player&&console.log(ve.player.player.player.videoWidth);var ye=Object(a.useState)(0),we=Object(h.a)(ye,2),Ee=we[0],ke=we[1],je=Object(a.useState)(0),Oe=Object(h.a)(je,2),Se=Oe[0],Ce=Oe[1],xe=function(e){console.log(K),console.log(parseInt(Se+z)),console.log(K[Se+z]),0==K[Se+z].length&&(console.log(Se),K[Se+z]=JSON.parse(JSON.stringify(K[Se])),Z[Se+z]=Z[Se],console.log("Carryover annotation"));var t=15*Ee;ve.seekTo(ve.getCurrentTime()/Ee*t/t+z/t)},_e=function(e){var t=15*Ee;ve.seekTo(ve.getCurrentTime()/Ee*t/t-z/t)},Te=function(){var e=Object(d.a)(u.a.mark((function e(){var t,n,a,o,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="generated_annotations",n=JSON.stringify(Z),a=new Blob([n],{type:"application/json"}),e.next=5,URL.createObjectURL(a);case 5:return o=e.sent,(l=document.createElement("a")).href=o,l.download=t+".json",document.body.appendChild(l),l.click(),document.body.removeChild(l),t="generated_data",n=JSON.stringify(K),a=new Blob([n],{type:"application/json"}),e.next=17,URL.createObjectURL(a);case 17:o=e.sent,(l=document.createElement("a")).href=o,l.download=t+".json",document.body.appendChild(l),l.click(),document.body.removeChild(l);case 24:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ae=Object(a.useState)(!1),Fe=Object(h.a)(Ae,2),Ne=Fe[0],Be=Fe[1],De=function(){return Be(!1)},Me=function(){l(0)},Pe=function(){l(1)},Re=function(){l(2)},Ie=Object(a.useState)(!1),Le=Object(h.a)(Ie,2),We=Le[0],Ue=Le[1],Je=Object(a.useState)(!0),He=Object(h.a)(Je,2),ze=He[0],Ve=He[1],Xe=function(e){0!=ze&&("1"===e.key?(Q="Mode Switch: Bounding Box",Ue(!0),Me()):"2"===e.key?(Q="Mode Switch: Key Point",Ue(!0),Pe()):"3"===e.key?(Q="Mode Switch: Segmentation",Ue(!0),Re()):"a"===e.key?(Q="Added Annotation",Ue(!0),w()):"r"===e.key?(Q="Removed Annotation",Ue(!0),k()):"q"===e.key?_e():"w"===e.key?ie():"e"===e.key?xe():"s"===e.key&&(Q="Annotation Saved",Ue(!0),Z[Se]=X.toJSON()))},Ye=Object(a.useState)(!1),Ze=Object(h.a)(Ye,2);return Ze[0],Ze[1],Object(a.useEffect)((function(){return document.addEventListener("keydown",Xe),function(){return document.removeEventListener("keydown",Xe)}}),[Xe]),Object(a.useEffect)((function(){console.log(Se),console.log(Z),console.log(K),X.loadFromJSON(Z[Se],(function(){X.renderAll()}))}),[Se]),o.a.createElement("div",null,o.a.createElement(m.a,{bg:"dark",variant:"dark",className:"bg-5"},o.a.createElement(m.a.Brand,{href:"#home"},"Annotation Tool"),o.a.createElement(b.a,{className:"mr-auto"},o.a.createElement(b.a.Link,{onClick:function(){return Be(!0)}},"Instructions"),o.a.createElement(_.a,{disabled:G,title:"Mode",id:"basic-nav-dropdown"},o.a.createElement(_.a.Item,{onClick:Me},"Square Box"),o.a.createElement(_.a.Divider,null),o.a.createElement(_.a.Item,{onClick:Pe},"Key Point"),o.a.createElement(_.a.Divider,null),o.a.createElement(_.a.Item,{onClick:Re},"Segmentation")),o.a.createElement(_.a,{disabled:G,title:"Export",id:"basic-nav-dropdown"},o.a.createElement(_.a.Item,{onClick:Te},"JSON"),o.a.createElement(_.a.Divider,null),o.a.createElement(_.a.Item,null,"CSV")),o.a.createElement(_.a,{disabled:G,title:"Settings",id:"basic-nav-dropdown"},o.a.createElement(_.a.Divider,null),"Frame Rate: ",o.a.createElement("input",{type:"number",defaultValue:"15"}),o.a.createElement(_.a.Divider,null),"Horizontal Res: ",o.a.createElement("input",{type:"number",defaultValue:"3840"}),o.a.createElement(_.a.Divider,null),"Vertical Res: ",o.a.createElement("input",{type:"number",defaultValue:"2178"}),o.a.createElement(_.a.Divider,null),"Skip Value: ",o.a.createElement("input",{type:"number",defaultValue:"1",onChange:function(e){z=parseInt(e.target.value)}}))),o.a.createElement("div",null,o.a.createElement(v.a,{style:{float:"left",width:80}},o.a.createElement(v.a.File,{disabled:G,id:"file",label:"Annotation Upload",custom:!0,type:"file",onChange:function(e){te(e).then((function(e){null!=e?V(new E(e)):console.log("ERROR in upload old_annotation")}))}})),o.a.createElement(v.a,{style:{float:"left",width:80}},o.a.createElement(v.a.File,{id:"file",label:"Video Upload",accept:".mp4",custom:!0,type:"file",onChange:function(e){T(URL.createObjectURL(e.target.files[0])),q=!0}})),o.a.createElement(f.a,{variant:"secondary",disabled:!0},"Frame # ",parseInt(Se)+" / "+parseInt(15*Ee))," ",o.a.createElement(f.a,{variant:"primary",disabled:G,onClick:_e},"Prev")," ",o.a.createElement(f.a,{variant:"primary",disabled:G,onClick:ie},re)," ",o.a.createElement(f.a,{variant:"primary",disabled:G,onClick:xe},"Next")," ",o.a.createElement(f.a,{variant:"success",disabled:G,onClick:w,style:{position:"relative"}},"Add")," ",o.a.createElement(f.a,{variant:"danger",onClick:k,disabled:G,style:{position:"relative"}},"Remove")," ")),o.a.createElement(p.a,{onClose:function(){return Ue(!1)},show:We,delay:500,autohide:!0,style:{position:"absolute",top:"00%",left:"50%",zIndex:100}},o.a.createElement(p.a.Header,null,o.a.createElement("strong",{className:"mr-auto"},Q))),o.a.createElement(g.a,{show:Ne,onHide:De,size:"lg"},o.a.createElement(g.a.Header,{closeButton:!0},o.a.createElement(g.a.Title,null,"Instructions")),o.a.createElement(g.a.Body,null,o.a.createElement(M,null)),o.a.createElement(g.a.Footer,null,o.a.createElement(f.a,{variant:"secondary",onClick:De},"Close"))),o.a.createElement("div",{style:{display:"grid"}},o.a.createElement("div",{style:{gridColumn:1,gridRow:1,position:"relative",width:J,height:H,top:0,left:0}},o.a.createElement(c.a,{onProgress:function(e){ee(Se);var t=15*Ee;if(me(Se/t),Ce(Math.round(e.played*t)),$=Math.round(e.played*t),null!=W)for(var n=new F(W.getAllObjectByFrame(Se),J,H).generate_frame(),a=0;a<n.length;a++){var o=n[a];console.log(o),X.add(o),X.setActiveObject(o),X.fire("saveData")}},ref:function(e){pe(e)},onDuration:function(e){if(!0===q&&null!=ve){console.log("Initializing..."),U=Math.round(15*e),Z=new Array(U),K=new Array(U);for(var t=0;t<U;t++)Z[t]=[],K[t]=[];q=!1,G=!1}ke(parseInt(e)),console.log(e)},url:x,width:"100%",height:"99.999%",playing:oe,controls:!1,style:{position:"absolute",float:"left",top:0,left:0},volume:0,muted:!0,pip:!1})),o.a.createElement("div",{style:{gridColumn:1,gridRow:1,position:"relative",width:J,height:H,top:0,left:0}},o.a.createElement(Y,null)),o.a.createElement("div",{style:{gridColumn:1,gridRow:2,position:"relative",width:J,top:0,left:0}},o.a.createElement("input",{style:{width:J},type:"range",min:0,max:.999999,step:"any",value:fe,onMouseDown:function(e){ue(!0)},onChange:function(e){me(parseFloat(e.target.value))},onMouseUp:function(e){ue(!1),ve.seekTo(parseFloat(e.target.value))}})),o.a.createElement("div",{style:{gridColumn:2,gridRow:1,position:"relative",width:J,height:H,top:0,left:0}},o.a.createElement("div",{style:{width:"40.5%"}},o.a.createElement(j.a,{keyField:"id",data:K[Se],columns:I,table:!0,noDataIndication:function(){return o.a.createElement("div",null,"No recorded annotations or behaviors for this frame",o.a.createElement("br",null),"Please add an annotation or behavior tag to start.")},cellEdit:S()({mode:"click",blurToSave:!0,afterSaveCell:function(e,t,n,a){console.log(K[Se][n.id]),K[Se][n.id]=n,Ve(!0)},onStartEdit:function(e,t,n,a){Ve(!1)}}),pagination:R()()})))))},ne=(n(114),O.Type.SELECT,O.Type.SELECT,n(53).fabric),ae=n(110),oe=1080,le=1920;console.log(window.screen.width),console.log(window.screen.height);window.screen.width;var ie=window.screen.height;ie>=1440?(oe=1080,le=1920):ie<=1024&&(oe=648,le=1152);var re=new ne.Canvas("c",{uniScaleTransform:!0});ae({displayName:"Fabric",componentDidMount:function(){var e=i.a.findDOMNode(this);re.initialize(e,{height:oe,width:le,backgroundColor:null}),re.on("mouse:up",(function(){})),re.on("saveData",(function(){re.renderAll()}))},render:function(){return o.a.createElement("canvas",null)}});n(230),n(231);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[116,1,2]]]);
//# sourceMappingURL=main.f731a134.chunk.js.map