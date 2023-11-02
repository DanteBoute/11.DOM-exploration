const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}
const elapsedTime = getElapsedTime();

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
  const newDiv = document.createElement('div');
  const targetCloneDiv = document.querySelector('.displayedsquare-wrapper');
  newDiv.className = ('displayedsquare '+e.target.classList[1]);
  const secondClassName = e.target.classList[1];
  targetCloneDiv.appendChild(newDiv);
  const untList = document.querySelector('ul');
  const newList = document.createElement('li');
  newList.append('[' + getElapsedTime() + ']Created a new ' + secondClassName + ' square');
  untList.appendChild(newList);
}
const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

document.body.addEventListener('keypress', function(event) {
    let R = Math.floor(Math.random() * 256);
    let G = Math.floor(Math.random() * 256);
    let B = Math.floor(Math.random() * 256);
    let randomColor = "rgb(" + R + "," + G + "," + B + ")";
  if (event.key === ' ') {
    document.body.style.backgroundColor = randomColor;
    getElapsedTime();
    console.log(getElapsedTime());
    const untList = document.querySelector('ul');
    const newList = document.createElement('li');
    newList.append('[' + getElapsedTime() + ']Changed the backgroundcolor');
    untList.appendChild(newList);
}
});
////TRY ONE //// Didn't know how to alter the classes of the cloned div ////

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

