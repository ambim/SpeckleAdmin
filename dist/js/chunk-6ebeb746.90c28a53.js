(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ebeb746"],{7057:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.stream?a("div",{staticClass:"md-layout md-alignment-center-center"},[t.stream.deleted?a("div",{staticClass:"md-layout-item md-size-100 text-center sticky-top"},[a("md-content",{staticClass:"md-accent md-caption  md-layout md-alignment-center-center",staticStyle:{width:"100%",padding:"10px","border-radius":"2px"}},[a("div",{staticClass:"md-layout-item"},[t._v("This stream is in your trashbin.")]),a("div",{staticClass:"md-layout-item"},[t.canEdit?a("md-button",{staticClass:"md-dense md-raised",nativeOn:{click:function(e){return t.restore(e)}}},[t._v(" Restore? ")]):t._e()],1)])],1):t._e(),a("div",{staticClass:"md-layout-item md-size-100"},[a("div",{staticClass:"md-layout md-alignment-center-center"},[a("div",{staticClass:"md-layout-item md-size-55 md-large-size-65 md-medium-size-100"},[a("stream-detail-title",{attrs:{stream:t.stream}})],1),a("div",{staticClass:"md-layout-item md-layout md-size-55 md-large-size-65 md-medium-size-100",staticStyle:{"padding-left":"16px","padding-right":"16px","box-sizing":"border-box"}},[a("div",{staticClass:"md-layout-item"},[a("md-button",{staticClass:"link-button",attrs:{to:{name:"streamoverview"}}},[t._v("\n                Overview\n              ")])],1),t.stream.onlineEditable?a("div",{staticClass:"md-layout-item"},[a("md-button",{staticClass:"link-button",attrs:{to:{name:"streamdata"}}},[t._v("\n                Data\n              ")])],1):t._e(),a("div",{staticClass:"md-layout-item"},[a("md-button",{staticClass:"link-button",attrs:{"xxx-to":'{name:"streamdata"}'}},[t._v("\n                Discussion\n              ")])],1)]),a("div",{staticClass:"md-layout-item md-size-55 md-large-size-65 md-medium-size-100"},[a("br"),a("keep-alive",[a("router-view")],1)],1)])])]):a("div",{staticClass:"md-layout md-alignment-center-center",staticStyle:{height:"95vh"}},[a("div",{staticClass:"md-layout-item md-size-50"},[a("md-progress-bar",{attrs:{"md-mode":"indeterminate"}})],1)])])},i=[],r=(a("6762"),a("2fdb"),a("ac6a"),a("28a5"),a("7514"),a("f7fe"),a("13bb")),n=a.n(r),d=a("bdd8"),m=a("8450"),o=a("fa20"),c=a("5f9d"),u=a("c542"),l=a("a41d"),v={name:"StreamDetailView",components:{StreamDetailTitle:d["a"],DetailDescription:m["a"],StreamDetailUserPerms:o["a"],StreamDetailNetwork:c["a"],StreamDetailHistory:u["a"],StreamDetailComments:l["a"]},computed:{stream:function(){var t=this,e=this.$store.state.streams.find(function(e){return e.streamId===t.$route.params.streamId});return e},canEdit:function(){return!!this.isOwner||-1!==this.stream.canWrite.indexOf(this.$store.state.user._id)},isOwner:function(){return this.stream.owner===this.$store.state.user._id}},data:function(){return{error:"",editDescription:!1}},methods:{getEndRoute:function(){var t=this.$route.path.split("/").reverse()[0];return t===this.$route.params.streamId||""===t?"overview":t},restore:function(){this.$store.dispatch("updateStream",{streamId:this.stream.streamId,deleted:!1})}},mounted:function(){var t=this,e=this.$store.state.streams.find(function(e){return e.streamId===t.$route.params.streamId});e?(this.$store.dispatch("getUser",{_id:e.owner}),n()(e.canRead,e.canWrite).forEach(function(e){return t.$store.dispatch("getUser",{_id:e})})):this.$store.dispatch("getStream",{streamId:this.$route.params.streamId}).then(function(e){t.$store.dispatch("getUser",{_id:e.data.resource.owner}),n()(e.data.resource.canRead,e.data.resource.canWrite).forEach(function(e){return t.$store.dispatch("getUser",{_id:e})})}).catch(function(e){e.message.includes("404")&&(t.error="Stream ".concat(t.$route.params.streamId," was not found.")),e.message.includes("401")&&(t.error="Stream ".concat(t.$route.params.streamId," is not accessible to you due to its protection level."))})}},h=v,p=(a("f013"),a("2877")),f=Object(p["a"])(h,s,i,!1,null,"11e9ba8b",null);f.options.__file="Stream.vue";e["default"]=f.exports},8135:function(t,e,a){},f013:function(t,e,a){"use strict";var s=a("8135"),i=a.n(s);i.a}}]);
//# sourceMappingURL=chunk-6ebeb746.90c28a53.js.map