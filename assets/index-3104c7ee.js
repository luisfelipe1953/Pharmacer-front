import{m as s,j as c,z as h}from"./index-43640a76.js";s.defaults.baseURL="http://127.0.0.1:8000/api/";function l(){const t=c([]),o=c([]),r=c({}),n=h(),p=async()=>{const e=await s.get("pharmacies");o.value=e.data.pharmacies};return{pharmacy:t,pharmacies:o,getPharmacy:async e=>{const a=await s.get("pharmacies/"+e);t.value=a.data.pharmacy},getPharmacies:p,storePharmacy:async e=>{try{const a=await s.post("pharmacies",e);await n.push({name:"PharmacyIndex"})}catch(a){console.log(a.response),a.response.status===422&&(r.value=a.response)}},updatePharmacy:async e=>{try{await s.put("pharmacies/"+e,t.value),await n.push({name:"PharmacyIndex"})}catch(a){console.log(a.response),a.response.status===422&&(r.value=a.response.data)}},destroyPharmacy:async e=>{window.confirm("Are you sure you want to destroy")&&(await s.delete("pharmacies/"+e),await p())},getNeartPharmacies:async e=>{try{const a=await s.post("pharmacies/nearby",e);o.value=a.data}catch(a){a.response.status===422&&(r.value=a.response)}},errors:r}}export{l as u};
