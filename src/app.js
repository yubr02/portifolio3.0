const favicon=document.querySelector('link[rel="icon"]');if(favicon){favicon.href='foto/logo.png?v=2';favicon.type='image/png'}
const logoAsset=new Image();logoAsset.onload=()=>document.querySelectorAll('.logo').forEach(logo=>logo.classList.add('has-image'));logoAsset.src='foto/logo.png';
const socialIcons=[
  {match:'mailto:',src:'src/redes sociais/out.png',alt:'E-mail'},
  {match:'github.com',src:'src/icons/github.svg',alt:'GitHub'},
  {match:'linkedin.com',src:'src/redes sociais/link.png',alt:'LinkedIn'},
  {match:'wa.me',src:'src/icons/whatsapp.svg',alt:'WhatsApp'}
];
document.querySelectorAll('.social a,.actions .square,.info a').forEach(link=>{const icon=socialIcons.find(item=>link.href.includes(item.match));if(!icon)return;const image=document.createElement('img');image.src=icon.src;image.alt='';image.setAttribute('aria-hidden','true');link.prepend(image);if(link.classList.contains('square'))link.childNodes.forEach(node=>{if(node.nodeType===Node.TEXT_NODE)node.textContent=''})});
const motion = matchMedia('(prefers-reduced-motion: reduce)');
const menu = document.querySelector('.menu'), nav = document.querySelector('nav');
function closeMenu(returnFocus = false) {
  nav.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', 'Abrir menu');
  if (returnFocus) menu.focus();
}
menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => closeMenu()));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav.classList.contains('open')) closeMenu(true);
});
document.addEventListener('click', event => {
  if (!event.target.closest('header')) closeMenu();
});
matchMedia('(max-width: 680px)').addEventListener('change', () => closeMenu());
document.documentElement.classList.add('menu-ready');

// Progressive enhancement: content is always visible, even if observation fails.
if ('IntersectionObserver' in window && !motion.matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  }), { threshold: 0, rootMargin: '100px 0px' });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
}

const technologyIcons={HTML:'html5.svg',CSS:'css.svg',JavaScript:'javascript.svg',React:'react.svg',Tailwind:'tailwindcss.svg',PHP:'php.svg',Python:'python.svg',Java:'openjdk.svg','Node.js':'nodedotjs.svg',MySQL:'mysql.svg',Git:'git.svg',GitHub:'github.svg',Docker:'docker.svg',Go:'go.svg'};
document.querySelectorAll('.key').forEach(key=>{const name=key.querySelector('b').textContent.trim();let icon=key.querySelector('img');if(!icon){icon=document.createElement('img');key.querySelector('strong')?.remove();key.prepend(icon)}icon.src=`src/icons/${technologyIcons[name]}`;icon.alt=`Logo ${name}`});
document.querySelectorAll('.info .pills span').forEach(tag=>{const name=tag.textContent.trim();const file=technologyIcons[name];if(!file)return;const icon=document.createElement('img');icon.src=`src/icons/${file}`;icon.alt='';icon.setAttribute('aria-hidden','true');tag.prepend(icon)});
const certificateIcons={Golang:'src/icons/go.svg',Python:'src/icons/python.svg','Power BI':'src/icons/powerbi.png',WordPress:'src/icons/wordpress.svg'};
document.querySelectorAll('.cert>b').forEach(title=>{const name=title.childNodes[0].textContent.trim();const icon=document.createElement('img');icon.src=certificateIcons[name];icon.alt='';icon.setAttribute('aria-hidden','true');title.prepend(icon)});

const scene=document.querySelector('.key-scene');
scene.addEventListener('pointermove',event=>{if(motion.matches || event.pointerType==='touch')return;const box=scene.getBoundingClientRect();scene.style.setProperty('--rx',`${(event.clientY-box.top)/box.height*-5+2.5}deg`);scene.style.setProperty('--ry',`${(event.clientX-box.left)/box.width*8-4}deg`)});
scene.addEventListener('pointerleave',()=>{scene.style.setProperty('--rx','0deg');scene.style.setProperty('--ry','0deg')});
document.querySelectorAll('.key').forEach(key => {
  key.setAttribute('aria-pressed', 'false');
  key.addEventListener('click', () => key.setAttribute('aria-pressed', String(key.classList.toggle('pressed'))));
});

document.querySelectorAll('.project video').forEach(video => {
  let preview = false;
  const project = video.closest('.project');
  project.addEventListener('mouseenter', () => {
    if (motion.matches || !matchMedia('(hover: hover)').matches || !video.paused) return;
    preview = true;
    video.play().catch(() => { preview = false; });
  });
  video.addEventListener('pointerdown', () => { preview = false; });
  video.addEventListener('keydown', () => { preview = false; });
  project.addEventListener('mouseleave', () => {
    if (preview) { video.pause(); preview = false; }
  });
});
motion.addEventListener('change', () => {
  if (motion.matches) document.querySelectorAll('video').forEach(video => video.pause());
});
const projects = [...document.querySelectorAll('.project')];
const filters = [...document.querySelectorAll('.filters button')];
const more = document.querySelector('.more');
let activeFilter = 'all', expanded = false;
function updateProjects() {
  projects.forEach((project, index) => {
    project.hidden = activeFilter === 'all' ? (!expanded && index >= 3) : project.dataset.category !== activeFilter;
    if (project.hidden) project.querySelector('video').pause();
  });
  filters.forEach(button => {
    const selected = button.dataset.filter === activeFilter;
    button.classList.toggle('on', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  more.hidden = activeFilter !== 'all';
  more.setAttribute('aria-expanded', String(expanded));
  more.innerHTML = expanded ? 'Mostrar menos <span>↑</span>' : 'Ver mais projetos <span>↓</span>';
}
filters.forEach(button => button.addEventListener('click', () => {
  activeFilter = button.dataset.filter;
  updateProjects();
}));
more.addEventListener('click', () => { expanded = !expanded; updateProjects(); });
updateProjects();
document.documentElement.classList.add('projects-ready');

const certs=document.querySelector('.certs'),controls=document.querySelectorAll('.controls button');
controls[0].addEventListener('click',()=>certs.scrollBy({left:-(certs.firstElementChild.offsetWidth+20),behavior:motion.matches?'instant':'smooth'}));
controls[1].addEventListener('click',()=>certs.scrollBy({left:certs.firstElementChild.offsetWidth+20,behavior:motion.matches?'instant':'smooth'}));
const modal=document.querySelector('dialog');
document.querySelectorAll('.cert').forEach(cert=>cert.addEventListener('click',()=>{modal.querySelector('img').src=cert.dataset.src;modal.showModal()}));
modal.querySelector('button').addEventListener('click',()=>modal.close());modal.addEventListener('click',event=>{if(event.target===modal)modal.close()});
document.querySelector('#year').textContent=new Date().getFullYear();
