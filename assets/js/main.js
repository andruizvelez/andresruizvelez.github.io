/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
// Case study reveal (image then text)
sr.reveal('.case__media', { delay: 200 });
sr.reveal('.case__body',  { delay: 400 });
sr.reveal('#prompts .prompt', { interval: 150, delay: 150 });

// ===== Copy-to-clipboard for prompts =====
document.addEventListener('click', async (e) => {
  const btn = e.target.closest('.prompt__copy');
  if (!btn) return;
  // find the code block to copy: previous sibling with .prompt__code
  let code;
  if (btn.dataset.copy === 'prev') {
    const prev = btn.previousElementSibling;
    if (prev && prev.classList.contains('prompt__code')) code = prev;
  }
  if (!code) return;
  try {
    await navigator.clipboard.writeText(code.textContent.trim());
    btn.textContent = 'Copied!';
    setTimeout(() => (btn.textContent = 'Copy'), 1200);
  } catch (err) {
    btn.textContent = 'Press Ctrl/Cmd+C';
    setTimeout(() => (btn.textContent = 'Copy'), 1500);
  }
});


