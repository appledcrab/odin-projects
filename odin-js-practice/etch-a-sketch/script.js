// 16 by 16 grid of square divs for the etch-a-sketch

// Create a 16x16 grid of square divs
const gridSize = 16;
createGrid(gridSize);



function createGrid(gridSize) {
    // const container = document.querySelector('#container');
    const body = document.getElementById('body');
    const container = document.createElement('div');
    container.id = 'container';

    container.classList.add('d-flex','flex-column','align-items-center','justify-content-center','m-5','p-5');
    console.log('Creating grid');
    for(let i = 0; i< gridSize; i++){
        const div = document.createElement('div');
        div.classList.add('bg-light');
        div.classList.add('border','d-flex','flex-row','justify-content-center');

        for(let j = 0; j < gridSize; j++){
            const item = document.createElement('div');
            item.classList.add('grid-item');
            item.classList.add('p-1','border','border-red','p-2');
            item.style.opacity = .10;
            div.appendChild(item);
            
            // event listener for hover effect
            item.addEventListener('mouseover', (e) => {

                item.style.backgroundColor = 'black';
                let currentOpac = parseFloat(item.style.opacity)

                let newOpac = currentOpac + .10;
                newOpac = newOpac > 1 ? 1 : newOpac;
                item.style.opacity = newOpac;
            });
            item.addEventListener('dblclick', () =>{
                item.style.backgroundColor = 'white';
            
            })
            
            // console.log('Grid item created');
        }
        container.appendChild(div);
    }
    body.appendChild(container);
}

function clearGrid(){
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => item.style.backgroundColor = 'white');
}

function changeSize(){
    let size = prompt("Change the size? (default 16)");
    if (size == null){
        size = 16;
    }
    if (size > 100){
        size = 100;
    }

    // remove previous grid
    const container = document.getElementById('container');
    container.remove();

    // then readd by doing create grid again
    createGrid(size);

    
}

