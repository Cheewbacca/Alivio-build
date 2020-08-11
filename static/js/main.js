"use strict";function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _iterableToArray(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var _window=window;_window.onload=function(){function t(t,e,n){var r,o="";n&&((r=new Date).setTime(r.getTime()+24*n*60*60*1e3),o="; expires="+r.toUTCString()),document.cookie=t+"="+(e||"")+o+"; path=/"}var e=_window.document.getElementById("burger"),n=_window.document.getElementsByTagName("nav")[0],r=!0;e.addEventListener("click",function(t){t.preventDefault();var e=_window.document.getElementById("burger").children;r?(e[0].style.transform="rotate(-45deg) translate(2px)",e[1].style.transform="rotate(45deg) translate(2px)",n.style.right=0):(e[0].style.transform="rotate(0deg) translate(0px)",e[1].style.transform="rotate(0deg) translate(0px)",n.style.right="-100vw"),r=!r});var o=_window.document.getElementById("header"),a=_window.document.getElementById("how_it_works").offsetTop,i=_window.document.getElementById("how_it_works_h2"),s=_window.document.getElementById("how_it_works_p"),d=_window.document.getElementsByClassName("step"),l=d[0].offsetTop,c=d[1].offsetTop,m=_window.document.getElementById("footer").offsetHeight;_window.document.getElementById("last_section").style.marginBottom=m+"px",_window.addEventListener("scroll",function(){var t=0,e=_window.pageYOffset||_window.document.documentElement.scrollTop;500<=parseInt(_window.innerWidth)&&(o.style.transform=t<e?"translate(0, -80%)":"translate(0, 0)"),t=e<=0?0:e,_window.pageYOffset>a-_window.document.documentElement.clientHeight/2&&(i.style.transform="translate(0)",s.style.transform="translate(0)"),_window.pageYOffset>l-_window.document.documentElement.clientHeight/2&&(d[0].style.opacity=1,d[2].style.opacity=1),_window.pageYOffset>c-_window.document.documentElement.clientHeight/2&&(d[1].style.opacity=1)},!1),o.addEventListener("mouseover",function(){o.style.transform="translate(0, 0)"}),o.addEventListener("mouseout",function(){100<_window.document.documentElement.scrollTop&&(o.style.transform="translate(0, -80%)")}),function t(e){e.forEach(function(t,e){1===Number(t.style.opacity)&&(t.style.opacity=0),t.style.opacity=Number(t.style.opacity)+.1}),_window.setTimeout(function(){return t(e)},200)}(_toConsumableArray(_window.document.getElementsByClassName("arrow")));var u=_window.document.getElementById("arrows"),y=this.document.getElementById("show_switcher");u.addEventListener("click",function(){_window.innerWidth<=500?E.parentNode.style.transform="translate(500%)":E.parentNode.style.transform="translate(-500%)",y.style.display="flex"}),y.addEventListener("click",function(){E.parentNode.style.transform="translate(0)",y.style.display="none"});var w,f=this.document.getElementById("lamp_light"),p=this.document.getElementById("lamp_light_right"),_=this.document.getElementById("lamp_strip"),g="#d6d6d6",h="#fec165",v="#fdb441";"true"==function(t){for(var e=t+"=",n=document.cookie.split(";"),r=0;r<n.length;r++){for(var o=n[r];" "==o.charAt(0);)o=o.substring(1,o.length);if(0==o.indexOf(e))return o.substring(e.length,o.length)}return 0}("dark")?(w=!1,_window.document.body.classList.add("dark"),f.style.fill=g,p.style.fill=g):w=!0;var E=this.document.getElementById("switcher");E.addEventListener("click",function(){_.classList.remove("stripAimation"),w?(_window.document.body.classList.add("dark"),f.style.fill=g,p.style.fill=g,E.parentNode.classList.remove("switcher-shadow"),_.classList.add("stripAimation"),t("dark",!0,360)):(_window.document.body.classList.remove("dark"),f.style.fill=h,p.style.fill=v,E.parentNode.classList.add("switcher-shadow"),_.classList.add("stripAimation"),t("dark",!1,360)),setTimeout(function(){_.classList.remove("stripAimation")},500),w=!w});var b=_window.document.getElementById("preloader");b&&_window.setTimeout(function(){return b.style.display="none"},2e3)};