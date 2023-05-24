/*------------------------------------
  # Countdown Timer Function
------------------------------------*/
let startBtn;
const countDown = () => {
    // Wait till domSearcher finds element
    setTimeout(() => {
        const Start = document.querySelector('[init="timer"]')
        startBtn = Start;
        initCount();
    }, 500)
}

function initCount() {
    if(startBtn)
        startBtn.onclick = () => {
        
            var time_up = false;
            var hours = document.getElementById('Thour').value = 1;
            var minutes = document.getElementById('Tmin').value = 4;
            var seconds = document.getElementById('Tsec').value = 60;
            var countdown = hours + minutes + seconds;


            console.log(hours, minutes, seconds);
            // create three funcions for diff time shift
            // create a timeup fn
            // 
            //* Initiate functions
            countSec()
            // ***
            function countSec(){
                setInterval(() => {
                    if(!time_up){
                        seconds--
                        console.log(seconds);
                        if(seconds === 1) {
                            // At the end of seconds minute = -1
                            if(minutes--){
                                console.log(minutes, 'minuttes');
                                seconds = 60;
                            }

                            if(minutes === 0 ){
                                console.log(hours, 'hours');
                            }

                            console.log(minutes, 'minuttes');
                            if(hours === -1 && minutes === 0 && seconds === 0){
                                console.log('timeup bitch');
                            }
                        }
    
                    }
                }, 10)
            }
            function countMin(){}
            function countHour(){}
            function timeUp(){}

            
        
            // setInterval(() => {
            //     while (!time_up) {
        
            //         seconds--;
            //         countdown = minutes + ':' + seconds;
            //         document.querySelector('#quiz_section .timer').textContent = countdown;
        
            //         if (seconds === 1) {
        
            //             if (true) defaultTime--, minutes = defaultTime, seconds = 60;
            //             countdown = minutes + ':' + seconds;
            //             // break;
            //         }
            //         if (time_up = true && defaultTime < 0) {
            //             if (true) countdown = 0 + ':' + 0 + 0;
            //             document.querySelector('#quiz_section .timer').innerHTML = countdown;
            //             document.querySelector('#quiz_section .modal.end-quiz').classList.toggle('active');
            //         }
            //         break;
            //     }
        
            // }, 1000);
        }
}














// var time_up = false;
// var defaultTime = 2; // Set time for quiz. To change time, change defaultTime value 
// var minutes = defaultTime;
// var seconds = 60;
// var countdown = minutes + ':' + seconds;

// setInterval(() => {
//     while (!time_up) {

//         seconds--;
//         countdown = minutes + ':' + seconds;
//         document.querySelector('#quiz_section .timer').textContent = countdown;

//         if (seconds === 1) {

//             if (true) defaultTime--, minutes = defaultTime, seconds = 60;
//             countdown = minutes + ':' + seconds;
//             // break;
//         }
//         if (time_up = true && defaultTime < 0) {
//             if (true) countdown = 0 + ':' + 0 + 0;
//             document.querySelector('#quiz_section .timer').innerHTML = countdown;
//             document.querySelector('#quiz_section .modal.end-quiz').classList.toggle('active');
//         }
//         break;
//     }

// }, 1000);