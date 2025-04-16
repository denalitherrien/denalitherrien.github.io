import{p as v}from"./BhnvAC5C.js";import{g as b,r as x,c as l,o as a,a as e,t as r,F as c,j as p,_ as y,k as h,l as u,v as m,m as i,b as _}from"./CT6wvtsx.js";const w={class:"font-['Segoe_UI'] max-w-4xl mx-auto px-5 py-6 leading-6 overflow-x-hidden flex-grow-1"},$={class:"my-10 relative"},j={class:"flex items-center justify-start flex-nowrap font-['JetBrains_Mono']"},k={class:"animate-in text-[60px] font-bold text-blue-500 leading-none m-0 p-0"},M={class:"animate-in rounded-lg shadow-md place-self-end"},S={class:"mt-5"},V={class:"py-4"},F={class:"my-8 relative"},A={class:"flex items-center justify-start flex-nowrap font-['JetBrains_Mono']"},B={class:"animate-in text-[60px] font-bold text-blue-500 leading-none m-0 p-0"},U=b({__name:"AboutMe",setup(f){const n=x(v);return setTimeout(()=>{document.querySelectorAll(".animate-in").forEach((s,t)=>{setTimeout(()=>{s.classList.add("opacity-100","translate-x-0")},t*150)})},100),(d,s)=>(a(),l("div",w,[e("div",$,[e("div",j,[s[0]||(s[0]=e("span",{class:"animate-in text-[120px] font-bold text-slate-800 leading-[0.8] m-0 p-0"},"<",-1)),e("span",k,r(n.value.name),1),s[1]||(s[1]=e("span",{class:"animate-in text-[120px] font-bold text-slate-800 leading-[0.8] m-0 p-0"},">",-1))])]),e("div",M,[s[2]||(s[2]=e("h2",{class:"text-xl font-semibold text-primary border-b-2 border-blue-500 pb-2.5"},"About Me",-1)),e("div",S,[(a(!0),l(c,null,p(n.value.about,t=>(a(),l("div",{key:t.text,class:"leading-7"},[e("p",V,r(t.text),1)]))),128))])]),e("div",F,[e("div",A,[s[3]||(s[3]=e("span",{class:"animate-in text-[120px] font-bold text-slate-800 leading-[0.8] m-0 p-0"},"</",-1)),e("span",B,r(n.value.name),1),s[4]||(s[4]=e("span",{class:"animate-in text-[120px] font-bold text-slate-800 leading-[0.8] m-0 p-0"},">",-1))])])]))}}),C=Object.assign(y(U,[["__scopeId","data-v-e36f3285"]]),{__name:"AboutMe"}),T={id:"contact",class:"py-16"},D={class:"container mx-auto px-6"},E={class:"max-w-2xl mx-auto"},I={class:"grid md:grid-cols-2 gap-6"},N=b({__name:"Contact",setup(f){const n=x({name:"",email:"",subject:"",message:""});function d(){alert("Form submitted!"),console.log(n.value),n.value={name:"",email:"",subject:"",message:""}}return(s,t)=>(a(),l("section",T,[e("div",D,[t[9]||(t[9]=e("h2",{class:"text-3xl font-bold text-center mb-12"},"Get In Touch",-1)),e("div",E,[e("form",{onSubmit:h(d,["prevent"]),class:"space-y-6"},[e("div",I,[e("div",null,[t[4]||(t[4]=e("label",{for:"name",class:"block mb-2"},"Name",-1)),u(e("input",{type:"text",id:"name","onUpdate:modelValue":t[0]||(t[0]=o=>i(n).name=o),class:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"},null,512),[[m,i(n).name]])]),e("div",null,[t[5]||(t[5]=e("label",{for:"email",class:"block mb-2"},"Email",-1)),u(e("input",{type:"email",id:"email","onUpdate:modelValue":t[1]||(t[1]=o=>i(n).email=o),class:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"},null,512),[[m,i(n).email]])])]),e("div",null,[t[6]||(t[6]=e("label",{for:"subject",class:"block mb-2"},"Subject",-1)),u(e("input",{type:"text",id:"subject","onUpdate:modelValue":t[2]||(t[2]=o=>i(n).subject=o),class:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"},null,512),[[m,i(n).subject]])]),e("div",null,[t[7]||(t[7]=e("label",{for:"message",class:"block mb-2"},"Message",-1)),u(e("textarea",{id:"message","onUpdate:modelValue":t[3]||(t[3]=o=>i(n).message=o),rows:"5",class:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"},null,512),[[m,i(n).message]])]),t[8]||(t[8]=e("div",null,[e("button",{type:"submit",class:"w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"}," Send Message ")],-1))],32)])])]))}}),P=Object.assign(N,{__name:"Contact"}),J={class:"bg-background text-foreground flex flex-wrap justify-center"},L={class:"py-12"},O={class:"container mx-auto px-6"},q={class:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"},G={class:"text-xl font-semibold mb-2 text-primary"},z={class:"text-muted-foreground"},H={id:"projects",class:"py-16"},K={class:"container mx-auto px-6"},Q={class:"grid md:grid-cols-2 lg:grid-cols-3 gap-8"},R={class:"h-48 overflow-hidden"},W=["src"],X={class:"p-6"},Y={class:"text-xl font-bold mb-2 text-primary"},Z={class:"mb-4 text-muted-foreground"},ee={class:"flex flex-wrap gap-2 mb-4"},te=["href"],ne=b({__name:"index",setup(f){const n=x(v);return(d,s)=>{const t=C;return a(),l("div",J,[_(t),e("section",L,[e("div",O,[s[1]||(s[1]=e("h2",{class:"text-3xl font-bold text-center mb-12 text-primary"},"My Skills",-1)),e("div",q,[(a(!0),l(c,null,p(n.value.skills,o=>(a(),l("div",{key:o.name,class:"p-6 rounded-lg bg-item-1 shadow-md hover:shadow-lg transition duration-300 text-center border border-border"},[s[0]||(s[0]=e("div",{class:"mb-3 text-accent"},null,-1)),e("h3",G,r(o.name),1),e("p",z,r(o.description),1)]))),128))])])]),e("section",H,[e("div",K,[s[2]||(s[2]=e("h2",{class:"text-3xl font-bold text-center mb-12 text-primary"},"Featured Projects",-1)),e("div",Q,[(a(!0),l(c,null,p(n.value.projects,o=>(a(),l("div",{key:o.title,class:"rounded-lg overflow-hidden bg-item-2 shadow-md hover:shadow-xl transition duration-300 border border-border"},[e("div",R,[e("img",{src:o.image||"/api/placeholder/400/320",alt:"Project thumbnail",class:"w-full h-full object-cover"},null,8,W)]),e("div",X,[e("h3",Y,r(o.title),1),e("p",Z,r(o.description),1),e("div",ee,[(a(!0),l(c,null,p(o.tags,g=>(a(),l("span",{key:g,class:"px-3 py-1 text-sm font-medium rounded-full bg-accent text-accent-foreground"},r(g),1))),128))]),e("a",{href:o.link,class:"font-medium inline-flex items-center text-primary hover:text-primary/80"}," View Project ",8,te)])]))),128))])])]),_(P)])}}});export{ne as default};
