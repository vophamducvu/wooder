let loading = document.querySelector('.loading')
window.addEventListener("load", (event) => {
    loading.classList.add('active')
    document.querySelector('.header__lang-select').style.display = 'block';
    document.querySelector('.popupvideo').style.display = 'flex';
});

function handleSlider() {
    var slider = document.querySelector('.scslide__wrapper');
    var flktySlider = new Flickity(slider, {
        // options
        cellAlign: 'left',
        contain: true,
        draggable: '>1',
        fade: true,
        prevNextButtons: false,
        wrapAround: true,
        on: {
            ready: function () {
                console.log('Flickity is ready');
                handleDotSlider()

            },
            change: function (index) {
                console.log('Slide changed to' + index);
                handlePagingSlider(index)
            }
        }
    });
    let btnPrev = document.querySelector('.bottom .container-fluid .select .button-left'),
        btnNext = document.querySelector('.bottom .container-fluid .select .button-right')

    btnPrev.addEventListener('click', function () {
        flktySlider.previous(true)
    })
    btnNext.addEventListener('click', function () {
        flktySlider.next(true)
    })

    function handlePagingSlider(index) {
        let number = document.querySelector('.bottom .container-fluid .numberpage .number span')
        number.innerHTML = (index + 1).toString().padStart(2, '0')
    }
    function handleDotSlider() {
        let dotsSlider = document.querySelector('.flickity-page-dots'),
            dotsSliderBottom = document.querySelector('.numberpage')
        dotsSliderBottom.appendChild(dotsSlider)
    }

}
handleSlider()

Fancybox.bind("[data-fancybox]"), {
    infinite: true,
    keybord: {
        Escape: "close",
        Delete: "close",
        Backspace: "close",
        PageUp: "next",
        PageDown: "prev",
        ArrowUp: "next",
        AroowDown: "prev",
        Aroowright: "next",
        AroowLeft: "prev",
    },
    on: {
        ready: (fancybox) => {
            console.log(`fancybox #${fancybox.id} is ready!`)
        }
    },
}
function handleLast() {
    var last = document.querySelector('.sclast');
    var flktyLast = new Flickity(last, {
        cellAlign: 'left',
        contain: true,
        draggable: true,
        prevNextButtons: false,
        wrapAround: true,
        pageDots: false,
        imagesLoaded: true

    })
    var progressBar = document.querySelector('.progress-bar')

    flktyLast.on('scroll', function (progress) {
        progress = Math.max(0, Math.min(1, progress));
        progressBar.style.width = progress * 100 + '%';
    });
}
document.addEventListener('load', handleLast())

// let listItemSlider = document.querySelectorAll('.scslide__wrapper-item');
// let currentSlider = 0;
// let number = document.querySelector('.bottom .container-fluid .numberpage .number span');
// let dot_Li = document.querySelectorAll('.bottom .container-fluid .numberpage .number li');

// function goTo(index) {
//     listItemSlider[currentSlider].classList.remove('active');
//     listItemSlider[index].classList.add('active');
//     dot_Li[currentSlider].classList.remove('active');
//     dot_Li[index].classList.add('active');
//     currentSlider = index;
//     showNumber(currentSlider + 1);

// }
// function showNumber(index) {
//     number.innerHTML = (index).toString().padStart(2, '0');
// }
// showNumber(currentSlider + 1);
// document.querySelector('.bottom .container-fluid .select .button-right').addEventListener('click', function () {
//     if (currentSlider < listItemSlider.length - 1) {
//         goTo(currentSlider + 1);
//     } else {
//         goTo(0);
//     }
// })
// document.querySelector('.bottom .container-fluid .select .button-left').addEventListener('click', function () {
//     if (currentSlider > 0) {
//         goTo(currentSlider - 1);
//     } else {
//         goTo(listItemSlider.length - 1);
//     }
// })

// bai 1 doi mau header 

// function headerBG() {
//     const header = document.querySelector('.header')
//     window.addEventListener('scroll', function () {
//         const thisHeight = window.pageYOffset
//         const sliderHeight = document.querySelector('.scslide')
//         if (thisHeight >= sliderHeight.offsetHeight) {
//             header.classList.add('active')
//         } else {
//             header.classList.remove('active')
//         }
//     })
// }

// headerBG()

function headerBG() {
    const header = document.querySelector('.header')
    window.addEventListener('scroll', function () {
        const thisHeight = window.pageYOffset
        let sliderHeight = document.querySelector('.scslide')
        if (thisHeight >= sliderHeight.offsetHeight) {
            header.classList.add('active')
        } else {
            header.classList.remove('active')
        }
    })
}
headerBG()

// bai 2 bam nut scroll len dau`

const backToTop = document.querySelector('.btt-button') //goi cai nut ra 
const backToTopBtn = document.querySelector('.footer__back p')
function clickBack() {
    window.addEventListener('scroll', function () { //tao hanh dong srcoll
        let thatHeight = window.pageYOffset //roll den do cao nay thi hien ra 
        const heightSlider = document.querySelector('.scslide') //goi do cao slider de khi roll qua thi hien ra 
        if (thatHeight >= heightSlider.offsetHeight) { //neu diem can roll den do cao slider thi hien ra 
            backToTopBtn.classList.add('active'); //add class active zo 
        } else {
            backToTopBtn.classList.remove('active'); //neu roll qua thi go~ active
        }
    })
}
clickBack()

function clickToBack() {  //click de di len top
    backToTopBtn.addEventListener('click', function () {
        window.scrollTo({ //nay la de no scroll len top 0
            top: 0,
            behavior: 'smooth'
        }
        )
    })
}

clickToBack()

function rollToTop() {
    window.addEventListener('scroll', function () { //tao hanh dong srcoll
        let thatHeight = window.pageYOffset //roll den do cao nay thi hien ra 
        const heightSlider = document.querySelector('.scslide') //goi do cao slider de khi roll qua thi hien ra 
        if (thatHeight >= heightSlider.offsetHeight) { //neu diem can roll den do cao slider thi hien ra 
            backToTop.classList.add('active'); //add class active zo 
        } else {
            backToTop.classList.remove('active'); //neu roll qua thi go~ active
        }
    })
}

rollToTop()

function clickToTop() {  //click de di len top
    backToTop.addEventListener('click', function () {
        window.scrollTo({ //nay la de no scroll len top 0
            top: 0,
            behavior: 'smooth'
        }
        )
    })
}

clickToTop()

//bai 3 doi ngon ngu 

const lang = document.querySelector('.header__right-lang'),
    langCurrent = document.querySelector('.header__right .header__right-lang .header__lang-current span'),
    langItems = document.querySelectorAll('.header__right .header__right-lang .header__lang-select .lang__option')


lang.addEventListener('click', function (e) {
    e.stopPropagation();
    this.classList.toggle('active');
})

langItems.forEach(function (item) {
    item.addEventListener('click', function (e) {
        e.preventDefault()
        let langText = this.textContent;
        let langCurrentSpan = langCurrent.textContent;
        langCurrent.innerHTML = langText;
        this.innerHTML = langCurrentSpan;

    });
});

document.addEventListener('click', function () {
    lang.classList.remove('active');
})

// bai 4 Mở menu mobile 

function menuMobile() {
    const btnMenu = document.querySelector('.header__right-botton'),
        nav = document.querySelector('.nav')

    btnMenu.addEventListener('click', function () {
        this.classList.toggle('active')
        nav.classList.toggle('active')

    })

    function hideNav() {
        btnMenu.classList.remove('active')
        nav.classList.remove('active')
    }

    window.addEventListener('resize', function () {
        let wWindow = this.innerWidth
        if (wWindow > 992) {
            hideNav()
        }
    })
}
menuMobile()

// bai 5 mở video khi click vào hình 

function clickToOpenVideo() {
    let img = document.querySelectorAll('.scquality__introdude .scquality__introdude-video .des .img'),
        openSquareVideo = document.querySelector('.popupvideo'),
        iframe = document.querySelector('.popupvideo .popupvideo__inner .popupvideo__inner-iframe iframe'),
        btnClose = document.querySelector('.popupvideo .popupvideo__inner .popupvideo__inner-close')

    img.forEach(function (img) {
        img.addEventListener('click', function () {
            openSquareVideo.classList.add('active')
            let dataID = img.getAttribute('data-video-src')
            iframe.setAttribute('src', `https://www.youtube.com/embed/${dataID}?autoplay=0`)

        })
    })
    function closeVideo() {
        openSquareVideo.classList.remove('active')
        iframe.setAttribute('src', '')
    }

    btnClose.addEventListener('click', function () {
        closeVideo()
    })
    openSquareVideo.addEventListener('click', function () {
        closeVideo()
    })
}
clickToOpenVideo()

function clickToOpenVideo2() {
    let img2 = document.querySelectorAll('.scdesign .button'),
        openSquareVideo2 = document.querySelector('.popupvideo'),
        iframe2 = document.querySelector('.popupvideo .popupvideo__inner .popupvideo__inner-iframe iframe'),
        btnClose2 = document.querySelector('.popupvideo .popupvideo__inner .popupvideo__inner-close')

    img2.forEach(function (video) {
        video.addEventListener('click', function () {
            openSquareVideo2.classList.add('active')
            let dataID = video.getAttribute('data-video-src')
            iframe2.setAttribute('src', `https://www.youtube.com/embed/${dataID}?autoplay=0`)

        })
    })
    function closeVideo() {
        openSquareVideo2.classList.remove('active')
        iframe2.setAttribute('src', '')
    }

    btnClose2.addEventListener('click', function () {
        closeVideo()
    })
    openSquareVideo2.addEventListener('click', function () {
        closeVideo()
    })
}
clickToOpenVideo2()
// bai 6 click vào chọn button đổi hình

function clickToChangeInfo() {
    let tabs = document.querySelectorAll('.scnew__tabs-item'),
        listNews = document.querySelectorAll('.scnews_des')

    tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {

            tabs.forEach(function (tab) {
                tab.classList.remove('active')
            })
            this.classList.add('active')


            listNews.forEach(function (newslist) {
                newslist.classList.remove('active')
            })
            let id = this.dataset.tab


            document.querySelector('.scnews_des-' + id).classList.add('active')
        })
    })
}
clickToChangeInfo()

// bai 7 click vào header menu scroll tới section đó

let menu = document.querySelectorAll('.header .header__menu a'); //chon the a trong header 
let heightHeader = document.querySelector('.header').offsetHeight; //chon header offsetHeight la do cao cua header
let sections = [];

function removeActive() {
    menu.forEach(function (menu_element, menu_index) {
        menu_element.classList.remove('acitve');
    })
}

menu.forEach(function (elemnet) {
    elemnet.addEventListener('click', function (e) {
        e.preventDefault()
        const href = elemnet.getAttribute('href')
        const className = href.replace('#', '')
        const section = document.querySelector('.' + className)
        const thisSection = section.offsetTop
        sections.push(section);
        window.scrollTo({
            top: thisSection - heightHeader,
            behavior: 'smooth'
        })
        removeActive();
        elemnet.classList.add('active')
    })
})

window.addEventListener('scroll', function () {

    let positionScroll = window.pageYOffset;
    sections.forEach(function (section, index) {
        if (positionScroll > section.offsetTop - heightHeader) {
            removeActive();
            menu[index].classList.add('active');
        } else {
            menu[index].classList.remove('active')
        }
    })
})

// bai 8  PROGRESS BAR

const progressBar = () => {
    let progress = document.querySelector('.progressbar'); //goi cai progress ra 

    window.addEventListener('scroll', () => { //su kien scroll cua window 
        let scrollY = window.scrollY; //cot doc
        let percent = scrollY / (document.body.offsetHeight - window.innerHeight) * 100 //tinh toan de dc 100% do cao cot doc
        progress.style.width = `${percent}%` //dua ve %
    })
}

window.addEventListener('load', progressBar())

//bai 9

function clickToRead() {
    let acc = document.querySelectorAll('.accordion .content .content__title')

    acc.forEach(function (item, key) {
        item.addEventListener('click', function () {

            acc.forEach(function (tab, key_l) {
                if (key != key_l) {
                    tab.classList.remove('active');
                    tab.nextElementSibling.classList.remove('active')
                }
            });

            if (this.classList.contains('active')) {
                this.classList.remove('active')
                this.nextElementSibling.classList.remove('active')

            } else {
                this.classList.add('active')
                this.nextElementSibling.classList.add('active')
            }
        })
    })
}

clickToRead()

