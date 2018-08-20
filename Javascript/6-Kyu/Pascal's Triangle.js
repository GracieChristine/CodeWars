// Write a function that, given a depth (n), returns a single-dimensional array representing Pascal's Triangle to the n-th level.
//
// For example:
//
// pascalsTriangle(4) == [1,1,1,1,2,1,1,3,3,1]

function pascalsTriangle(n) {
  let arr = [];
  let i = 0;
  let currentRow = 1;
  let currentRowIndex = 1;
  function r(){
    i++
    if(currentRow <= n){
        if(currentRow === currentRowIndex || currentRowIndex ===1){
          arr.push(1);
        } else {
            arr.push((arr[(i-currentRow)-1]+arr[((i-currentRow)+1)-1]))
        }
        if(currentRow === currentRowIndex){
          currentRow++;
          currentRowIndex = 1;
        } else {
          currentRowIndex++;
        }
        r();
    }
  }
  r()
  return arr
}
