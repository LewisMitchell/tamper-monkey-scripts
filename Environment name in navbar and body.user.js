// ==UserScript==
// @name         Environment name in navbar and body
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Lewis Mitchell
// @include      https://orchestrator*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var pElement = document.createElement("p");
    pElement.style.color = 'red';
    pElement.style.fontSize = "30pt";
    pElement.style.fontStyle = "bold";
    var env = window.location.href.split(".")
    var envText = env[2].toUpperCase();
    if(env[6].split("/").includes("deploy-microservice")) {
      var deployText = document.createElement("p");
      deployText.style.color = 'red';
      deployText.style.fontSize = "20pt";
      deployText.style.fontStyle = "bold";
      deployText.innerText = 'You are deploying to ' + envText;
      document.getElementById('main-panel').append(deployText);
    };
    pElement.innerText = envText;
    document.getElementsByClassName('logo')[0].append(pElement);
})();