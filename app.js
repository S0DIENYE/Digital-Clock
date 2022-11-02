function setTime() {
    const currentdate = new Date();

    const hour = currentdate.getHours()
    const minutes = currentdate.getMinutes()
    const seconds = currentdate.getSeconds()

    let time = hour + ":" + minutes + ":" + seconds,
        session;
        hour >= 12 ? session = 'PM' : session = 'AM';
    document.querySelector('div h1').innerHTML = time;
    document.querySelector('[time-zone]').innerHTML = session;
}
window.onload = () => {
    setTime()
}
setInterval(setTime, 1000)

console.log(Date())



/*------------------------------------
  # Countdown Timer Function
------------------------------------*/
const countDown = () => {

    const quizBtn = document.querySelector('button[quiz-time]')
    if(quizBtn)
    quizBtn.onclick = (e) =>{
      e.preventDefault();
    
      if(e.target.hasAttribute('quiz-time')){
        document.querySelector('#quiz_section .start-modal').style.display = 'none';
    
        
        var time_up = false;
        var defaultTime = 2; // Set time for quiz. To change time, change defaultTime value 
        var minutes = defaultTime;
        var seconds = 60;
        var Quiztime = minutes + ':' + seconds;
    
        setInterval(() =>{
          while(!time_up){
    
            seconds--;
            Quiztime = minutes + ':' + seconds;
            document.querySelector('#quiz_section .timer').textContent = Quiztime; 
    
            if(seconds === 1){
              
              if(true) defaultTime--, minutes = defaultTime, seconds = 60;
              Quiztime = minutes + ':' + seconds;
              // break;
            }
            if(time_up = true && defaultTime < 0){
              if(true) Quiztime = 0 +':'+ 0 + 0;
              document.querySelector('#quiz_section .timer').innerHTML = Quiztime;
              document.querySelector('#quiz_section .modal.end-quiz').classList.toggle('active');
            }
            break;
          }
    
        }, 1000);
      }
    }
  }
  countDown();