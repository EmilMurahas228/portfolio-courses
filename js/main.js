!function(){var e={368:function(e){e.exports=()=>{AOS.init({disable:"phone",startEvent:"DOMContentLoaded",initClassName:"aos-init",animatedClassName:"aos-animate",useClassNames:!1,disableMutationObserver:!1,debounceDelay:50,throttleDelay:99,offset:140,delay:0,duration:1200,easing:"ease",once:!0,mirror:!1,anchorPlacement:"top-bottom"})}},815:function(e){const t=document.querySelector(".progress-filled"),o=()=>{t.style.width=window.scrollY/(document.body.scrollHeight-window.innerHeight)*100+"%",requestAnimationFrame(o)};e.exports=o}},t={};function o(s){var n=t[s];if(void 0!==n)return n.exports;var i=t[s]={exports:{}};return e[s](i,i.exports,o),i.exports}!function(){const e=o(368),t=o(815);!function(){const o=document.querySelector(".scroll-button"),s=document.querySelector(".menu-btn"),n=document.querySelector(".header__list");s.addEventListener("click",(()=>{s.classList.toggle("active"),n.classList.toggle("active"),document.body.classList.toggle("noscroll")})),n.addEventListener("click",(()=>{n.classList.remove("active"),s.classList.remove("active"),document.body.classList.remove("noscroll")})),window.onscroll=()=>{window.scrollY>800?o.classList.add("active"):window.scrollY<800&&o.classList.remove("active")},o.onclick=()=>window.scrollTo({top:0,left:0,behavior:"smooth"}),e(),t()}()}()}();