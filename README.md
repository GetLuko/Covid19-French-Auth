# Covid19-French-Auth

⚠️By respect to our medical staff, please respect the social distancing, the governement rules and the barrier gestures.⚠️

The goal of this project is to be able to generate the "ATTESTATION DE DÉPLACEMENT DÉROGATOIRE" from the French Government.  
See https://media.interieur.gouv.fr/deplacement-covid-19/

This is a pure Vanilla JS implementation. No need to compile anything. Run out-of-the-box.

No data are sent to the server. Everything is run locally on your browser.

## How it works ?

The file : generate.html is in charge of generate the PDF  
From the url hanchor parameter, it retrieves the profil (firstname, lastname, etc...). Then, this profil is injected in a hidden form that is similar to the one on Official Website.     
Then, the official `certificate.js` script from official website is called to compile the PDF using the data store on the hidden form.  

## Demo :

Beautifull version : https://www.luko.eu/fr/page/covid19attestation  
Open source demo : https://covid.luko.eu/demo.html

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

 * Official website code source : used for `certificate.js` : https://github.com/LAB-MI/deplacement-covid-19
 * Inspired by : 
    * https://twitter.com/Kamidh/status/1247570275442601984
    *  https://www.igen.fr/ios/2020/04/un-raccourci-pour-generer-lattestation-de-deplacement-derogatoire-numerique-114133

