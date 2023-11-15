const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]'); 

let lastChecked;

function handleCheck(e){
    //Add Check 
    let inBetween = false;

    //Check for shift press
    if(e.shiftKey && this.checked){
        //loop over checkboxes
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if(checkbox === this || checkbox === lastChecked){
                inBetween = !inBetween;
                console.log("Test")
            }

            if(inBetween){
                checkbox.checked = true;
            }
        });
    }
    
    lastChecked = this;
    
};

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))

