(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();async function y(e){let t={status:!1,data:[]};return await fetch("https://api.comgig.com/thailand",{method:"POST",body:JSON.stringify(e),headers:{Authorization:`Bearer ${sessionStorage.getItem("X-TOKEN")||"1234567890"}`,"Content-type":"application/json; charset=UTF-8"},credentials:"include"}).then(function(r){r.ok?t=r.json():t={status:!1,message:"server error"}}).catch(()=>{t={status:!1,message:"api error"}}),t}function l(e,t=0,r=","){const o=parseFloat(e).toFixed(t).split("."),s=r===","?o[0].replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"):o[0].replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+r);return String(s+(o[1]?"."+o[1]:""))}function Z(e){var r;const t=document.querySelector("#response");window.scrollTo({top:0,behavior:"smooth"}),t.innerHTML=`
<div class="text-blue-800 mt-3 text-xl md:text-2xl">${e.store[2]}</div>

<div class="text-gray-800 text-xl md:text-3xl tracking-[.1em]">${e.store[1]}</div>

<div class="text-blue-800 mt-3 text-sm md:text-xl">ศูนย์กระจายสินค้า ${e.store[0]} มีข้อมูลพัสดุจำนวน ${e.con_total} ชิ้น</div>

<div class="text-gray-500 mt-1 text-xs">ข้อมูลพัสดุจากสาขา KBD เท่านั้นไม่ใช่จำนวนพัสดุทั้งหมดในคลัง ผลสรุปที่ได้อาจไม่ตรงตามสถานการณ์จริง <span class="text-red-600">โปรดใช้วิจารณญาณในการรับข้อมูล</span></div>



<div class="flex flex-wrap">

<div class="p-2 w-full lg:w-1/2 grow ">

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
<table class="w-full text-sm text-left text-gray-500">
<thead class="text-gray-700 bg-blue-50">
<tr class="bg-white">
<td class="p-1 text-center" colspan="4">

<div class="flex-start flex h-5 w-full overflow-hidden rounded bg-blue-gray-50">

${e.pending_ND>0?`
<div
class="flex h-full items-baseline justify-center overflow-hidden break-all bg-green-800 text-white px-3"
style="width: ${l((e.pending_ND/(e.con_pending||1)*100).toString(),0)}%">${l((e.pending_ND/(e.con_pending||1)*100).toString(),0)}%
</div>
`:""}
${e.pending_2D>0?`
<div
class="flex h-full items-baseline justify-center overflow-hidden break-all bg-green-500 text-white px-3"
style="width: ${l((e.pending_2D/(e.con_pending||1)*100).toString(),0)}%">${l((e.pending_2D/(e.con_pending||1)*100).toString(),0)}%
</div>
`:""}
${e.pending_3D>0?`
<div
class="flex h-full items-baseline justify-center overflow-hidden break-all bg-orange-500 text-white px-3"
style="width: ${l((e.pending_3D/(e.con_pending||1)*100).toString(),0)}%">${l((e.pending_3D/(e.con_pending||1)*100).toString(),0)}%
</div>
`:""}
${e.pending_4D>0?`
<div
class="flex h-full items-baseline justify-center overflow-hidden break-all bg-orange-800 text-white px-3"
style="width: ${l((e.pending_4D/(e.con_pending||1)*100).toString(),0)}%">${l((e.pending_4D/(e.con_pending||1)*100).toString(),0)}%
</div>
`:""}
${e.pending_5D>0?`
<div
class="flex h-full items-baseline justify-center overflow-hidden break-all bg-red-500 text-white px-3"
style="width: ${l((e.pending_5D/(e.con_pending||1)*100).toString(),0)}%">${l((e.pending_5D/(e.con_pending||1)*100).toString(),0)}%
</div>
`:""}
${e.pending_OD>0?`
<div
class="flex h-full items-baseline justify-center overflow-hidden break-all bg-red-800 text-white px-3"
style="width: ${l((e.pending_OD/(e.con_pending||1)*100).toString(),0)}%">${l((e.pending_OD/(e.con_pending||1)*100).toString(),0)}%
</div>
`:""}

</div>
</td>     
</tr>
<tr>
    <td scope="col" class="px-3 py-3">

    <span class="hidden md:inline">พัสดุคงคลัง รวม ${e.con_pending} ชิ้น</span>
    <span class="inline md:hidden">คงคลัง ${e.con_pending} ชิ้น</span>
    </td>
    <td scope="col" colspan="2" class="KanitBold px-1 py-3 text-center">
    <span class="hidden md:inline">จำนวนพัสดุรอจัดส่ง</span>
    <span class="inline md:hidden">รอจัดส่ง</span>
    </td>

</tr>
</thead>
<tbody class="text-lg">
<tr class="bg-white border-b ${e.pending_ND>0?"text-green-800":""}">
    <td scope="row" class="px-6 py-4 text-gray-900 whitespace-nowrap">
    1 วัน <span class="text-sm">(พัสดุเข้าใหม่)</span>
    </td>
    <td class="px-6 py-4 text-center">
    ${e.pending_ND}
    </td>
    <td class="px-6 py-4 text-center text-sm">
    ${l((e.pending_ND/(e.con_pending||1)*100).toString(),0)}%
    </td>       
</tr>
<tr class="border-b bg-gray-50 ${e.pending_2D>0?"text-green-800":""}">
    <td scope="row" class="px-6 py-4 text-gray-900 whitespace-nowrap">
    2 วัน
    </td>
    <td class="px-6 py-4 text-center">
    ${e.pending_2D}
    </td>
    <td class="px-6 py-4 text-center text-sm">
    ${l((e.pending_2D/(e.con_pending||1)*100).toString(),0)}%
    </td> 
</tr>
<tr class="bg-white border-b ${e.pending_3D>0?"text-yellow-800":""}">
    <td scope="row" class="px-6 py-4 text-gray-900 whitespace-nowrap">
    3 วัน
    </td>
    <td class="px-6 py-4 text-center">
    ${e.pending_3D}
    </td>
    <td class="px-6 py-4 text-center text-sm">
    ${l((e.pending_3D/(e.con_pending||1)*100).toString(),0)}%
    </td>   
</tr>
<tr class="border-b bg-gray-50 ${e.pending_4D>0?"text-yellow-800":""}">
    <td scope="row" class="px-6 py-4 text-gray-900 whitespace-nowrap">
    4 วัน
    </td>
    <td class="px-6 py-4 text-center">
    ${e.pending_4D}
    </td>
    <td class="px-6 py-4 text-center text-sm">
    ${l((e.pending_4D/(e.con_pending||1)*100).toString(),0)}%
    </td> 

</tr>
<tr class="bg-white border-b ${e.pending_5D>0?"text-red-800":""}">
    <td scope="row" class="px-6 py-4 text-gray-900 whitespace-nowrap">
    5 วัน
    </td>
    <td class="px-6 py-4 text-center">
    ${e.pending_5D}
    </td>
    <td class="px-6 py-4 text-center text-sm">
    ${l((e.pending_5D/(e.con_pending||1)*100).toString(),0)}%
    </td> 
</tr>
<tr class="border-b bg-gray-50 ${e.pending_OD>0?"text-red-800":""}">
    <td scope="row" class="px-6 py-4 text-gray-900 whitespace-nowrap">
    มากกว่า 5 วัน
    </td>
    <td class="px-6 py-4 text-center">
    ${e.pending_OD}
    </td>
    <td class="px-6 py-4 text-center text-sm">
    ${l((e.pending_OD/(e.con_pending||1)*100).toString(),0)}%
    </td> 
</tr>
</tbody>
</table>
</div>


</div>
<div class="p-2 w-full lg:w-1/2 grow ">

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
<table class="w-full text-sm text-left text-gray-500">
<thead class="text-gray-700 bg-green-50">

<tr class="bg-white">
<td class="p-1 text-center" colspan="4">

<div class="flex-start flex h-5 items-center w-full overflow-hidden rounded bg-blue-gray-50 ">
${e.ND>0?`
<div
class="flex h-full items-baseline justify-center overflow-hidden break-all bg-green-800 text-white px-3"
style="width: ${l((e.ND/(e.con_success||1)*100).toString(),0)}%">ND
</div>
`:""}
${e["2D"]>0?`
<div
class="flex h-full items-baseline justify-center overflow-hidden break-all bg-green-500 text-white px-3"
style="width: ${l((e["2D"]/(e.con_success||1)*100).toString(),0)}%">2D
</div>
`:""}
${e["3D"]>0?`
<div
class="flex h-full items-baseline justify-center overflow-hidden break-all bg-orange-500 text-white px-3"
style="width: ${l((e["3D"]/(e.con_success||1)*100).toString(),0)}%">3D
</div>
`:""}
${e["4D"]>0?`
<div
class="flex h-full items-baseline justify-center overflow-hidden break-all bg-orange-800 text-white px-3"
style="width: ${l((e["4D"]/(e.con_success||1)*100).toString(),0)}%">4D
</div>
`:""}
${e["5D"]>0?`
<div
class="flex h-full items-baseline justify-center overflow-hidden break-all bg-red-500 text-white px-3"
style="width: ${l((e["5D"]/(e.con_success||1)*100).toString(),0)}%">5D
</div>
`:""}
${e.OD>0?`
<div
class="flex h-full items-baseline justify-center overflow-hidden break-all bg-red-800 text-white px-3"
style="width: ${l((e.OD/(e.con_success||1)*100).toString(),0)}%">6D
</div>
`:""}

</div>
</td>     
</tr>

<tr>
    <td scope="col" class="px-3 py-3" colspan="2">
    <span class="hidden md:inline">พัสดุที่ส่งแล้ว รวม ${e.con_success} ชิ้น</span>
    <span class="inline md:hidden">ส่งแล้ว ${e.con_success} ชิ้น</span>

    
    </td>

    <td scope="col" class="px-1 py-3 text-center">
    <span class="hidden md:inline">ส่งวันนี้</span>
    <span class="inline md:hidden">วันนี้</span>
    </td>
    
    <td scope="col" class="px-1 py-3 text-center">
    ทั้งหมด
    </td>

</tr>
</thead>
<tbody class="text-lg">
<tr class="bg-white border-b ${e.ND>0?"text-green-800":""}">
    <td scope="row" class="px-6 py-4 text-gray-900 whitespace-nowrap flex">        
    ND</td>
    <td class="px-6 py-4 text-center text-sm">
    ${l((e.ND/(e.con_success||1)*100).toString(),0)}%
    </td>           
    <td class="px-6 py-4 text-center ${e.today_ND>0?"text-green-800":"text-gray-500"}">
    ${e.today_ND}
    </td>
    <td class="px-6 py-4 text-center">
    ${e.ND}
    </td>

</tr>
<tr class="border-b bg-gray-50 ${e["2D"]>0?"text-green-800":""}">
    <td scope="row" class="px-6 py-4 text-gray-900 whitespace-nowrap flex">
    2D</td>
    <td class="px-6 py-4 text-center text-sm">
    ${l((e["2D"]/(e.con_success||1)*100).toString(),0)}%
    </td> 
    <td class="px-6 py-4 text-center ${e.today_2D>0?"text-green-800":"text-gray-500"}">
    ${e.today_2D}
    </td>
    <td class="px-6 py-4 text-center">
    ${e["2D"]}
    </td>

</tr>
<tr class="bg-white border-b ${e["3D"]>0?"text-yellow-800":""}">
    <td scope="row" class="px-6 py-4 text-gray-900 whitespace-nowrap flex">
    3D</td>
    <td class="px-6 py-4 text-center text-sm">
    ${l((e["3D"]/(e.con_success||1)*100).toString(),0)}%
    </td>
    <td class="px-6 py-4 text-center ${e.today_3D>0?"text-green-800":"text-gray-500"}">
    ${e.today_3D}
    </td>
    <td class="px-6 py-4 text-center">
    ${e["3D"]}
    </td>

</tr>
<tr class="border-b bg-gray-50 ${e["4D"]>0?"text-yellow-800":""}">
    <td scope="row" class="px-6 py-4 text-gray-900 whitespace-nowrap flex">
    4D</td>
    <td class="px-6 py-4 text-center text-sm">
    ${l((e["4D"]/(e.con_success||1)*100).toString(),0)}%
    </td>
    <td class="px-6 py-4 text-center ${e.today_4D>0?"text-green-800":"text-gray-500"}">
    ${e.today_4D}
    </td>
    <td class="px-6 py-4 text-center">
    ${e["4D"]}
    </td>

</tr>
<tr class="bg-white border-b ${e["5D"]>0?"text-red-800":""}">
    <td scope="row" class="px-6 py-4 text-gray-900 whitespace-nowrap flex">
    5D</td>
    <td class="px-6 py-4 text-center text-sm">
    ${l((e["5D"]/(e.con_success||1)*100).toString(),0)}%
    </td>
    <td class="px-6 py-4 text-center ${e.today_5D>0?"text-green-800":"text-gray-500"}">
    ${e.today_5D}
    </td>
    <td class="px-6 py-4 text-center">
    ${e["5D"]}
    </td>

</tr>
<tr class="border-b bg-gray-50 ${e.OD>0?"text-red-800":""}">
    <td scope="row" class="px-6 py-4 text-gray-900 whitespace-nowrap flex">
    OD</td>
    <td class="px-6 py-4 text-center text-sm">
    ${l((e.OD/(e.con_success||1)*100).toString(),0)}%
    </td>
    <td class="px-6 py-4 text-center ${e.today_OD>0?"text-green-800":"text-gray-500"}">
    ${e.today_OD}
    </td>
    <td class="px-6 py-4 text-center">
    ${e.OD}
    </td>

</tr>
</tbody>
</table>
</div>


</div>
</div>

${e.con_unsuccess?`
<div class="items-start px-4 pb-4">
<div class="text-start mt-1 text-sm py-1 bg-gray-100  ${e.con_unsuccess>0?"text-orange-600":"text-gray-900"}">พบพัสดุที่นำส่งไม่สำเร็จ ${e.con_unsuccess} ชิ้น</div>
<div class="text-start text-xs text-gray-500">(เป็นพัสดุตีกลับ, ลูกค้าปฎิเสธรับ, เกินกำหนดส่ง, พัสดุสูญหาย, พัสดุเสียหาย)</div>
</div>`:""}

<hr>
<div class="text-red-600 text-start px-4 text-sm my-5">ระบบนี้ใช้ข้อมูลพัสดุจาก KBD ที่เข้าร่วมโครงการ <a class="text-red-600 underline cursor-pointer" id="joinKBD">สนใจเข้าร่วมได้ที่นี่ ฟรี!</a></div>
`,(r=document.querySelector("#joinKBD"))==null||r.addEventListener("click",function(){var o;document.querySelector("#response").innerHTML=`

<div class="text-start text-cyan-800 p-4 bg-white rounded">
<p>KERRY BUDDY ลงทะเบียนเข้าร่วมโครงการ</p>
<p class="mt-1 text-xs text-gray-800">ลงทะเบียนง่ายๆ โดยใช้เพียงรหัสสาขาของเคอรี่บัดดี้! หรือ รหัสปิดร้าน KBXXX
<br><span class="text-red-500">ถือเป็นการยินยอมให้ระบบทำการดึงข้อมูจากสาขาของท่าน และ Track ข้อมูลสถานะของพัสดุทุกวัน</span></p>

<div class="mt-3 text-sm text-teal-600">ลงทะเบียนเพียงครั้งเดียว ระบบจะอัพเดตพัสดุจากสาขาของท่านทุกวัน โดยอัตโนมัติ</div>


<div class="my-3 relative h-10 w-96 min-w-[200px]">
<input id="kbd"
class="Kanit uppercase peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-orange-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
placeholder=" " maxlength="5"/>
<label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-teal-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-orange-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-orange-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
รหัสสาขา KBXXXX</label>
</div>
<span id="error" class="text-red-800 mb-2 block"></span>
<button
  class=" middle none center rounded-lg bg-green-500 py-3 px-6 text-xs KanitBold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
  ยินยอม</button>
</div>

`,(o=document.querySelector("button"))==null||o.addEventListener("click",async function(){const s=document.querySelector("#kbd"),i=s==null?void 0:s.value.toUpperCase();if(i.length!==5){document.querySelector("#error").innerHTML="** รหัสไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง";return}s.disabled=!0,this.disabled=!0;const n=await y({action:"join",value:i});console.log(n),n.status?document.querySelector("#response").innerHTML=`<div class="text-green-500 mt-6">
        <span class="material-symbols-outlined text-red-500 text-6xl animate-bounce block my-5">favorite</span>
        ขอบคุณที่เข้าร่วมโครงการ การเข้าร่วมครั้งนี้ของท่านจะช่วยให้ระบบมีข้อมูลที่แม่นยำมากยิ่งขึ้น</div>`:(s.disabled=!1,this.disabled=!1,document.querySelector("#error").innerHTML="ระบบขัดข้อง กรุณาลองใหม่อีกครั้ง")})})}const O="3.7.4",H=O,X=typeof atob=="function",J=typeof btoa=="function",x=typeof Buffer=="function",D=typeof TextDecoder=="function"?new TextDecoder:void 0,$=typeof TextEncoder=="function"?new TextEncoder:void 0,V="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",u=Array.prototype.slice.call(V),g=(e=>{let t={};return e.forEach((r,o)=>t[r]=o),t})(u),Y=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,a=String.fromCharCode.bind(String),S=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):(e,t=r=>r)=>new Uint8Array(Array.prototype.slice.call(e,0).map(t)),U=e=>e.replace(/=/g,"").replace(/[+\/]/g,t=>t=="+"?"-":"_"),j=e=>e.replace(/[^A-Za-z0-9\+\/]/g,""),N=e=>{let t,r,o,s,i="";const n=e.length%3;for(let d=0;d<e.length;){if((r=e.charCodeAt(d++))>255||(o=e.charCodeAt(d++))>255||(s=e.charCodeAt(d++))>255)throw new TypeError("invalid character found");t=r<<16|o<<8|s,i+=u[t>>18&63]+u[t>>12&63]+u[t>>6&63]+u[t&63]}return n?i.slice(0,n-3)+"===".substring(n):i},w=J?e=>btoa(e):x?e=>Buffer.from(e,"binary").toString("base64"):N,h=x?e=>Buffer.from(e).toString("base64"):e=>{let r=[];for(let o=0,s=e.length;o<s;o+=4096)r.push(a.apply(null,e.subarray(o,o+4096)));return w(r.join(""))},b=(e,t=!1)=>t?U(h(e)):h(e),G=e=>{if(e.length<2){var t=e.charCodeAt(0);return t<128?e:t<2048?a(192|t>>>6)+a(128|t&63):a(224|t>>>12&15)+a(128|t>>>6&63)+a(128|t&63)}else{var t=65536+(e.charCodeAt(0)-55296)*1024+(e.charCodeAt(1)-56320);return a(240|t>>>18&7)+a(128|t>>>12&63)+a(128|t>>>6&63)+a(128|t&63)}},Q=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,T=e=>e.replace(Q,G),C=x?e=>Buffer.from(e,"utf8").toString("base64"):$?e=>h($.encode(e)):e=>w(T(e)),p=(e,t=!1)=>t?U(C(e)):C(e),A=e=>p(e,!0),W=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,ee=e=>{switch(e.length){case 4:var t=(7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3),r=t-65536;return a((r>>>10)+55296)+a((r&1023)+56320);case 3:return a((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return a((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},E=e=>e.replace(W,ee),F=e=>{if(e=e.replace(/\s+/g,""),!Y.test(e))throw new TypeError("malformed base64.");e+="==".slice(2-(e.length&3));let t,r="",o,s;for(let i=0;i<e.length;)t=g[e.charAt(i++)]<<18|g[e.charAt(i++)]<<12|(o=g[e.charAt(i++)])<<6|(s=g[e.charAt(i++)]),r+=o===64?a(t>>16&255):s===64?a(t>>16&255,t>>8&255):a(t>>16&255,t>>8&255,t&255);return r},v=X?e=>atob(j(e)):x?e=>Buffer.from(e,"base64").toString("binary"):F,q=x?e=>S(Buffer.from(e,"base64")):e=>S(v(e),t=>t.charCodeAt(0)),M=e=>q(R(e)),te=x?e=>Buffer.from(e,"base64").toString("utf8"):D?e=>D.decode(q(e)):e=>E(v(e)),R=e=>j(e.replace(/[-_]/g,t=>t=="-"?"+":"/")),m=e=>te(R(e)),re=e=>{if(typeof e!="string")return!1;const t=e.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(t)||!/[^\s0-9a-zA-Z\-_]/.test(t)},I=e=>({value:e,enumerable:!1,writable:!0,configurable:!0}),K=function(){const e=(t,r)=>Object.defineProperty(String.prototype,t,I(r));e("fromBase64",function(){return m(this)}),e("toBase64",function(t){return p(this,t)}),e("toBase64URI",function(){return p(this,!0)}),e("toBase64URL",function(){return p(this,!0)}),e("toUint8Array",function(){return M(this)})},P=function(){const e=(t,r)=>Object.defineProperty(Uint8Array.prototype,t,I(r));e("toBase64",function(t){return b(this,t)}),e("toBase64URI",function(){return b(this,!0)}),e("toBase64URL",function(){return b(this,!0)})},ne=()=>{K(),P()},k={version:O,VERSION:H,atob:v,atobPolyfill:F,btoa:w,btoaPolyfill:N,fromBase64:m,toBase64:p,encode:p,encodeURI:A,encodeURL:A,utob:T,btou:E,decode:m,isValid:re,fromUint8Array:b,toUint8Array:M,extendString:K,extendUint8Array:P,extendBuiltins:ne};function _(e){var i;const t=document.querySelector("#response");if(e.data.length===0){t.innerHTML='<div class="text-pink-600 h-96 flex  items-center justify-center">ไม่พบข้อมูลที่ค้นหา</div>';return}let r="",o="",s='<span class="material-symbols-outlined">location_on</span>';(i=e.data)==null||i.forEach(n=>{var f;let d="";if(n.esaSurcharged=="1"&&(d=n.province=="ภูเก็ต"?'<span class="text-blue-600">พื้นที่ท่องเที่ยวพิเศษ</span>':"พื้นที่ห่างไกล"),n.masterPostalCodeCapacities&&(d='<span class="text-orange-600">พื้นที่ล่าช้า (Official)</span>'),n.warningMessage&&(d=n.warningMessage=="งดรับพัสดุไปยังปลายทางดังกล่าวชั่วคราว!!"?'<span class="text-red-600 KanitBold">พื้นที่ปิดรับพัสดุ!</span>':n.warningMessage),n.postalCode!=r){r=n.postalCode;let c=(f=e.report)==null?void 0:f.find(z=>z.postcode==r);if(c.store=[n.linehualRoute,n.postalCode,n.amphur],o+=`<div class=" justify-between mt-2 pt-2 text-sm px-3 bg-gray-50 bg-opacity-80 flex md:hidden"><span>${n.province} ${n.postalCode}</span> ${d||"&nbsp;"}</div>`,o+=`<hr class="my-2 border-green-700" data-z${r}="${k.encode(JSON.stringify(c))}">`,!(c!=null&&c.con_total))return;(c.pending_3D+c.pending_4D+c.pending_5D+c.pending_OD)/c.con_pending*100>30?s='<span class="material-symbols-outlined text-amber-900 animate-bounce">location_on</span>':s='<span class="material-symbols-outlined text-green-800">location_on</span>',n.inactive&&(s='<span class="material-symbols-outlined text-deep-orange-700 animate-pulse">wrong_location</span>')}o+=`<div class="rounded-md cursor-pointer hover:outline hover:outline-2 hover:outline-orange-900 hover:animate-pulse" data-target="${n.postalCode}">
              <div class="flex justify-between items-center">
                  <div class="mt-1 text-sm text-gray-900 w-7">${s}</div>
                  <div class="mt-1 text-sm text-gray-900 py-1 w-48 md:w-40 bg-gray-50 bg-opacity-80">${n.district}</div>
                  <div class="mt-1 text-sm text-gray-900 py-1 w-48 md:w-48 bg-gray-50 bg-opacity-80">${n.amphur}</div>
                  <div class="mt-1 text-sm text-gray-900 py-1 w-32 md:w-40 bg-gray-50 bg-opacity-80 hidden md:inline-block">${n.province}</div>
                  <div class="mt-1 text-sm text-gray-900 py-1 w-32 md:w-24 bg-gray-50 bg-opacity-80 hidden md:inline-block">${n.postalCode}</div>
                  <div class="grow mt-1 text-xs text-orange-700 py-1 bg-gray-50 bg-opacity-80 hidden md:inline-block">${d||"&nbsp;"}</div>
                  <div class="mt-1 text-xs text-gray-500 py-1 w-32 bg-gray-50 bg-opacity-80 hidden md:inline-block">${n.linehualRoute}</div>
                  <div class="mt-1 text-xs text-gray-500 py-1 w-16 bg-gray-50 bg-opacity-80 hidden md:inline-block">${n.routeCode}</div>
                </div>
                ${(n.remark||0).length>=2?`
                <div class="justify-between items-center hidden md:flex">
                <div class="mt-1 text-sm text-gray-900 w-7"></div>
                <div class="text-xs text-teal-600 py-1 grow bg-gray-50 bg-opacity-80 pl-2 text-left">!! ${n.district} ${n.remark}</div>
                </div>
                `:""}
            </div>`}),t.innerHTML=o,document.querySelectorAll("[data-target]").forEach(n=>{n.addEventListener("click",function(){const d=this.dataset.target,f=document.querySelector(`[data-z${d}]`).dataset[`z${d}`]??"",c=JSON.parse(k.decode(f));Z(c)})})}document.querySelector("#app").innerHTML=`
<div class="container mx-auto px-4 text-center">
  <h1 class="text-2xl my-5">สถานการณ์คลังพัสดุเคอรี่</h1>
  <p class="text-sm my-5 text-cyan-500">Last updated: ${new Date().toJSON().slice(0,10).replace(/-/g,"-")}</p>
  <div class="flex items-center mx-auto w-100 bg-gray-100 bg-opacity-80 p-1 rounded-[7px] shadow">
  <span id="home" class="material-symbols-outlined md:mx-1 text-4xl cursor-pointer text-blue-800 hover:text-red-500 hover:animate-ping">  home_pin  </span>
  <div class="relative h-10 w-full min-w-[200px]">
        <input id="SearchInput" class="Kanit peer h-full w-full rounded-[7px] border border-blue-gray-300 border-t-transparent bg-transparent px-3 py-2.5 !pr-9 text-sm text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-yellow-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          placeholder=" "/><label
          class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-lg after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-yellow-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-yellow-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-yellow-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
          >ค้นหา รหัสไปรษณีย์ / ตำบล / อำเภอ
        </label>
      </div>
  </div>
    <div id="response" class="my-5 mx-auto w-100 bg-opacity-80 bg-gray-100 p-2 rounded-[7px] shadow"  style="min-height: 50vh;">
        <div class="h-96 flex items-center justify-center bg-white animate-pulse">
        <div role="status">
            <svg aria-hidden="true" class="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-orange-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span class="sr-only">Loading...</span>
        </div>
    </div>
  </div>
</div>`;window.onload=async()=>{const e=document.querySelector("#response");e.classList.add("loader");const t=await y({action:"official",value:null});_(t),e.classList.remove("loader")};var B;(B=document.querySelector("#SearchInput"))==null||B.addEventListener("keyup",async function(e){if(!this.value||e.key==="Backspace")return;const t=document.querySelector("#response");t.classList.add("loader");const r=await y({action:"search",value:this.value});_(r),t.classList.remove("loader")});var L;(L=document.querySelector("#home"))==null||L.addEventListener("click",async function(){const e=document.querySelector("#SearchInput"),t=document.querySelector("#response");t.classList.add("loader");const r=e.value?"search":"official",o=await y({action:r,value:e.value});_(o),t.classList.remove("loader")});
