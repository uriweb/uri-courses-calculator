!function(){"use strict";function e(e){const t=e.data.map((({Course:e})=>e)),n=e.data,o=["courseNumber","courseNumber2","courseNumber3","courseNumber4"];let u="";t.map(((e,t)=>{u+=`<option value="${e}" id="${t}">${e}</option>`}));for(let e=0;e<o.length;e++)document.getElementById(o[e]).innerHTML="<option disabled selected value>--</option>"+u;document.getElementById("addCourse").addEventListener("click",(function(){document.getElementById("courseoption2").style.display="block"})),document.getElementById("calc").addEventListener("click",(function(){"disabled"==document.getElementById("resi").value?alert("Please select your residency status."):function(){const e=[courseNumber.value,courseNumber2.value,courseNumber3.value,courseNumber4.value],t=[];console.log("Drop Down Values: "+e);const o=e.filter(u);function u(e){return e.length>0}console.log("selectedCourses: "+o);for(const o of e){const e=n.filter((function(e){return e.Course===o}));t.push(e)}console.log("CourseDataSet: "+t);let l=0,c=0,r=0,s=0,d=0,i=0,a=0,m=0,g=0;document.getElementById("firstclass").checked&&(i=30,a=20,m=50);document.getElementById("matriculating").checked&&(g=115);document.querySelector(".yourCourses").textContent="Estimated Costs for: "+o.join(" & ");for(let e=0;e<t.length;e++){console.log(`Sub-array ${e}: ${t[e]}`);for(let n=0;n<t[e].length;n++)l+=Number(t[e][n]["Technology Fee"]),r+=Number(t[e][n]["Instate Tuition"]),s+=Number(t[e][n]["Reg. Tuition"]),d+=Number(t[e][n]["OOS Tuition"]),c+=Number(t[e][n]["Course Fee"]);console.log("Refined Array:"+t),console.log("Reg Tuition:"+s),console.log("Out of State:"+d),console.log("Instate:"+r)}document.getElementById("techFee").textContent="Technology Fee: $"+l+".00","instate"==document.getElementById("resi").value&&(document.getElementById("instateTuition").textContent="In-State Tuition: $"+r.toLocaleString()+".00");"regional"==document.getElementById("resi").value&&(document.getElementById("regionalTuition").textContent="Regional Tuition: $"+s.toLocaleString()+".00");"out-of-state"==document.getElementById("resi").value&&(document.getElementById("out-of-state").textContent="Out-of-State Tuition: $"+d.toLocaleString()+".00");document.getElementById("registration-fee").textContent="Registration Fee: $"+i+".00",document.getElementById("transcript-fee").textContent="Transcript Fee: $"+m+".00",document.getElementById("student-act-fee").textContent="Student Activity Fee: $"+a+".00",document.getElementById("document-fee").textContent="Document Fee: $"+g+".00",document.getElementById("course-fee").textContent="Course Fee: $"+c+".00";const y=[l,i,a,m,g,c];"instate"==document.getElementById("resi").value&&y.push(r);"regional"==document.getElementById("resi").value&&y.push(s);"out-of-state"==document.getElementById("resi").value&&y.push(d);function f(e,t){return e+t}console.log("Total Array:"+y),document.getElementById("total").style.display="block",document.getElementById("total").textContent="Estimated Total: $"+y.reduce(f).toLocaleString()+".00"}()}))}window.addEventListener("load",(function(){!function(){function t(e,t){Papa.parse(e,{download:!0,header:!0,dynamicTyping:!0,complete(e){t(e)}})}t(spreadsheet.text,e)}()}))}();