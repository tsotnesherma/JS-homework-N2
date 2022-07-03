let text = document.getElementById(`card`).innerHTML;
document.getElementById(`card`).innerHTML=text.replace(`bootstrap-card`,`bs-card`)
let longtext =`User interface designer and <br/> front-end developer`;
document.getElementById(`paragraph`).innerHTML= longtext;

let Name = `Abel`
let LastName= `Tesfaye`
let head = `${Name}, ${LastName}!`;
document.getElementById(`head-1`).innerHTML= head;

let string = document.getElementById(`head-2`).innerHTML;
document.getElementById(`head-2`).innerHTML=string.replace(`Nodia, U.P.`,`Toronto,Canada`);
//





const livingplace =[`Canada,Toronto`,`USA`,`France`];
console.log(livingplace);
console.log(livingplace.slice(0,1));


let strg=`    this is a proffesional web-developer, who can do challenging tasks.      `;


console.log(strg.toUpperCase);
console.log(strg.startsWith(`h`));
console.log(strg.endsWith(`.`));
console.log(strg.length);
console.log(strg.trim());


let mystring=`Hello Javascript! I am ready to learn more. <3`;
let newstring=  RegExp(`\\w+`);
console.log(newstring)


//array


