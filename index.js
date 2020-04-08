window.addEventListener("DOMContentLoaded", (event) => {
    const all_input = document.querySelectorAll("input");
    for (index = 0; index < all_input.length; ++index) {
        all_input[index].addEventListener("focusin", refreshData);
        all_input[index].addEventListener("change", refreshData);
        all_input[index].addEventListener("input", refreshData);
        all_input[index].addEventListener("focusout", refreshData);
    }
    refreshData();
})
function refreshData() {
    const firstname = document.getElementById("field-firstname").value; //firstname
    const lastname = document.getElementById("field-lastname").value; //lastname
    const birthday = document.getElementById("field-birthday").value; //birthday
    const lieunaissance = document.getElementById("field-lieunaissance").value; //place of born
    const address = document.getElementById("field-address").value; //address
    const town = document.getElementById("field-town").value; //city
    const zipcode = document.getElementById("field-zipcode").value; //zipcode
    var reason = null;
    var radios = document.getElementsByName('field-reason');
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            reason = radios[i].value;
            break;
        }
    }
    var data = {
        f: firstname,
        l: lastname,
        b: birthday,
        p: lieunaissance,
        a: address,
        c: town,
        z: zipcode,
        r: reason
    }
    document.getElementById("generation-link").href = window.location.origin + "/generate.html?" + serialize(data);
    document.getElementById("generation-link").innerText = window.location.origin + "/generate.html?" + serialize(data);
}

function serialize(obj) {
    var str = [];
    for(var p in obj)
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    return str.join("&");
}
