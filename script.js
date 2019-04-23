function validateForm() {
    var x = document.forms["myForm"]["cost"];
    var y = document.forms["myForm"]["discount"];

    var i =100- y;
 
    var amount = (i * x)/100;
    
    document.getElementById("result").innerHTML = amount;
    
    

}
// var x = document.getElementById("btn1").value;
//   document.getElementById("demo").innerHTML = x;