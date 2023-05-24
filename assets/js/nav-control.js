const nav = document.querySelector('.navbar nav');
const states = nav.querySelectorAll('ul li');

states.forEach(state => {
    state.onclick = (e) => {

        // Initialize global vars
        if(e) {
            countDown()
        }

        if(state.id == 'clock'){
            clock.change(clockState())
        }

        if(state.id == 'stopwatch'){
            clock.change(stopwatchState())
        }

        if(state.id == 'timer'){
            clock.change(timerState())
        }
    }
});


const PageState = function() {
    let currentState = new clockState(this)  // this pertains to the pagestate fn

    // init loads the home state
    this.init = function() {
        this.change(new clockState)
    }

    this.change = function(state) {
        currentState = state;
    }
};

// Home State
const clockState = function(page) {
    document.querySelector('[clock-state]').innerHTML = `
        <div class="clock-time">
            <h1></h1>
            <span time-zone>AM</span>
        </div>
    `;

}

// About State
const stopwatchState = function (){
    document.querySelector('[clock-state]').innerHTML = `
        <h1>
            <span>00 :</span>
            <span>00 :</span>
            <span>00</span>
        </h1>
        <div class="buttons-group">
            <button class="lap">Lap</button>
            <button class="start">Start</button>
            <button class="stop">Stop</button>
        </div>
    `;
}

// Contact State
const timerState = function (){
    document.querySelector('[clock-state]').innerHTML = `
        <div class="display-group">
            <input type="number" id="Thour" placeholder="0 hours">
            <input type="number" id="Tmin" placeholder="0 minutes">
            <input type="number" id="Tsec" placeholder="0 seconds">
        </div>
        <div control="timer" class="buttons-group" style="margin-top: 1rem;">
            <button class="lap">Stop</button>
            <button class="lap" init="timer" >Start</button>
        </div>
    `;
}

// Instantiate Page State
const clock = new PageState();

// Init default state
clock.init();