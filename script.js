const container = document.querySelector("#container");
const inputCount = document.getElementById('inputAns');
const colorInput = document.getElementById('colorInput');
const resetBtn =document.querySelector('.btn');
let htmlStyles = window.getComputedStyle(document.querySelector("html"));
let rowNum = parseInt(htmlStyles.getPropertyValue("--rowNum"));
let columnNum = parseInt(htmlStyles.getPropertyValue("--columnNum"));
let Cellsize = 16;
let colorNum = '#FFFFFF';
let flag = true;




colorInput.addEventListener('input' , function(e){
    colorNum= colorInput.value;
    });
    
   
    function addCells(size) {
       document.documentElement.style.setProperty("--rowNum", size);
       document.documentElement.style.setProperty("--columnNum", size);
            for(var j = 0; j < size;j++) {
                for(var i = 0;i < size;i++) {
                    let newCell = document.createElement('div');
                    newCell.className="cell"
                    container.appendChild(newCell);
                }
            }

    }
    function clearCells(){
        let child = container.lastElementChild;
        while(child) {
            container.removeChild(child);
            child = container.lastElementChild;
        }
    }
    function reset() {
        clearCells();
        addCells(Cellsize);
        let cells = document.querySelectorAll('.cell');
    cells.forEach( (cell) => {
    cell.addEventListener('mouseenter', changeColor);
        });
    }


    inputCount.addEventListener('input', function(e){
        let count = inputCount.value;
        if (count < 1 || count > 64) {
    return;
            }
        document.documentElement.style.setProperty("--rowNum", count);
       document.documentElement.style.setProperty("--columnNum", count);
       Cellsize = count;
       reset();
    });


    //change color function
    function changeColor(e) {
        
        e.target.style.backgroundColor = colorNum;
    }


    //reset button function
    resetBtn.addEventListener('click', function(e){
        flag = true;
        
                let count = inputCount.value;
        
        document.documentElement.style.setProperty("--rowNum", count);
       document.documentElement.style.setProperty("--columnNum", count);
       Cellsize = count;
       let cells = document.querySelectorAll('.cell');
    cells.forEach( (cell) => {
        cell.style.backgroundColor = 'gray';
        });
        
        
                    
    });

    



    
        //rainbow button function
    const rainbowButton = document.querySelector('.rainbowBtn');
    rainbowButton.addEventListener('click' , function(e){
        flag = false;
        
        let cells = document.querySelectorAll('.cell');
            cells.forEach( (cell) => {
                cell.addEventListener('mouseenter', function (){
                    if(flag == false){
                        colorNum = '#' + Math.floor(Math.random()*16777215).toString(16);
                        cell.style.backgroundColor = colorNum;
                        cell.style.transition ="0.3s";
                        }
                     
                    
                        if(flag == true){
                            return;
                            };
                        
                     });
    });
    

    });
    //deafault page start
    addCells(16);
    reset();
    let cells = document.querySelectorAll('.cell');
    cells.forEach( (cell) => {
    cell.addEventListener('mouseenter', changeColor);
    });