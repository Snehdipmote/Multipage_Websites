let pattern="Pw"
let flag='gi'
let flag2='g'
// flag  g is global and i is case insensitive which means while lokking for pattern Pw it not only looks for Pw but also looks for pW,PW,pw.
// if you remove i from flag it looks only for exact match
let reg1= new RegExp(pattern)
let reg2= new RegExp(pattern,flag)
let reg3= /pw/gi
let reg4= new RegExp(pattern,flag2)
// reg2 and reg3 are same just ways of creating are different
let stringtocheck="PW is growing at a rapid speed and recently they are working on Pwskills to create skills based pwcontent"
// using regex to check
let result=reg2.test(stringtocheck)
console.log(result)
// true
let result2=reg3.test(stringtocheck)
console.log(result2)
// using string to match
console.log(stringtocheck.match(reg1))
// [
//   'Pw',
//   index: 64,
//   input: 'PW is growing at a rapid speed and recently they are working on Pwskills to create skills based pwcontent',
//   groups: undefined
// ]
let result3=stringtocheck.match(reg3)
console.log(result3)
// [ 'PW', 'Pw', 'pw' ]
let result4=stringtocheck.match(reg4)
console.log(result4)
// [ 'Pw' ]
// replacing
// let replace Pw by P-W
let result5=stringtocheck.replace(reg3,'P-W')
console.log(result5)
// P-W is growing at a rapid speed and recently they are working on P-Wskills to create skills based P-Wcontent


// Now when you get url sometimes it contains %20 instead of white spaces so you want to replace it with -
const url="https://pwskills.com/hitesh%20choudhary"
const reg7=/%20/gi
let useurl1=url.replace(reg7,'-')
console.log(useurl1)
// but it will only replace %20 not any other
// https://pwskills.com/hitesh-choudhary

const reg8=/%\d0/gi
// but it will only replace %any digit 0 not any other
let useurl2=url.replace(reg8,'-')
console.log(useurl2)
// https://pwskills.com/hitesh-choudhary

const reg=/%\d\d/gi
// it will replace % and any two digits not any other
let useurl3=url.replace(reg,'-')
console.log(useurl3)
//https://pwskills.com/hitesh-choudhary
