(()=>{"use strict";var e={181:function(e,t){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},r.apply(this,arguments)},o=this&&this.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var o,n,i=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(o=i.next()).done;)a.push(o.value)}catch(e){n={error:e}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}return a},n=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var o,n=0,i=t.length;n<i;n++)!o&&n in t||(o||(o=Array.prototype.slice.call(t,0,n)),o[n]=t[n]);return e.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){if("object"==typeof e&&null!==e){if("function"==typeof Object.getPrototypeOf){var t=Object.getPrototypeOf(e);return t===Object.prototype||null===t}return"[object Object]"===Object.prototype.toString.call(e)}return!1},a=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.reduce((function(e,t){if(Array.isArray(t))throw new TypeError("Arguments provided to ts-deepmerge must be objects, not arrays.");return Object.keys(t).forEach((function(r){["__proto__","constructor","prototype"].includes(r)||(Array.isArray(e[r])&&Array.isArray(t[r])?e[r]=a.options.mergeArrays?Array.from(new Set(e[r].concat(t[r]))):t[r]:i(e[r])&&i(t[r])?e[r]=a(e[r],t[r]):e[r]=t[r])})),e}),{})},s={mergeArrays:!0};a.options=s,a.withOptions=function(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];a.options=r({mergeArrays:!0},e);var u=a.apply(void 0,n([],o(t),!1));return a.options=s,u},t.default=a},735:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=r(57),i=o(r(585)),a=(e,t)=>{let r;switch(e.type){case void 0:case"context":e.jsonPath&&void 0!==t&&(r=(0,n.getFromObject)(t,e.jsonPath,e.required));break;case"uuidV4":r=(0,i.default)()}return r};t.default=(e,t)=>{let r=e.default;e.required=void 0===e.required;const o=Array.isArray(e.source)?e.source:e.source?[e.source]:[];for(const n of o)if(void 0===n.required&&(n.required=e.required),r=a(n,t),void 0!==r)break;if(!0===e.required&&void 0===r){const t=JSON.stringify(e).replace(/"/g,"'");throw Error(`Value not found in context using query ${t}. Setting required to false will bypass this error.`)}return r}},584:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=r(113),i=o(r(735)),a=(e,t,r)=>{const o=(0,n.getChildElement)(e,t);void 0!==o&&o.setAttribute("value",r)};t.default=(e,t)=>{e.required=void 0===e.required||e.required;const r=(0,n.getForm)(e.formQuery),o=Array.isArray(e.destination)?e.destination:e.destination?[e.destination]:[];for(const n of o){n.required=void 0===n.required?e.required:n.required;const o="string"==typeof n.pullFrom?{source:{jsonPath:n.pullFrom}}:n.pullFrom;o.required=void 0===o.required?n.required:o.required;const s=(0,i.default)(o,t);if(void 0!==s){const e="string"==typeof n.destination?{value:n.destination}:n.destination;e.required=void 0===e.required?n.required:e.required,a(r,e,s)}}return r}},113:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getForm=t.getChildElement=t.getElementFromQuery=void 0;const r=(e,t,r="")=>{const o=JSON.stringify(e).replace(/"/g,"'"),n=""===r?"":` on form '${r}'`;if(t.length>1)throw Error(`More than one HTMLElement found${n}. Query was ${o}.`);if(0!==t.length){if(!(t[0]instanceof HTMLElement))throw Error(`Element, instead of HTMLElement, found. Query was ${o}.`);return t[0]}if(!0===e.required||void 0===e.required)throw Error(`No HTMLElement found${n}. Query was ${o}.`)};t.getElementFromQuery=e=>{let t=[];if(e.name&&e.value)switch(e.name){case"id":const r=document.getElementById(e.value);t=r?[r]:[];break;case"name":t=document.getElementsByName(e.value);break;case"class":t=document.getElementsByClassName(e.value);break;default:throw Error(`Unsupported query name '${e.name}'.`)}else if(e.value){let r=document.getElementById(e.value);t=r?[r]:document.getElementsByName(e.value)}else{if(!e.tag)throw Error("Query requires at least one of tag, name or value.");t=document.getElementsByTagName(e.tag)}return r(e,t)},t.getChildElement=(e,t)=>{if(void 0===t.value&&void 0===t.name)throw Error("HtmlElementQuery requires a query value and/or query name.");const o=e.id?e.id:e.name?e.name:"(no id or name)";let n=[],i=t.tag?e.getElementsByTagName(t.tag):e.elements;const a=t.name,s=t.value?.toLowerCase();for(const e of i)void 0!==a&&void 0!==s?e.getAttribute(a)?.toLowerCase()===s&&n.push(e):void 0!==a?e.hasAttribute(a)&&n.push(e):e.getAttribute("id")?.toLowerCase()!==s&&e.getAttribute("name")?.toLowerCase()!==s||n.push(e);return r(t,n,o)},t.getForm=e=>{const r=e||{tag:"form",name:"tag"},o=(0,t.getElementFromQuery)(r);if(o instanceof HTMLFormElement)return o;throw Error(`Expected an html '${r.tag}' tag named '${r.name}' but found an html element of type '${o?o.nodeName:"undefined"}'.`)}},730:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.httpDocument=void 0;const o=r(847);t.httpDocument=()=>{const e=window.location,t=navigator;return{referrer:document.referrer,title:document.title,language:t.language,url:{urlParams:(0,o.urlParamsToObj)(e.search),hash:e.hash,host:e.host,hostname:e.hostname,href:e.href,origin:e.origin,pathname:e.pathname,port:e.port,protocol:e.protocol,search:e.search},browser:{userAgent:t.userAgent,cookieEnabled:t.cookieEnabled,platform:t.platform}}}},190:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.wpContext=t.httpDocument=void 0;var o=r(730);Object.defineProperty(t,"httpDocument",{enumerable:!0,get:function(){return o.httpDocument}});var n=r(520);Object.defineProperty(t,"wpContext",{enumerable:!0,get:function(){return n.wpContext}})},520:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.wpContext=void 0;const o=r(216),n=r(730);t.wpContext=()=>({cookies:(0,o.cookiesToObj)(document.cookie),document:(0,n.httpDocument)()})},920:function(e,t,r){var o=this&&this.__createBinding||(Object.create?function(e,t,r,o){void 0===o&&(o=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,o,n)}:function(e,t,r,o){void 0===o&&(o=r),e[o]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&o(t,e,r);return n(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});const a=i(r(889));a.default.trkm=a.library},216:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.cookiesToObj=void 0,t.cookiesToObj=(e,t)=>{const r={};for(let o of e.split(";"))if(""!==o){const e=o.split("=");if(2===e.length){const o=decodeURIComponent(e[0]),n=(t?.mutateProperty?t.mutateProperty(o):o).trim();if(void 0!==r[n])throw new Error(`Cookies had more than one cookie with a property named '${n}'.`);r[n]=decodeURIComponent(e[1])}}return r}},566:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.sessionMerge=t.sessionGet=t.sessionInit=void 0;const n=r(19),i=o(r(181));t.sessionInit=(e=n.WP_CONTEXT_SESSION_KEY)=>{sessionStorage.setItem(e,JSON.stringify({}))},t.sessionGet=(e=n.WP_CONTEXT_SESSION_KEY)=>{const t=sessionStorage.getItem(e);return t?JSON.parse(t):{}},t.sessionMerge=(e,r=n.WP_CONTEXT_SESSION_KEY)=>{const o=(0,i.default)((0,t.sessionGet)(r),e);return sessionStorage.setItem(r,JSON.stringify(o)),o}},847:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.urlParamsToObj=void 0,t.urlParamsToObj=(e,t)=>{const r={},o=new URLSearchParams(e);for(let e of o){const o=(t?.mutateProperty?t.mutateProperty(e[0]):e[0]).trim();if(void 0!==r[o])throw new Error(`URL search parameters had more than one search parameter with a parameter named '${o}'.`);r[o]=e[1]}return r}},585:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=()=>{let e="";try{e=URL.createObjectURL(new Blob)}finally{URL.revokeObjectURL(e)}return e.substring(e.lastIndexOf("/")+1)}},889:function(e,t,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.library=void 0;const n=o(r(585)),i=r(57),a=r(190),s=r(566),u=o(r(584));t.library={uuidGenerateV4:n.default,insertIntoObject:i.insertIntoObject,context:a.wpContext,session:{get:s.sessionGet,init:s.sessionInit,merge:s.sessionMerge},formApply:u.default},t.default=globalThis},57:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getFromObject=t.insertIntoObject=void 0,t.insertIntoObject=(e,t)=>{const r=Array.isArray(t)?t:[t],o=[];for(const t of r){if(""===t.path)throw Error("Path can not be empty.");const r=t.path.split(".");let n=e;for(let e=0;e<r.length-1;e+=1){const t=r[e];o.push(t),t in n||(n[t]={}),n=n[t]}if("object"!=typeof n)throw TypeError(`Unable to add a value to path '${t.path}' because the value at '${o.join(".")}' is a primitive when an object is needed.`);n[r[r.length-1]]=t.value}return e},t.getFromObject=(e,t,r=!0)=>{const o=t.split(".");let n=e;const i=[];for(let e=0;e<o.length-1;e+=1){const t=o[e];if(!n[t])throw Error(`Unable to resolve path. Object did not have a property '${t}' at path '${i.join(".")}'.`);n=n[t],i.push(t)}const a=o[o.length-1];if("object"!=typeof n)throw TypeError(`Unable to get a value from path '${t}' because the value at '${i.join(".")}' is a primitive when an object is needed.`);if(Object.prototype.hasOwnProperty.call(n,a))return n[a];{const e=`Unable to get a value from path '${t}' because the object at '${i.join(".")}' did not have property ${a}.`;if(r)throw Error(e)}}},19:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.WP_CONTEXT_SESSION_KEY=void 0,t.WP_CONTEXT_SESSION_KEY="tm_context_session"}},t={};!function r(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,r),i.exports}(920)})();