const compactStyle=document.createElement('link');compactStyle.rel='stylesheet';compactStyle.href='css/stack-compact.css';document.head.appendChild(compactStyle);
const favicon=document.querySelector('link[rel="icon"]');if(favicon){favicon.href='foto/logo.png?v=2';favicon.type='image/png'}
const logoAsset=new Image();logoAsset.onload=()=>document.querySelectorAll('.logo').forEach(logo=>logo.classList.add('has-image'));logoAsset.src='foto/logo.png';
const socialIcons=[
  {match:'mailto:',src:'src/redes sociais/out.png',alt:'E-mail'},
  {match:'github.com',src:'src/icons/github.svg',alt:'GitHub'},
  {match:'linkedin.com',src:'src/redes sociais/link.png',alt:'LinkedIn'},
  {match:'wa.me',src:'src/icons/whatsapp.svg',alt:'WhatsApp'}
];
document.querySelectorAll('.social a,.actions .square,.info a').forEach(link=>{const icon=socialIcons.find(item=>link.href.includes(item.match));if(!icon)return;const image=document.createElement('img');image.src=icon.src;image.alt='';image.setAttribute('aria-hidden','true');link.prepend(image);if(link.classList.contains('square'))link.childNodes.forEach(node=>{if(node.nodeType===Node.TEXT_NODE)node.textContent=''})});
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const menu=document.querySelector('.menu'),nav=document.querySelector('nav');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(element=>observer.observe(element));

const technologyIcons={HTML:'html5.svg',CSS:'css.svg',JavaScript:'javascript.svg',React:'react.svg',Tailwind:'tailwindcss.svg',PHP:'php.svg',Python:'python.svg',Java:'openjdk.svg','Node.js':'nodedotjs.svg',MySQL:'mysql.svg',Git:'git.svg',GitHub:'github.svg',Docker:'docker.svg',Go:'go.svg'};
document.querySelectorAll('.key').forEach(key=>{const name=key.querySelector('b').textContent.trim();let icon=key.querySelector('img');if(!icon){icon=document.createElement('img');key.querySelector('strong')?.remove();key.prepend(icon)}icon.src=`src/icons/${technologyIcons[name]}`;icon.alt=`Logo ${name}`});
document.querySelectorAll('.info .pills span').forEach(tag=>{const name=tag.textContent.trim();const file=technologyIcons[name];if(!file)return;const icon=document.createElement('img');icon.src=`src/icons/${file}`;icon.alt='';icon.setAttribute('aria-hidden','true');tag.prepend(icon)});

const scene=document.querySelector('.key-scene');
if(!reduced)scene.addEventListener('pointermove',event=>{const box=scene.getBoundingClientRect();scene.style.setProperty('--rx',`${(event.clientY-box.top)/box.height*-5+2.5}deg`);scene.style.setProperty('--ry',`${(event.clientX-box.left)/box.width*8-4}deg`)});
scene.addEventListener('pointerleave',()=>{scene.style.setProperty('--rx','0deg');scene.style.setProperty('--ry','0deg')});
document.querySelectorAll('.key').forEach(key=>key.addEventListener('click',()=>key.classList.toggle('pressed')));

document.querySelectorAll('.project video').forEach(video=>{const project=video.closest('.project');project.addEventListener('mouseenter',()=>video.play().catch(()=>{}));project.addEventListener('mouseleave',()=>{video.pause();video.currentTime=0})});
document.querySelectorAll('.filters button').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.filters button').forEach(item=>item.classList.remove('on'));button.classList.add('on');document.querySelectorAll('.project').forEach(project=>project.hidden=button.dataset.filter!=='all'&&project.dataset.category!==button.dataset.filter)}));
const more=document.querySelector('.more');more.addEventListener('click',()=>{document.body.classList.toggle('show-all');more.innerHTML=document.body.classList.contains('show-all')?'Mostrar menos <span>↑</span>':'Ver mais projetos <span>↓</span>'});

const certs=document.querySelector('.certs'),controls=document.querySelectorAll('.controls button');
controls[0].addEventListener('click',()=>certs.scrollBy({left:-(certs.firstElementChild.offsetWidth+20),behavior:'smooth'}));
controls[1].addEventListener('click',()=>certs.scrollBy({left:certs.firstElementChild.offsetWidth+20,behavior:'smooth'}));
const modal=document.querySelector('dialog');
document.querySelectorAll('.cert').forEach(cert=>cert.addEventListener('click',()=>{modal.querySelector('img').src=cert.dataset.src;modal.showModal()}));
modal.querySelector('button').addEventListener('click',()=>modal.close());modal.addEventListener('click',event=>{if(event.target===modal)modal.close()});
document.querySelector('#year').textContent=new Date().getFullYear();
