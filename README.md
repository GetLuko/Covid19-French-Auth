# Covid19-French-Auth

⚠️ By respect to our medical staff, please respect the social distancing, the governement rules and the barrier gestures. ⚠️

This project allows on-the-fly generation of French Government "attestation de déplacement". See [https://media.interieur.gouv.fr/attestation-deplacement-derogatoire-covid-19/](https://media.interieur.gouv.fr/attestation-deplacement-derogatoire-covid-19/)

As pure Vanilla JS project, it runs out of the box without compilation.

For data privacy reasons, the certificate generation is done locally in the browser without sending data to a server.

## How it works ?

`generate.html` is in charge of the PDF generation
Profile is constructed from the query string (firstname, lastname, etc...). Then, this profile is injected in a hidden form that is similar to the one on the Government official website.
Then, the official `certificate.js` script from the official website is called to compile the PDF using the data stored in the hidden form.

## Demo :

Beautiful version : [https://www.luko.eu/fr/page/covid19attestation](https://www.luko.eu/fr/page/covid19attestation)
Open source demo : [https://covid.luko.eu/demo.html](https://covid.luko.eu/demo.html)

## Installation :

 * copy the folder from this repo
 * go to root project folder
 * host locally the folder : 
   * Python : `python -m SimpleHTTPServer`
   * Node : `npm install http-server -g`  then `http-server`
 * use demo.html to create your enriched url
 * use generate.html (+ your personal data) to generate your attestation 


## Todo :  
- [ ] follow upgrade on js file on gouv.fr website 
- [x] use a local version of certificate.js as a fail-safe solution
- [x] Move from url query param to anchor param (to ensure that server have no access to data)

## Credit

 * Official website code source : used for `certificate.js` : [https://github.com/LAB-MI/attestation-deplacement-derogatoire-covid-19](https://github.com/LAB-MI/attestation-deplacement-derogatoire-covid-19)
 * Inspired by : 
    * https://twitter.com/Kamidh/status/1247570275442601984
    *  https://www.igen.fr/ios/2020/04/un-raccourci-pour-generer-lattestation-de-deplacement-derogatoire-numerique-114133

