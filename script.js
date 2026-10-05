const skills=[
["Développement web","HTML, CSS, JavaScript, PHP","Sites dynamiques"],
["Développement web","Vue.js, React.js","Frameworks front-end"],
["Développement web","Laravel, Symfony","Frameworks PHP"],
["Développement web","Bootstrap","Interfaces responsives"],
["Mobile","Android Studio / Java","Applications Android"],
["Mobile","Flutter","Applications multiplateformes"],
["Design","Figma, Adobe XD","Maquettes interactives"],
["Données","MySQL, SQLite, PostgreSQL","Bases de données"],
["Outils","Git, GitHub","Versioning"],
["Sécurité","Kali Linux","Tests d'intrusion, attaques par force brute"],
["Outils","Microsoft Office","Word, Excel, PowerPoint, Access"],
["Outils","Maintenance informatique","Dépannage et entretien"]];
const jobs=[
["Enseignant en informatique","CCPET « Père Gilbert Dagnon », Pahou","Sept. 2025 – présent"],
["Enseignant en informatique","CPET « Les Palmiers », Abomey-Calavi","Sept. 2024 – présent"],
["Enseignant en informatique","Collège Catholique Saint Jean Baptiste, Cotonou","Sept. 2023 – présent"],
["Enseignant en informatique","École des Métiers Techniques Professionnels, Abomey-Calavi","Sept. 2024 – juin 2025"],
["Enseignant en informatique","CEG 2 de Comè","Mars 2023 – mars 2024"],
["Stagiaire en développement web et mobile","SGTIC Sarl, Cotonou","Mars – avril 2022"],
["Stagiaire en développement web et mobile","RAB TECH, Cotonou","Juillet – août 2021"],
["Stagiaire en informatique générale et bureautique","MESTFP, Cotonou","Août – sept. 2020"]];
const studies=[
["Licence en génie informatique","ESTG, Cotonou","Juin 2025"],
["Diplôme de technicien (DT)","Lycée Technique de Bopa","2019 – 2022"],
["BEPC","CEG Sainte Rita, Cotonou","Mai 2019"],
["CEP","EPP Jéricho, Cotonou","Juin 2015"]];
const li=a=>a.map(([t,w,d])=>`<li><h3>${t}</h3><span>${w}</span><span>${d}</span></li>`).join("");
document.getElementById("tl").innerHTML=li(jobs);
document.getElementById("fm").innerHTML=li(studies);

const cats=["Tout",...new Set(skills.map(s=>s[0]))];
const tabs=document.getElementById("tabs"),box=document.getElementById("skills");
function show(c){
  tabs.innerHTML=cats.map(k=>`<button type="button" aria-pressed="${k===c}" data-c="${k}">${k}</button>`).join("");
  box.innerHTML=skills.filter(s=>c==="Tout"||s[0]===c).map(s=>`<div class="skill"><strong>${s[1]}</strong><small>${s[2]}</small></div>`).join("");
}
tabs.addEventListener("click",e=>{const b=e.target.closest("button");if(b)show(b.dataset.c)});
show("Tout");

const root=document.documentElement,tb=document.getElementById("theme");
try{const t=localStorage.getItem("theme");if(t)root.dataset.theme=t}catch(e){}
tb.addEventListener("click",()=>{
  const dark=root.dataset.theme?root.dataset.theme==="dark":matchMedia("(prefers-color-scheme:dark)").matches;
  root.dataset.theme=dark?"light":"dark";
  try{localStorage.setItem("theme",root.dataset.theme)}catch(e){}
});

const code=`<h1>Bonjour,</h1>
<p>Je suis Brice.</p>
<script>
  const metier = [
    "web", "mobile",
    "enseignement"
  ];
  construire(metier);
<\/script>`;
const bd=document.getElementById("board");
if(matchMedia("(prefers-reduced-motion:reduce)").matches){bd.textContent=code}
else{let i=0;(function t(){bd.textContent=code.slice(0,i);bd.insertAdjacentHTML("beforeend","<i></i>");if(i++<code.length)setTimeout(t,45)})()}
document.getElementById("y").textContent=new Date().getFullYear();
