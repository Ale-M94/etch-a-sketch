const container = document.querySelector("#container");
for (let i = 0; i < 256; i++){
    const grid = document.createElement("div");
    // grid.textContent = i;
    grid.classList.add("grid");
    grid.style.width = "30px";
    grid.style.height = "30px";
    grid.style.border = "1px solid black";
    container.appendChild(grid);

    grid.addEventListener("mouseover", () =>{
        grid.style.backgroundColor = "red";
    });
};

const btn = document.querySelector("#btn");

function newGrid(){
    let userGrid = parseInt(prompt("Choose the size of the new grid (limit is set to 100)"));
    
    if(userGrid <= 100){
        const grids = document.querySelectorAll(".grid");
        grids.forEach(grid => grid.remove());
        for (let i = 0; i < userGrid; i++){
            const grid = document.createElement("div");
            // grid.textContent = i;
            grid.classList.add("grid");
            grid.style.width = "30px";
            grid.style.height = "30px";
            grid.style.border = "1px solid black";
            container.appendChild(grid);
        
            grid.addEventListener("mouseover", () =>{
                grid.style.backgroundColor = "coral";
            });
        }
        }else{
            alert("Grid size not allowed")
        }
};


btn.addEventListener("click", () => {
    newGrid();
})



