//////////////Function Constructor:FC

//Object literal
var john={
    name: 'John',
    yearOfBirth :1990,
    job: 'teacher'
    };


// Other way of creating objects, *FC
var Person= function(name,yearOfBirth,job){
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;    
};

//Inheritance , function gets attached to Person object
Person.prototype.calculateAge=function(){
        console.log(2016-this.yearOfBirth);    
};

//Inheritance, Adding properties
Person.prototype.lastName='Smith';

// Inheritance check
Person.prototype.findError=function(){
        console.log(2016-this.abc);    
};


//Instanciating Person Object
var john= new Person('John',1990,'teacher');
var jane= new Person('Jane',1969,'homemaker');
var mark= new Person('Mark',1961,'banker');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();
mark.findError();
console.log(Person);
console.log(john);





//////////////Object.create


var personProto ={

    calculateAge: function(){
        console.log(2016-this.yearOfBirth);
    }
};

var sachin=Object.create(personProto);
sachin.name='sachin';
sachin.yearOfBirth=1900;
sachin.job='teacher';

/*
var jane =Object.create(personProto,
                        {
    name:{name:'Jane'},
    yearOfBirth:{value:1990},
    job :'Designer'
});
*/



//////////////////Primitives vs Objects

var a= 23;
var b=a;
a=46;
console.log(a);
console.log(b);


var obj1={
    name: 'John',
    age:29
}
var obj2=obj1;
obj1.age=25;

console.log(obj1.age);
console.log(obj2.age);



////////////////Functions are objects in java.
/*
1. A function is an instance of Object
2. We can store function in an variable
3. We can pass a function as an argument to another function.
4. We can return a functionr from another function.
*/

// Passing functions as arguments. we have done this in event listener workshop.
var years=[1990,1965,1937,2005,1998];

function arrayCalc(arr, fn){
    var arrRes=[];
    for(var i=0;i<arr.length;i++){
           arrRes.push(fn(arr[i]));     
    }
    return arrRes;
}

function calculateAge(el){
    return 2016-el;
}

function isFullaAge($){
    return $>=18;
}

function maxHeartRate($){
    return $>=18? Math.round(206.9 -(0.67* $)):-1;
}

var ages=arrayCalc(years,calculateAge); //calculateAge is called call back function, its just called later.
var isAdult=arrayCalc(ages,isFullaAge);
var rates= arrayCalc(ages,maxHeartRate);
console.log(ages);
console.log(isAdult);
console.log(rates);


/////////////////Functions Returning functions

function interviewQuestion(job){
    
    if(job==='designer'){
        return function(name){
         console.log('Hi ' + name + ', Can you please explain what is UX design is?');   
        };
        
    }else if(job==='teacher'){
        return function(name){
            console.log('Hi ' +name + ', What subject do you specialize in?');   
        };
        
    }else{
         return function(name){
            console.log('Hi ' +name + ', What do you do?');   
        };
    }
}

var teacherQuestion=interviewQuestion('teacher'); // returns a function.
teacherQuestion('John'); // calling the returned function.

var designerQuestion=interviewQuestion('designer');

designerQuestion('Jane'); //Can make multiple calls
designerQuestion('Sachin');
designerQuestion('Tej');
interviewQuestion('teacher')('Mark'); //Direct invocation;


//////////////Immediately invoked javascript functions IIFE

function game(){
    var score=Math.random()*10;
    console.log(score>=5);
}

// IIFE example, its also an anonymus function/Function expression
(function(){
    var score=Math.random()*10;
    console.log(score>=5);
})();

(function(gL){
    var score=Math.random()*10;
    console.log(score>=(5-gL));
})(10);


/////////////////Closures

function retirement(retirementAge){
    var a =' years left until retirement';
    return function(yearOfBirth){
        var age=2016-yearOfBirth;
        console.log((retirementAge-age) + a);
    }    
}

var retirementUS= retirement(66);


retirement(45)(2000);
var retirementGermany= retirement(65);

var retirementIceland= retirement(67);
retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);

//Inner function always has access to the variables and paramteres of its outer function, even after outer function has returned.

// rewriting using closures
function interviewQuestionClosure(job){
 
    return function(name){
    if(job==='designer'){
     
         console.log('Hi ' + name + ', Can you please explain what is UX design is?');   
        
        
    }else if(job==='teacher'){
       
            console.log('Hi ' +name + ', What subject do you specialize in?');   
    
        
    }else{
         
            console.log('Hi ' +name + ', What do you do?');   
        
    }
 };
}

interviewQuestionClosure('designer')('Parshuram');

/////////////// Bind call and apply methods




var john={
    name: 'John',
    age:26,
    job: 'teacher',
    presentation : function (style, timeOfDay){
    
    if(style==='formal'){
    console.log('Good '+ timeOfDay + 'Ladies and gentlemen I\'m '+ this.name+ ' doing '+this.job+ ' of age '+ this.age)
    
    }else if(style==='friendly'){
          console.log('Good '+ timeOfDay + ' Ladies and gentlemen I\'m '+ this.name+ ' doing '+this.job+ ' of age '+ this.age)
    }
    
}
};


var emily={
    name: 'Emily',
    age : 35,
    job : 'designer'
};

john.presentation('formal','morning');
john.presentation.call(emily,'friendly','afternoon');// This is called method borrowing

///john.presentation.apply(emily,['friendly','afternoon']);



var johnFriendly = john.presentation.bind(john,'friendly');

johnFriendly('morning');

johnFriendly('boobi ');


//var johnFriendly = john.presentation.bind(emily,'formal');

var emilyFriendly = john.presentation.bind(emily,'friendly');

emilyFriendly('night');


/////////////Coding Challenge////////////

(function(){

function Question(question,answers,correct){
    this.question=question;
    this.answers=answers;
    this.correct=correct;
}

Question.prototype.displayQuestion=function(){
    console.log(this.question);
    for(var i=0;i<this.answers.length;i++){
       console.log(i +':'+ this.answers[i]);
    }
}

Question.prototype.checkAnswer=function(ans){
    if(ans===this.correct){
        console.log("correct answer!");
    }else{
        console.log("answer is incorrect :(");
    }
}
var q1=new Question('Is javascript the coolest programming language in the world?',
                    ['Yes','No'],
                    0
);

var q2=new Question('Whats the name of this course\'s teacher?',
                    ['john','emily','jonas'],
                    2
);
var q3=new Question('What does best describe coding?',
                                    ['Boring','Hard','Fun'],
                                    2
                );

    function nextQuestion(){
              
                var question= [q1,q2,q3];

                var n=Math.floor(Math.random()*question.length);

                question[n].displayQuestion();
        var answer=prompt('Please input the correct answer.');
               
        if(answer!=='exit'){
           
                question[n].checkAnswer(parseInt(answer));
            nextQuestion();
  
        }
}
    nextQuestion();
})();





