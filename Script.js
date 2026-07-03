/* ===========================================
   ELEMENT
=========================================== */

const home = document.getElementById("home");
const letterPage = document.getElementById("letterPage");

const openBtn = document.getElementById("openBtn");

const envelopeTop = document.querySelector(".envelope-top");

const typingText = document.getElementById("typingText");

const music = document.getElementById("birthdayMusic");

/* ===========================================
   LETTER
=========================================== */

const letter = `On this special day,

I hope life always brings you happiness, good health and lots of beautiful memories.

Thank you for being an amazing friend.

I hope today will become one of the happiest birthdays you've ever had.

May every dream you have come true.

Keep smiling.
Keep shining.

Happy Birthday ❤️

━━━━━━━━━━━━━━

With all my best wishes,

KHANH TOAN
`;

/* ===========================================
   OPEN LETTER
=========================================== */

openBtn.addEventListener("click",()=>{

    envelopeTop.style.transform="rotateX(180deg)";

    createConfetti();

    setTimeout(()=>{

        fadeToLetter();

    },1200);

});

/* ===========================================
   CHANGE PAGE
=========================================== */

function fadeToLetter(){

    home.style.transition=".8s";

    home.style.opacity="0";

    setTimeout(()=>{

        home.style.display="none";

        letterPage.style.display="flex";

        letterPage.style.opacity="0";

        requestAnimationFrame(()=>{

            letterPage.style.transition=".8s";

            letterPage.style.opacity="1";

        });

        startTyping();

        if(music){

            music.play().catch(()=>{});

        }

    },800);

}

/* ===========================================
   CONFETTI
=========================================== */

function createConfetti(){

    for(let i=0;i<180;i++){

        const confetti=document.createElement("div");

        confetti.className="confetti-piece";

        confetti.style.left=Math.random()*100+"vw";

        confetti.style.top="-20px";

        confetti.style.background=randomColor();

        confetti.style.animationDuration=

        (Math.random()*2+2)+"s";

        confetti.style.transform=

        `rotate(${Math.random()*360}deg)`;

        document.body.appendChild(confetti);

        setTimeout(()=>{

            confetti.remove();

        },4500);

    }

}

function randomColor(){

    const colors=[

        "#ff4d6d",

        "#ffd166",

        "#06d6a0",

        "#118ab2",

        "#8338ec",

        "#ffffff",

        "#ff99c8"

    ];

    return colors[Math.floor(Math.random()*colors.length)];

}
/* ===========================================
   FLOATING PARTICLES
=========================================== */

function createParticles(){

    const container=document.getElementById("particles");

    if(!container) return;

    for(let i=0;i<40;i++){

        const particle=document.createElement("span");

        particle.className="particle";

        particle.style.left=Math.random()*100+"%";

        particle.style.top=Math.random()*100+"%";

        particle.style.animationDelay=Math.random()*8+"s";

        particle.style.animationDuration=(8+Math.random()*6)+"s";

        particle.style.opacity=Math.random()*0.8+0.2;

        particle.style.transform=`scale(${Math.random()+0.3})`;

        container.appendChild(particle);

    }

}

createParticles();

/* ===========================================
   FLOATING HEARTS
=========================================== */

function createHeart(){

    const heart=document.createElement("div");

    heart.className="floating-heart";

    heart.innerHTML=["❤️","💖","💕","💗"][Math.floor(Math.random()*4)];

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(18+Math.random()*18)+"px";

    heart.style.animationDuration=(5+Math.random()*4)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

setInterval(createHeart,1200);