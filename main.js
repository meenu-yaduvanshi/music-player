// let tmDuration = document.querySelector(".timing")
var audios = document.querySelector(".audios");
let preBtn = document.querySelector(".previousBtn")
let nextBtn = document.querySelector(".nextBtn")
let start = document.querySelector(".start")
let images = document.querySelector(".images")
let volimeSlider = document.querySelector(".input")
let i = 0;

let musics = ["musics/Chalo Re Man Shri Vrindavan Dham.mp3",
    "musics/Laage vrindavan neeko ! vrindavan bhajan.mp3",
    "musics/Teri Murli Ki Dhun Sunane ! Radha Krishna ! Hindi Song.mp3",
    "musics/Tum Prem Ho Tum Preet Ho - Radha Krishna ! Hindi.mp3",
    "musics/Vrindavan Jaaungi ! Vrindavan Jaungi Sakhi.mp3",
    "musics/Rang Leke Khelte Gulal Leke Khelte - Radha Krishna Holi.mp3",
    "musics/Ram Aayenge.mp3"
]
let img = ["images/img_1.jpeg",
    "images/img_2.jpeg",
    "images/img_3.jpeg",
    "images/img_4.jpeg",
    "images/img_7.jpeg",
    "images/img_6.jpeg",
    "images/img_5.jpeg"
]

nextBtn.addEventListener("click", () => {
    i++;
    if (i > 6)
        i = 0;
    audios.setAttribute("src", musics[i]);
    images.setAttribute("src", img[i]);
    audios.play()
    start.setAttribute("src", "images/on_dimg.jpeg")
    images.style.height = "350px"
    images.style.width = "350px"
})

preBtn.addEventListener("click", () => {
    i--;
    if (i < 0)
        i = 6;
    audios.setAttribute("src", musics[i]);
    images.setAttribute("src", img[i]);
    audios.play()
    start.setAttribute("src", "images/on_dimg.jpeg")
})

let click = false;
start.addEventListener("click", () => {
    if (!click) {
        audios.play()
        start.setAttribute("src", "images/on_dimg.jpeg")
        click = 1;
    }
    else {
        audios.pause()
        start.setAttribute("src", "images/off_dimg.png")
        click = 0;
    }
})

//volume
const handleVolume = (e) => {
    audios.volume = e.target.value;
}
volimeSlider.addEventListener("input", handleVolume)


//jaha click kre bahi se song start ho
let rangeSlider = document.querySelector(".rangeSlider")
rangeSlider.addEventListener("change", (e) => {
    audios.currentTime = rangeSlider.value * audios.duration / 100
})


// Time duration
setInterval(() => {
    rangeSlider.value = audios.currentTime * 100 / audios.duration
}, 1000)

