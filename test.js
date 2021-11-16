test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); 
})


test("One dollar should be 127.9 Yen", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const yen = fromDollarToYen(3.5)

    // if 1 dollar is 127.9 yen, then 3.5 $ should be (3.5 * 127.9)
    const expected = 3.5 * 127.9; 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(3.5)).toBe(447.65); 
})

test("One Yen should be 0.8 Pound", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its suppoed to be used
    const pound = fromYenToPound(3.5)

    // if 1 yen is 0.8 pound, then 3.5 yen should be (3.5 * 0.8)
    const expected = 3.5 * 0.8; 
    
    // this is the comparison for the unit test
     expect(fromYenToPound(3.5)).toBe(2.8000000000000003); 
})