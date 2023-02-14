(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerpolicy&&(l.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?l.credentials="include":a.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(a){if(a.ep)return;a.ep=!0;const l=s(a);fetch(a.href,l)}})();async function g(t){let e={status:!1,data:[]};return await fetch("https://api.comgig.com/thailand",{method:"POST",body:JSON.stringify(t),headers:{Authorization:`Bearer ${sessionStorage.getItem("X-TOKEN")||"AIzaSyAFby7SqmeJaswhojKW1NZUEOmmGdd71J0"}`,"Content-type":"application/json; charset=UTF-8"},credentials:"include"}).then(function(s){s.ok?e=s.json():e={status:!1,message:"server error"}}).catch(()=>{e={status:!1,message:"api error"}}),e}function n(t,e=0,s=","){const o=parseFloat(t).toFixed(e).split("."),a=s===","?o[0].replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"):o[0].replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+s);return String(a+(o[1]?"."+o[1]:""))}function W(t){const e=t.response.report[0],s=t.store,o=document.querySelector("#response");let a=`
<div class="text-blue-800 mt-3 text-xl md:text-2xl">${s[2]}</div>

<div class="text-gray-800 text-xl md:text-3xl tracking-[.1em]">${s[1]}</div>

<div class="text-blue-800 mt-3 text-sm md:text-xl">ศูนย์กระจายสินค้า ${s[0]} มีข้อมูลพัสดุจำนวน ${e.con_total} ชิ้น</div>

<div class="text-gray-500 mt-1 text-xs">ข้อมูลพัสดุจากสาขา KBD เท่านั้นไม่ใช่จำนวนพัสดุทั้งหมดในคลัง ผลสรุปที่ได้อาจไม่ตรงตามสถานการณ์จริง <span class="text-red-600">โปรดใช้วิจารณญาณในการรับข้อมูล</span></div>



<div class="flex flex-wrap">

<div class="mt-6 p-2 w-full lg:w-1/2 grow bg-white rounded-md bg-opacity-50">
พัสดุที่ต้องนำส่งวันนี้ ${e.con_pending} ชิ้น<br>
<span class="text-xs">(ตามกำหนด ${n(((e.pending_ND+e.pending_2D)/(e.con_pending||1)*100).toString(),0)}% / ติดปัญหา ${n(((e.pending_3D+e.pending_4D+e.pending_5D+e.pending_OD)/(e.con_pending||1)*100).toString(),0)}%)</span>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
<table class="w-full text-sm text-left text-gray-500">
<thead class="text-gray-700 bg-blue-50">
<tr class="bg-white">
<td class="p-1 text-center" colspan="4">

<div class="flex-start flex h-5 w-full overflow-hidden rounded bg-blue-gray-50">

${e.pending_ND>0?`
<div
class="flex h-full items-baseline justify-center overflow-hidden break-all bg-green-800 text-white px-3"
style="width: ${n((e.pending_ND/(e.con_pending||1)*100).toString(),0)}%">${n((e.pending_ND/(e.con_pending||1)*100).toString(),0)}%
</div>
`:""}
${e.pending_2D>0?`
<div
class="flex h-full items-baseline justify-center overflow-hidden break-all bg-green-500 text-white px-3"
style="width: ${n((e.pending_2D/(e.con_pending||1)*100).toString(),0)}%">${n((e.pending_2D/(e.con_pending||1)*100).toString(),0)}%
</div>
`:""}
${e.pending_3D>0?`
<div
class="flex h-full items-baseline justify-center overflow-hidden break-all bg-orange-500 text-white px-3"
style="width: ${n((e.pending_3D/(e.con_pending||1)*100).toString(),0)}%">${n((e.pending_3D/(e.con_pending||1)*100).toString(),0)}%
</div>
`:""}
${e.pending_4D>0?`
<div
class="flex h-full items-baseline justify-center overflow-hidden break-all bg-orange-800 text-white px-3"
style="width: ${n((e.pending_4D/(e.con_pending||1)*100).toString(),0)}%">${n((e.pending_4D/(e.con_pending||1)*100).toString(),0)}%
</div>
`:""}
${e.pending_5D>0?`
<div
class="flex h-full items-baseline justify-center overflow-hidden break-all bg-red-500 text-white px-3"
style="width: ${n((e.pending_5D/(e.con_pending||1)*100).toString(),0)}%">${n((e.pending_5D/(e.con_pending||1)*100).toString(),0)}%
</div>
`:""}
${e.pending_OD>0?`
<div
class="flex h-full items-baseline justify-center overflow-hidden break-all bg-red-800 text-white px-3"
style="width: ${n((e.pending_OD/(e.con_pending||1)*100).toString(),0)}%">${n((e.pending_OD/(e.con_pending||1)*100).toString(),0)}%
</div>
`:""}

</div>
</td>     
</tr>
<tr>
    <td scope="col" class="px-3 py-3">

    <span class="">จำนวนวัน</span>
    </td>
    <td scope="col" colspan="2" class="KanitBold px-1 py-3 text-center">
    <span class="hidden md:inline">จำนวนพัสดุรอจัดส่ง</span>
    <span class="inline md:hidden">รอจัดส่ง</span>
    </td>

</tr>
</thead>
<tbody class="text-lg">
<tr class="bg-white border-b ${e.pending_ND>0?"text-green-800":""}">
    <td scope="row" class="px-6 py-0 text-gray-900 whitespace-nowrap">
    1 วัน<div class="text-xs">( พัสดุใหม่ / อยู่ระหว่างทาง )</div>
    </td>
    <td class="px-6 py-4 text-center">
    ${e.pending_ND}
    </td>
    <td class="px-6 py-4 text-center text-sm">
    ${n((e.pending_ND/(e.con_pending||1)*100).toString(),0)}%
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
    ${n((e.pending_2D/(e.con_pending||1)*100).toString(),0)}%
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
    ${n((e.pending_3D/(e.con_pending||1)*100).toString(),0)}%
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
    ${n((e.pending_4D/(e.con_pending||1)*100).toString(),0)}%
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
    ${n((e.pending_5D/(e.con_pending||1)*100).toString(),0)}%
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
    ${n((e.pending_OD/(e.con_pending||1)*100).toString(),0)}%
    </td> 
</tr>
</tbody>
</table>
</div>


</div>
<div class="mt-6 p-2 w-full lg:w-1/2 grow bg-white rounded-md bg-opacity-50">
พัสดุที่ส่งสำเร็จแล้ว ${n(e.con_success.toString(),0)} ชิ้น <br>

<span class="text-xs">
ตามกำหนด ${n(((e.ND+e["2D"])/(e.con_success||1)*100).toString(),0)}%
/
ล่าช้า ${n(((e["3D"]+e["4D"])/(e.con_success||1)*100).toString(),0)}%
/
ช้ามาก ${n(((e["5D"]+e.OD)/(e.con_success||1)*100).toString(),0)}%
</span>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
<table class="w-full text-sm text-left text-gray-500">
<thead class="text-gray-700 bg-green-50">

<tr class="bg-white">
<td class="p-1 text-center" colspan="5">

<div class="flex-start flex h-5 items-center w-full overflow-hidden rounded bg-blue-gray-50 ">
${e.ND>0?`
<div
class="flex h-full items-baseline justify-center overflow-hidden break-all bg-green-800 text-white px-3"
style="width: ${n((e.ND/(e.con_success||1)*100).toString(),0)}%">ND
</div>
`:""}
${e["2D"]>0?`
<div
class="flex h-full items-baseline justify-center overflow-hidden break-all bg-green-500 text-white px-3"
style="width: ${n((e["2D"]/(e.con_success||1)*100).toString(),0)}%">2D
</div>
`:""}
${e["3D"]>0?`
<div
class="flex h-full items-baseline justify-center overflow-hidden break-all bg-orange-500 text-white px-3"
style="width: ${n((e["3D"]/(e.con_success||1)*100).toString(),0)}%">3D
</div>
`:""}
${e["4D"]>0?`
<div
class="flex h-full items-baseline justify-center overflow-hidden break-all bg-orange-800 text-white px-3"
style="width: ${n((e["4D"]/(e.con_success||1)*100).toString(),0)}%">4D
</div>
`:""}
${e["5D"]>0?`
<div
class="flex h-full items-baseline justify-center overflow-hidden break-all bg-red-500 text-white px-3"
style="width: ${n((e["5D"]/(e.con_success||1)*100).toString(),0)}%">5D
</div>
`:""}
${e.OD>0?`
<div
class="flex h-full items-baseline justify-center overflow-hidden break-all bg-red-800 text-white px-3"
style="width: ${n((e.OD/(e.con_success||1)*100).toString(),0)}%">6D
</div>
`:""}

</div>
</td>     
</tr>

<tr>
    <td scope="col" class="px-3 py-3">
    <span class="hidden md:inline">ความเคลื่อนไหว</span>
    </td>

    <td scope="col" class="px-1 py-3 text-center">
    <span class="hidden md:inline">วันนี้</span>
    <span class="inline md:hidden">วันนี้</span>
    </td>

    <td scope="col" class="px-1 py-3 text-center">
    <span class="hidden md:inline">เมื่อวาน</span>
    <span class="inline md:hidden">เมื่อวาน</span>
    </td>
    <td scope="col" class="px-1 py-3 text-center">ทั้งหมด</td>
    <td scope="col" class="px-1 py-3 text-center">%</td>

</tr>
</thead>
<tbody class="text-lg">
<tr class="bg-white border-b ${e.ND>0?"text-green-800":""}">
    <td scope="row" class="px-6 py-4 text-gray-900 whitespace-nowrap flex">        
    ND</td>
            
    <td class="px-6 py-4 text-center ${e.today_ND>0?"text-green-800":"text-gray-500"}">
    ${e.today_ND}
    </td>
    <td class="px-6 py-4 text-center ${e.today_ND>0?"text-green-800":"text-gray-500"}">
    ${e.yesterday_ND}
    </td>
    <td class="px-6 py-4 text-center">
    ${e.ND}
    </td>
    <td class="px-6 py-4 text-center text-sm">
    ${n((e.ND/(e.con_success||1)*100).toString(),0)}%
    </td>  

</tr>
<tr class="border-b bg-gray-50 ${e["2D"]>0?"text-green-800":""}">
    <td scope="row" class="px-6 py-4 text-gray-900 whitespace-nowrap flex">
    2D</td>

    <td class="px-6 py-4 text-center ${e.today_2D>0?"text-green-800":"text-gray-500"}">
    ${e.today_2D}
    </td>
    <td class="px-6 py-4 text-center ${e.today_2D>0?"text-green-800":"text-gray-500"}">
    ${e.yesterday_2D}
    </td>
    <td class="px-6 py-4 text-center">
    ${e["2D"]}
    </td>
    <td class="px-6 py-4 text-center text-sm">
    ${n((e["2D"]/(e.con_success||1)*100).toString(),0)}%
    </td> 

</tr>
<tr class="bg-white border-b ${e["3D"]>0?"text-yellow-800":""}">
    <td scope="row" class="px-6 py-4 text-gray-900 whitespace-nowrap flex">
    3D</td>

    <td class="px-6 py-4 text-center ${e.today_3D>0?"text-green-800":"text-gray-500"}">
    ${e.today_3D}
    </td>
    <td class="px-6 py-4 text-center ${e.today_3D>0?"text-green-800":"text-gray-500"}">
    ${e.yesterday_3D}
    </td>
    <td class="px-6 py-4 text-center">
    ${e["3D"]}
    </td>
    <td class="px-6 py-4 text-center text-sm">
    ${n((e["3D"]/(e.con_success||1)*100).toString(),0)}%
    </td>

</tr>
<tr class="border-b bg-gray-50 ${e["4D"]>0?"text-yellow-800":""}">
    <td scope="row" class="px-6 py-4 text-gray-900 whitespace-nowrap flex">
    4D</td>

    <td class="px-6 py-4 text-center ${e.today_4D>0?"text-green-800":"text-gray-500"}">
    ${e.today_4D}
    </td>
    <td class="px-6 py-4 text-center ${e.today_4D>0?"text-green-800":"text-gray-500"}">
    ${e.yesterday_4D}
    </td>
    <td class="px-6 py-4 text-center">
    ${e["4D"]}
    </td>
    <td class="px-6 py-4 text-center text-sm">
    ${n((e["4D"]/(e.con_success||1)*100).toString(),0)}%
    </td>

</tr>
<tr class="bg-white border-b ${e["5D"]>0?"text-red-800":""}">
    <td scope="row" class="px-6 py-4 text-gray-900 whitespace-nowrap flex">
    5D</td>

    <td class="px-6 py-4 text-center ${e.today_5D>0?"text-green-800":"text-gray-500"}">
    ${e.today_5D}
    </td>
    <td class="px-6 py-4 text-center ${e.today_5D>0?"text-green-800":"text-gray-500"}">
    ${e.yesterday_5D}
    </td>
    <td class="px-6 py-4 text-center">
    ${e["5D"]}
    </td>
    <td class="px-6 py-4 text-center text-sm">
    ${n((e["5D"]/(e.con_success||1)*100).toString(),0)}%
    </td>

</tr>
<tr class="border-b bg-gray-50 ${e.OD>0?"text-red-800":""}">
    <td scope="row" class="px-6 py-4 text-gray-900 whitespace-nowrap flex">
    OD</td>

    <td class="px-6 py-4 text-center ${e.today_OD>0?"text-green-800":"text-gray-500"}">
    ${e.today_OD}
    </td>
    <td class="px-6 py-4 text-center ${e.today_OD>0?"text-green-800":"text-gray-500"}">
    ${e.yesterday_OD}
    </td>
    <td class="px-6 py-4 text-center">
    ${e.OD}
    </td>
    <td class="px-6 py-4 text-center text-sm">
    ${n((e.OD/(e.con_success||1)*100).toString(),0)}%
    </td>

</tr>
</tbody>
</table>
</div>


</div>
</div>

<div class="flex flex-wrap">

<div class="mt-6 p-2 w-full bg-white rounded-md bg-opacity-50 text-left">

ข้อมูลแสดงตามวันที่พนักงานเข้ารับ

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
<table class="w-full text-sm text-left text-gray-500">
<thead class="text-gray-700 bg-green-50">

<tr class="bg-white">
<td class="p-1 text-center" colspan="5">

</td>     
</tr>

<tr>
    <td scope="col" class="px-3 py-3 w-36">วันที่</td>
    <td scope="col" class="px-0 py-3 w-80"></td>
    <td scope="col" class="px-1 py-3 text-center">จำนวนทั้งหมด</td>
    <td scope="col" class="px-1 py-3 text-center">ระหว่างจัดส่ง</td>
    <td scope="col" class="px-1 py-3 text-center">ส่งสำเร็จแล้ว</td>
    <td scope="col" class="px-1 py-3 text-center">ตีกลับ</td>


</tr>
</thead>
<tbody class="text-lg">`,l=0;t.response.data.forEach(r=>{let d=0,c=0,p=0;r.status.forEach(i=>{i.status=="POD"?d+=i.items:i.status=="091"||i.status=="112"||i.status=="POD99"||i.status=="POD98"?p+=i.items:c+=i.items}),r.date&&(l++,a+=`<tr class="bg-white border-b ${e.ND>0?"text-green-800":""}">
    <td scope="row" class="pl-3 text-gray-900 whitespace-nowrap text-sm">${r.date}</td>
    
    <td class=" text-gray-900">
    <div class="flex-start flex h-4 items-center w-full overflow-hidden rounded bg-blue-gray-50 ">

${d?`
<div
class="flex h-full items-baseline justify-center overflow-hidden break-all bg-green-800 text-white px-3"
style="width: ${n((d/(r.items||1)*100).toString(),0)}%">
</div>
`:""}

${c?`
<div
class="flex h-full items-baseline justify-center overflow-hidden break-all ${l<=6?l<=3?"bg-blue-500":"bg-orange-500":"bg-orange-800"} text-white px-3"
style="width: ${n((c/(r.items||1)*100).toString(),0)}%">
</div>
`:""}

${p?`
<div
class="flex h-full items-baseline justify-center overflow-hidden break-all bg-red-800 text-white px-3"
style="width: ${n((p/(r.items||1)*100).toString(),0)}%">
</div>
`:""}

</div>
    
    </td>
            
    <td class="text-center ${e.today_ND>0?"text-green-800":"text-gray-500"}">${r.items}</td>

    <td class="text-center ${c>0?l<=6?l<=3?"text-blue-500":"text-orange-500":"text-red-800":"text-gray-500"}">${c||"-"}</td>

    <td class="text-center ${d>0?"text-green-800":"text-gray-500"}">${d||"-"}</td>

    <td class="text-center ${p>0?"text-red-800":"text-gray-500"}">${p||"-"}</td>

  
</tr>`)}),a+=`
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
`,o.innerHTML=a,setTimeout(async function(){window.scrollTo({top:0,behavior:"smooth"})},50)}const F="3.7.4",Q=F,ee=typeof atob=="function",te=typeof btoa=="function",f=typeof Buffer=="function",A=typeof TextDecoder=="function"?new TextDecoder:void 0,k=typeof TextEncoder=="function"?new TextEncoder:void 0,re="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",b=Array.prototype.slice.call(re),y=(t=>{let e={};return t.forEach((s,o)=>e[s]=o),e})(b),se=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,x=String.fromCharCode.bind(String),B=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):(t,e=s=>s)=>new Uint8Array(Array.prototype.slice.call(t,0).map(e)),M=t=>t.replace(/=/g,"").replace(/[+\/]/g,e=>e=="+"?"-":"_"),P=t=>t.replace(/[^A-Za-z0-9\+\/]/g,""),K=t=>{let e,s,o,a,l="";const r=t.length%3;for(let d=0;d<t.length;){if((s=t.charCodeAt(d++))>255||(o=t.charCodeAt(d++))>255||(a=t.charCodeAt(d++))>255)throw new TypeError("invalid character found");e=s<<16|o<<8|a,l+=b[e>>18&63]+b[e>>12&63]+b[e>>6&63]+b[e&63]}return r?l.slice(0,r-3)+"===".substring(r):l},_=te?t=>btoa(t):f?t=>Buffer.from(t,"binary").toString("base64"):K,m=f?t=>Buffer.from(t).toString("base64"):t=>{let s=[];for(let o=0,a=t.length;o<a;o+=4096)s.push(x.apply(null,t.subarray(o,o+4096)));return _(s.join(""))},h=(t,e=!1)=>e?M(m(t)):m(t),ne=t=>{if(t.length<2){var e=t.charCodeAt(0);return e<128?t:e<2048?x(192|e>>>6)+x(128|e&63):x(224|e>>>12&15)+x(128|e>>>6&63)+x(128|e&63)}else{var e=65536+(t.charCodeAt(0)-55296)*1024+(t.charCodeAt(1)-56320);return x(240|e>>>18&7)+x(128|e>>>12&63)+x(128|e>>>6&63)+x(128|e&63)}},ae=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,I=t=>t.replace(ae,ne),L=f?t=>Buffer.from(t,"utf8").toString("base64"):k?t=>m(k.encode(t)):t=>_(I(t)),u=(t,e=!1)=>e?M(L(t)):L(t),O=t=>u(t,!0),oe=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,de=t=>{switch(t.length){case 4:var e=(7&t.charCodeAt(0))<<18|(63&t.charCodeAt(1))<<12|(63&t.charCodeAt(2))<<6|63&t.charCodeAt(3),s=e-65536;return x((s>>>10)+55296)+x((s&1023)+56320);case 3:return x((15&t.charCodeAt(0))<<12|(63&t.charCodeAt(1))<<6|63&t.charCodeAt(2));default:return x((31&t.charCodeAt(0))<<6|63&t.charCodeAt(1))}},R=t=>t.replace(oe,de),z=t=>{if(t=t.replace(/\s+/g,""),!se.test(t))throw new TypeError("malformed base64.");t+="==".slice(2-(t.length&3));let e,s="",o,a;for(let l=0;l<t.length;)e=y[t.charAt(l++)]<<18|y[t.charAt(l++)]<<12|(o=y[t.charAt(l++)])<<6|(a=y[t.charAt(l++)]),s+=o===64?x(e>>16&255):a===64?x(e>>16&255,e>>8&255):x(e>>16&255,e>>8&255,e&255);return s},S=ee?t=>atob(P(t)):f?t=>Buffer.from(t,"base64").toString("binary"):z,Z=f?t=>B(Buffer.from(t,"base64")):t=>B(S(t),e=>e.charCodeAt(0)),H=t=>Z(J(t)),le=f?t=>Buffer.from(t,"base64").toString("utf8"):A?t=>A.decode(Z(t)):t=>R(S(t)),J=t=>P(t.replace(/[-_]/g,e=>e=="-"?"+":"/")),$=t=>le(J(t)),ie=t=>{if(typeof t!="string")return!1;const e=t.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(e)||!/[^\s0-9a-zA-Z\-_]/.test(e)},X=t=>({value:t,enumerable:!1,writable:!0,configurable:!0}),V=function(){const t=(e,s)=>Object.defineProperty(String.prototype,e,X(s));t("fromBase64",function(){return $(this)}),t("toBase64",function(e){return u(this,e)}),t("toBase64URI",function(){return u(this,!0)}),t("toBase64URL",function(){return u(this,!0)}),t("toUint8Array",function(){return H(this)})},Y=function(){const t=(e,s)=>Object.defineProperty(Uint8Array.prototype,e,X(s));t("toBase64",function(e){return h(this,e)}),t("toBase64URI",function(){return h(this,!0)}),t("toBase64URL",function(){return h(this,!0)})},ce=()=>{V(),Y()},N={version:F,VERSION:Q,atob:S,atobPolyfill:z,btoa:_,btoaPolyfill:K,fromBase64:$,toBase64:u,encode:u,encodeURI:O,encodeURL:O,utob:I,btou:R,decode:$,isValid:ie,fromUint8Array:h,toUint8Array:H,extendString:V,extendUint8Array:Y,extendBuiltins:ce};function C(t){var l;const e=document.querySelector("#response");if(t.data.length===0){e.innerHTML='<div class="text-pink-600 h-96 flex  items-center justify-center">ไม่พบข้อมูลที่ค้นหา</div>';return}let s="",o="",a='<span class="material-symbols-outlined">location_on</span>';(l=t.data)==null||l.forEach(r=>{var c;let d="";if(r.esaSurcharged=="1"&&(d=r.province=="ภูเก็ต"?'<span class="text-blue-600">พื้นที่ท่องเที่ยวพิเศษ</span>':"พื้นที่ห่างไกล"),r.masterPostalCodeCapacities&&(d='<span class="text-orange-600">พื้นที่ล่าช้า (Official)</span>'),r.warningMessage&&(d=r.warningMessage=="งดรับพัสดุไปยังปลายทางดังกล่าวชั่วคราว!!"?'<span class="text-red-600 KanitBold">พื้นที่ปิดรับพัสดุ!</span>':r.warningMessage),r.postalCode!=s){s=r.postalCode;let p=(c=t.report)==null?void 0:c.find(i=>i.postcode==s);p.store=[r.linehualRoute,r.postalCode,r.amphur],o+=`<div class=" justify-between mt-2 pt-2 text-sm px-3 bg-gray-50 bg-opacity-80 flex md:hidden"><span>${r.province} ${r.postalCode}</span> ${d||"&nbsp;"}</div>`,o+=`<hr class="my-2 border-green-700" data-z${s}="${N.encode(JSON.stringify(p))}">`,p.warning?a='<span class="material-symbols-outlined text-amber-900 animate-bounce">location_on</span>':a='<span class="material-symbols-outlined text-green-800">location_on</span>',r.inactive&&(a='<span class="material-symbols-outlined text-deep-orange-700 animate-pulse">wrong_location</span>')}o+=`<div class="rounded-md cursor-pointer hover:outline hover:outline-2 hover:outline-orange-900 hover:animate-pulse" data-target="${r.postalCode}">
              <div class="flex justify-between items-center">
                  <div class="mt-1 text-sm text-gray-900 w-7">${a}</div>
                  <div class="mt-1 text-sm text-gray-900 py-1 w-48 md:w-40 bg-gray-50 bg-opacity-80">${r.district}</div>
                  <div class="mt-1 text-sm text-gray-900 py-1 w-48 md:w-48 bg-gray-50 bg-opacity-80">${r.amphur}</div>
                  <div class="mt-1 text-sm text-gray-900 py-1 w-32 md:w-40 bg-gray-50 bg-opacity-80 hidden md:inline-block">${r.province}</div>
                  <div class="mt-1 text-sm text-gray-900 py-1 w-32 md:w-24 bg-gray-50 bg-opacity-80 hidden md:inline-block">${r.postalCode}</div>
                  <div class="grow mt-1 text-xs text-orange-700 py-1 bg-gray-50 bg-opacity-80 hidden md:inline-block">${d||"&nbsp;"}</div>
                  <div class="mt-1 text-xs text-gray-500 py-1 w-32 bg-gray-50 bg-opacity-80 hidden md:inline-block">${r.linehualRoute}</div>
                  <div class="mt-1 text-xs text-gray-500 py-1 w-16 bg-gray-50 bg-opacity-80 hidden md:inline-block">${r.routeCode}</div>
                </div>
                ${(r.remark||0).length>=2?`
                <div class="justify-between items-center hidden md:flex">
                <div class="mt-1 text-sm text-gray-900 w-7"></div>
                <div class="text-xs text-teal-600 py-1 grow bg-gray-50 bg-opacity-80 pl-2 text-left">!! ${r.district} ${r.remark}</div>
                </div>
                `:""}
            </div>`}),e.innerHTML=o,document.querySelectorAll("[data-target]").forEach(r=>{r.addEventListener("click",async function(){const d=document.querySelector("#response");d.classList.add("loader");const c=this.dataset.target,p=document.querySelector(`[data-z${c}]`).dataset[`z${c}`]??"",i=JSON.parse(N.decode(p)),w=await g({action:"detail",value:c});i.response=w,W(i),d.classList.remove("loader")})})}var pe=["second","minute","hour","day","week","month","year"];function xe(t,e){if(e===0)return["just now","right now"];var s=pe[Math.floor(e/2)];return t>1&&(s+="s"),[t+" "+s+" ago","in "+t+" "+s]}var ue=["秒","分钟","小时","天","周","个月","年"];function ge(t,e){if(e===0)return["刚刚","片刻后"];var s=ue[~~(e/2)];return[t+" "+s+"前",t+" "+s+"后"]}var D={},G=function(t,e){D[t]=e},fe=function(t){return D[t]||D.en_US},v=[60,60,24,7,365/7/12,12];function U(t){return t instanceof Date?t:!isNaN(t)||/^\d+$/.test(t)?new Date(parseInt(t)):(t=(t||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(t))}function be(t,e){var s=t<0?1:0;t=Math.abs(t);for(var o=t,a=0;t>=v[a]&&a<v.length;a++)t/=v[a];return t=Math.floor(t),a*=2,t>(a===0?9:1)&&(a+=1),e(t,a,o)[s].replace("%s",t.toString())}function ye(t,e){var s=e?U(e):new Date;return(+s-+U(t))/1e3}var he=function(t,e,s){var o=ye(t,s&&s.relativeDate);return be(o,fe(e))};G("en_US",xe);G("zh_CN",ge);async function we(t){var l;const e=t.data.reduce((r,d)=>d.date?r+d.items:r+0,0),s=document.querySelector("#response");let o=`
<div class="text-blue-800 my-6 text-sm md:text-xl">ข้อมูลเคอรี่ทั่วประเทศ</div>
<div class="text-gray-800 my-2 text-xs md:text-sm">ข้อมูลพัสดุจาก KBD ที่เข้าร่วมโครงการทั่วประเทศ จำนวน ${n(e.toString())} ชิ้น ไม่ใช่จำนวนพัสดุทั้งหมดของเคอรี่</div>
<div class="text-gray-800 my-2 text-xs md:text-sm">Last update: ${he(t.updated,"en_US")}</div>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
<table class="w-full text-sm text-left text-gray-500">
<thead class="text-gray-700 bg-blue-50">

<tr>
    <td scope="col" class="px-3 py-3"><span class="">วันที่เข้ารับ</span></td>
    <td scope="col" class="px-1 py-3 text-center"><span class="">พัสดุในระบบ</span></td>
    <td scope="col" class="px-1 py-3 text-center"><span class="">ส่งสำเร็จ</span></td>
    <td scope="col" class="px-1 py-3 text-center"><span class="">ระหว่างจัดส่ง</span></td>
    <td scope="col" class="px-1 py-3 text-center"><span class="">ติดปัญหา/ตีกลับ</span></td>
</tr>
</thead>
<tbody class="text-lg">`,a=0;t.data.forEach(r=>{let d=0,c=0,p=0;r.status.forEach(i=>{i.status=="POD"?d+=i.items:i.status=="091"||i.status=="112"||i.status=="POD99"||i.status=="POD98"?p+=i.items:c+=i.items}),r.date&&(a++,o+=`

<tr class="bg-white">
<td class="p-1 text-center text-xs" colspan="5">
<div class="flex-start flex h-1 w-full overflow-hidden rounded bg-blue-gray-50">
<div
class="flex h-full items-baseline justify-center overflow-hidden break-all bg-green-300 text-white px-2"
style="width: ${n((d/r.items*100).toString())}%">
</div>
<div
class="flex h-full items-baseline justify-center overflow-hidden break-all ${a<=3?"bg-blue-300":"bg-orange-500"} text-white px-2"
style="width: ${n((c/r.items*100).toString())}%">
</div>
<div
class="flex h-full items-baseline justify-center overflow-hidden break-all bg-red-300 text-white px-2"
style="width: ${n((p/r.items*100).toString())}%">
</div>
</div>
</td>     
</tr>
    <tr class="border-b group/item group-hover/item:bg-gray-400">
    <td scope="row" class="pl-3 text-gray-900 whitespace-nowrap">${r.date}</td>
    <td class="text-center text-gray-900">${n(r.items.toString())}</td>
    <td class="text-center text-green-800">${n(d.toString())} <span class="text-xs">(${n((d/r.items*100).toString())}%)</span></td>
    <td class="text-center ${a<=6?a<=3?"text-blue-800":"text-orange-500":"text-red-800"}">${n(c.toString())} <span class="text-xs">(${n((c/r.items*100).toString())}%)</span></td> 
    <td class="text-center text-red-800">${n(p.toString())} <span class="text-xs">(${n((p/r.items*100).toString())}%)</span></td> 

</tr>`)}),o+=`
</tbody>
</table>
</div>


<div class="text-red-600 text-start px-4 text-sm my-5">ระบบนี้ใช้ข้อมูลพัสดุจาก KBD ที่เข้าร่วมโครงการ <a class="text-red-600 underline cursor-pointer" id="joinKBD">สนใจเข้าร่วมได้ที่นี่ ฟรี!</a></div>

    `,s.innerHTML=o,(l=document.querySelector("#joinKBD"))==null||l.addEventListener("click",function(){var r;document.querySelector("#response").innerHTML=`
    
    <div class="text-start text-cyan-800 p-4 bg-white rounded">
    <p>KERRY BUDDY ลงทะเบียนเข้าร่วมโครงการ</p>
    <p class="mt-1 text-xs text-gray-800">ลงทะเบียนง่ายๆ โดยใช้เพียงรหัสสาขาของเคอรี่บัดดี้!
    <br><span class="text-red-500">ถือเป็นการยินยอมให้ระบบทำการดึงข้อมูจากสาขาของท่าน และ Track ข้อมูลสถานะของพัสดุทุกวัน</span></p>
    
    <div class="mt-3 text-sm text-teal-600">ลงทะเบียนเพียงครั้งเดียว ระบบจะอัพเดตพัสดุจากสาขาของท่านทุกวัน โดยอัตโนมัติ</div>
    <div class="my-3 relative h-10 w-96 min-w-[200px]">
    <input id="kbd"
    class="Kanit uppercase peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-orange-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
    placeholder=" "/>
    <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-teal-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-orange-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-orange-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
    รหัสสาขา KBXXXX</label>
    </div>
    <span id="error" class="text-red-800 mb-2 block"></span>
    <button id="submitKBD"
      class=" middle none center rounded-lg bg-green-500 py-3 px-6 text-xs KanitBold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
      ยินยอม</button>
    </div>
    `,(r=document.querySelector("#submitKBD"))==null||r.addEventListener("click",async function(){const d=document.querySelector("#kbd"),c=d==null?void 0:d.value.toUpperCase();if(!(w=>/^KB[a-zA-Z0-9]{3}$/.test(w))(c)){document.querySelector("#error").innerHTML="** รหัสไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง";return}d.disabled=!0,this.disabled=!0;const i=await g({action:"join",value:c});console.log(i),i.status?document.querySelector("#response").innerHTML=`<div class="text-green-500 mt-6">
            <span class="material-symbols-outlined text-red-500 text-6xl animate-bounce block my-5">favorite</span>
            ขอบคุณที่เข้าร่วมโครงการ การเข้าร่วมครั้งนี้ของท่านจะช่วยให้ระบบมีข้อมูลที่แม่นยำมากยิ่งขึ้น</div>`:(d.disabled=!1,this.disabled=!1,document.querySelector("#error").innerHTML="ระบบขัดข้อง กรุณาลองใหม่อีกครั้ง")})})}document.querySelector("#app").innerHTML=`
<div class="container mx-auto px-4 text-center">

<button id="setting" class="absolute top-2 right-2 middle none center rounded-full bg-deep-orange-500 pt-1 px-1 text-xs  text-white shadow-md shadow-deep-orange-500/20 transition-all hover:shadow-lg hover:shadow-deep-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"><span class="material-symbols-outlined hover:animate-spin">settings</span></button>

  <h1 class="text-2xl my-8">สถานการณ์คลังพัสดุเคอรี่</h1>
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
</div>`;window.onload=async()=>{const t=document.querySelector("#response");t.classList.add("loader");const e=await g({action:"official",value:null});C(e),t.classList.remove("loader")};var T;(T=document.querySelector("#SearchInput"))==null||T.addEventListener("keyup",async function(t){!this.value||t.key==="Backspace"||ve(this.value)});var E;(E=document.querySelector("#home"))==null||E.addEventListener("click",async function(){const t=document.querySelector("#SearchInput"),e=document.querySelector("#response");e.classList.add("loader");const s=t.value?"search":"official",o=await g({action:s,value:t.value});C(o),e.classList.remove("loader")});var q;(q=document.querySelector("#setting"))==null||q.addEventListener("click",async function(){const t=document.querySelector("#response");t.classList.add("loader");const e=await g({action:"setting"});we(e),t.classList.remove("loader")});var j;function ve(t){const e=document.querySelector("#response");e.classList.add("loader"),clearTimeout(j),j=setTimeout(async function(){const s=await g({action:"search",value:t});C(s),e.classList.remove("loader")},1e3)}
