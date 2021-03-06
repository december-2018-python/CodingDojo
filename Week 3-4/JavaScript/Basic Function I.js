



function a(){
    return 35;
}
console.log(a())


//   -|-
// a()|35


// Output:
// 35

// Correct
// 1 of 1

// ----------------------------------------------------



function a(){
    return 4;
}
console.log(a()+a());

//   -|-
// a()|4


// Output:
// 8


// Correct
// 2 of 2

// ----------------------------------------------------


function a(b){
    return b;
}
console.log(a(2)+a(4));


//   -|-
//   b|2
// a()|2
//   b|4
// a()|4



// Output:
// 6

// Correct
// 3 of 3


// ----------------------------------------------------




function a(b){
    console.log(b);
    return b*3;
}
console.log(a(3));


//   -|-
//   b|3
// a()|9

// Output:
// 3
// 9


// Correct
// 4 of 4


// ----------------------------------------------------


function a(b){
   return b*4;
   console.log(b);
}
console.log(a(10));

//   -|-
//   b|10
// a()|40


// Output:
// 

// False
// 4 of 5

// ----------------------------------------------------


function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));


//   -|-
//   b|15
// a()|4

// Output:
// 4

// Correct
// 5 of 6

// ----------------------------------------------------


function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );

//   -|-
//   b|3
//   b|10
// a()|30


// Output:
// 10
// 3
// 30

// Correct
// 6 of 7


// ----------------------------------------------------


function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);

//   -|-
// 


// Output:
// 3
// 4

// Correct
// 7 of 8


// ----------------------------------------------------


function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();

// -|-
// i|0
// i|2
// i|3
// i|5
// i|6
// i|8
// i|9
// i|11



// Output:
// 2
// 5
// 8
// 11

// Correct
// 8 of 9



// ----------------------------------------------------


function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));


//   -|-
//   b|0
//   c|10
//   i|0
//   i|1
//   i|2
//   i|3
//   i|4
//   i|5
//   i|6
//   i|7
//   i|8
//   i|9
//   i|10
// a()|0
//   b|0
//   c|10
//   i|0
//   i|1
//   i|2
//   i|3
//   i|4
//   i|5
//   i|6
//   i|7
//   i|8
//   i|9
//   i|10
// a()|0


// Output:
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 0

// Correct
// 9 of 10



// ----------------------------------------------------


function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}

// It wouldn't actually do anything because the function has not been called.  But if it was.....

// Correct
// 10 of 11

//   -|-
//   i|0
//   j|0
//   j|1
//   j|2
//   j|3
//   j|4
//   j|5
//   j|6
//   j|7
//   j|8
//   j|9
//   j|10
//   i|1
//   j|0
//   j|1
//   j|2
//   j|3
//   j|4
//   j|5
//   j|6
//   j|7
//   j|8
//   j|9
//   j|10
//   i|2
//   i|1
//   j|0
//   j|1
//   j|2
//   j|3
//   j|4
//   j|5
//   j|6
//   j|7
//   j|8
//   j|9
//   j|10
//   i|3
//   i|1
//   j|0
//   j|1
//   j|2
//   j|3
//   j|4
//   j|5
//   j|6
//   j|7
//   j|8
//   j|9
//   j|10
//   i|4
//   i|1
//   j|0
//   j|1
//   j|2
//   j|3
//   j|4
//   j|5
//   j|6
//   j|7
//   j|8
//   j|9
//   j|10
//   i|5
//   i|1
//   j|0
//   j|1
//   j|2
//   j|3
//   j|4
//   j|5
//   j|6
//   j|7
//   j|8
//   j|9
//   j|10
//   i|6
//   i|1
//   j|0
//   j|1
//   j|2
//   j|3
//   j|4
//   j|5
//   j|6
//   j|7
//   j|8
//   j|9
//   j|10
//   i|7
//   i|1
//   j|0
//   j|1
//   j|2
//   j|3
//   j|4
//   j|5
//   j|6
//   j|7
//   j|8
//   j|9
//   j|10
//   i|8
//   i|1
//   j|0
//   j|1
//   j|2
//   j|3
//   j|4
//   j|5
//   j|6
//   j|7
//   j|8
//   j|9
//   j|10
//   i|9
//   i|1
//   j|0
//   j|1
//   j|2
//   j|3
//   j|4
//   j|5
//   j|6
//   j|7
//   j|8
//   j|9
//   j|10
//   i|10




// Output:
// 0,1,2,3,4,5,6,7,8,9,0,0,1,2,3,4,5,6,7,8,9,1,0,1,2,3,4,5,6,7,8,9,2,0,1,2,3,4,5,6,7,8,9,3,0,1,2,3,4,5,6,7,8,9,4,0,1,2,3,4,5,6,7,8,9,5,0,1,2,3,4,5,6,7,8,9,6,0,1,2,3,4,5,6,7,8,9,7,0,1,2,3,4,5,6,7,8,9,8,0,1,2,3,4,5,6,7,8,9,9,0,1,2,3,4,5,6,7,8,9



// ----------------------------------------------------


function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}

// again, wouldn't actually do any of this until called, but I wasn't sure of the expectations here.

// Correct
// 11 of 12


// -|-
// i|0
// j|0
// j|1
// j|2
// j|3
// j|4
// j|5
// j|6
// j|7
// j|8
// j|9
// j|10
// i|1
// j|0
// j|1
// j|2
// j|3
// j|4
// j|5
// j|6
// j|7
// j|8
// j|9
// j|10
// i|2
// j|0
// j|1
// j|2
// j|3
// j|4
// j|5
// j|6
// j|7
// j|8
// j|9
// j|10
// i|3
// j|0
// j|1
// j|2
// j|3
// j|4
// j|5
// j|6
// j|7
// j|8
// j|9
// j|10
// i|4
// j|0
// j|1
// j|2
// j|3
// j|4
// j|5
// j|6
// j|7
// j|8
// j|9
// j|10
// i|5
// j|0
// j|1
// j|2
// j|3
// j|4
// j|5
// j|6
// j|7
// j|8
// j|9
// j|10
// i|6
// j|0
// j|1
// j|2
// j|3
// j|4
// j|5
// j|6
// j|7
// j|8
// j|9
// j|10
// i|7
// j|0
// j|1
// j|2
// j|3
// j|4
// j|5
// j|6
// j|7
// j|8
// j|9
// j|10
// i|8
// j|0
// j|1
// j|2
// j|3
// j|4
// j|5
// j|6
// j|7
// j|8
// j|9
// j|10
// i|9
// j|0
// j|1
// j|2
// j|3
// j|4
// j|5
// j|6
// j|7
// j|8
// j|9
// j|10
// i|10


// Output:
// 0,0,0,1,0,2,0,3,0,4,0,5,0,6,0,7,0,8,0,9,10,0,1,0,1,1,1,2,1,3,1,4,1,5,1,6,1,7,1,8,1,9,10,1,2,0,2,1,2,2,2,3,2,4,2,5,2,6,2,7,2,8,2,9,2,10,2,3,0,3,1,3,2,3,3,3,4,3,5,3,6,3,7,3,8,3,9,3,10,3,4,0,4,1,4,2,4,3,4,4,4,5,4,6,4,7,4,8,4,9,4,10,4,5,0,5,1,5,2,5,3,5,4,5,5,5,6,5,7,5,8,5,9,5,10,5,6,0,6,1,6,2,6,3,6,4,6,5,6,6,6,7,6,8,6,9,6,10,6,7,0,7,1,7,2,7,3,7,4,7,5,7,6,7,7,7,8,7,9,7,10,7,8,0,8,1,8,2,8,3,8,4,8,5,8,6,8,7,8,8,8,9,8,10,8,9,0,9,1,9,2,9,3,9,4,9,5,9,6,9,7,9,8,9,9,9,10,9






// ----------------------------------------------------

var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);

// -|-
// z|10

// Output:
// 10

// Correct
// 12 of 13

// ----------------------------------------------------

var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);

// -|-
// z|10  (global)
// z|15 (local variable)
// 



// Output:
// 15
// 10

// Correct
// 13 of 14


// ----------------------------------------------------

var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);



// -|-
// z|10  (global var)
// z|15 (local var)
// z|15 (global var)



// Output:
// 15
// 15


// Correct
// 14 of 15