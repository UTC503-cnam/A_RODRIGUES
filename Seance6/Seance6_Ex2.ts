let tab=[1,5,2,4,3]

//version lambda
console.log("version simple")
let double = tab.map(v => v * 2);
let triple = tab.map(v => v * 3);
let square = tab.map(v => Math.pow(v,2)); // version maths
let squareSimple = tab.map(v => v*v); // version simple 
let mapMaximize_3 = tab.map(v => (v>3? 3 : v));

console.log(`double: ${double}`)
console.log(`triple: ${triple}`)
console.log(`square: ${square}`)
console.log(`squareSimple: ${squareSimple}`)
console.log(`mapMaximize_3: ${mapMaximize_3}`)

// version lambda + ordre supérieur pour triple
console.log("version avec odrdre supérieur")
let calculMap = nb => tab.map(v => v * nb);
let maxiMap = m=>tab.map(v=> (v>m ? m : v))

console.log((`double: ${calculMap(2)}`))
console.log((`triple: ${calculMap(3)}`))
console.log((`Maxi3: ${maxiMap(3)}`))
console.log((`Maxi2: ${maxiMap(2)}`))

