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

    let reason = urlParams.get("r");
    const isQuarantine = reason.indexOf("quarantine-") !== -1;
    reason = reason.replace(/curfew-|quarantine-/, '')
    if (isQuarantine) {
        document.getElementById("quarantine-button").click()
    } else {
        document.getElementById("curfew-button").click()
    }

    document.getElementById("radio-travail").checked = (reason==='travail');
    document.getElementById("radio-sante").checked = (reason==='sante');
    document.getElementById("radio-famille").checked = (reason==='famille');
    document.getElementById("radio-handicap").checked = (reason==='handicap');
    document.getElementById("radio-convocation").checked = (reason==='convocation');
    document.getElementById("radio-convocation_demarches").checked = (reason==='convocation_demarches');
    document.getElementById("radio-missions").checked = (reason==='missions');
    document.getElementById("radio-transits").checked = (reason==='transits');
    document.getElementById("radio-animaux").checked = (reason==='animaux');

    document.getElementById("radio-sport").checked = (reason==='sport');
    document.getElementById("radio-achats").checked = (reason==='achats');
    document.getElementById("radio-enfants").checked = (reason==='enfants');
    document.getElementById("radio-culte_culturel").checked = (reason==='culte_culturel');
    document.getElementById("radio-achats_culte_culturel").checked = (reason==='achats_culte_culturel');
    document.getElementById("radio-demarche").checked = (reason==='demarche');
    document.getElementById("radio-judiciaire").checked = (reason==='judiciaire');
    document.getElementById("radio-demenagement").checked = (reason==='demenagement');
    document.getElementById("radio-transit").checked = (reason==='transit');

    var now = new Date()
    var timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "Europe/Paris"

    document.getElementById('field-datesortie').value = now.toJSON().slice(0,10);
    document.getElementById('field-heuresortie').value = now.toLocaleString("fr-FR", {timeZone: timeZone
        , hour: "2-digit", minute: "2-digit", hour12: false});
    setTimeout(() => {
        document.getElementById("generate-btn").click()
    }, 500)
    setTimeout(() => {
        document.getElementById("loading").style.display = "none"
        if (isFacebookBrowser()) {
            document.getElementById("facebook").style.display = "block"
        } else {
            document.getElementById("done").style.display = "block"
        }
    }, 1500)
});

function badScriptLoading(event) {
    console.log("Official JS is not working. Patching using local copy.")
    let script = document.createElement('script');
    script.src = "attestation-deplacement-derogatoire-covid-19/main.ad1e769a.js";
    document.head.append(script)
}

function isFacebookBrowser () {
    const ua = navigator.userAgent || navigator.vendor || window.opera
    return ua.indexOf('FBAN') !== -1 || ua.indexOf('FBAV') !== -1
}

