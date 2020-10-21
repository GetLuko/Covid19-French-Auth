window.addEventListener("DOMContentLoaded", (event) => {
    var data = window.location.hash.substr(1);
    if(!data){
        // Stay compatible with previous version search param
        data = window.location.search;
    }
    console.log(data)
    const urlParams = new URLSearchParams(data);

    document.getElementById("field-firstname").value = urlParams.get("f"); //firstname
    document.getElementById("field-lastname").value = urlParams.get("l"); //lastname
    document.getElementById("field-birthday").value = urlParams.get("b"); //birthday
    document.getElementById("field-lieunaissance").value = urlParams.get("p"); //place of born
    document.getElementById("field-address").value = urlParams.get("a"); //address
    document.getElementById("field-town").value = urlParams.get("c"); //city
    document.getElementById("field-zipcode").value = urlParams.get("z"); //zipcode
    const reason = urlParams.get("r"); //reason
    document.getElementById("radio-travail").checked = (reason==='travail');
    document.getElementById("radio-sante").checked = (reason==='sante');
    document.getElementById("radio-famille").checked = (reason==='famille');
    document.getElementById("radio-handicap").checked = (reason==='handicap');
    document.getElementById("radio-convocation").checked = (reason==='convocation');
    document.getElementById("radio-missions").checked = (reason==='missions');
    document.getElementById("radio-transits").checked = (reason==='transits');
    document.getElementById("radio-animaux").checked = (reason==='animaux');

    var now = new Date()
    document.getElementById('field-datesortie').value = now.toJSON().slice(0,10);
    document.getElementById('field-heuresortie').value = now.getHours()+":"+now.getMinutes();


    document.getElementById("generate-btn").click()
});

