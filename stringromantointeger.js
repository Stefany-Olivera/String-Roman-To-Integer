var romanToInt = function(r) {
    const values = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let i = r.length;
    let integer = 0;
    
    while (i--) {
        var curr = values[r.charAt(i)];
        //"The String object's charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string".
        //Taken from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
        var prev = values[r.charAt(i - 1)];
        
        integer += curr; 
        
        if (prev < curr) {
            integer -= prev; 
            i -= 1;
    }

        }
    return integer;
}

romanToInt('X')

//This will return 10.