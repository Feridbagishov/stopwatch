

function startTimer(){
    btnStart.disabled = true;
    btnStop.disabled = false;
    btnReset.disabled = true;
    btnLap.disabled = false;
    timer()
}


function stopTimer(){
    btnStart.disabled = false;
    btnStop.disabled = true;
    btnReset.disabled = false;
    btnLap.disabled = true;
    clearInterval(interval)
}

function resetTimer() {
    clearInterval(interval);
    hour = 0;
    minute = 0;
    second = 0;
    milliSecond = 0;
    hourText.textContent = '00 :';
    minuteText.textContent = '00 :';
    secondText.textContent = '00 :';
    millisecondText.textContent = '00';
    btnStart.disabled = false;
    btnStop.disabled = true;
    btnReset.disabled = true;
    btnLap.disabled = true;
    lapContainer.innerHTML = '';
    lapCount = 0;  
}

function lapTimer(){
    lapCount ++
    let lapTime = `${hourText.innerHTML}${minuteText.innerHTML}${secondText.innerHTML}${millisecondText.innerHTML}`
    let lapElement = document.createElement('div');
    lapElement.innerHTML = `${lapCount} ) ${lapTime}`
    lapContainer.appendChild(lapElement);

}

function timer(){
    interval = setInterval(()=>{
        milliSecond++
        if(milliSecond == 100){
            milliSecond = 0;
            second++
        } else if( second == 60){
            second = 0;
            minute++
        } else if(minute == 60){
            minute = 0;
            hour++
        }

        hourText.innerHTML = ( hour < 10 ? '0'+ hour : hour)+ ":";
        minuteText.innerHTML = ( minute < 10 ? '0'+ minute : minute)+ ":";
        secondText.innerHTML = ( second < 10 ? '0'+ second : second)+ ":";
        millisecondText.innerHTML = ( milliSecond < 10 ? '0'+ milliSecond : milliSecond);
    },10)}

   btnStart.addEventListener('click',startTimer);
   btnStop.addEventListener('click',stopTimer);
   btnReset.addEventListener('click',resetTimer);
   btnLap.addEventListener('click',lapTimer);