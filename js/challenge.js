// counter and plus 1 functions //
const counter = document.querySelector("#counter");    
const plus = document.querySelector("#plus");
    // function adds 1 to counter value //
      function incrementCounter(event) {
        console.log("hello")
      counter.innerText = parseInt(counter.innerText) + 1}
    // uses callback to adds 1 every 1 second // 
      let interval = setInterval(incrementCounter, 1000)
    // uses callback to add 1 with plus button //
      plus.addEventListener("click", incrementCounter)

// Subtract 1 //
// adds minus variable to html element id minus //
const minus = document.getElementById("minus");
    // adds minus variable to decrement function callback //  
    minus.addEventListener("click", decrementInterval)
    // function subtracts 1 from timer //
    function decrementInterval(event) {
      counter.innerText = parseInt(counter.innerText) - 1}

// Pause //
// pause variable connected to pause button ID //
const pause = document.querySelector("#pause"); 
    // Pause set to fault. Used for if else conditional toggle. //
      let paused = false
    // connects pause variable to pause event //
      pause.addEventListener("click", togglePause)
    // toggle function //
      function togglePause(event) {
        paused = !paused
        if (paused) {
        clearInterval(interval) // causing interval to add 2? //
        pause.innerText = "resume" // fills innerText of #pause via pause variable //
        console.log("orange")
      } else {
        interval = setInterval(incrementCounter, 1000) // invokes incrementCOunter callback, every 1 second //
        pause.innerText = "pause" // fills innerText of #pause //
        console.log("banana")
      }}

//like button //
//let numberTracker be an empty object // 
let numberTracker = {}
// assign heart variable to heart button event //
const heart = document.querySelector("#heart")
    // assigning heart variable to adlike function eventLIstener// 
    heart.addEventListener("click", addLike)
    // function adlike 
    function addLike() {
      let second = counter.innerText
      numberTracker[second] = numberTracker[second] || 0
      numberTracker[second] += 1
      renderLikes()
    }
// assign likes variable to unlisted item with id likes //
const likes = document.querySelector("ul.likes")
//Render likes as li in div id list

function renderLikes(){
  likes.innerText = ""
  for (let key in numberTracker){
    const li = document.createElement("li")
    li.innerText = `${key} has been liked ${numberTracker[key]} times.`
    likes.append(li)
  }
}

function handleSubmit(event){
  event.preventDefault()
  const comment = event.target.querySelector("input")
  //const comment = event.target.comment.value
  //console.log(event.target.elements)
  const li = document.createElement("li")
  li.innerText = comment
  comments.append(li)
  event.target.reset()
}





// Pause function //
  // function togglePause(event) {
  //   console.log("yoyo")
  // }
// // like funtion // 
//   function like(event) {
//     // createElement("li")
//     // counter.innerText + " has been liked"
//     console.log("HI")
//   }


// edgar letulip story
  // const num = document.querySelector("#counter");
// let counter = 0;
// num.innerText = counter;


// let num = 0;
//     counter.innerText = num;

//     timer = setInterval(function() {
//       num++;
//       counter.innerText = num;
//     }, 1000);

// pauseValue = clearInterval(num) {
//   console.log( pauseValue)
// }






// timer = setInterval(function() {
//   counter++;
//   num.innerText = counter;
// }, 1000);

// pauseValue = clearInterval(timer) {
  
// }





// function pauseTimer() {
// savedTime = time;
// clearInterval()


// )
// }
// pause.addEventListener('click', pauseTimer() {
//   if click
//   return counter.innerText
//   append.h1
// })
// // }
// document.clearInterval(timer)



