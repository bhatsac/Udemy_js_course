//////////////////////Arrays/////////////////////////////
    /*var names=['sachin','padma','ankit']; 
    var years =new Array(1987,1987,1984);

    console.log(names);
    names[2]='Bala';
    console.log(names);

    var sachin=['sachin',1987,'Single','Single','Cycling'];

    sachin.push('hareKrishna');
    var index=sachin.indexOf('Single');

    console.log(index);
    console.log(sachin);*/

/////////////////////////////////////////////////////////

////////////////////Objects//////////////////////////////

    ///////////////////Style 1
      /*  var sachin ={
            name: 'Sachin',
            lastName:'Bhat',
            yob:1987,
            job:'developer',
            isMarried:'Single'
        }

        console.log(sachin);
        console.log(sachin.lastName);//Accessing the members.. object style accessing

        console.log(sachin.lastName);
        console.log(sachin['lastName']);//Accessing the members.. Array style
        var name='name'
        console.log(sachin[name]+ ' Accessing using variable')
        sachin['lastName']='Tichkule';//Data Mutation

        console.log(sachin);
    ////////////////Style 2
        var jane= new Object();
        jane.name='Jane';
        jane.lastname='Smith';
        jane['yob']=1993;
        jane.married='Single';
        console.log(jane);
*/
/////////////////OBJECTS AND METHODS/////////////////////////////


//v1.0
/*    var john = {

        name: 'John',
        lastName: 'Smith',
        yearOfBirth: 1990,
        job: 'teacher',
        isMarried: false,
        family:['Jane','Mark','Bob'],
        calculateAge: function(yearOfBirth){
            return 2016-yearOfBirth;
        }
    };



    console.log(john);
    console.log(john.family);//accessing the members
    console.log(john.family[2]);//accesing array member elements.
    console.log(john.calculateAge(john.yearOfBirth));

    //v1.1
    var john1 = {

        name: 'John',
        lastName: 'Smith',
        yearOfBirth: 1987,
        job: 'teacher',
        isMarried: false,
        family:['Jane','Mark','Bob'],
        calculateAge: function(){
            return 2016-this.yearOfBirth;
        }
    };


    console.log(john1);
    console.log(john1.family);//accessing the members
    console.log(john1.family[0]);//accesing array member elements.
    var age=john1.calculateAge();

    john1.age=age;//Adding the age to the object
    console.log(john1);

    //v1.2
    var john2 = {

        name: 'John',
        lastName: 'Smith',
        yearOfBirth: 1987,
        job: 'teacher',
        isMarried: false,
        family:['Jane','Mark','Bob'],
        calculateAge: function(){
           // return 2016-this.yearOfBirth;
            this.age=2016-this.yearOfBirth;
        }
    };

    john2.calculateAge();
    console.log(john2);


    //v1.3
    var mike = {
        yearOfBirth: 1950,
        calculateAge: function(){
           // return 2016-this.yearOfBirth;
            this.age=2016-this.yearOfBirth;
        }
    };

    mike.calculateAge();
    console.log(mike);*/
////////////////////////////////////////////////////////////////

////////////////////////LOOPS AND ITERATION/////////////////////

for(var i=0 ;i<10;i++){
    console.log(i);
}


var names =['John','Jane','Mary','Mark','Bob'];

//for loops
for(var i=0 ;i<names.length;i++){
    console.log(names[i]);
}

for(var i=names.length-1 ;i>=0;i--){
    console.log(names[i]);
}
 //while
var i=0;
while(i<names.length){
     console.log(names[i]);
    i++;
}











