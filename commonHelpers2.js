import"./assets/modulepreload-polyfill-3cfb730f.js";const a=document.querySelector(".feedback-form");let o={email:"",message:""};const m=()=>{const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(e!==null){o=e;for(const t in e)e.hasOwnProperty(t)&&(a.elements[t].value=e[t])}};m();const n=e=>{const t=e.target.name,r=e.target.value;o[t]=r,localStorage.setItem("feedback-form-state",JSON.stringify(o))},l=e=>{e.preventDefault(),e.target.reset(),localStorage.removeItem("feedback-form-state")};a.addEventListener("input",n);a.addEventListener("submit",l);
//# sourceMappingURL=commonHelpers2.js.map
