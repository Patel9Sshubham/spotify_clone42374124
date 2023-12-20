console.log("welcome to spotify")

//initilize the variables

let songIndex=0;

let audioElement = new Audio('kesariya.mp3');
 audioElement = new Audio('Apna_Bana_Le.mp3');


let masterplay = document.getElementById('masterplay');
let myprogressBar = document.getElementById('myprogressBar');
let gif = document.getElementById('gif');

let songs = [
    { songName: "kesareya", filepath: "audio/Kesariya.mp3", coverpath: "cover1.jpg" },
    { songName: "kesareya", filepath: "audio/Apna_Bana_Le.mp3", coverpath: "cover1.jpg" },
    { songName: "kesareya", filepath: "audio/Kesariya.mp3", coverpath: "cover1.jpg" },
    { songName: "kesareya", filepath: "audio/Kesariya.mp3", coverpath: "cover1.jpg" },
    { songName: "kesareya", filepath: "audio/Kesariya.mp3", coverpath: "cover1.jpg" }
]


audioElement.play();

// handle play/pause click

masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=1;

    }
    else
        audioElement.pause();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=0;
})


myprogressBar.addEventListener('change', () => {
    const seekTime = audioElement.duration * (myprogressBar.value / 100);
    if (!isNaN(seekTime)) {
        audioElement.currentTime = seekTime;
    }
});

myprogressBar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressBar.value*audioElement.duration/100;
})

