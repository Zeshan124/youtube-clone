(self.webpackChunkproject_youtube_video_player=self.webpackChunkproject_youtube_video_player||[]).push([[667],{2732:function(e,t,n){var r,o=n(2122).default,u=n(6690).default,a=n(9728).default,l=n(6115).default,i=n(1655).default,c=n(6389).default,p=n(4704).default,s=Object.create,f=Object.defineProperty,y=Object.getOwnPropertyDescriptor,d=Object.getOwnPropertyNames,v=Object.getPrototypeOf,m=Object.prototype.hasOwnProperty,h=function(e,t,n,r){if(t&&"object"===typeof t||"function"===typeof t){var o,u=p(d(t));try{var a=function(){var u=o.value;m.call(e,u)||u===n||f(e,u,{get:function(){return t[u]},enumerable:!(r=y(t,u))||r.enumerable})};for(u.s();!(o=u.n()).done;)a()}catch(l){u.e(l)}finally{u.f()}}return e},b=function(e,t,n){return function(e,t,n){t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n}(e,"symbol"!==typeof t?t+"":t,n),n},g={};!function(e,t){for(var n in t)f(e,n,{get:t[n],enumerable:!0})}(g,{default:function(){return O}}),e.exports=(r=g,h(f({},"__esModule",{value:!0}),r));var k=function(e,t,n){return n=null!=e?s(v(e)):{},h(!t&&e&&e.__esModule?n:f(n,"default",{value:e,enumerable:!0}),e)}(n(2791)),P=n(2362),w=n(365),O=function(e){"use strict";i(n,e);var t=c(n);function n(){var e;return u(this,n),e=t.apply(this,arguments),b(l(e),"callPlayer",P.callPlayer),b(l(e),"duration",null),b(l(e),"currentTime",null),b(l(e),"secondsLoaded",null),b(l(e),"mute",(function(){})),b(l(e),"unmute",(function(){})),b(l(e),"ref",(function(t){e.iframe=t})),e}return a(n,[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e){var t=this;(0,P.getSDK)("https://widget.mixcloud.com/media/js/widgetApi.js","Mixcloud").then((function(e){t.player=e.PlayerWidget(t.iframe),t.player.ready.then((function(){t.player.events.play.on(t.props.onPlay),t.player.events.pause.on(t.props.onPause),t.player.events.ended.on(t.props.onEnded),t.player.events.error.on(t.props.error),t.player.events.progress.on((function(e,n){t.currentTime=e,t.duration=n})),t.props.onReady()}))}),this.props.onError)}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){}},{key:"seekTo",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.callPlayer("seek",e),t||this.pause()}},{key:"setVolume",value:function(e){}},{key:"getDuration",value:function(){return this.duration}},{key:"getCurrentTime",value:function(){return this.currentTime}},{key:"getSecondsLoaded",value:function(){return null}},{key:"render",value:function(){var e=this.props,t=e.url,n=e.config,r=t.match(w.MATCH_URL_MIXCLOUD)[1],u=(0,P.queryString)(o(o({},n.options),{},{feed:"/".concat(r,"/")}));return k.default.createElement("iframe",{key:r,ref:this.ref,style:{width:"100%",height:"100%"},src:"https://www.mixcloud.com/widget/iframe/?".concat(u),frameBorder:"0",allow:"autoplay"})}}]),n}(k.Component);b(O,"displayName","Mixcloud"),b(O,"canPlay",w.canPlay.mixcloud),b(O,"loopOnEnded",!0)}}]);
//# sourceMappingURL=reactPlayerMixcloud.535608bb.chunk.js.map