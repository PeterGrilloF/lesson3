function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("switch");
    // Get the output text
    var basicanual = document.getElementById("basic-anual");
    var basicmonth = document.getElementById("basic-month");
    var profanual = document.getElementById("prof-anual");
    var profmonth = document.getElementById("prof-month");
    var masteranual = document.getElementById("master-anual");
    var mastermonth = document.getElementById("master-month");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == false){
      basicanual.style.display = "block";
      profanual.style.display = "block";
      masteranual.style.display = "block";
      basicmonth.style.display = "none";
      profmonth.style.display = "none";
      mastermonth.style.display = "none";
    } else {
      basicanual.style.display = "none";
      profanual.style.display = "none";
      masteranual.style.display = "none";
      basicmonth.style.display = "block";
      profmonth.style.display = "block";
      mastermonth.style.display = "block";
    }
  }