function receivesAFunction(cb){
    return cb();
}

function returnsANamedFunction() {
    return function named(name){
        return name;
    }
} 

function returnsAnAnonymousFunction() {
    return function () {}
} 