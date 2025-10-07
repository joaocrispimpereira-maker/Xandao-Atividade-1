//acessar o corpo da pagina
let body = document.querySelector('body');

//container da pag
let div_container = document.createElement('div');
div_container.className = "container";

//cabecalho da pagina
let header_page = document.createElement('header');
header_page.className = "header-page";

//foto menu
let img_menu = document.createElement('img');
img_menu.className = "img_header";
img_menu.src = './img/capa (1).png';
img_menu.alt = 'foto_menu'

//menu da pagina
let nav_page = document.createElement('nav');
nav_page.className = "nav-page";

let ul_menu = document.createElement('ul');
ul_menu.className = "lista";

let li1 = document.createElement('li');
li1.className = "li1";
let a_1 = document.createElement('a');
a_1.innerText = "HOME | ";
a_1.href = "./main.html";

let li2 = document.createElement('li');
li2.className = "li2";
let a_2 = document.createElement('a');
a_2.innerText = "BIOGRAFIA | ";
a_2.href = "./biografia.html";

let li3 = document.createElement('li');
li3.className = "li3";
let a_3 = document.createElement('a');
a_3.innerText = "CAMPANHAS PUBLICITÁRIAS | ";
a_3.href = "./campanha.html";

let li4 = document.createElement('li');
li4.className = "li4";
let a_4 = document.createElement('a');
a_4.innerText = "CONTATO";
a_4.href = "./contato.html";

//sessao da pagina
let section_page = document.createElement('section');
section_page.className = "section-page";

//titulo
let tit1 = document.createElement("h1");
tit1.className = "tit1";
tit1.innerText = "Campanhas Publicitárias";

//img e paragrafos
let parag1 = document.createElement("p");
parag1.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit maxime iste dolore reiciendis, repudiandae exercitationem quo debitis libero molestias, dolores eos aperiam suscipit esse laudantium vel cumque tenetur minima.Voluptate";

let img_pag = document.createElement('img');
img_pag.className = "img_pag";
img_pag.src = './img/foto1.png';
img_pag.alt = 'foto_pag1'

let parag2 = document.createElement("p");
parag2.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit maxime iste dolore reiciendis, repudiandae exercitationem quo debitis libero molestias, dolores eos aperiam suscipit esse laudantium vel cumque tenetur minima.Voluptate";

let img_pag2 = document.createElement('img');
img_pag2.className = "img_pag";
img_pag2.src = './img/foto2.png';
img_pag2.alt = 'foto_pag2'

let parag3 = document.createElement("p");
parag3.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit maxime iste dolore reiciendis, repudiandae exercitationem quo debitis libero molestias, dolores eos aperiam suscipit esse laudantium vel cumque tenetur minima.Voluptate";

let img_pag3 = document.createElement('img');
img_pag3.className = "img_pag";
img_pag3.src = './img/foto3.png';
img_pag3.alt = 'foto_pag3'

let parag4 = document.createElement("p");
parag4.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit maxime iste dolore reiciendis, repudiandae exercitationem quo debitis libero molestias, dolores eos aperiam suscipit esse laudantium vel cumque tenetur minima.Voluptate";

//rodape da pagina
let footer_page = document.createElement('footer');
footer_page.className = "footer-page";

//descricao footer
let tit_foot = document.createElement("h4");
tit_foot.className = "tit_footer";
tit_foot.innerText = "Todos os direitos reservados";

//apendando 
body.appendChild(div_container);
div_container.appendChild(header_page);
header_page.appendChild(img_menu);
header_page.appendChild(nav_page);
nav_page.appendChild(li1);
li1.appendChild(a_1);
nav_page.appendChild(li2);
li2.appendChild(a_2);
nav_page.appendChild(li3);
li3.appendChild(a_3);
nav_page.appendChild(li4);
li4.appendChild(a_4);
div_container.appendChild(section_page);
section_page.appendChild(tit1);
section_page.appendChild(parag1);
parag1.appendChild(img_pag);
section_page.appendChild(parag2);
parag2.appendChild(img_pag2);
section_page.appendChild(parag3);
parag3.appendChild(img_pag3);
section_page.appendChild(parag4);
div_container.appendChild(footer_page);
footer_page.appendChild(tit_foot);