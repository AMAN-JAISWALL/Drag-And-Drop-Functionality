let leftBox = document.getElementById("left");
let rightBox = document.getElementById("right");
let lists = document.querySelectorAll(".list");

for(let list of lists ){

    list.addEventListener("dragstart",(e)=>{
        console.log("dragstart",e.target);
        let selected = e.target;

        rightBox.addEventListener("dragover",(e)=>{
            e.preventDefault();
        })
        rightBox.addEventListener("drop",()=>{
            rightBox.appendChild(selected);
            selected = null;
        })

        leftBox.addEventListener("dragover",(e)=>{
            e.preventDefault();
        });

        leftBox.addEventListener("drop",()=>{
            leftBox.appendChild(selected);
            selected= null;
        })
    });

    




}