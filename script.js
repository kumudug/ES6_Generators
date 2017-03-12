function logger(){
    console.log('-----normal js function-----');
    console.log('start');
    console.log('end');
    console.log('\r\n');
}

function* createLogger(){
    console.log('-----ES6 generator function-----');
    console.log('start');
    console.log('end');
    console.log('\r\n');
}

function* createLogger2(){
    console.log('-----ES6 generator function with pause-----');
    console.log('start');
    console.log('break');
    yield; //use to pause the execution
    console.log('end');
    console.log('\r\n');
}

function* createLogger3(){
    console.log('-----ES6 generator function with back and forth communication-----');
    console.log('start');
    console.log('break');
    var returnVal = yield 'value from generator to executor'; //use to pause the execution
    console.log(returnVal);

    console.log('end');
    console.log('\r\n');
}

function* createLogger4(){
    console.log('-----ES6 generator function with error handling-----');
    try{
        var word = yield;
        console.log('Hello ${word}');
    } catch(err){
        console.log('Error', err);
    }
    console.log('end');
    console.log('\r\n');
}

function* createLogger5(){
    console.log('-----ES6 generator function iterate using for of-----');
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    console.log('\r\n');
}

function* create4To5(){
    yield 4;
    yield 5;
}
function* createLogger6(){
    console.log('-----ES6 generator function controll passing with yeild*-----');
    yield 1;
    yield 2;
    yield 3;
    yield* create4To5();
    yield 6;
    yield 7;
    console.log('\r\n');
}


logger();

var logger1 = createLogger();
logger1.next();

var logger2 = createLogger2();
logger2.next();
logger2.next();//second call is to resume the paused function

var logger3 = createLogger3();
console.log(logger3.next());
logger3.next('value sent into the generator');

var logger4 = createLogger4();
logger4.next();
logger4.throw('something went wrong');

var logger5 = createLogger5();
for(let i of logger5){
    console.log(i);
}

var logger6 = createLogger6();
for(let i of logger6){
    console.log(i);
}