let newobject = {
    fullname: "Moe Alheleji",
    age: 22,
    favecolor: "black",
    likespizza: true,
}

let favecolor = newobject.favecolor; 
// let favecolor = newobject["favecolor"]
console.log (favecolor);

newobject.fullname = "Alheleji";
console.log(newobject.fullname);

delete newobject.likespizza;
console.log(newobject)


newobject.likescookies = true;
console.log(newobject)
