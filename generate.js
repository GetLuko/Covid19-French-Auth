window.addEventListener("DOMContentLoaded", (event) => {
    var data = window.location.hash.substr(1);
    if(!data){
        // Stay compatible with previous version search param
        data = window.location.search;
    }
    const urlParams = new URLSearchParams(data);
    document.getElementById("field-firstname").value = urlParams.get("f"); //firstname
    document.getElementById("field-lastname").value = urlParams.get("l"); //lastname
    document.getElementById("field-birthday").value = urlParams.get("b"); //birthday
    document.getElementById("field-placeofbirth").value = urlParams.get("p"); //place of born
    document.getElementById("field-address").value = urlParams.get("a"); //address
    document.getElementById("field-city").value = urlParams.get("c"); //city
    document.getElementById("field-zipcode").value = urlParams.get("z"); //zipcode

    const reason = urlParams.get("r"); //reason
    document.getElementById("radio-travail").checked = (reason==='travail');
    document.getElementById("radio-achats").checked = (reason==='achats');
    document.getElementById("radio-enfants").checked = (reason==='enfants');
    document.getElementById("radio-sport_animaux").checked = (reason==='sport_animaux');
    document.getElementById("radio-sante").checked = (reason==='sante');
    document.getElementById("radio-famille").checked = (reason==='famille');
    document.getElementById("radio-handicap").checked = (reason==='handicap');
    document.getElementById("radio-convocation").checked = (reason==='convocation');
    document.getElementById("radio-missions").checked = (reason==='missions');

    var now = new Date()
    document.getElementById('field-datesortie').value = now.toJSON().slice(0,10);
    document.getElementById('field-heuresortie').value = now.toLocaleString("fr-FR", {timeZone: "Europe/Paris", hour: "2-digit", minute: "2-digit", hour12: false});
    setTimeout(() => {
        document.getElementById("generate-btn").click()
    }, 500)
});

function badScriptLoading(event) {
    console.log("Official JS is not working. Patching using local copy.")
    let script = document.createElement('script');
    script.src = "deplacement-covid-19/main.d56e3230.js";
    document.head.append(script)
}
