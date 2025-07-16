
function countVowels(str) {
    let sum = 0
 for (const i of str){
     if (i === 'a' || 'e' || 'i' || 'o'||'u' || 'A' || 'E' || 'I' || 'O'||'U' ){
         sum++
     }
   
 }
  return sum
}

console.log(countVowels("hello"))


let name = "nitin"

console.log("hello,i am nt",name)


let tesla = {

nitn : "hello"
}
let car = { 
  cat : "not allowed"}
Object.setPrototypeOf(tesla, car);
  console.log(tesla.cat)

