(this["webpackJsonpwhat-to-watch"]=this["webpackJsonpwhat-to-watch"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(1),r=n.n(i),c=n(7),s=n.n(c),o=(n(18),n(2)),l=n.p+"static/media/search.68392e5c.svg";n(19);var u=function(e){var t=e.setSearch,n=Object(i.useState)(""),r=Object(o.a)(n,2),c=r[0],s=r[1];return Object(a.jsxs)("form",{className:"searchbar",onSubmit:function(e){return e.preventDefault()},children:[Object(a.jsx)("input",{onChange:function(e){return s(e.target.value)}}),Object(a.jsx)("button",{onClick:function(){return t(c)},children:Object(a.jsx)("img",{src:l,alt:"search"})})]})},d=n(5),j=n.n(d),b=n(8);var v=function(e){var t=Object(i.useState)(!0),n=Object(o.a)(t,2),a=n[0],r=n[1],c=Object(i.useState)([]),s=Object(o.a)(c,2),l=s[0],u=s[1],d=Object(i.useState)(""),v=Object(o.a)(d,2),m=v[0],h=v[1];return Object(i.useEffect)((function(){function t(){return(t=Object(b.a)(j.a.mark((function t(){var n,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e);case 3:return n=t.sent,t.next=6,n.json();case 6:(a=t.sent)&&(r(!1),u(a.results)),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),r(!1),h(t.t0.message);case 14:r(!1);case 15:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),{error:m,loading:a,results:l}},m=n.p+"static/media/arrow.c3b03577.svg";n(21);var h=function(e){var t=e.resultPage,n=e.setResultPage,i=e.movieIndexSlice,r=e.setMovieIndexSlice,c=e.enablePrevButton;return Object(a.jsx)("button",{onClick:function(){0===i[0]&&t>1?(n((function(e){return e-1})),r([14,20])):7===i[0]?r([0,7]):14===i[0]&&r([7,14])},id:"btn-disabled",className:c?"btn-prev":null,children:Object(a.jsx)("img",{src:m,alt:"load previous"})})};n(22);var p=function(e){var t=e.setResultPage,n=e.movieIndexSlice,i=e.setMovieIndexSlice,r=e.CategoryName,c=e.setEnablePrevButton;return Object(a.jsx)("button",{onClick:function(){if(document.querySelectorAll(".content-card").forEach((function(e){return e.firstChild.innerHTML===r?e.scrollTo({behavior:"smooth",left:0}):null})),c(!0),0===n[0])i([7,14]);else if(7===n[0])i([14,20]);else if(14===n[0])return i([0,7]),t((function(e){return e+1}))},className:"btn-next",children:Object(a.jsx)("img",{src:m,alt:"load next"})})};n(23);var O=function(e){var t=e.CategoryName,n=e.url,r=e.setMovieDetails,c=Object(i.useState)(1),s=Object(o.a)(c,2),l=s[0],u=s[1],d=Object(i.useState)([0,7]),j=Object(o.a)(d,2),b=j[0],m=j[1],O=Object(i.useState)(!1),f=Object(o.a)(O,2),g=f[0],x=f[1],y=v("".concat(n,"&page=").concat(l)),w=y.loading,N=y.results,S=y.error;return w||S?w?Object(a.jsx)("div",{className:"loading",children:"Loading..."}):S.message:Object(a.jsxs)("div",{className:"content-card",children:[Object(a.jsx)("h1",{children:t}),Object(a.jsx)(h,{resultPage:l,setResultPage:u,movieIndexSlice:b,setMovieIndexSlice:m,enablePrevButton:g}),N.slice(b[0],b[1]).map((function(e,t){return Object(a.jsxs)("li",{children:[Object(a.jsx)("img",{tabIndex:"0",onClick:function(){return r(N.slice(b[0],b[1])[t])},alt:e.title||e.original_name,src:"https://image.tmdb.org/t/p/w185/".concat(e.poster_path)}),Object(a.jsx)("p",{children:e.title||e.original_name})]},e.id)})),Object(a.jsx)(p,{setResultPage:u,movieIndexSlice:b,setMovieIndexSlice:m,CategoryName:t,setEnablePrevButton:x})]})},f=n(6);n(24);var g=function(e){var t=e.movieDetails,n=e.setMovieDetails,r=e.setPlay,c=document.getElementsByClassName("movie-details");return Object(i.useEffect)((function(){Object(f.a)(c)}),[c]),Object(a.jsx)("div",{className:"background-wrap",children:Object(a.jsxs)("div",{className:"content-wrap",children:[Object(a.jsx)("button",{className:"exit",onClick:function(){return n(),Object(f.b)(c)},children:"X"}),Object(a.jsxs)("div",{className:"movie-details",children:[Object(a.jsx)("h2",{className:"title",children:t.title||t.original_name}),Object(a.jsx)("p",{className:"description",children:t.overview}),Object(a.jsxs)("div",{className:"util",children:[Object(a.jsxs)("p",{children:["Rating: ",t.vote_average]}),Object(a.jsxs)("p",{children:["Release: "," ",(t.release_date||t.first_air_date).substring(0,4)]})]}),Object(a.jsx)("button",{className:"play",onClick:function(){return r(!0)},children:"PLAY"})]}),Object(a.jsx)("img",{className:"img",alt:t.title,src:"https://image.tmdb.org/t/p/w500/".concat(t.poster_path)})]})})},x=n(9),y=n(10),w=n(3),N=n(12),S=n(11),C=(n(25),n(26),n(27)),E=function(e){Object(N.a)(n,e);var t=Object(S.a)(n);function n(e){var a;return Object(x.a)(this,n),(a=t.call(this,e)).resetTimer=function(){clearTimeout(a.time),a.time=setTimeout(a.hidePlayerOverlay,3e3),a.setState({isIdle:!1})},a.hidePlayerOverlay=function(){a.setState({isIdle:!0})},a.componentDidMount=function(){a.getVH=function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))},window.addEventListener("resize",a.getVH),a.resetTimer();var e=a.videoComponent.current,t=a.videoContainer.current,n=new C.Player(e),i={controlPanelElements:["mute","volume","time_and_duration","fullscreen","overflow_menu"]},r=new C.ui.Overlay(n,t,e);r.configure(i),r.getControls(),n.addEventListener("error",a.onErrorEvent),n.load("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4").then((function(){console.log("The video has now been loaded!")})).catch(a.onError)},a.componentWillUnmount=function(){window.removeEventListener("resize",a.getVH),a.time&&(clearTimeout(a.time),a.timerHandle=0)},a.state={isIdle:!1},a.videoComponent=r.a.createRef(),a.videoContainer=r.a.createRef(),a.onErrorEvent=a.onErrorEvent.bind(Object(w.a)(a)),a.onError=a.onError.bind(Object(w.a)(a)),a}return Object(y.a)(n,[{key:"onErrorEvent",value:function(e){this.onError(e.detail)}},{key:"onError",value:function(e){console.error("Error code",e.code,"object",e)}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"video-container",ref:this.videoContainer,onMouseMove:this.resetTimer,onTouchStart:this.resetTimer,onKeyDown:this.resetTimer,children:[Object(a.jsx)("p",{id:"video-title",className:this.state.isIdle?"hide":null,children:this.props.movieDetails.title||this.props.movieDetails.original_name}),Object(a.jsx)("button",{id:"video-button",className:this.state.isIdle?"hide":null,onClick:function(){e.props.setPlay(!1)},children:"X"}),Object(a.jsx)("video",{className:"shaka-video",ref:this.videoComponent,autoPlay:!0,width:"100%"})]})}}]),n}(r.a.PureComponent);n(29);var P=function(){var e=Object(i.useState)(),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(i.useState)(),s=Object(o.a)(c,2),l=s[0],d=s[1],j=Object(i.useState)(),b=Object(o.a)(j,2),v=b[0],m=b[1],h="87a4b219a54dbd58a0b55ee8de87aab6";return l?Object(a.jsx)(E,{setPlay:d,movieDetails:v}):Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)("h1",{className:"main-title",children:["What ",Object(a.jsx)("span",{children:"to"})," Watch"]}),Object(a.jsx)(u,{setSearch:r}),v&&Object(a.jsx)(g,{setPlay:d,movieDetails:v,setMovieDetails:m}),n&&Object(a.jsx)(O,{CategoryName:"Search Results",url:"https://api.themoviedb.org/3/search/multi/?api_key=".concat(h,"&query=").concat(n),setMovieDetails:m}),Object(a.jsx)(O,{CategoryName:"Popular Movies",url:"https://api.themoviedb.org/3/movie/popular?api_key=".concat(h),setMovieDetails:m}),Object(a.jsx)(O,{CategoryName:"Popular Tv Shows",url:"https://api.themoviedb.org/3/tv/popular?api_key=".concat(h),setMovieDetails:m}),Object(a.jsx)(O,{CategoryName:"Documentary",url:"https://api.themoviedb.org/3/discover/movie?api_key=".concat(h,"&with_genres=99&sort_by=vote_count.desc"),setMovieDetails:m}),Object(a.jsx)(O,{CategoryName:"Family",url:"https://api.themoviedb.org/3/discover/movie?api_key=".concat(h,"&with_genres=10751&sort_by=vote_count.desc"),setMovieDetails:m})]})};s.a.render(Object(a.jsx)(P,{}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.5c6a89ac.chunk.js.map