//isso aqui eu uso quando presionar alguma tecla, muito usavel!!
document.body.addEventListener('keyup', ( event ) =>{
    //console.log(event.code);
    playSound(event.code.toLowerCase())
});

document.querySelector('.composer button').addEventListener('click', ( ) => {
    let song = document.querySelector('#input').value;
    //console.log("Musica", song);
    if (song !== ''){
        let songArray = song.split('');
        //console.log(songArray);
        playComposition(songArray);
    }
});

function playSound (sound){
    //assim que eu seleciono pelo ID
    let audioElemente = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if (audioElemente){
        audioElemente.currentTime = 0;
        audioElemente.play();
    }

    if (keyElement){
        keyElement.classList.add('active');
        setTimeout(()=>{
            keyElement.classList.remove('active');
        },300);
    }
}

function playComposition(songArray){
    let wait = 0;

    for( let songItem of songArray ){
        setTimeout (() =>{
            playSound(`key${songItem}`)
        }, wait)
        wait += 250;
    }
}