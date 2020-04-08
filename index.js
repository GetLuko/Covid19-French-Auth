window.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("field-firstname").value = urlParams.get("f"); //firstname
    document.getElementById("field-lastname").value = urlParams.get("l"); //lastname
    document.getElementById("field-birthday").value = urlParams.get("b"); //birthday
    document.getElementById("field-lieunaissance").value = urlParams.get("p"); //place of born
    document.getElementById("field-address").value = urlParams.get("a"); //address
    document.getElementById("field-town").value = urlParams.get("c"); //city
    document.getElementById("field-zipcode").value = urlParams.get("z"); //zipcode
});

