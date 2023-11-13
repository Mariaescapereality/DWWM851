<<<<<<< HEAD
"use strict";
const spans = document.querySelectorAll("h1 span");

spans.forEach(async (sp)=>{
    let slide = sp.animate({textIndent:"0"},{duration: 2000, fill:"forwards"});
    await slide.finished;
    let fade = sp.animate({opacity:"0"},{duration: 1000, fill:"forwards"});
    await slide.finished;
    slide.cancel();
    sp.textContent = sp.dataset.text;
    fade.reverse();
    await fade.finished;
    
})
=======
"use strict";
const spans = document.querySelectorAll("h1 span");

spans.forEach(async (sp)=>{
    let slide = sp.animate({textIndent:"0"},{duration: 2000, fill:"forwards"});
    await slide.finished;
    let fade = sp.animate({opacity:"0"},{duration: 1000, fill:"forwards"});
    await slide.finished;
    slide.cancel();
    sp.textContent = sp.dataset.text;
    fade.reverse();
    await fade.finished;
    
})
>>>>>>> 6d95df47b5d49909ad9ff032b3bc391ca5fb1679
