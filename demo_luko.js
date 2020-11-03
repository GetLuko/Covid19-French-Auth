// This is an adaptation onf demo.js for the much beatifull website : https://www.luko.eu/fr/page/covid19attestation


function refreshData() {
    const firstname = document.getElementById("first-name").value; //firstname
    const lastname = document.getElementById("last-name").value; //lastname
    const birthday = document.getElementById("birthdate").value; //birthday
    const lieunaissance = document.getElementById("birth-place").value; //place of born
    const address = document.getElementById("address").value; //address
    const town = document.getElementById("city").value; //city
    const zipcode = document.getElementById("post-code").value; //zipcode
    var   reason = document.getElementById('motive').value;

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

    var link = "https://covid.luko.eu/generate.html#" + serialize(data);

    document.querySelector("#url-generate > a").href = link;
    document.querySelector("#url-generate > a").innerText = link;

    var copybutton = document.getElementById("copy-btn")
    if (copybutton) {
        copybutton.click(copy(link));
    }
}

function serialize(obj) {
    var str = [];
    for(var p in obj)
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    return str.join("&");
}

function formSubmit(evt) {
    evt.preventDefault();
    refreshData();
    document.getElementById('div-url-generate').style.display = 'block';
}

function copy(value) {
    const textarea = document.createElement('textarea')
    const x = window.scrollX
    const y = window.scrollY
    textarea.value = value
    document.body.appendChild(textarea)
    textarea.focus()
    window.scrollTo(x, y)
    textarea.setSelectionRange(0, textarea.value.length)
    document.execCommand('copy')
    document.body.removeChild(textarea)
}

setTimeout(function () {
    $(document).unbind('submit');
    $(document).off('submit');
    document.addEventListener('submit', formSubmit, {capture:true});
}, 2000)

document.getElementById('div-url-generate').style.display = 'none';
document.getElementById('url-generate').style.overflowWrap = "break-word";
document.querySelector("#motive > option:nth-child(1)").disabled = true;
document.querySelector("#motive > option:nth-child(1)").selected = true;
