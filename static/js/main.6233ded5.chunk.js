(this.webpackJsonpsneakers=this.webpackJsonpsneakers||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/sprite.b38e9410.svg"},function(e,t,a){e.exports=a(45)},,,,,function(e,t,a){},,,,,function(e,t,a){var n={"./Running-Shoes-PNG-Image.png":22,"./blue1.png":23,"./blue2.png":24,"./blue3.png":25,"./blue4.png":26,"./green1.png":27,"./green2.png":28,"./green3.png":29,"./green4.png":30,"./logo.png":31,"./magenta1.png":32,"./magenta2.png":33,"./magenta3.png":34,"./magenta4.png":35,"./pink1.png":36,"./pink2.png":37,"./pink3.png":38,"./pink4.png":39,"./violet1.png":40,"./violet2.png":41,"./violet3.png":42,"./violet4.png":43};function i(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=o,e.exports=i,i.id=21},function(e,t,a){e.exports=a.p+"static/media/Running-Shoes-PNG-Image.f2ac5a8e.png"},function(e,t,a){e.exports=a.p+"static/media/blue1.e9a430d2.png"},function(e,t,a){e.exports=a.p+"static/media/blue2.7c3b0ddf.png"},function(e,t,a){e.exports=a.p+"static/media/blue3.835982fe.png"},function(e,t,a){e.exports=a.p+"static/media/blue4.f94375db.png"},function(e,t,a){e.exports=a.p+"static/media/green1.e0764d6a.png"},function(e,t,a){e.exports=a.p+"static/media/green2.14f69811.png"},function(e,t,a){e.exports=a.p+"static/media/green3.28ea6743.png"},function(e,t,a){e.exports=a.p+"static/media/green4.386d8575.png"},function(e,t,a){e.exports=a.p+"static/media/logo.0dd0a3a7.png"},function(e,t,a){e.exports=a.p+"static/media/magenta1.1fc2f6e8.png"},function(e,t,a){e.exports=a.p+"static/media/magenta2.bbfae258.png"},function(e,t,a){e.exports=a.p+"static/media/magenta3.95ee3087.png"},function(e,t,a){e.exports=a.p+"static/media/magenta4.0e39f68a.png"},function(e,t,a){e.exports=a.p+"static/media/pink1.eeaddb84.png"},function(e,t,a){e.exports=a.p+"static/media/pink2.347aac64.png"},function(e,t,a){e.exports=a.p+"static/media/pink3.00ba50e9.png"},function(e,t,a){e.exports=a.p+"static/media/pink4.f00e58ec.png"},function(e,t,a){e.exports=a.p+"static/media/violet1.0bb53a66.png"},function(e,t,a){e.exports=a.p+"static/media/violet2.ae8b1e0b.png"},function(e,t,a){e.exports=a.p+"static/media/violet3.6b3d7371.png"},function(e,t,a){e.exports=a.p+"static/media/violet4.5f250143.png"},,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(7),c=a.n(o),r=a(1),s=a(2),l=a(4),m=a(3),d=a(5),p=(a(16),a(8)),u=a.n(p),g=a(10),f=a.n(g),v=function(e){return i.a.createElement("svg",{className:"".concat(e.name),style:{fill:"".concat(e.fill)}},i.a.createElement("use",{xlinkHref:"".concat(f.a,"#").concat(e.name)}))},E=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={selected:[1,0,0,0,0],color:"blue",startX:null,endX:null,i:1,loading:!1},a.onImageLoading=function(){a.setState({loading:!0})},a.selectorHandler=function(e){switch(e.target.id){case"blue":a.setState({selected:[1,0,0,0,0],color:"blue",loading:!1});break;case"magenta":a.setState({selected:[0,0,1,0,0],color:"magenta",loading:!1});break;case"pink":a.setState({selected:[0,1,0,0,0],color:"pink",loading:!1});break;case"green":a.setState({selected:[0,0,0,1,0],color:"green",loading:!1});break;case"violet":a.setState({selected:[0,0,0,0,1],color:"violet",loading:!1})}},a.carouselHandler=function(e){switch(e.target.id){case"1":a.setState({i:1,loading:!1});break;case"2":a.setState({i:2,loading:!1});break;case"3":a.setState({i:3,loading:!1});break;case"4":a.setState({i:4,loading:!1})}},a.touchStartHandler=function(e){var t=e.touches[0].clientX;a.setState({startX:t})},a.touchEndHandler=function(e){var t=e.changedTouches[0].clientX,n=a.state.startX,i=t;n-i>100&&a.state.i<4?a.setState({i:a.state.i+1,endX:null,startX:null,loading:!1}):n-i>100&&a.state.i>=4?a.setState({i:1,endX:null,startX:null,loading:!1}):n-i<-100&&a.state.i>1?a.setState({i:a.state.i-1,endX:null,startX:null,loading:!1}):n-i<-100&&a.state.i<=1?a.setState({i:4,endX:null,startX:null,loading:!1}):a.setState({endX:null,startX:null})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=a(21)("./".concat(this.state.color).concat(this.state.i,".png")),n=this.state.color;return i.a.createElement("div",{className:"layout_wrapper"},i.a.createElement("div",{className:"description"},i.a.createElement("div",{className:"description_header"},i.a.createElement("h1",{className:"description_header-title"},"nike odyssey react"),i.a.createElement("h2",{className:"description_header-price ".concat(n)},"$55.56")),i.a.createElement("h4",{className:"description_collection"},"running collections"),i.a.createElement("div",{className:"description_icons"},i.a.createElement(v,{name:"icon-star-full"}),i.a.createElement(v,{name:"icon-star-full"}),i.a.createElement(v,{name:"icon-star-full"}),i.a.createElement(v,{name:"icon-star-full"}),i.a.createElement(v,{name:"icon-star-full",fill:"gray"})),i.a.createElement("h3",{className:"description_title"},"description"),i.a.createElement("span",{className:"description_text"},"lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet"),i.a.createElement("div",{className:"description_options"},i.a.createElement("div",{className:"description_options-color"},i.a.createElement("div",{className:"description_options-text"},"color"),i.a.createElement("div",{className:"description_options-color-picker"},i.a.createElement("div",{className:"description_options-color-picker-item border\n                                             ".concat(this.state.selected[0]?"border-blue":null)},i.a.createElement("div",{className:"description_options-color-picker-item circle circle-blue",id:"blue",onClick:function(t){return e.selectorHandler(t)}})),i.a.createElement("div",{className:"description_options-color-picker-item border\n                                             ".concat(this.state.selected[1]?"border-pink":null)},i.a.createElement("div",{className:"description_options-color-picker-item circle circle-pink",id:"pink",onClick:function(t){return e.selectorHandler(t)}})),i.a.createElement("div",{className:"description_options-color-picker-item border\n                                             ".concat(this.state.selected[2]?"border-magenta":null)},i.a.createElement("div",{className:"description_options-color-picker-item circle circle-magenta",id:"magenta",onClick:function(t){return e.selectorHandler(t)}})),i.a.createElement("div",{className:"description_options-color-picker-item border\n                                             ".concat(this.state.selected[3]?"border-green":null)},i.a.createElement("div",{className:"description_options-color-picker-item circle circle-green",id:"green",onClick:function(t){return e.selectorHandler(t)}})),i.a.createElement("div",{className:"description_options-color-picker-item border\n                                             ".concat(this.state.selected[4]?"border-violet":null)},i.a.createElement("div",{className:"description_options-color-picker-item circle circle-violet",id:"violet",onClick:function(t){return e.selectorHandler(t)}})))," ")," ",i.a.createElement("div",{className:"description_options-size"},i.a.createElement("div",{className:"description_options-text"},"size"),i.a.createElement("select",{className:"description_options-select size"},i.a.createElement("option",{value:"uk8"},"(uk 8)"),i.a.createElement("option",{value:"uk9"},"(uk 9)"),i.a.createElement("option",{value:"uk7"},"(uk 7)"))),i.a.createElement("div",{className:"description_options-qty"},i.a.createElement("div",{className:"description_options-text"},"qty"),i.a.createElement("select",{className:"description_options-select qty"},i.a.createElement("option",{value:"1"},"(2)"),i.a.createElement("option",{value:"2"},"(1)"),i.a.createElement("option",{value:"3"},"(3)")))),"   ",i.a.createElement("div",{className:"description_button"},i.a.createElement("div",{className:"description_button-wrapper"},i.a.createElement("div",{className:"description_button-btn"},i.a.createElement(v,{name:"icon-cart"}),i.a.createElement("h3",{className:"description_button-btn-title"},"add to cart"))),i.a.createElement("div",{className:"description_button-share"},i.a.createElement(v,{name:"icon-share2"})))),"  ",i.a.createElement("div",{className:"carousel"},i.a.createElement("div",{className:"carousel_logo"}),i.a.createElement("div",{className:"carousel_slider ".concat(n),onTouchStart:function(t){return e.touchStartHandler(t)},onTouchEnd:function(t){return e.touchEndHandler(t)}},i.a.createElement("img",{className:"carousel_slide mySlides ".concat(n).concat(this.state.i),onLoad:function(){return e.onImageLoading()},src:t,alt:"sneaker",style:{display:"".concat(this.state.loading?"block":"none")}}),i.a.createElement("div",{className:"carousel_slide-loader"},i.a.createElement(u.a,{size:70,color:"#EEE",loading:!this.state.loading}))),i.a.createElement("div",{className:"carousel_controler"},i.a.createElement("div",{className:"carousel_controler-dot ".concat(1===this.state.i?"active":""),id:"1",onClick:function(t){return e.carouselHandler(t)}}),i.a.createElement("div",{className:"carousel_controler-dot ".concat(2===this.state.i?"active":""),id:"2",onClick:function(t){return e.carouselHandler(t)}}),i.a.createElement("div",{className:"carousel_controler-dot ".concat(3===this.state.i?"active":""),id:"3",onClick:function(t){return e.carouselHandler(t)}}),i.a.createElement("div",{className:"carousel_controler-dot ".concat(4===this.state.i?"active":""),id:"4",onClick:function(t){return e.carouselHandler(t)}})))," ")}}]),t}(n.Component),b=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(E,null)}}]),t}(n.Component);c.a.render(i.a.createElement(b,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.6233ded5.chunk.js.map