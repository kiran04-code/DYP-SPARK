
const bar = document.getElementById("bar");
const hiddenMenu = document.getElementById("hidden");

bar.addEventListener("click", function() {
    if (hiddenMenu.style.display === "none" || hiddenMenu.style.display === "") {
        hiddenMenu.style.display = "flex";
    } else {
        hiddenMenu.style.display = "none";
    }
});
let numberElement = document.getElementById('num'); // Get the element to display the number
let currentNumber = 0  

function startIncrement() {
 let interval =    setInterval(function() {
        currentNumber++;  
      numberElement.innerText= "+" +currentNumber;
        if(currentNumber === 3892){
            clearInterval(interval)
        }
    }, 100);  
}
startIncrement()
let numberElement2 = document.getElementById('num2'); // Get the element to display the number
let currentNumber2 = 0  

function startIncrement2() {
 let interval =    setInterval(function() {
        currentNumber2++;  
      numberElement2.innerText= "+" +currentNumber2;
        if(currentNumber2 === 3892){
            clearInterval(interval)
        }
    }, 100);  
}
startIncrement2()
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });
const srcinput= document.getElementById("input1")
const dropdown2 =  document.getElementById("dropdown2")
srcinput.addEventListener("focus" ,function(){
dropdown2.style.display="block"

})

  dropdown2.addEventListener('click', (event) => {
   console.log(event.target.closest('.dropdown'))
 if (!event.target.closest('.dropdown')) {
     dropdown2.style.display = 'none';
     
     
 }

});

function selectOption(value) {
 srcinput.value = value;
 dropdown2.style.display = 'none';
srcinput.innerHTML=value

}

const button = document.getElementById("button")
const input1 =  document.getElementById("input1") 
button.addEventListener("click" , function(){
    const val = input1.value
    input1.value=""
    if( val == "dptw" ){
        window.location.href= "dptw.html"
        console.log(val)
        return true
    }
    if( val == "mmr+opv" ){
        window.location.href= "mmr+opv.html"
        console.log(val)
        return true
    }
    if( val == "influenza" ){
        window.location.href= "influ.html"
        console.log(val)
        return true
    }
    if( val == "MMR" ){
        window.location.href= "MMR.html"
        console.log(val)
        return true
    }
    if( val == "typhoid" ){
        window.location.href= "typhoid.html"
        console.log(val)
        return true
    }
    if( val == "cervicalcancer" ){
        window.location.href= "cervicalcancer.html"
        console.log(val)
        return true
    }
    if( val == "dap/td" ){
        window.location.href= "td.html"
        console.log(val)
        return true
    }
    if( val == "Rotavirusvaccine" ){
        window.location.href= "Rotavirusvaccine .html"
        console.log(val)
        return true
    }
    if( val == "Haemophilus" ){
        window.location.href= "Haemophilus.html"
        console.log(val)
        return true
    }
    if( val == "Pneumococcal" ){
        window.location.href= "Pneumococcal.html"
        console.log(val)
        return true
    }
    if( val == "Rubella" ){
        window.location.href= "Rubella.html"
        console.log(val)
        return true
    }
    if( val == "Varicella" ){
        window.location.href= "Varicella.html"
        console.log(val)
        return true
    }
    if( val == "MMR" ){
        window.location.href= "MMR.html"
        console.log(val)
        return true
    }
    if( val == "BCG Vaccine" ){
        window.location.href= "BCG.html"
        console.log(val)
        return true
    }
    if( val == "OPV" ){
        window.location.href= "OPV.html"
        console.log(val)
        return true
    }
})

const usernew = document.getElementById('user-new')
usernew.addEventListener("click",function(){
    window.location.href="influ.html"
})
var tl = gsap.timeline()
tl.from("#leftm ,span", {
  x:1500,
  delay:1, 
  duration:2, 
  opacity:0
   

})
