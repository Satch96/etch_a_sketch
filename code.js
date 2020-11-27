const container = document.querySelector("#container");

function grid_size(size){

    let h_w = 640/size;
    
    for (let i = 0; i < size*size; i++){
        
        let square = document.createElement("div");
        square.style.float = "left";
        square.classList.add("box");
        square.style.height = +h_w+"px";
        square.style.width = +h_w+"px";
        
        if (i%size==0){
            square.style.clear = "left";
        }
        container.appendChild(square);
    }
}

// initial grid
grid_size(16);
let squares = document.querySelectorAll(".box");

for (let i = 0; i < squares.length; i++){
    squares[i].addEventListener('mouseenter', ()=>{
        squares[i].classList.add("colour");
    })
};


function get_grid_size(){
    
    for (let i = 0; i < squares.length; i++){
        squares[i].classList.remove("colour");
    };

    number = document.getElementById("value").valueAsNumber;
    
    if (number > 0){
        for (let i = 0; i < squares.length; i++){
            container.removeChild(squares[i]);
        }

        grid_size(number);
        squares = document.querySelectorAll(".box");

        for (let i = 0; i < squares.length; i++){
            squares[i].addEventListener('mouseenter', ()=>{
                squares[i].classList.add("colour");
            })
        };
    }
}
