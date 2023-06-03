import{r as m,s as c,o as n,c as u,a as e,q as g,x as p,b as s,t as y,d as k,w as d,v as o,e as x,y as f}from"./index-99fb5924.js";import{u as h}from"./index-f765efc3.js";const _={class:"mt-12"},w={class:"space-y-6"},v=e("h1",null,"Nueva Farmacia",-1),V={key:0},N={class:"text-base text-red-400"},C={class:"mb-6"},P=e("label",{for:"name",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Name",-1),U={class:"mb-6"},B=e("label",{for:"adress",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"address",-1),D={class:"mb-6"},L=e("label",{for:"latitude",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"latitud",-1),M={class:"mb-6"},R=e("label",{for:"longitude",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"longitude",-1),S=e("button",{type:"submit",class:"px-4 py-2 mr-4 bg-green-600 hover:bg-green-800 rounded text-white"}," guardar ",-1),I={__name:"PharmacyCreate",setup(T){const{storePharmacy:i,errors:l}=h(),r=m({name:"",address:"",latitude:"",longitude:""});return(q,t)=>{const b=c("RouterLink");return n(),u("div",_,[e("form",{class:"max-w-md sm:mx-auto p-4 bg-white shadow-md rounded-md container-md",onSubmit:t[4]||(t[4]=x(a=>s(i)(r),["prevent"]))},[e("div",w,[v,g(b,{to:{name:"PharmacyIndex"},class:"sm:ml-80 ml-40 px-4 py-2 mr-4 bg-green-600 hover:bg-green-800 rounded text-white"},{default:p(()=>[f(" volver ")]),_:1}),s(l)?(n(),u("div",V,[e("span",N,y(s(l).data),1)])):k("",!0),e("div",C,[P,d(e("input",{type:"text",id:"name","onUpdate:modelValue":t[0]||(t[0]=a=>r.name=a),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"name"},null,512),[[o,r.name]])]),e("div",U,[B,d(e("input",{type:"text",id:"address","onUpdate:modelValue":t[1]||(t[1]=a=>r.address=a),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"address"},null,512),[[o,r.address]])]),e("div",D,[L,d(e("input",{type:"num",id:"latitude","onUpdate:modelValue":t[2]||(t[2]=a=>r.latitude=a),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"latitud"},null,512),[[o,r.latitude]])]),e("div",M,[R,d(e("input",{type:"num",id:"longitude","onUpdate:modelValue":t[3]||(t[3]=a=>r.longitude=a),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"longitude"},null,512),[[o,r.longitude]])]),S])],32)])}}};export{I as default};