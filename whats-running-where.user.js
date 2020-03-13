// ==UserScript==
// @name         Highlight Mismatched Releases
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Lewis Mitchell
// @match        */whats-running-where
// @match        */whats-running-where?profile=ggw
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var table = document.getElementById('running_apps'),
        rows = table.rows, rowcount = rows.length, r,
        cells
    document.body.style.cssText = "background: #615757 !important; color: WHITE !important;";
    document.querySelector("nav").style.cssText = "background: #615757 !important; color: WHITE !important;";
    var aElements = document.querySelectorAll("a");
    for(var i = 0; i< aElements.length; i++) {
        aElements[i].style.cssText = "color: WHITE !important;";
    }
    document.getElementById("running_apps_info").style.color = "WHITE";
    document.querySelector("#running_apps_length label").style.color = "WHITE";
    document.querySelector("#running_apps_filter > label").style.color = "WHITE";
    document.querySelector("span > .paginate_button").style.background = "GRAY";
    document.querySelector(".page-header").style.cssText = "border: none;";
    for( r=1; r<rowcount; r++) {
        cells = rows[r].cells;
        var app = cells[0];
        var appName = cells[0].innerText;
        var stagingCell = cells[5];
        var qaCell = cells[3];
        var eteCell = cells[4];
        var devCell = cells[2];
        var prodCell = cells[6];
        var integrationCell = cells[1];
        qaCell.style.cssText = "border-top-color: GRAY;";
        eteCell.style.cssText = "border-top-color: GRAY;";
        prodCell.style.cssText = "border-top-color: GRAY;";
        stagingCell.style.cssText = "border-top-color: GRAY;";
        integrationCell.style.cssText = "border-top-color: GRAY;";
        devCell.style.cssText = "border-top-color: GRAY;";
        app.style.cssText = "border-top-color: GRAY;";
        app.style.background = "#27AFDB";
        if(devCell.innerText != qaCell.innerText && !appName.includes("stub")) {
            devCell.style.background = "#FFE95C";
            devCell.style.color = "BLACK";
            qaCell.style.background = "RED";
            qaCell.style.color = "WHITE";
        } else {
            qaCell.style.background = "GREEN";
            qaCell.style.color = "WHITE";
            devCell.style.background = "GREEN";
            devCell.style.color = "WHITE";
        }
        if(stagingCell.innerText != eteCell.innerText && !appName.includes("stub") && !eteCell.innerText != "") {
            stagingCell.style.background = "#FFE95C";
            stagingCell.style.color = "BLACK";
            eteCell.style.background = "RED";
            eteCell.style.color = "WHITE";
        } else {
            stagingCell.style.background = "GREEN";
            stagingCell.style.color = "WHITE";
            eteCell.style.background = "GREEN";
            eteCell.style.color = "WHITE";
        }
        if(integrationCell.innerText != devCell.innerText && !appName.includes("stub") && !integrationCell.innerText != "") {
            devCell.style.background = "#FFE95C";
            devCell.style.color = "BLACK";
            integrationCell.style.background = "RED";
            integrationCell.style.color = "WHITE";
        } else {
            integrationCell.style.background = "GREEN";
            integrationCell.style.color = "WHITE";
            devCell.style.background = "GREEN";
            devCell.style.color = "WHITE";
        }
        if(stagingCell.innerText != prodCell.innerText && !appName.includes("stub")) {
            stagingCell.style.background = "#FFE95C";
            stagingCell.style.color = "BLACK";
            prodCell.style.background = "RED";
            prodCell.style.color = "WHITE";
        } else {
            stagingCell.style.background = "GREEN";
            stagingCell.style.color = "WHITE";
            prodCell.style.background = "GREEN";
            prodCell.style.color = "WHITE";
        }
        if(prodCell.innerText == "") {
            eteCell.style.background = "GREEN";
            eteCell.style.color = "WHITE";
            prodCell.style.background = "GREEN";
            prodCell.style.color = "WHITE";
        }

    }
})();
