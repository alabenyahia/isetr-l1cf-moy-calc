(this["webpackJsonpisetr-l1cf-moy-calc"]=this["webpackJsonpisetr-l1cf-moy-calc"]||[]).push([[0],{91:function(e,t,a){"use strict";a.r(t);var n=a(4),s=a(0),i=a.n(s),h=a(11),c=a.n(h),o=a(17),l=a(58),r=a(23),d=a(24),m=a(12),C=a(29),b=a(27),x=a(18),g=a(137),j=a(134),u=a(71),k=a(140),p=a(141),v=a(147),O=a(143),_=a(139),I=a(92),f=a(142),y=a(148),S=a(129),T=a(145);function D(){var e=Object(o.a)(["\n  margin-bottom: 8px;\n  text-align: left;\n"]);return D=function(){return e},e}function M(){var e=Object(o.a)(["\n  margin-bottom: 8px;\n"]);return M=function(){return e},e}function P(){var e=Object(o.a)(["\n  padding: 16px;\n  min-height: 250px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]);return P=function(){return e},e}var N=Object(x.b)(I.a)(P()),w=Object(x.b)(f.a)(M()),F=Object(x.b)(y.a)(D()),B=function(e){Object(C.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleCheckChange=n.handleCheckChange.bind(Object(m.a)(n)),n.handleTextChange=n.handleTextChange.bind(Object(m.a)(n)),n}return Object(d.a)(a,[{key:"handleCheckChange",value:function(e){this.props.handleCheckChange(e.target.name)}},{key:"handleTextChange",value:function(e){this.props.handleTextChange(e.target.id,e.target.value)}},{key:"render",value:function(){return Object(n.jsxs)(N,{elevation:3,children:[Object(n.jsx)(F,{htmlFor:this.props.MatIdDc,children:this.props.matName}),Object(n.jsx)(S.a,{control:Object(n.jsx)(T.a,{checked:this.props.matCheckboxIsChecked,onChange:this.handleCheckChange,name:this.props.checkBoxId,color:"primary"}),label:"Un Seul Note"}),Object(n.jsx)(w,{fullWidth:!0,id:this.props.MatIdDc,type:"number",onChange:this.handleTextChange,label:this.props.matCheckboxIsChecked?"Note":"Note Controle",variant:"outlined",error:this.props.isMatContInvalid,helperText:this.props.isMatContInvalid?"Note Invalide!":""}),!this.props.matCheckboxIsChecked&&Object(n.jsx)(w,{fullWidth:!0,id:this.props.MatIdDs,type:"number",onChange:this.handleTextChange,label:"Note Synth\xe9se",variant:"outlined",error:this.props.isMatSynInvalid,helperText:this.props.isMatSynInvalid?"Note Invalide!":""})]})}}]),a}(i.a.Component),z=a(146),E=a(130),A=a(131),L=a(132),W=a(133),q=function(e){Object(C.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleDialogClose=n.handleDialogClose.bind(Object(m.a)(n)),n}return Object(d.a)(a,[{key:"handleDialogClose",value:function(){this.props.handleDialogClose()}},{key:"render",value:function(){var e={textAlign:"center",backgroundColor:parseFloat(this.props.dialogText)>=10?"green":"red",color:"white"};return Object(n.jsx)(z.a,{open:this.props.isDialogOpen,onClose:this.handleDialogClose,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:Object(n.jsxs)("div",{style:e,children:[Object(n.jsx)(E.a,{id:"alert-dialog-title",children:this.props.dialogTitle}),Object(n.jsx)(A.a,{children:Object(n.jsx)(L.a,{style:{color:"white"},id:"alert-dialog-description",children:this.props.dialogText})}),Object(n.jsx)(W.a,{children:Object(n.jsx)(j.a,{onClick:this.handleDialogClose,style:{color:"white"},children:"Ok!"})})]})})}}]),a}(i.a.Component),G=a(135),H=a(136),U=a(138),J=a(60),R=Object(G.a)((function(e){return{title:{flexGrow:1,fontSize:"1rem"}}}));function Y(e){var t=R();return Object(n.jsx)("div",{children:Object(n.jsx)(H.a,{position:"static",children:Object(n.jsx)(g.a,{children:Object(n.jsxs)(U.a,{children:[Object(n.jsx)(J.a,{className:t.title,children:"ISETR: L1CF: MOY CALC"}),Object(n.jsx)(j.a,{color:"inherit",onClick:function(){e.handlePrcBtnClick()},children:"Changer %"})]})})})})}function V(){var e=Object(o.a)(["\n  margin-bottom: 8px;\n  text-align: left;\n"]);return V=function(){return e},e}function K(){var e=Object(o.a)(["\n  margin-bottom: 8px;\n"]);return K=function(){return e},e}function Q(){var e=Object(o.a)(["\n  padding: 16px;\n  min-height: 250px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]);return Q=function(){return e},e}var X=Object(x.b)(I.a)(Q()),Z=Object(x.b)(f.a)(K()),$=x.b.p(V()),ee=function(e){Object(C.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handlePrcCheckChange=n.handlePrcCheckChange.bind(Object(m.a)(n)),n.handlePrcTextChange=n.handlePrcTextChange.bind(Object(m.a)(n)),n}return Object(d.a)(a,[{key:"handlePrcCheckChange",value:function(){this.props.handlePrcCheckChange()}},{key:"handlePrcTextChange",value:function(e){this.props.handlePrcTextChange(e.target.id,e.target.value)}},{key:"render",value:function(){return Object(n.jsxs)(X,{elevation:3,children:[Object(n.jsxs)($,{children:["Les Pourcentages choisis par default sont comme suit:",Object(n.jsx)("br",{}),"- Devoir de controle : 40%",Object(n.jsx)("br",{}),"- Devoir de synth\xe9se : 60%",Object(n.jsx)("br",{}),"Si c'est correct veuillez clicker dans le checkbox suivant. Sinon vous pouvez les changer avec le menu si dessous."]}),Object(n.jsx)(S.a,{control:Object(n.jsx)(T.a,{checked:this.props.useDefaultPrc,onChange:this.handlePrcCheckChange,name:"prc-checkbox",color:"primary"}),label:"Utiliser les pourcentages par default"}),!this.props.useDefaultPrc&&Object(n.jsx)(Z,{fullWidth:!0,id:"prc-dc",type:"number",onChange:this.handlePrcTextChange,label:"Changer Pourcentage des DC",variant:"outlined"}),!this.props.useDefaultPrc&&Object(n.jsx)(Z,{fullWidth:!0,id:"prc-ds",type:"number",onChange:this.handlePrcTextChange,label:"Changer Pourcentage des DS",variant:"outlined"})]})}}]),a}(i.a.Component);function te(){var e=Object(o.a)(["\n  background-color: #941b6f;\n  padding: 20px;\n  text-align: center;\n  color: white;\n"]);return te=function(){return e},e}function ae(){var e=Object(o.a)(["\n  margin: 16px 0;\n\n  @media screen and (max-width: 500px) {\n    width: 100%;\n  }\n"]);return ae=function(){return e},e}function ne(){var e=Object(o.a)(["\n  padding: 16px;\n  text-align: center;\n  flex: 1 0 auto;\n"]);return ne=function(){return e},e}var se=Object(x.b)(g.a)(ne()),ie=Object(x.b)(j.a)(ae()),he=x.b.footer(te()),ce=Object(u.a)({palette:{primary:{light:"#b32086",main:"#941b6f",dark:"#470935"}}}),oe=function(e){Object(C.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={matiere:{manag__s1:{matName:"Management Des Organisations",isChecked:!1,noteControle:"",noteSynthese:"",isControleInvalid:!1,isSyntheseInvalid:!1,coef:2},eco__s1:{matName:"Economie G\xe9n\xe9rale 1",isChecked:!1,noteControle:"",noteSynthese:"",isControleInvalid:!1,isSyntheseInvalid:!1,coef:2},dr_comm__s1:{matName:"Droit Commercial",isChecked:!1,noteControle:"",noteSynthese:"",isControleInvalid:!1,isSyntheseInvalid:!1,coef:1.5},math_fin__s1:{matName:"Math\xe9matiques Financi\xe9res",isChecked:!1,noteControle:"",noteSynthese:"",isControleInvalid:!1,isSyntheseInvalid:!1,coef:1},comp__s1:{matName:"Comptabilit\xe9 Financi\xe9re 1",isChecked:!1,noteControle:"",noteSynthese:"",isControleInvalid:!1,isSyntheseInvalid:!1,coef:2.5},math_gest__s1:{matName:"Math\xe9matiques De Gestion",isChecked:!1,noteControle:"",noteSynthese:"",isControleInvalid:!1,isSyntheseInvalid:!1,coef:1.5},stat__s1:{matName:"Statistiques Descriptives",isChecked:!1,noteControle:"",noteSynthese:"",isControleInvalid:!1,isSyntheseInvalid:!1,coef:2},comm__s1:{matName:"Habilit\xe9 En Communication 1",isChecked:!1,noteControle:"",noteSynthese:"",isControleInvalid:!1,isSyntheseInvalid:!1,coef:1},dr_hom__s1:{matName:"Droit De L'homme",isChecked:!1,noteControle:"",noteSynthese:"",isControleInvalid:!1,isSyntheseInvalid:!1,coef:.5},cert__s1:{matName:"Certification C2N",isChecked:!1,noteControle:"",noteSynthese:"",isControleInvalid:!1,isSyntheseInvalid:!1,coef:1}},showDialog:!1,showToast:!1,showPrcToast:!1,pourcentageControle:40,pourcentageSynthese:60,useDefaultPrc:!0,showPrcBtnClicked:!1,moy:null},n.handleCheckboxChange=n.handleCheckboxChange.bind(Object(m.a)(n)),n.handleTextFieldChange=n.handleTextFieldChange.bind(Object(m.a)(n)),n.handleCalcClick=n.handleCalcClick.bind(Object(m.a)(n)),n.handleDialogClose=n.handleDialogClose.bind(Object(m.a)(n)),n.calcMoy=n.calcMoy.bind(Object(m.a)(n)),n.handleToastClose=n.handleToastClose.bind(Object(m.a)(n)),n.handlePrcToastClose=n.handlePrcToastClose.bind(Object(m.a)(n)),n.handlePrcCheckChange=n.handlePrcCheckChange.bind(Object(m.a)(n)),n.handlePrcTextChange=n.handlePrcTextChange.bind(Object(m.a)(n)),n.handlePrcBtnClick=n.handlePrcBtnClick.bind(Object(m.a)(n)),n}return Object(d.a)(a,[{key:"calcMoy",value:function(){var e=0,t=0;for(var a in this.state.matiere){if(t+=parseFloat(this.state.matiere[a].coef),this.state.matiere[a].noteControle.length<=0||this.state.matiere[a].isControleInvalid)return!1;if(this.state.matiere[a].isChecked)e+=parseFloat(this.state.matiere[a].noteControle)*parseFloat(this.state.matiere[a].coef);else{if(this.state.matiere[a].noteSynthese.length<=0||this.state.matiere[a].isSyntheseInvalid)return!1;e+=(parseFloat(this.state.matiere[a].noteControle)*this.state.pourcentageControle+parseFloat(this.state.matiere[a].noteSynthese)*this.state.pourcentageSynthese)/100*parseFloat(this.state.matiere[a].coef)}}return e/t}},{key:"handlePrcCheckChange",value:function(){var e=this.state.useDefaultPrc;e?this.setState({useDefaultPrc:!e}):this.setState({useDefaultPrc:!e,pourcentageControle:40,pourcentageSynthese:60})}},{key:"handlePrcTextChange",value:function(e,t){t=parseInt(t)||0,"prc-dc"===e?this.setState({pourcentageControle:t}):this.setState({pourcentageSynthese:t})}},{key:"handleCheckboxChange",value:function(e){var t=Object(l.a)({},this.state.matiere),a=e;t[a=(a=(a=a.replace("-checked","")).replace("--","__")).replace("-","_")].isChecked=!this.state.matiere[a].isChecked,this.setState({matiere:t})}},{key:"handleTextFieldChange",value:function(e,t){var a=Object(l.a)({},this.state.matiere),n=e.toString();n.indexOf("--dc")>=0?(a[n=(n=(n=n.replace("--dc","")).replace("--","__")).replace("-","_")].noteControle=t,a[n].isControleInvalid=parseFloat(t)<0||parseFloat(t)>20):(a[n=(n=(n=n.replace("--ds","")).replace("--","__")).replace("-","_")].noteSynthese=t,a[n].isSyntheseInvalid=parseFloat(t)<0||parseFloat(t)>20),this.setState({matiere:a})}},{key:"handlePrcBtnClick",value:function(){var e=this.state.showPrcBtnClicked;this.setState({showPrcBtnClicked:!e})}},{key:"handleCalcClick",value:function(){var e=this.calcMoy();e?parseInt(this.state.pourcentageControle)+parseInt(this.state.pourcentageSynthese)===100?this.setState({showDialog:!0,showToast:!1,showPrcToast:!1,moy:e}):this.setState({showDialog:!1,showToast:!1,showPrcToast:!0,moy:null}):this.setState({showDialog:!1,showToast:!0,showPrcToast:!1,moy:null})}},{key:"handleDialogClose",value:function(){this.setState({showDialog:!1})}},{key:"handleToastClose",value:function(){this.setState({showToast:!1})}},{key:"handlePrcToastClose",value:function(){this.setState({showPrcToast:!1})}},{key:"render",value:function(){return Object(n.jsx)(O.b,{injectFirst:!0,children:Object(n.jsxs)(_.a,{theme:ce,children:[Object(n.jsx)(Y,{handlePrcBtnClick:this.handlePrcBtnClick}),Object(n.jsxs)(se,{children:[Object(n.jsxs)("form",{autoComplete:"off",children:[Object(n.jsxs)(k.a,{container:!0,spacing:2,style:{textAlign:"left"},children:[this.state.showPrcBtnClicked&&Object(n.jsx)(k.a,{item:!0,xs:12,sm:9,xl:10,style:{margin:"0 auto"},children:Object(n.jsx)(ee,{useDefaultPrc:this.state.useDefaultPrc,handlePrcCheckChange:this.handlePrcCheckChange,handlePrcTextChange:this.handlePrcTextChange})}),Object(n.jsx)(k.a,{item:!0,xs:12,sm:6,lg:4,xl:3,children:Object(n.jsx)(B,{matName:this.state.matiere.manag__s1.matName,MatIdDc:"manag--dc--s1",MatIdDs:"manag--ds--s1",matCheckboxIsChecked:this.state.matiere.manag__s1.isChecked,handleCheckChange:this.handleCheckboxChange,checkBoxId:"manag--s1-checked",handleTextChange:this.handleTextFieldChange,isMatContInvalid:this.state.matiere.manag__s1.isControleInvalid,isMatSynInvalid:this.state.matiere.manag__s1.isSyntheseInvalid})}),Object(n.jsx)(k.a,{item:!0,xs:12,sm:6,lg:4,xl:3,children:Object(n.jsx)(B,{matName:this.state.matiere.eco__s1.matName,MatIdDc:"eco--dc--s1",MatIdDs:"eco--ds--s1",matCheckboxIsChecked:this.state.matiere.eco__s1.isChecked,handleCheckChange:this.handleCheckboxChange,checkBoxId:"eco--s1-checked",handleTextChange:this.handleTextFieldChange,isMatContInvalid:this.state.matiere.eco__s1.isControleInvalid,isMatSynInvalid:this.state.matiere.eco__s1.isSyntheseInvalid})}),Object(n.jsx)(k.a,{item:!0,xs:12,sm:6,lg:4,xl:3,children:Object(n.jsx)(B,{matName:this.state.matiere.dr_comm__s1.matName,MatIdDc:"dr-comm--dc--s1",MatIdDs:"dr-comm--ds--s1",matCheckboxIsChecked:this.state.matiere.dr_comm__s1.isChecked,handleCheckChange:this.handleCheckboxChange,checkBoxId:"dr-comm--s1-checked",handleTextChange:this.handleTextFieldChange,isMatContInvalid:this.state.matiere.dr_comm__s1.isControleInvalid,isMatSynInvalid:this.state.matiere.dr_comm__s1.isSyntheseInvalid})}),Object(n.jsx)(k.a,{item:!0,xs:12,sm:6,lg:4,xl:3,children:Object(n.jsx)(B,{matName:this.state.matiere.math_fin__s1.matName,MatIdDc:"math-fin--dc--s1",MatIdDs:"math-fin--ds--s1",matCheckboxIsChecked:this.state.matiere.math_fin__s1.isChecked,handleCheckChange:this.handleCheckboxChange,checkBoxId:"math-fin--s1-checked",handleTextChange:this.handleTextFieldChange,isMatContInvalid:this.state.matiere.math_fin__s1.isControleInvalid,isMatSynInvalid:this.state.matiere.math_fin__s1.isSyntheseInvalid})}),Object(n.jsx)(k.a,{item:!0,xs:12,sm:6,lg:4,xl:3,children:Object(n.jsx)(B,{matName:this.state.matiere.comp__s1.matName,MatIdDc:"comp--dc--s1",MatIdDs:"comp--ds--s1",matCheckboxIsChecked:this.state.matiere.comp__s1.isChecked,handleCheckChange:this.handleCheckboxChange,checkBoxId:"comp--s1-checked",handleTextChange:this.handleTextFieldChange,isMatContInvalid:this.state.matiere.comp__s1.isControleInvalid,isMatSynInvalid:this.state.matiere.comp__s1.isSyntheseInvalid})}),Object(n.jsx)(k.a,{item:!0,xs:12,sm:6,lg:4,xl:3,children:Object(n.jsx)(B,{matName:this.state.matiere.math_gest__s1.matName,MatIdDc:"math-gest--dc--s1",MatIdDs:"math-gest--ds--s1",matCheckboxIsChecked:this.state.matiere.math_gest__s1.isChecked,handleCheckChange:this.handleCheckboxChange,checkBoxId:"math-gest--s1-checked",handleTextChange:this.handleTextFieldChange,isMatContInvalid:this.state.matiere.math_gest__s1.isControleInvalid,isMatSynInvalid:this.state.matiere.math_gest__s1.isSyntheseInvalid})}),Object(n.jsx)(k.a,{item:!0,xs:12,sm:6,lg:4,xl:3,children:Object(n.jsx)(B,{matName:this.state.matiere.stat__s1.matName,MatIdDc:"stat--dc--s1",MatIdDs:"stat--ds--s1",matCheckboxIsChecked:this.state.matiere.stat__s1.isChecked,handleCheckChange:this.handleCheckboxChange,checkBoxId:"stat--s1-checked",handleTextChange:this.handleTextFieldChange,isMatContInvalid:this.state.matiere.stat__s1.isControleInvalid,isMatSynInvalid:this.state.matiere.stat__s1.isSyntheseInvalid})}),Object(n.jsx)(k.a,{item:!0,xs:12,sm:6,lg:4,xl:3,children:Object(n.jsx)(B,{matName:this.state.matiere.comm__s1.matName,MatIdDc:"comm--dc--s1",MatIdDs:"comm--ds--s1",matCheckboxIsChecked:this.state.matiere.comm__s1.isChecked,handleCheckChange:this.handleCheckboxChange,checkBoxId:"comm--s1-checked",handleTextChange:this.handleTextFieldChange,isMatContInvalid:this.state.matiere.comm__s1.isControleInvalid,isMatSynInvalid:this.state.matiere.comm__s1.isSyntheseInvalid})}),Object(n.jsx)(k.a,{item:!0,xs:12,sm:6,lg:4,xl:3,children:Object(n.jsx)(B,{matName:this.state.matiere.dr_hom__s1.matName,MatIdDc:"dr-hom--dc--s1",MatIdDs:"dr-hom--ds--s1",matCheckboxIsChecked:this.state.matiere.dr_hom__s1.isChecked,handleCheckChange:this.handleCheckboxChange,checkBoxId:"dr-hom--s1-checked",handleTextChange:this.handleTextFieldChange,isMatContInvalid:this.state.matiere.dr_hom__s1.isControleInvalid,isMatSynInvalid:this.state.matiere.dr_hom__s1.isSyntheseInvalid})}),Object(n.jsx)(k.a,{item:!0,xs:12,sm:6,lg:4,xl:3,children:Object(n.jsx)(B,{matName:this.state.matiere.cert__s1.matName,MatIdDc:"cert--dc--s1",MatIdDs:"cert--ds--s1",matCheckboxIsChecked:this.state.matiere.cert__s1.isChecked,handleCheckChange:this.handleCheckboxChange,checkBoxId:"cert--s1-checked",handleTextChange:this.handleTextFieldChange,isMatContInvalid:this.state.matiere.cert__s1.isControleInvalid,isMatSynInvalid:this.state.matiere.cert__s1.isSyntheseInvalid})})]}),Object(n.jsx)(ie,{endIcon:Object(n.jsx)(p.a,{children:"send"}),size:"large",variant:"contained",color:"primary",onClick:this.handleCalcClick,children:"Calculer"})]}),null!=this.state.moy&&Object(n.jsx)(q,{handleDialogClose:this.handleDialogClose,isDialogOpen:this.state.showDialog,dialogTitle:"Votre Moyenne:",dialogText:this.state.moy.toString()}),Object(n.jsx)(v.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:this.state.showToast,autoHideDuration:3200,onClose:this.handleToastClose,message:"Un Des Notes Est Invalide",action:Object(n.jsx)(p.a,{size:"small","aria-label":"close",color:"inherit",onClick:this.handleToastClose,children:"close"})}),Object(n.jsx)(v.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:this.state.showPrcToast,autoHideDuration:3200,onClose:this.handlePrcToastClose,message:"Somme des pourcentages doit etre 100",action:Object(n.jsx)(p.a,{size:"small","aria-label":"close",color:"inherit",onClick:this.handlePrcToastClose,children:"close"})})]}),Object(n.jsx)(he,{children:"Made By Ala Ben Yahia"})]})})}}]),a}(i.a.Component);function le(){var e=Object(o.a)(["\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: 'Roboto', sans-serif;\n  }\n  #root {\n    display: flex;\n    min-height: 100vh;\n    flex-direction: column;\n  }\n"]);return le=function(){return e},e}var re=Object(x.a)(le());var de=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(re,{}),Object(n.jsx)(oe,{})]})};c.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(de,{})}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.374c261a.chunk.js.map