const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}


const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
  const newDiv = document.createElement('div');
  const targetCloneDiv = document.querySelector('.displayedsquare-wrapper');
  newDiv.className = ('displayedsquare '+e.target.classList[1]);
  targetCloneDiv.appendChild(newDiv);
}
const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

  

// function cloneSquare(){
//   const originalSquare = document.querySelector('.actionsquare');
//   const clonedSquare = originalSquare.cloneNode(false);
//   const targetCloneDiv = document.querySelector('.displayedsquare-wrapper');
//   targetCloneDiv.appendChild(clonedSquare);
// }

// originalSquare.addEventListener('click', function() {
//   const className = square.className;
//   console.log('Class Name:', className);
// })

// TO DO: Every time a square is clicked:
//        Create a new <div> with class with the same color

// create a new div

