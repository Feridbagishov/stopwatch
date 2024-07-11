let btnStart = document.querySelector('.btnStart');
let btnStop = document.querySelector('.btnStop');
let btnReset = document.querySelector('.btnReset');
let btnLap = document.querySelector('.btnLap');
let hourText = document.querySelector('.hourText');
let minuteText = document.querySelector('.minuteText');
let secondText = document.querySelector('.secondText');
let millisecondText = document.querySelector('.millisecondText');
let lapContainer = document.querySelector('.lapContainer');

let hour = 0;
let minute =0;
let second = 0;
let milliSecond = 0;
let lapCount = 0;
let interval;