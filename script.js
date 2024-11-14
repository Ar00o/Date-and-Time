const outputDate = document.getElementById('output') 
const full = document.getElementById('full') 
const time = document.getElementById('time') 
const date = document.getElementById('date') ;

let formatMode = ''

time.onclick = function () {
    formatMode = 'time';
    update(formatMode)
}
date.onclick = function () {
    formatMode = 'date';
    update(formatMode)
}
full.onclick = function () {
    formatMode = 'full';
    update(formatMode)
}

update()

setInterval(() => {
    update()
},100);

function update(){
    outputDate.textContent = format(formatMode)
}

function format(formatMode) {
    const now = new Date();
    switch(formatMode){
        case 'full': 
            return now.toLocaleString()
        case 'time':
            return now.toLocaleTimeString();
        case 'date':
            return now.toLocaleDateString();
        default:
            return now.toLocaleString()
    }
}

