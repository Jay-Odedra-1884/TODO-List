let addBtn = document.querySelector("#addBtn");
let inp = document.querySelector(".inp");

addBtn.addEventListener("click", function() {
    if (inp.value.trim() !== "") {
        let listItem = document.createElement("li");
        let ul = document.querySelector("ul");

        let checkBox = document.createElement("input");
        checkBox.type = "checkbox";

        let delBtn = document.createElement("span");
        delBtn.classList.add("material-symbols-outlined");
        delBtn.innerHTML = "delete";

        listItem.appendChild(checkBox);
        listItem.appendChild(document.createTextNode(inp.value));
        listItem.appendChild(delBtn);

        listItem.classList.add("adding");
        ul.prepend(listItem);


        listItem.offsetHeight; 

        // Remove the "adding" class after the animation
        setTimeout(() => {
            listItem.classList.remove("adding");
        }, 10); 

        inp.value = "";
    }
});

let ul = document.querySelector("ul");

ul.addEventListener("click", function(event) {
    if (event.target.classList.contains("material-symbols-outlined")) {
        let listItem = event.target.parentElement;
        listItem.classList.add("removing");

        // Remove the item after the animation
        setTimeout(() => {
            listItem.remove();
        }, 300); 
    }

    if (event.target.type === "checkbox") {
        let listItem = event.target.parentElement;
        listItem.classList.toggle("check");
    }
});




