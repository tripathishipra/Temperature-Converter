let cel = document.getElementById("cel");
let fah = document.getElementById("fah");

function fun() {
  let c = cel.value;
  let f = (c * 9) / 5 + 32;
  if (!Number.isInteger(f)) {
    f = f.toFixed(4);
  }
  fah.value = f;
}

function fun1() {
    let f = fah.value;
    let c = ((f - 32) * 5) / 9;
  
    if (!Number.isInteger(c)) {
      c = c.toFixed(4);
    }
    cel.value = c;
  }
  


// cel.addEventListener("input" , function(){
//     let c = this.value;
//     let f = (c * 9/5) + 32;

//     fah.value = f;
// })

// fah.addEventListener("input" , function(){
//     let f = this.value;
//     let c = (f - 32) *  5/9 ;

//     if (!Number.isInteger(c)) {
//         c = f.toFixed(4);
//     }

//     cel.value = c;
// })
