'use strict';


class Workout{
    date = new Date();
    id =  (new Date()+ '').slice(-10);
    clicks =0;


    constructor(coords, distance, duration){
        this.coords = coords;
        this.distance = distance; // in km
        this.duration = duration; // in minutes
    }

    _setDescription(){
        // prettier-ignore
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]}  ${this.date.getDate()}`;
    }
    click(){
        this.clicks++;
    }
}

class Running  extends Workout {
    type = 'running';

    constructor(coords, distance, duration, cadence){
        super(coords, distance, duration);
        this.cadence = cadence;
        this.type = 'running';
        this.calcPace();
        this._setDescription();

    }
    calcPace(){
        // min/km
        this.pace = this.duration/this.distance;
        return this.pace;
    }
}
class Cycling  extends Workout {
    type = 'cycling';

        constructor(coords, distance, duration, elevationGain){
        super(coords, distance, duration);
        this.elevationGain = elevationGain;
        this.type = 'cycling';
        this.calcSpeed()
        this._setDescription();

    }
    calcSpeed(){
        // km/h
        this.speed = this.distance/(this.duration/60);
        return this.speed
    }
}
// const run1 =new Running([39,-23], 5.2,24,178);
// const run2 =new Cycling([22,-13], 4.2,94,278);

// console.log(run1, run2);


//elements are extrected fom the HTML

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');


// Application Architecture

class App{
    #map;
    #mapZoomLevel = 13;
    #mapEvent;
    #workouts = [];

    constructor(){
        // Get USER'S Position 
        this._getPosition();

        // Get Data From Local Storage
        this._getLocalStorage();

        // Attach Event Handlers
        form.addEventListener('submit', this._newWorkout.bind(this));

        inputType.addEventListener('change', this._toggleElevationField);

        containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));

    }
    // _getPosition ---------------> 
    _getPosition(){
        if(navigator.geolocation) //get the user’s current location (latitude & longitude) using GPS or network data.

//But not all browsers or devices allow it — so we first check if it exists
navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function(){
    alert('Could Not Get Your Position');
}); //getCurrentPosition(successCallback, errorCallback)This method tries to get the user’s location. It takes two functions as arguments: 1st callback function is for  the success the message and 2nd is the for the error of the message,
    }
    //  ------LoadMap-----------------
    _loadMap(position){
    // console.log(position);
    const {latitude} = position.coords;
    const {longitude} = position.coords;
    // console.log(latitude, longitude);
    
 // -------------Change Location To pregent Location----

    const coords = [latitude, longitude]
    // console.log(this);
    this.#map = L.map('map').setView(coords,this.#mapZoomLevel);
    // console.log(map); map is the internal of leafLet Liberary this is not comming from the js
L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(this.#map); 

// handlink Clink on Map
this.#map.on('click', this._showForm.bind(this));

       this.#workouts.forEach(work => {
            // this._renderWorkout(work);
            this._renderWorkoutMarker(work);
       });

    }

    _showForm(mapE){
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();  // input field of the inputDistance field will be focused on,

    }

    _hideForm(){
        // Empty  Inputs
        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';

        form.style.display = 'none';
        form.classList.add('hidden');
        setTimeout(()=> (form.style.display = 'grid'), 1000);
    }

    _toggleElevationField(){
            inputElevation.closest('.form__row').classList.toggle('form__row--hidden')
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    }

    _newWorkout(e){

        const validInputs = (...inputs) => inputs.every(inp => Number.isFinite(inp));

        const allPositive = (...inputs) => inputs.every(inp => inp > 0);

        e.preventDefault();

        // get data from form 
        const type = inputType.value;
        const distance = +inputDistance.value;
        const duration = +inputDuration.value;

        const {lat, lng} = this.#mapEvent.latlng;

        let workout;




        // if workout running, create running object
        if(type ==='running'){
            const cadence = +inputCadence.value;
        // check if data is valid
            if(
                // !Number.isFinite(distance) ||
                // !Number.isFinite(duration) ||
                // !Number.isFinite(cadence)

                !validInputs(distance, duration, cadence) || !allPositive(distance, duration, cadence)
            ) 
            return alert('Please Input Only Valid Number');


            workout = new Running([lat, lng], distance, duration, cadence)
        }
        // if workout cycling, create cycling object
        if(type ==='cycling'){
        // check if data is valid
            const elevation = +inputCadence.value;
                        if(!validInputs(distance, duration, elevation) || !allPositive(distance, duration)
            ) 
            return alert('Please Input Only Valid Number');

         workout = new Cycling([lat, lng], distance, duration, elevation)
        }
        // add new object to workout array
            this.#workouts.push(workout);

        // render workout on map as marker
        this._renderWorkoutMarker(workout);

        // render workout on list
        this._renderWorkout(workout)

        // hide form + clear input
        this._hideForm();
        
        this._setLocalStorage();

    }


    _renderWorkoutMarker(workout){
    L.marker(workout.coords).addTo(this.#map)
    .bindPopup(L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false, 
        closeOnClick:false,
        className:`${workout.type}-popup`, // CSS-Class name ,that we can edit customly
        
    })
)
    .setPopupContent(`${workout.type === 'running'? '🏃‍♂️': '🚴'} ${workout.description}`)
    .openPopup();
    }

    _renderWorkout(workout){
        let html = `
        <li class="workout workout--${workout.type}" data-id="${workout.id}">
          <h2 class="workout__title">${workout.description}</h2>
          <div class="workout__details">
            <span class="workout__icon">${workout.type === 'running'? '🏃‍♂️':'🚴'}</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>
        `;
        if(workout.type === 'running')
            html += `
        <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.pace.toFixed(1)}</span>
            <span class="workout__unit">min/km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${workout.cadence}</span>
            <span class="workout__unit">spm</span>
          </div>
        </li>
        `;
        if(workout.type ==='cycling')
            html += `
                  <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed.toFixed(1)}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevationGain}</span>
            <span class="workout__unit">m</span>
          </div>
        </li> 
        ` ;

        form.insertAdjacentHTML('afterend', html);
    }

    _moveToPopup(e){
        const workoutEl = e.target.closest('.workout');
        // console.log(workoutEl);


        if(!workoutEl) return;

        const workout = this.#workouts.find(work => work.id === workoutEl.dataset.id);

        // console.log(workout);


        this.#map.setView(workout.coords, this.#mapZoomLevel, {
            Animate : true,
            pan:{
                duration:1,
            }
        });
        // using the public interface
            // workout.click();
    }

    _setLocalStorage(){
       localStorage.setItem('workouts', JSON.stringify(this.#workouts));
    }

    

    _getLocalStorage(){
       const data =  JSON.parse(localStorage.getItem('workouts')); // real objects giving us

       if(!data) return;

       this.#workouts = data;

        this.#workouts.forEach(work => {
            this._renderWorkout(work);
       });

       console.log(data);

    }

    reset(){
        localStorage.removeItem('workouts');
        location.reload();
    }
}



const app = new App();



// add features 

/*
Abilty to 
   1) edit a workOut
   2) Delete Workout
   3) Delete All
   4) Sort Workouts By a certain field(distance);
   5) Re-Build Rebuild -> Running and Cycling Objects comming From Local Storage
   6) Realistic Error and Confirmation Messages;(Not Input Data is valid)
   7) Show All Workout[very Hard];
   8) drow line and shapes instead of just a point[very-Hard]
   9) Geolocation from coordinates (Run in  Faro, Portugal)

   10) display Weather -> Data for Workout

*/