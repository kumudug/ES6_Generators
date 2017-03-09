function logger(){
    console.log('-----normal js function-----')
    console.log('start');
    console.log('end');
    console.log('\r\n');
}

function* createLogger(){
    console.log('-----ES6 generator function-----')
    console.log('start');
    console.log('end');
    console.log('\r\n');
}

function* createLogger2(){
    console.log('-----ES6 generator function with pause-----')
    console.log('start');
    console.log('break');
    yield; //use to pause the execution
    console.log('end');
    console.log('\r\n');
}

function* createLogger3(){
    console.log('-----ES6 generator function with back and forth communication-----')
    console.log('start');
    console.log('break');
    var returnVal = yield 'value from generator to executor'; //use to pause the execution
    console.log(returnVal);

    console.log('end');
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