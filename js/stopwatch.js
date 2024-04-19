let [milis, seconds, minutes, hours] = [0, 0, 0, 0];

const watch = document.querySelector('.main .watch');
console.log(watch);

let internal = null;

const btnStart = document.getElementById('btnStart');
btnStart.addEventListener('click', () =>{
    if (internal !== null){
        clearInterval(internal);
    }
    internal = setInterval(timer, 10);
});

const btnStop = document.getElementById('btnEnd');
btnStop.addEventListener('click',()=>{
    clearInterval(internal);
})
const btnReset = document.getElementById('btnResert');
btnReset.addEventListener('click',()=>{
    clearInterval(internal);
    [milis, seconds, minutes, hours] = [0, 0, 0, 0];
    watch.innerHTML = "00:00:00:000";
})

function timer () {
    milis +=10;
    if(milis == 1000){
        milis = 0;
        seconds++;
        if(seconds == 60){
            seconds=0;
            minutes++;
            if(minutes == 60){
                minutes=0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    let ms = milis <10 ? "00" + milis:milis < 100 ? "0" + milis: milis;

    watch.innerHTML = `${h}:${m}:${s}:${ms}`;
}