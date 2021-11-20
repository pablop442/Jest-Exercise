test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); 
})


test("One dollar should be 127.9 Yen", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(3.5)).toBe(447.65); 
})

test("One Yen should be 0.8 Pound", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')
    
    // this is the comparison for the unit test
     expect(fromYenToPound(3.5)).toBe(2.8000000000000003); 
})