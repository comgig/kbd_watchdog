(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const t of s.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&i(t)}).observe(document,{childList:!0,subtree:!0});function l(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=l(n);fetch(n.href,s)}})();async function p(e){let o={status:!1,data:[]};return await fetch("https://api.comgig.com/thailand",{method:"POST",body:JSON.stringify(e),headers:{Authorization:`Bearer ${sessionStorage.getItem("X-TOKEN")||"1234567890"}`,"Content-type":"application/json; charset=UTF-8"},credentials:"include"}).then(function(l){l.ok?o=l.json():o={status:!1,message:"server error"}}).catch(()=>{o={status:!1,message:"api error"}}),o}function r(e,o=0,l=","){const i=parseFloat(e).toFixed(o).split("."),n=l===","?i[0].replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"):i[0].replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+l);return String(n+(i[1]?"."+i[1]:""))}function u(e){var i;const o=document.querySelector("#response"),l=new Date;o.innerHTML=`
<div class="text-blue-800 my-3">สถานะศูนย์กระจายสินค้า ${e.store} จำนวน ${e.con_total} ชิ้น</div>

<div class="my-3 text-sm text-green-500">อัพเดตประจำวันที่ ${l.toLocaleString("en-GB",{timeZone:"UTC"}).split(", ")[0]}</div>

<div class="text-gray-500 text-xs">ข้อมูลพัสดุจากสาขา KBD เท่านั้นไม่ใช่จำนวนพัสดุทั้งหมดในคลัง ผลสรุปที่ได้อาจไม่ตรงตามสถานการณ์จริง <span class="text-red-600">โปรดใช้วิจารณญาณในการรับข้อมูล</span></div>



<div class="flex flex-wrap">

<div class="p-2 w-full lg:w-1/2 grow ">

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
<table class="w-full text-sm text-left text-gray-500">
<thead class="text-gray-700 bg-blue-50">
<tr class="bg-white">
<td class="p-1 text-center" colspan="4">

<div class="flex-start flex h-4 w-full overflow-hidden rounded bg-blue-gray-50 font-sans text-xs">

${e.pending_ND>0?`
<div
class="flex h-full items-baseline justify-center overflow-hidden break-all bg-green-800 text-white px-3"
style="width: ${r((e.pending_ND/(e.con_pending||1)*100).toString(),0)}%">${r((e.pending_ND/(e.con_pending||1)*100).toString(),0)}%
</div>
`:""}
${e.pending_2D>0?`
<div
class="flex h-full items-baseline justify-center overflow-hidden break-all bg-green-500 text-white px-3"
style="width: ${r((e.pending_2D/(e.con_pending||1)*100).toString(),0)}%">${r((e.pending_2D/(e.con_pending||1)*100).toString(),0)}%
</div>
`:""}
${e.pending_3D>0?`
<div
class="flex h-full items-baseline justify-center overflow-hidden break-all bg-orange-500 text-white px-3"
style="width: ${r((e.pending_3D/(e.con_pending||1)*100).toString(),0)}%">${r((e.pending_3D/(e.con_pending||1)*100).toString(),0)}%
</div>
`:""}
${e.pending_4D>0?`
<div
class="flex h-full items-baseline justify-center overflow-hidden break-all bg-orange-800 text-white px-3"
style="width: ${r((e.pending_4D/(e.con_pending||1)*100).toString(),0)}%">${r((e.pending_4D/(e.con_pending||1)*100).toString(),0)}%
</div>
`:""}
${e.pending_5D>0?`
<div
class="flex h-full items-baseline justify-center overflow-hidden break-all bg-red-500 text-white px-3"
style="width: ${r((e.pending_5D/(e.con_pending||1)*100).toString(),0)}%">${r((e.pending_5D/(e.con_pending||1)*100).toString(),0)}%
</div>
`:""}
${e.pending_OD>0?`
<div
class="flex h-full items-baseline justify-center overflow-hidden break-all bg-red-800 text-white px-3"
style="width: ${r((e.pending_OD/(e.con_pending||1)*100).toString(),0)}%">${r((e.pending_OD/(e.con_pending||1)*100).toString(),0)}%
</div>
`:""}

</div>
</td>     
</tr>
<tr>
    <td scope="col" class="px-6 py-3">
    พัสดุคงคลัง รวม ${e.con_pending} ชิ้น
    </td>
    <td scope="col" colspan="2" class="KanitBold px-6 py-3 text-center">
    กำลังจัดส่ง
    </td>

</tr>
</thead>
<tbody>
<tr class="bg-white border-b ${e.pending_ND>0?"text-green-800":""}">
    <td scope="row" class="px-6 py-4 text-gray-900 whitespace-nowrap">
    1 วัน (พัสดุเข้าใหม่)
    </td>
    <td class="px-6 py-4 text-center">
    ${e.pending_ND}
    </td>
    <td class="px-6 py-4 text-center">
    ${r((e.pending_ND/(e.con_pending||1)*100).toString(),0)}%
    </td>       
</tr>
<tr class="border-b bg-gray-50 ${e.pending_2D>0?"text-green-800":""}">
    <td scope="row" class="px-6 py-4 text-gray-900 whitespace-nowrap">
    2 วัน
    </td>
    <td class="px-6 py-4 text-center">
    ${e.pending_2D}
    </td>
    <td class="px-6 py-4 text-center">
    ${r((e.pending_2D/(e.con_pending||1)*100).toString(),0)}%
    </td> 
</tr>
<tr class="bg-white border-b ${e.pending_3D>0?"text-yellow-800":""}">
    <td scope="row" class="px-6 py-4 text-gray-900 whitespace-nowrap">
    3 วัน
    </td>
    <td class="px-6 py-4 text-center">
    ${e.pending_3D}
    </td>
    <td class="px-6 py-4 text-center">
    ${r((e.pending_3D/(e.con_pending||1)*100).toString(),0)}%
    </td>   
</tr>
<tr class="border-b bg-gray-50 ${e.pending_4D>0?"text-yellow-800":""}">
    <td scope="row" class="px-6 py-4 text-gray-900 whitespace-nowrap">
    4 วัน
    </td>
    <td class="px-6 py-4 text-center">
    ${e.pending_4D}
    </td>
    <td class="px-6 py-4 text-center">
    ${r((e.pending_4D/(e.con_pending||1)*100).toString(),0)}%
    </td> 

</tr>
<tr class="bg-white border-b ${e.pending_5D>0?"text-red-800":""}">
    <td scope="row" class="px-6 py-4 text-gray-900 whitespace-nowrap">
    5 วัน
    </td>
    <td class="px-6 py-4 text-center">
    ${e.pending_5D}
    </td>
    <td class="px-6 py-4 text-center">
    ${r((e.pending_5D/(e.con_pending||1)*100).toString(),0)}%
    </td> 
</tr>
<tr class="border-b bg-gray-50 ${e.pending_OD>0?"text-red-800":""}">
    <td scope="row" class="px-6 py-4 text-gray-900 whitespace-nowrap">
    มากกว่า 5 วัน
    </td>
    <td class="px-6 py-4 text-center">
    ${e.pending_OD}
    </td>
    <td class="px-6 py-4 text-center">
    ${r((e.pending_OD/(e.con_pending||1)*100).toString(),0)}%
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

<div class="flex-start flex h-4 w-full overflow-hidden rounded bg-blue-gray-50 ">
${e.ND>0?`
<div
class="flex h-full items-baseline justify-center overflow-hidden break-all bg-green-800 text-white px-3"
style="width: ${r((e.ND/(e.con_success||1)*100).toString(),0)}%">ND
</div>
`:""}
${e["2D"]>0?`
<div
class="flex h-full items-baseline justify-center overflow-hidden break-all bg-green-500 text-white px-3"
style="width: ${r((e["2D"]/(e.con_success||1)*100).toString(),0)}%">2D
</div>
`:""}
${e["3D"]>0?`
<div
class="flex h-full items-baseline justify-center overflow-hidden break-all bg-orange-500 text-white px-3"
style="width: ${r((e["3D"]/(e.con_success||1)*100).toString(),0)}%">3D
</div>
`:""}
${e["4D"]>0?`
<div
class="flex h-full items-baseline justify-center overflow-hidden break-all bg-orange-800 text-white px-3"
style="width: ${r((e["4D"]/(e.con_success||1)*100).toString(),0)}%">4D
</div>
`:""}
${e["5D"]>0?`
<div
class="flex h-full items-baseline justify-center overflow-hidden break-all bg-red-500 text-white px-3"
style="width: ${r((e["5D"]/(e.con_success||1)*100).toString(),0)}%">5D
</div>
`:""}
${e.OD>0?`
<div
class="flex h-full items-baseline justify-center overflow-hidden break-all bg-red-800 text-white px-3"
style="width: ${r((e.OD/(e.con_success||1)*100).toString(),0)}%">6D
</div>
`:""}

</div>
</td>     
</tr>

<tr>
    <td scope="col" class="px-6 py-3" colspan="2">
    พัสดุนำส่งแล้ว รวม ${e.con_success} ชิ้น
    </td>

    <td scope="col" class="px-6 py-3 text-center">
    ส่งแล้ววันนี้
    </td>
    
    <td scope="col" class="px-6 py-3 text-center">
    ทั้งหมด
    </td>

</tr>
</thead>
<tbody>
<tr class="bg-white border-b ${e.ND>0?"text-green-800":""}">
    <td scope="row" class="px-6 py-4 text-gray-900 whitespace-nowrap flex">        
    ND</td>
    <td class="px-6 py-4 text-center">
    ${r((e.ND/(e.con_success||1)*100).toString(),0)}%
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
    <td class="px-6 py-4 text-center">
    ${r((e["2D"]/(e.con_success||1)*100).toString(),0)}%
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
    <td class="px-6 py-4 text-center">
    ${r((e["3D"]/(e.con_success||1)*100).toString(),0)}%
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
    <td class="px-6 py-4 text-center">
    ${r((e["4D"]/(e.con_success||1)*100).toString(),0)}%
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
    <td class="px-6 py-4 text-center">
    ${r((e["5D"]/(e.con_success||1)*100).toString(),0)}%
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
    6D</td>
    <td class="px-6 py-4 text-center">
    ${r((e.OD/(e.con_success||1)*100).toString(),0)}%
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
`,(i=document.querySelector("#joinKBD"))==null||i.addEventListener("click",function(){var n;document.querySelector("#response").innerHTML=`

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

`,(n=document.querySelector("button"))==null||n.addEventListener("click",async function(){const s=document.querySelector("#kbd"),t=s==null?void 0:s.value.toUpperCase();if(t.length!==5){document.querySelector("#error").innerHTML="** รหัสไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง";return}s.disabled=!0,this.disabled=!0;const c=await p({action:"join",value:t});console.log(c),c.status?document.querySelector("#response").innerHTML=`<div class="text-green-500 mt-6">
        <span class="material-symbols-outlined text-red-500 text-6xl animate-bounce block my-5">favorite</span>
        ขอบคุณที่เข้าร่วมโครงการ การเข้าร่วมครั้งนี้ของท่านจะช่วยให้ระบบมีข้อมูลที่แม่นยำมากยิ่งขึ้น</div>`:(s.disabled=!1,this.disabled=!1,document.querySelector("#error").innerHTML="ระบบขัดข้อง กรุณาลองใหม่อีกครั้ง")})})}function x(e){var s;const o=document.querySelector("#response");if(e.data.length===0){o.innerHTML='<div class="text-pink-600 h-96 flex  items-center justify-center">ไม่พบข้อมูลที่ค้นหา</div>';return}let l="",i="",n='<span class="material-symbols-outlined">location_on</span>';(s=e.data)==null||s.forEach(t=>{var a;let c="";if(t.esaSurcharged=="1"&&(c=t.province=="ภูเก็ต"?'<span class="text-blue-600">พื้นที่ท่องเที่ยวพิเศษ</span>':"พื้นที่ห่างไกล"),t.masterPostalCodeCapacities&&(c="พื้นที่ล่าช้า (Official)"),t.warningMessage&&(c=t.warningMessage=="งดรับพัสดุไปยังปลายทางดังกล่าวชั่วคราว!!"?'<span class="text-red-600 KanitBold">พื้นที่ปิดรับพัสดุ!</span>':t.warningMessage),t.postalCode!=l){l=t.postalCode;let d=(a=e.report)==null?void 0:a.find(b=>b.postcode==l);if(d.store=`${t.linehualRoute} ${t.postalCode}`,i+=`<hr class="my-2 border-green-700" data-z${l}="${window.btoa(JSON.stringify(d))}">`,!(d!=null&&d.con_total))return;(d.pending_3D+d.pending_4D+d.pending_5D+d.pending_OD)/d.con_pending*100>30?n='<span class="material-symbols-outlined text-amber-900 animate-bounce">location_on</span>':n='<span class="material-symbols-outlined text-green-800">location_on</span>',t.inactive&&(n='<span class="material-symbols-outlined text-deep-orange-700 animate-pulse">wrong_location</span>')}i+=`<div class="rounded-md cursor-pointer hover:outline hover:outline-2 hover:outline-orange-900 hover:animate-pulse" data-target="${t.postalCode}">
              <div class="flex justify-between items-center">
                  <div class="mt-1 text-sm text-gray-900 w-7">${n}</div>
                  <div class="mt-1 text-sm text-gray-900 py-1 w-48 md:w-40 bg-gray-50 bg-opacity-80">${t.district}</div>
                  <div class="mt-1 text-sm text-gray-900 py-1 w-48 md:w-48 bg-gray-50 bg-opacity-80">${t.amphur}</div>
                  <div class="mt-1 text-sm text-gray-900 py-1 w-32 md:w-40 bg-gray-50 bg-opacity-80 hidden md:inline-block">${t.province}</div>
                  <div class="mt-1 text-sm text-gray-900 py-1 w-32 md:w-24 bg-gray-50 bg-opacity-80 hidden md:inline-block">${t.postalCode}</div>
                  <div class="grow mt-1 text-xs text-orange-700 py-1 bg-gray-50 bg-opacity-80 hidden md:inline-block warningMessage">${c||"&nbsp;"}</div>
                  <div class="mt-1 text-xs text-gray-500 py-1 w-32 bg-gray-50 bg-opacity-80 hidden md:inline-block">${t.linehualRoute}</div>
                  <div class="mt-1 text-xs text-gray-500 py-1 w-16 bg-gray-50 bg-opacity-80 hidden md:inline-block">${t.routeCode}</div>
                </div>
                ${(t.remark||0).length>=2?`
                <div class="justify-between items-center hidden md:flex">
                <div class="mt-1 text-sm text-gray-900 w-7"></div>
                <div class="text-xs text-teal-600 py-1 grow bg-gray-50 bg-opacity-80 pl-2 text-left">!! ${t.district} ${t.remark}</div>
                </div>
                `:""}
            </div>`}),o.innerHTML=i,document.querySelectorAll("[data-target]").forEach(t=>{t.addEventListener("click",function(){const c=this.dataset.target,a=document.querySelector(`[data-z${c}]`).dataset[`z${c}`]??"",d=JSON.parse(window.atob(a));u(d)})})}document.querySelector("#app").innerHTML=`
<div class="container mx-auto px-4 text-center">
  <h1 class="text-2xl my-5">สถานการณ์คลังพัสดุเคอรี่</h1>
  <p class="text-sm my-5 text-cyan-500">Last updated: ${new Date().toJSON().slice(0,10).replace(/-/g,"-")}</p>

  <div class="mx-auto w-100 bg-gray-100 bg-opacity-80 p-1 rounded-[7px] shadow">
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
</div>`;window.onload=async()=>{const e=document.querySelector("#response");e.classList.add("loader");const o=await p({action:"official",value:null});x(o),e.classList.remove("loader"),console.log("page is fully loaded")};var g;(g=document.querySelector("#SearchInput"))==null||g.addEventListener("keyup",async function(){if(!this.value)return;const e=document.querySelector("#response");e.classList.add("loader");const o=await p({action:"search",value:this.value});x(o),setTimeout(()=>{e.classList.remove("loader")},500)});
