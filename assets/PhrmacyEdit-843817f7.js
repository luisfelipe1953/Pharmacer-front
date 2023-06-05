import{g as h,c as o,a as e,q as k,s as _,b as t,t as n,d as i,w as u,v as c,e as f,x as v,o as l,y as w}from"./index-a25118bd.js";import{u as V}from"./index-8ef729d5.js";const N={class:"mt-12"},P={class:"space-y-6"},U=e("h1",null,"Actualizar Farmacia",-1),B={key:0},C={class:"text-base text-red-400"},M={class:"mb-6"},S=e("label",{for:"name",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Name",-1),q={key:0},z={class:"text-base text-red-400"},D={class:"mb-6"},E=e("label",{for:"adress",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"address",-1),L={key:0},R={class:"text-base text-red-400"},T={class:"mb-6"},$=e("label",{for:"latitude",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"latitud",-1),A={key:0},F={class:"text-base text-red-400"},I={class:"mb-6"},j=e("label",{for:"longitude",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"longitude",-1),G={key:0},H={class:"text-base text-red-400"},J=e("button",{type:"submit",class:"px-4 py-2 mr-4 bg-green-600 hover:bg-green-800 rounded text-white"}," actualizar ",-1),Q={__name:"PhrmacyEdit",props:{id:{required:!0,type:String}},setup(b){const m=b,{getPharmacy:g,pharmacy:d,updatePharmacy:p,errors:r}=V();return h(()=>g(m.id)),(y,a)=>{const x=v("RouterLink");return l(),o("div",N,[e("form",{class:"max-w-md mx-auto p-4 bg-white shadow-md rounded-md container-md",onSubmit:a[4]||(a[4]=f(s=>t(p)(y.$route.params.id),["prevent"]))},[e("div",P,[U,k(x,{to:{name:"PharmacyIndex"},class:"sm:ml-80 ml-40 px-4 py-2 mr-4 bg-green-600 hover:bg-green-800 rounded text-white"},{default:_(()=>[w(" volver ")]),_:1}),t(r)?(l(),o("div",B,[e("span",C,n(t(r).data),1)])):i("",!0),e("div",M,[S,u(e("input",{type:"text",id:"name","onUpdate:modelValue":a[0]||(a[0]=s=>t(d).name=s),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"name"},null,512),[[c,t(d).name]]),t(r).name?(l(),o("div",q,[e("span",z,n(t(r).name[0]),1)])):i("",!0)]),e("div",D,[E,u(e("input",{type:"text",id:"address","onUpdate:modelValue":a[1]||(a[1]=s=>t(d).address=s),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"name"},null,512),[[c,t(d).address]]),t(r).address?(l(),o("div",L,[e("span",R,n(t(r).address[0]),1)])):i("",!0)]),e("div",T,[$,u(e("input",{type:"num",id:"latitude","onUpdate:modelValue":a[2]||(a[2]=s=>t(d).latitude=s),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"note"},null,512),[[c,t(d).latitude]]),t(r).latitude?(l(),o("div",A,[e("span",F,n(t(r).latitude[0]),1)])):i("",!0)]),e("div",I,[j,u(e("input",{type:"num",id:"longitude","onUpdate:modelValue":a[3]||(a[3]=s=>t(d).longitude=s),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"note"},null,512),[[c,t(d).longitude]]),t(r).longitude?(l(),o("div",G,[e("span",H,n(t(r).longitude[0]),1)])):i("",!0)]),J])],32)])}}};export{Q as default};
