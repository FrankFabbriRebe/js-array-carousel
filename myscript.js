// selection of all the elemnts with item class
const items = document.getElementsByClassName("item");
//console.log(items);

// selection of the buttons
const up = document.querySelector(".up");
//console.log(up);

const down = document.querySelector(".down");
//console.log(down);

let activeItem = 0;

//events on click up button
up.addEventListener("click", function() {

    if (activeItem < items.length - 1)  {

        //delete class active to the element
        items[activeItem].classList.remove("active");

        activeItem++;

        //add class active to the next element
        items[activeItem].classList.add("active");

    }

     //delete up button
     if (activeItem === items.length - 1)    {
        up.classList.add("hidden");
    }

    //show down button
    down.classList.remove("hidden");

});

// events on click down button
down.addEventListener("click", function() {

   if (activeItem > 0) {

        //delete class active to the element
        items[activeItem].classList.remove("active");

        activeItem--;

        //add class active to the next element
        items[activeItem].classList.add("active");

   }

    //delete down button
    if (activeItem === 0)   {
        down.classList.add("hidden")
    }

    //shoow up button
    up.classList.remove("hidden");

});
