
function printNums(){
    console.log(1);
    setTimeout(function() {console.log(2); }, 1000);
    setTimeout(function() {console.log(3); }, 0);
    console.log(4);
}

printNums();

function printTime(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

// calls printTime() every 1000 ms
// setInterval(printTime, [1000]);