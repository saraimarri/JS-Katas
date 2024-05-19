 
 
 //                   KATAS ON CODEWARS
 //                   -----------------


 //stringtoNumber
//-----------------------------------------------------------------------


function stringtoNumber1(N){
    const result = Number(N);
    return result ;
    
    } 
    
    //OR------------------------------------------------
    
    
    const stringtoNumber = function(n){
      return parseInt(n);
      }
    
    console.log(stringtoNumber("1234"));
    console.log(stringtoNumber("605"));
    console.log(stringtoNumber("1405"));
    console.log(stringtoNumber(""));
    console.log(stringtoNumber()); 
    
    
     //numberToString
    //-----------------------------------------------------------------------
    
    
      function numberToString(s){
      return s.toString();
      }
    
    
    console.log(numberToString(1234));
    console.log(numberToString(605));
    console.log(numberToString(1405));
    
    console.log(numberToString(0));
    
    //OR------------------------------------------------
    
    const NumbetoString = function(S){
    return String(S);
    
    }
    
    console.log(NumbetoString(1234));
    console.log(NumbetoString(605));
    console.log(NumbetoString(1405));
    console.log(NumbetoString("1"));
    //OR------------------------------------------------
    
    const stringTonumber=function(Num){
    
      return parseInt(Num);
    }
    
    console.log(stringTonumber(1234));
    console.log(stringTonumber(605));
    console.log(stringTonumber(1405));
    
    
      
    //NoSpace
    //------------------------------------------------------------------------
    
    function nospace(X) {
      return X.split(" ").join("");
    }
    
    // split-->  Teilen das Wort durch das Leerzeichen auf und erstellen daraus ein Array
    // join-->  convert array to string 
      
    console.log(nospace("8 j 8   mBliB8g  imjB8B8  jl  B"));
    console.log(nospace("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"));
    console.log(nospace("8aaaaa dddd r     "));
    
    //String repeat
    //------------------------------------------------------------------------
    
    function StringRepeat(n, s) {
      let result = "";
    
      for (let i = 0; i < n; i++) {
        result += s;
      }
    
      return result;
    }
    
    //OR------------------------------------------------
    
    function StringRepeat(n, s) {
      return s.repeat(n);
    }
    
    console.log(StringRepeat(6, "I"));
    console.log(StringRepeat(5, "Hello"));
    
    //Abbreviate a Two Word Name
    //------------------------------------------------------------------------
    
    function abbrevName(name) {
      let nameArray = name.split(" ");
      // split-->  Teilen Sie das Wort durch das Leerzeichen auf und erstellen Sie daraus ein Array
      // join-->  convert array to string 
      
      return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
    }
    
    
    console.log(abbrevName("Sam Harris"))
    console.log(abbrevName("patrick feeney"));
    
    
    
    //noSpace
    //------------------------------------------------------------------------
    
    function nospace(X) {
      return X.split(" ").join("");
    }
    
    console.log(nospace("sara imari"));
    