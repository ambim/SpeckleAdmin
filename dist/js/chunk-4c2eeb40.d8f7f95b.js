(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c2eeb40"],{1919:function(t,e,r){},"2f21":function(t,e,r){"use strict";var s=r("79e5");t.exports=function(t,e){return!!t&&s(function(){e?t.call(null,function(){},1):t.call(null)})}},"405e":function(t,e,r){"use strict";var s=r("4f70"),a=r.n(s);a.a},"4f70":function(t,e,r){},"51a3":function(t,e,r){},"55dd":function(t,e,r){"use strict";var s=r("5ca1"),a=r("d8e8"),i=r("4bf8"),n=r("79e5"),c=[].sort,o=[1,2,3];s(s.P+s.F*(n(function(){o.sort(void 0)})||!n(function(){o.sort(null)})||!r("2f21")(c)),"Array",{sort:function(t){return void 0===t?c.call(i(this)):c.call(i(this),a(t))}})},"56af":function(t,e,r){"use strict";var s=r("1919"),a=r.n(s);a.a},"7c41":function(t,e,r){"use strict";var s=r("9902"),a=r.n(s);a.a},"7f52":function(t,e,r){},9902:function(t,e,r){},a481:function(t,e,r){r("214f")("replace",2,function(t,e,r){return[function(s,a){"use strict";var i=t(this),n=void 0==s?void 0:s[e];return void 0!==n?n.call(s,i,a):r.call(String(i),s,a)},r]})},b93b:function(t,e,r){"use strict";var s=r("7f52"),a=r.n(s);a.a},cbaf:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.project?r("div",{staticClass:"md-layout md-alignment-center-center"},[r("div",{staticClass:"md-layout-item md-size-100"}),r("div",{staticClass:"md-layout-item md-size-50 md-large-size-65 md-medium-size-100 detail-card"},[r("project-detail-title",{attrs:{project:t.project}}),r("detail-description",{attrs:{resource:t.project}}),r("br"),r("md-card",{attrs:{"md-with-hover":""}},[r("md-card-header",{staticClass:"bg-ghost-white"},[r("md-card-header-text",[r("h2",{staticClass:"md-title"},[r("md-icon",[t._v("group")]),t._v(" Team Members")],1),r("p",{staticClass:"md-caption"},[t._v("The following people will have access to the streams in this project, and will be able to view this project. Please note, users with higher privileges from other projects will not be downgraded or removed.")])])],1),r("md-card-content",[t.canEdit?r("user-search",{on:{"selected-user":t.addUserToTeam}}):t._e(),r("permission-table",{attrs:{project:t.project,"global-disabled":!t.canEdit},on:{"remove-user":function(t){},"move-user":function(t){}}})],1)],1),r("br"),r("project-detail-streams",{attrs:{project:t.project},on:{"selected-stream":t.addStream,"remove-stream":t.removeStream}})],1)]):r("div",{staticClass:"md-layout md-alignment-center-center",staticStyle:{height:"95vh"}},[r("div",{staticClass:"md-layout-item md-size-50"},[r("md-progress-bar",{attrs:{"md-mode":"indeterminate"}})],1)])])},a=[],i=(r("ac6a"),r("2909")),n=(r("7514"),r("cadf"),r("551c"),r("097d"),r("13bb")),c=r.n(n),o=r("c36e"),d=r.n(o),m=r("6ec6"),u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.project?r("div",{},[0===t.allUsersPop.length?r("div",[t._v("\n      No sharing buddies so far!\n    ")]):t._e(),t._l(t.allUsersPop,function(e){return e?r("div",{class:{"md-layout md-alignment-center-left user":!0,"bg-ghost-white":e.isOwner}},[r("div",{staticClass:"md-layout-item md-size-10 md-small-hide"},[r("md-avatar",{staticClass:"md-avatar-icon md-small",style:{background:t.getHexFromString(e.name)}},[t._v(t._s(e.name.substring(0,1).toUpperCase()))])],1),r("div",{staticClass:"md-layout-item xxx-md-size-40 md-small-size-100"},[t._v("\n        "+t._s(e.name)+" "+t._s(e.surname)+" "),e.company?r("span",{staticClass:"md-caption"},[t._v("("+t._s(e.company)+")")]):t._e(),t._v(" "),e.isOwner?r("span",[r("strong",[t._v("owner")])]):t._e()]),r("div",{staticClass:"md-layout-item text-center "},[r("md-button",{class:{"md-dense md-raised-xx":!0,"md-primary":t.hasWritePermissionStreams(e._id)},attrs:{disabled:e.surname.includes("(that is you!)")||t.globalDisabled||e.isOwner},nativeOn:{click:function(r){t.changePermissionStreams(e._id)}}},[t._v("\n          "+t._s(t.hasWritePermissionStreams(e._id)?"write streams":"read streams")+"\n        ")])],1),r("div",{staticClass:"md-layout-item text-center"},[r("md-button",{class:{"md-dense md-raised-xx":!0,"md-primary":t.hasWritePermissionProject(e._id)},attrs:{disabled:e.surname.includes("(that is you!)")||t.globalDisabled||e.isOwner},nativeOn:{click:function(r){t.changePermissionProject(e._id)}}},[t._v("\n          "+t._s(t.hasWritePermissionProject(e._id)?"write project":"read project")+"\n        ")])],1),r("div",{staticClass:"md-layout-item text-center md-size-5"},[r("md-button",{staticClass:"md-dense-xxx md-icon-button md-accent",attrs:{disabled:e.surname.includes("(that is you!)")||t.globalDisabled||e.isOwner},nativeOn:{click:function(r){t.removeUser(e._id)}}},[r("md-icon",[t._v("delete")])],1)],1),r("div",{staticClass:"md-layout-item md-size-100"})]):t._e()})],2):t._e()])},l=[],p=(r("7f7f"),r("55dd"),{name:"PermissionTable",props:{project:Object,globalDisabled:{type:Boolean,default:!1}},computed:{canReadProject:function(){return this.project.canRead},canWriteProject:function(){return this.project.canWrite},canReadStreams:function(){return this.project.permissions.canRead},canWriteStreams:function(){return this.project.permissions.canWrite},allUsers:function(){return d()(Object(i["a"])(this.canReadProject).concat(Object(i["a"])(this.canWriteProject),Object(i["a"])(this.canReadStreams),Object(i["a"])(this.canWriteProject),[this.project.owner]))},allUsersPop:function(){var t=this;return 0===this.allUsers.length?[]:this.allUsers.map(function(e){var r=t.$store.state.users.find(function(t){return t._id===e});return r||t.$store.dispatch("getUser",{_id:e}),r&&(r.isOwner=r._id===t.project.owner),r}).sort(function(t,e){return t.name>e.name?1:-1})}},data:function(){return{}},methods:{hasWritePermissionStreams:function(t){return this.canWriteStreams.indexOf(t)>-1},hasWritePermissionProject:function(t){return this.canWriteProject.indexOf(t)>-1},changePermissionProject:function(t){var e=this.project.canWrite.indexOf(t)>-1,r=[],s=[],a=this.project.permissions.canWrite,n=this.project.permissions.canRead;e?(r=this.project.canWrite.filter(function(e){return e!==t}),s=d()(Object(i["a"])(this.project.canRead).concat([t]))):(s=this.project.canRead,r=d()(Object(i["a"])(this.project.canWrite).concat([t])),a=d()(Object(i["a"])(a).concat([t])),this.upgradeUser(t)),this.$store.dispatch("updateProject",{_id:this.project._id,permissions:{canRead:n,canWrite:a},canRead:s,canWrite:r})},changePermissionStreams:function(t){var e=this.project.permissions.canWrite.indexOf(t)>-1,r=[],s=[];e?(s=this.project.permissions.canWrite.filter(function(e){return e!==t}),r=d()(Object(i["a"])(this.project.permissions.canRead).concat([t]))):(r=this.project.permissions.canRead,s=d()(Object(i["a"])(this.project.permissions.canWrite).concat([t]))),this.$store.dispatch("updateProject",{_id:this.project._id,permissions:{canRead:r,canWrite:s}}),e?this.downgradeUser(t):this.upgradeUser(t)},upgradeUser:function(t){var e=this;this.project.streams.forEach(function(r){var s=e.$store.state.streams.find(function(t){return t.streamId===r});if(s){var a=d()(Object(i["a"])(s.canWrite).concat([t]));e.$store.dispatch("updateStream",{streamId:r,canWrite:a})}})},downgradeUser:function(t){var e=this;this.project.streams.forEach(function(r){var s=e.$store.state.streams.find(function(t){return t.streamId===r});if(s){var a,n,c=e.$store.state.projects.filter(function(t){return-1!==t.streams.indexOf(r)&&t._id!==e.project._id}),o=(a=Array.prototype).concat.apply(a,Object(i["a"])(c.map(function(t){return t.permissions.canRead}))),m=(n=Array.prototype).concat.apply(n,Object(i["a"])(c.map(function(t){return t.permissions.canWrite})));console.log(o);var u=s.canWrite,l=s.canRead;-1===m.indexOf(t)?(u=u.filter(function(e){return e!==t}),l=d()(Object(i["a"])(l).concat([t])),e.$store.dispatch("updateStream",{streamId:r,canWrite:u,canRead:l})):console.warn("User ".concat(t," has write permissions from another project on stream ").concat(r,". Will not change."))}})},removeUser:function(t){var e=this,r=this.project.permissions.canRead.filter(function(e){return e!==t}),s=this.project.permissions.canWrite.filter(function(e){return e!==t}),a=this.project.canRead.filter(function(e){return e!==t}),n=this.project.canWrite.filter(function(e){return e!==t});this.$store.dispatch("updateProject",{_id:this.project._id,permissions:{canRead:r,canWrite:s},canRead:a,canWrite:n}),this.project.streams.forEach(function(r){var s=e.$store.state.streams.find(function(t){return t.streamId===r});if(s){var a,n,c=e.$store.state.projects.filter(function(t){return-1!==t.streams.indexOf(r)&&t._id!==e.project._id}),o=(a=Array.prototype).concat.apply(a,Object(i["a"])(c.map(function(t){return t.permissions.canRead}))),d=(n=Array.prototype).concat.apply(n,Object(i["a"])(c.map(function(t){return t.permissions.canWrite}))),m=s.canWrite,u=s.canRead,l=!1;-1===o.indexOf(t)&&(u=s.canRead.filter(function(e){return e!==t}),l=!0),-1===d.indexOf(t)&&(m=s.canWrite.filter(function(e){return e!==t}),l=!0),l&&e.$store.dispatch("updateStream",{streamId:r,canRead:u,canWrite:m})}})}},mounted:function(){}}),h=p,f=(r("7c41"),r("2877")),j=Object(f["a"])(h,u,l,!1,null,"5eb52a00",null);j.options.__file="PermissionTableProject.vue";var v=j.exports,_=r("8450"),b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("md-card",{attrs:{"md-with-hover":""}},[r("md-card-header",{staticClass:"bg-ghost-white"},[r("md-card-header-text",[r("h2",{staticClass:"md-title"},[r("md-icon",[t._v("import_export")]),t._v(" Streams")],1),r("p",{staticClass:"md-caption"},[t._v("These are this project's streams. Adding a stream here will automatically grant write permission to the project's team members."),t.canEdit?r("span",[r("br"),t._v(" "),r("md-divider"),r("br"),t._v("You can only add streams that you have write permissions to.")],1):t._e()])])],1),r("md-card-content",{staticClass:"md-layout"},[r("div",{staticClass:"md-layout-item md-size-100"},[t.canEdit?r("stream-search",{attrs:{"streams-to-omit":t.streams,"write-only":""},on:{"selected-stream":t.selectStream}}):t._e()],1),0===t.streams.length?r("div",{staticClass:"md-layout-item md-size-100"},[r("p",[t._v("This project has no streams. Add some using the form below!")])]):r("div",{staticClass:"md-layout-item md-size-100"},t._l(t.streams,function(e){return r("stream-card-small",{key:e,attrs:{streamId:e,removable:t.canEdit},on:{"remove-stream":t.removeStream}})}))])],1)},g=[],y=r("f7fe"),O=r.n(y),S=r("adc7"),W=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("md-card",{staticClass:"md-elevation-0",attrs:{"md-with-hover":""}},[r("md-card-content",[r("md-field",{attrs:{"md-clearable":""}},[r("md-icon",[t._v("search")]),r("md-input",{attrs:{spellcheck:"false",disabled:t.globalDisabled},on:{input:t.updateSearch},model:{value:t.searchfilter,callback:function(e){t.searchfilter=e},expression:"searchfilter"}}),r("label",[t._v("Search for a stream to add")])],1),r("md-progress-bar",{directives:[{name:"show",rawName:"v-show",value:t.searchInProgress,expression:"searchInProgress"}],attrs:{"md-mode":"indeterminate","md-diameter":20,"md-stroke":2}}),t.showSearchResults?r("div",{staticClass:"search-results"},[t._l(t.paginatedStreams,function(e){return t.filters.length>0?r("md-chip",{key:e.streamId,staticClass:"md-primary",staticStyle:{margin:"3px"},attrs:{"md-clickable":""},on:{click:function(r){t.selectStream(e.streamId)}}},[r("strong",[t._v(t._s(e.name))]),t._v(" "+t._s(e.streamId)+" "),t._l(e.tags,function(s){return e.tags?r("span",{staticStyle:{background:"#0B5DE8","border-radius":"3px","margin-right":"4px",padding:"1px"}},[t._v(" "+t._s(s)+" ")]):t._e()})],2):t._e()}),0===t.paginatedStreams.length?r("p",{staticClass:"md-caption"},[t._v("No streams found. Existing streams ignored.")]):t._e()],2):t._e()],1)],1)},w=[],P=(r("6762"),r("2fdb"),r("28a5"),{name:"StreamSearch",props:{streamsToOmit:{type:Array,default:function(){return[]}},globalDisabled:{type:Boolean,default:!1},writeOnly:Boolean},computed:{filteredStreams:function(){var t=this;return this.$store.getters.filteredStreams(this.filters).filter(function(e){return-1===t.streamsToOmit.indexOf(e.streamId)})},paginatedStreams:function(){var t=this,e=this.filteredStreams.slice(this.startIndex,this.endIndex);return this.writeOnly&&(e=e.filter(function(e){return e.owner===t.$store.state.user._id||e.canWrite.indexOf(t.$store.state.user._id)>-1})),e}},watch:{searchfilter:function(t){""===t?(this.showSearchResults=!1,this.searchInProgress=!1):this.searchInProgress=!0}},data:function(){return{searchfilter:"",filters:[],showSearchResults:!1,searchInProgress:!1}},methods:{selectStream:function(t){this.$emit("selected-stream",t)},updateSearch:O()(function(t){if(this.searchfilter=t,""!==t){this.showSearchResults=!0,this.searchInProgress=!1;try{var e=this.searchfilter.split(" ").map(function(t){return t.includes(":")?{key:t.split(":")[0],value:t.split(":")[1]}:t.includes("public")||t.includes("private")||t.includes("mine")||t.includes("shared")?{key:t,value:null}:{key:"name",value:t}});this.filters=e}catch(r){this.filters=[{key:"name",value:t}]}}else this.showSearchResults=!1},1e3)}}),$=P,x=(r("e9f9"),Object(f["a"])($,W,w,!1,null,"16406b3f",null));x.options.__file="StreamSearch.vue";var R=x.exports,C={name:"ProjectStreams",components:{StreamCardSmall:S["a"],StreamSearch:R},props:{project:Object},computed:{streams:function(){return this.project.streams?this.project.streams:[]},canEdit:function(){return this.project.owner===this.$store.state.user._id||this.project.canWrite.indexOf(this.$store.state.user._id)>-1}},watch:{},data:function(){return{}},methods:{selectStream:function(t){this.$emit("selected-stream",t)},removeStream:function(t){this.$emit("remove-stream",t)}}},I=C,U=(r("405e"),Object(f["a"])(I,b,g,!1,null,"5ce3bbf6",null));U.options.__file="ProjectDetailStreams.vue";var E=U.exports,k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("md-card",{staticClass:"md-elevation-0"},[r("h1",{staticClass:"md-display-1"},[r("router-link",{attrs:{to:"/projects"}},[t._v("Projects")]),t._v(" /\n    "),r("span",{staticClass:"project-name",attrs:{title:"Click to edit.",contenteditable:t.canEdit},domProps:{innerHTML:t._s(t.getName())},on:{blur:t.updateName}})],1),r("p",[t._v("\n    projectId: "),r("span",{staticStyle:{"user-select":"all"}},[r("md-chip",{staticClass:"md-accent"},[r("strong",[t._v(t._s(t.project._id))])])],1)]),r("md-divider"),r("md-chips",{staticClass:"stream-chips",attrs:{"md-placeholder":"add tags","md-disabled":"!canEdit"},on:{input:t.updateTags},model:{value:t.project.tags,callback:function(e){t.$set(t.project,"tags",e)},expression:"project.tags"}})],1)},T=[],D=(r("a481"),{name:"HelloWorld",props:{project:Object},computed:{canEdit:function(){return this.project.owner===this.$store.state.user._id||this.project.canWrite.indexOf(this.$store.state.user._id)>-1}},data:function(){return{}},methods:{getName:function(){return this.project.name},updateName:function(t){var e=t.target.innerText.replace(/(\r\n|\n|\r)/gm," ");e!==this.project.name&&(this.project.name=e,this.$store.dispatch("updateProject",{_id:this.project._id,name:this.project.name}))},updateTags:O()(function(t){this.$store.dispatch("updateProject",{_id:this.project._id,tags:this.project.tags})},1e3)}}),z=D,A=(r("56af"),Object(f["a"])(z,k,T,!1,null,"f0def33c",null));A.options.__file="ProjectDetailTitle.vue";var N=A.exports,B={name:"ProjectDetailView",components:{UserSearch:m["a"],PermissionTable:v,DetailDescription:_["a"],ProjectDetailStreams:E,ProjectDetailTitle:N},props:{},computed:{canEdit:function(){return this.project.owner===this.$store.state.user._id||this.project.canWrite.indexOf(this.$store.state.user._id)>-1},project:function(){var t=this;return this.$store.state.projects.find(function(e){return e._id===t.$route.params.projectId})},canReadProject:function(){return this.project.canRead},canWriteProject:function(){return this.project.canWrite},canReadStreams:function(){return this.project.permissions.canRead},canWriteStreams:function(){return this.project.permissions.canWrite},allUsers:function(){return d()(Object(i["a"])(this.canReadProject).concat(Object(i["a"])(this.canWriteProject),Object(i["a"])(this.canReadStreams),Object(i["a"])(this.canWriteProject),[this.project.owner]))}},data:function(){return{}},methods:{addUserToTeam:function(t){var e=this,r={canWrite:d()(Object(i["a"])(this.project.permissions.canWrite).concat([t])),canRead:this.project.permissions.canRead},s=d()(Object(i["a"])(this.project.canRead).concat([t]));this.$store.dispatch("updateProject",{_id:this.project._id,permissions:r,canRead:s}),this.project.streams.forEach(function(r){var s=e.$store.state.streams.find(function(t){return t.streamId===r});if(s){var a=d()(Object(i["a"])(s.canWrite).concat([t]));e.$store.dispatch("updateStream",{streamId:r,canWrite:a})}else console.error("Failed to find ".concat(r," while updating permissions from project."))})},addStream:function(t){this.$store.dispatch("updateProject",{_id:this.project._id,streams:d()(Object(i["a"])(this.project.streams).concat([t]))});var e=this.$store.state.streams.find(function(e){return e.streamId===t}),r=d()(Object(i["a"])(e.canRead).concat(Object(i["a"])(this.project.permissions.canRead))),s=d()(Object(i["a"])(e.canWrite).concat(Object(i["a"])(this.project.permissions.canWrite)));this.$store.dispatch("updateStream",{streamId:t,canRead:r,canWrite:s})},removeStream:function(t){var e,r,s=this;console.log("remove ".concat(t));var a=this.project.streams.filter(function(e){return e!==t});this.$store.dispatch("updateProject",{_id:this.project._id,streams:a});var n=this.$store.state.projects.filter(function(e){return-1!==e.streams.indexOf(t)&&e._id!==s.project._id}),c=(e=Array.prototype).concat.apply(e,Object(i["a"])(n.map(function(t){return t.permissions.canRead}))),o=(r=Array.prototype).concat.apply(r,Object(i["a"])(n.map(function(t){return t.permissions.canWrite}))),d=this.$store.state.streams.find(function(e){return e.streamId===t}),m=d.canRead,u=d.canWrite,l=!1;this.allUsers.forEach(function(t){-1===o.indexOf(t)&&(u=u.filter(function(e){return e!==t}),l=!0),-1===c.indexOf(t)&&(m=m.filter(function(e){return e!==t}),l=!0)}),l&&this.$store.dispatch("updateStream",{streamId:t,canRead:m,canWrite:u})}},mounted:function(){var t=this,e=this.$store.state.projects.find(function(e){return e._id===t.$route.params.projectId});e?(this.$store.dispatch("getUser",{_id:e.owner}),c()(e.canRead,e.canWrite).forEach(function(e){return t.$store.dispatch("getUser",{_id:e})})):this.$store.dispatch("getProject",{_id:this.$route.params.projectId}).then(function(e){t.$store.dispatch("getUser",{_id:e.data.resource.owner}),c()(e.data.resource.canRead,e.data.resource.canWrite).forEach(function(e){return t.$store.dispatch("getUser",{_id:e})})}).catch(function(e){t.$store.state.isAuth?(t.$router.push("/projects"),console.log("you don't have permission.")):(console.log("should redirect to login"),t.$router.push("/login")),console.log(e)})}},F=B,H=(r("b93b"),Object(f["a"])(F,s,a,!1,null,"4333cd7c",null));H.options.__file="ProjectDetail.vue";e["default"]=H.exports},e9f9:function(t,e,r){"use strict";var s=r("51a3"),a=r.n(s);a.a}}]);
//# sourceMappingURL=chunk-4c2eeb40.d8f7f95b.js.map