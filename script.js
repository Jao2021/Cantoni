class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document .querySelector (mobileMenu) ;
    this.navList = document.querySelector(navList) ;
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";
    this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
        link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.3s ease forwards ${
                index / 7 + 0.3
            }s`);
        });
    }


    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }
    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init(){
        if (this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".menu-abas",
    ".menu-abas-items .contatar",
);
mobileNavbar.init();



/*===CARD===*/
function iniciaCard(cardID){
    const card = document.getElementById(cardID)
    card.classList.add('mostrar')
    card.addEventListener('click', function(e){
        if(e.target.id == cardID || e.target.className =='fechar'){
            card.classList.remove('mostrar');
        };
    });
}
const div = document.querySelector('.sinistrado');
div.addEventListener('click',function(){iniciaCard('card');});


function iniciaCard2(cardID2){
    const card2 = document.getElementById(cardID2)
    card2.classList.add('mostrar')
    card2.addEventListener('click', function(e){
        if(e.target.id == cardID2 || e.target.className =='fechar'){
            card2.classList.remove('mostrar');
        };
    });
}
const div2 = document.querySelector('.pmoc');
div2.addEventListener('click',function(){iniciaCard2('card2');});


function iniciaCard3(cardID3){
    const card3 = document.getElementById(cardID3)
    card3.classList.add('mostrar')
    card3.addEventListener('click', function(e){
        if(e.target.id == cardID3 || e.target.className =='fechar'){
            card3.classList.remove('mostrar');
        };
    });
}
const div3 = document.querySelector('.nr12');
div3.addEventListener('click',function(){iniciaCard3('card3');});


function iniciaCard4(cardID4){
    const card4 = document.getElementById(cardID4)
    card4.classList.add('mostrar')
    card4.addEventListener('click', function(e){
        if(e.target.id == cardID4 || e.target.className =='fechar'){
            card4.classList.remove('mostrar');
        };
    });
}
const div4 = document.querySelector('.play');
div4.addEventListener('click',function(){iniciaCard4('card4');});


function iniciaCard5(cardID5){
    const card5 = document.getElementById(cardID5)
    card5.classList.add('mostrar')
    card5.addEventListener('click', function(e){
        if(e.target.id == cardID5 || e.target.className =='fechar'){
            card5.classList.remove('mostrar');
        };
    });
}
const div5 = document.querySelector('.mecanico');
div5.addEventListener('click',function(){iniciaCard5('card5');});


function iniciaCard6(cardID6){
    const card6 = document.getElementById(cardID6)
    card6.classList.add('mostrar')
    card6.addEventListener('click', function(e){
        if(e.target.id == cardID6 || e.target.className =='fechar'){
            card6.classList.remove('mostrar');
        };
    });
}
const div6 = document.querySelector('.desmanche');
div6.addEventListener('click',function(){iniciaCard6('card6');});



function iniciaCard7(cardID7){
    const card7 = document.getElementById(cardID7)
    card7.classList.add('mostrar')
    card7.addEventListener('click', function(e){
        if(e.target.id == cardID7 || e.target.className =='fechar'){
            card7.classList.remove('mostrar');
        };
    });
}
const div7 = document.querySelector('.incendio');
div7.addEventListener('click',function(){iniciaCard7('card7');});


function iniciaCard8(cardID8){
    const card8 = document.getElementById(cardID8)
    card8.classList.add('mostrar')
    card8.addEventListener('click', function(e){
        if(e.target.id == cardID8 || e.target.className =='fechar'){
            card8.classList.remove('mostrar');
        };
    });
}
const div8 = document.querySelector('.perito');
div8.addEventListener('click',function(){iniciaCard8('card8');});




/*===CARD-MOBILE===*/


function iniciaCard(cardID){
    const card = document.getElementById(cardID)
    card.classList.add('mostrar')
    card.addEventListener('click', function(e){
        if(e.target.id == cardID || e.target.className =='fechar'){
            card.classList.remove('mostrar');
        };
    });
}
const div9 = document.querySelector('.sinistrado2');
div9.addEventListener('click',function(){iniciaCard('card');});


function iniciaCard2(cardID2){
    const card2 = document.getElementById(cardID2)
    card2.classList.add('mostrar')
    card2.addEventListener('click', function(e){
        if(e.target.id == cardID2 || e.target.className =='fechar'){
            card2.classList.remove('mostrar');
        };
    });
}
const div10 = document.querySelector('.pmoc2');
div10.addEventListener('click',function(){iniciaCard2('card2');});

function iniciaCard3(cardID3){
    const card3 = document.getElementById(cardID3)
    card3.classList.add('mostrar')
    card3.addEventListener('click', function(e){
        if(e.target.id == cardID3 || e.target.className =='fechar'){
            card3.classList.remove('mostrar');
        };
    });
}
const div11 = document.querySelector('.nr122');
div11.addEventListener('click',function(){iniciaCard3('card3');});

function iniciaCard4(cardID4){
    const card4 = document.getElementById(cardID4)
    card4.classList.add('mostrar')
    card4.addEventListener('click', function(e){
        if(e.target.id == cardID4 || e.target.className =='fechar'){
            card4.classList.remove('mostrar');
        };
    });
}
const div12 = document.querySelector('.play2');
div12.addEventListener('click',function(){iniciaCard4('card4');});


function iniciaCard5(cardID5){
    const card5 = document.getElementById(cardID5)
    card5.classList.add('mostrar')
    card5.addEventListener('click', function(e){
        if(e.target.id == cardID5 || e.target.className =='fechar'){
            card5.classList.remove('mostrar');
        };
    });
}
const div13 = document.querySelector('.mecanico2');
div13.addEventListener('click',function(){iniciaCard5('card5');});

function iniciaCard6(cardID6){
    const card6 = document.getElementById(cardID6)
    card6.classList.add('mostrar')
    card6.addEventListener('click', function(e){
        if(e.target.id == cardID6 || e.target.className =='fechar'){
            card6.classList.remove('mostrar');
        };
    });
}
const div14 = document.querySelector('.desmanche2');
div14.addEventListener('click',function(){iniciaCard6('card6');});


function iniciaCard7(cardID7){
    const card7 = document.getElementById(cardID7)
    card7.classList.add('mostrar')
    card7.addEventListener('click', function(e){
        if(e.target.id == cardID7 || e.target.className =='fechar'){
            card7.classList.remove('mostrar');
        };
    });
}
const div15 = document.querySelector('.incendio2');
div15.addEventListener('click',function(){iniciaCard7('card7');});


function iniciaCard8(cardID8){
    const card8 = document.getElementById(cardID8)
    card8.classList.add('mostrar')
    card8.addEventListener('click', function(e){
        if(e.target.id == cardID8 || e.target.className =='fechar'){
            card8.classList.remove('mostrar');
        };
    });
}
const div16 = document.querySelector('.perito2');
div16.addEventListener('click',function(){iniciaCard8('card8');});
