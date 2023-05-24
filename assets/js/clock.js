const timeZone = document.querySelector('span[time-zone]')

const time = setInterval(() => {
    const currentdate = new Date();

    const hour = currentdate.getHours()
    const minutes = currentdate.getMinutes()
    const seconds = currentdate.getSeconds()

    
    if(timeZone){
      let time = hour + ":" + minutes + ":" + seconds,
          session;
          hour >= 12 ? session = 'PM' : session = 'AM';
      document.querySelector('[clock-state] h1').innerHTML = time;
      document.querySelector('[time-zone]').innerHTML = session;
    }
}, 1000);