(self.webpackChunkproject_youtube_video_player=self.webpackChunkproject_youtube_video_player||[]).push([[125],{1801:function(e,t,n){var o,r=n(2122).default,u=n(6690).default,a=n(9728).default,l=n(6115).default,i=n(1655).default,c=n(6389).default,p=n(4704).default,s=Object.create,f=Object.defineProperty,d=Object.getOwnPropertyDescriptor,y=Object.getOwnPropertyNames,v=Object.getPrototypeOf,m=Object.prototype.hasOwnProperty,h=function(e,t,n,o){if(t&&"object"===typeof t||"function"===typeof t){var r,u=p(y(t));try{var a=function(){var u=r.value;m.call(e,u)||u===n||f(e,u,{get:function(){return t[u]},enumerable:!(o=d(t,u))||o.enumerable})};for(u.s();!(r=u.n()).done;)a()}catch(l){u.e(l)}finally{u.f()}}return e},b=function(e,t,n){return function(e,t,n){t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n}(e,"symbol"!==typeof t?t+"":t,n),n},P={};!function(e,t){for(var n in t)f(e,n,{get:t[n],enumerable:!0})}(P,{default:function(){return _}}),e.exports=(o=P,h(f({},"__esModule",{value:!0}),o));var k=function(e,t,n){return n=null!=e?s(v(e)):{},h(!t&&e&&e.__esModule?n:f(n,"default",{value:e,enumerable:!0}),e)}(n(2791)),g=n(2362),O=n(365),_=function(e){"use strict";i(n,e);var t=c(n);function n(){var e;return u(this,n),e=t.apply(this,arguments),b(l(e),"callPlayer",g.callPlayer),b(l(e),"duration",null),b(l(e),"currentTime",null),b(l(e),"fractionLoaded",null),b(l(e),"mute",(function(){e.setVolume(0)})),b(l(e),"unmute",(function(){null!==e.props.volume&&e.setVolume(e.props.volume)})),b(l(e),"ref",(function(t){e.iframe=t})),e}return a(n,[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e,t){var n=this;(0,g.getSDK)("https://w.soundcloud.com/player/api.js","SC").then((function(o){if(n.iframe){var u=o.Widget.Events,a=u.PLAY,l=u.PLAY_PROGRESS,i=u.PAUSE,c=u.FINISH,p=u.ERROR;t||(n.player=o.Widget(n.iframe),n.player.bind(a,n.props.onPlay),n.player.bind(i,(function(){n.duration-n.currentTime<.05||n.props.onPause()})),n.player.bind(l,(function(e){n.currentTime=e.currentPosition/1e3,n.fractionLoaded=e.loadedProgress})),n.player.bind(c,(function(){return n.props.onEnded()})),n.player.bind(p,(function(e){return n.props.onError(e)}))),n.player.load(e,r(r({},n.props.config.options),{},{callback:function(){n.player.getDuration((function(e){n.duration=e/1e3,n.props.onReady()}))}}))}}))}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){}},{key:"seekTo",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.callPlayer("seekTo",1e3*e),t||this.pause()}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",100*e)}},{key:"getDuration",value:function(){return this.duration}},{key:"getCurrentTime",value:function(){return this.currentTime}},{key:"getSecondsLoaded",value:function(){return this.fractionLoaded*this.duration}},{key:"render",value:function(){var e={width:"100%",height:"100%",display:this.props.display};return k.default.createElement("iframe",{ref:this.ref,src:"https://w.soundcloud.com/player/?url=".concat(encodeURIComponent(this.props.url)),style:e,frameBorder:0,allow:"autoplay"})}}]),n}(k.Component);b(_,"displayName","SoundCloud"),b(_,"canPlay",O.canPlay.soundcloud),b(_,"loopOnEnded",!0)}}]);
//# sourceMappingURL=reactPlayerSoundCloud.2c356004.chunk.js.map