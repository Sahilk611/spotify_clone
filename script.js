console.log("sahil khan");

// initilize Variable
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.querySelector('.song_gif');
let masterSongName = document.querySelector('.masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItems'));


let songs = [
    {songName: "Aashke - PenduJatt.In" , filePath:"songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Desi Kalakaar Remix - PenduJatt.In " , filePath:"songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Head Banger - PenduJatt.In" , filePath:"songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Jhumke - PenduJatt.In" , filePath:"songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Kalastar - PenduJatt.In" , filePath:"songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Sambhle - PenduJatt.In" , filePath:"songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sohneya - PenduJatt.In" , filePath:"songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Tujh Pe Pyaar - PenduJatt.In" , filePath:"songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Yaad - PenduJatt.In" , filePath:"songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Salam-e-Ishq" , filePath:"songs/10.mp3", coverPath:"covers/10.jpg"},
]

songItems.forEach((element , i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath ;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName ;
})


// Handle Play / Pause techinique   

masterPlay.addEventListener('click' , () => {
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');   
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;  
    }
})
let progress = document.getElementById('')
audioElement.addEventListener('timeupdate' , () => {
    let progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    console.log(" the present progress is " + progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change' , () =>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100 ;
})


let makeAllPlay = ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
     })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener('click' , (e)=> {
        console.log(e.target);
        
        makeAllPlay();
        gif.style.opacity = 1;
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+ 1}.mp3` ;
        masterSongName.innerText = songs[songIndex].songName ;
        audioElement.currentTime = 0 ;
        audioElement.play();
        
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('previous').addEventListener('click' , ()=>{
    if(songIndex <= 0){
        songIndex = 0 ;
    }else{
        songIndex -= 1 ;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3` ;
    masterSongName.innerText = songs[songIndex].songName ;
    audioElement.currentTime = 0 ;
    audioElement.play();  
    gif.style.opacity = 1;
    
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})


document.getElementById('next').addEventListener('click' , ()=>{

    
    if(songIndex >=  9){
        songIndex = 0 ;
    }else{
        songIndex += 1 ;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3` ;
    audioElement.currentTime = 0 ;
    audioElement.play();  
    gif.style.opacity = 1;
    masterSongName.innerText = songs[songIndex].songName ;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

