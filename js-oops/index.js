//console.log('hello world');

//objects 
//curly braces refer to object literal, inside the braces key and value pairs are contained
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y : 1
//     },
//     draw : function(){   //defining func without parameters, here draw is a method
//         console.log('draw');
//     }
// };  

// circle.draw();

//factory function : duplicating same mthod multiple times is not a good practice, so instead of that use factories concept
//we use return method in factory func
// function createCircle(radius){
//     return {   //instead of const circle, directly  return
//         radius,   //no need to specify the value for the key, add to the parameter
//         draw : function(){
//             console.log('draw');
//         }
//     };
// }

// const circle = createCircle(1);
// circle.draw();


//constructor function : we use this keyword
//this points to global object
// function Circle(radius){
//     console.log('this', this);
//     this.radius = radius;
//     this.draw = function(){
//         console.log('draw');
//     }
// }

// const another = new Circle(1);


//constructor property
