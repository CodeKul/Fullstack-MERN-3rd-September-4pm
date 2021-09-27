function addNumbers() {
    let a = parseInt(document.getElementById("num1").value);

    let b = parseInt(document.getElementById("num2").value);

    //document.write(parseInt(a)+parseInt(b));
    //document.write(a+b)
    document.getElementById("result").innerHTML = a+b;

    if(a+b < 10) {
        console.log("total value is less than 10")
    } else if(a+b > 20) {
        console.log("total value is greater than 20")
    } else if(a+b >30) {
        console.log("total value is greater than 30")
    }
    
  }