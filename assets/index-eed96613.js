(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d=()=>{const s=document.querySelector("#app"),n=document.querySelector(".start-button"),r=document.querySelector(".header__repeat-button"),c=document.querySelector(".header__toggle-theme-button"),e=()=>{let a=u()>50?"Орел":"Решка";s.innerHTML=`<h1>${a}</h1>`,r.classList.remove("hidden")},t=()=>{s.innerHTML=`
        <button class="start-button animated-button">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Начать
        </button>`,document.querySelector(".start-button").addEventListener("click",e),r.classList.add("hidden")};n.addEventListener("click",e),r.addEventListener("click",t),c.addEventListener("click",i)},i=()=>{document.querySelector("body").classList.toggle("dark")},u=()=>Math.floor(Math.random()*100);document.addEventListener("DOMContentLoaded",d);
