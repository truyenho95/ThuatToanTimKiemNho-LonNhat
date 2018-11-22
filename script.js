function dispArr(arr) {
  let str = '<table cellpadding="10"><tr>';
  for (let i = 0; i < arr.length; ++i) {
    str += `<td>${arr[i]}</td>`;
    if(i%10==9){
      str += "</tr><tr>";
    }
  }
  str += '</table>'
  document.write(str);
} //end function dispArr()

function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; ++i) {
     if (arr[i] < min) {
        min = arr[i];
     }
  }
  return min;
}

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; ++i) {
     if (arr[i] > max) {
        max = arr[i];
     }
  }
  return max;
}

let nums = [];
for(let i=0;i<100;++i){
   nums[i] = Math.floor(Math.random() * 101);
}
const minValue = findMin(nums);
const maxValue = findMax(nums);
dispArr(nums);
document.write("<br/>");
document.write(`<h2>The minimum value is: ${minValue}</h2>`);
document.write(`<h2>The maximum value is: ${maxValue}</h2>`);