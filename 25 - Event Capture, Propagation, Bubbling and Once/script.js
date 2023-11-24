const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

//Bubbling --> especially with selectorAll -->click triggers everything nested outwards
function logText(e){
    console.log(this.classList.value);
    e.stopPropagation();
}

function clicked(){
    console.log("Clicked");
}


divs.forEach(div => div.addEventListener('click', logText));
button.addEventListener('click', clicked, {
    once:true
});


//cAPTURE START AND HAPPENS DOWNWARDS --> 
// // Default false
//bUBBLE FOLLOWS AND PRINTS UPWARDS -->
// // e.stopPropagation prevents printing nests
// cAPTURE TRUE AND PROPAGATION STOPPED PRINTS ONLY PARENT IN NESTED ELEMENTS

// eVENT LISTENERS HAVE A 3RD PARAMETER WITH CAPTURE AND ONCE
// // once CAN BE HELPFUL IN BUTTONS TO PREVENT MULTIPLE CLICKS
