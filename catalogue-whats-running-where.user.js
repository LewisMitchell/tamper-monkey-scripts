// ==UserScript==
// @name         Catalogue Script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include        https://catalogue.*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var table = document.getElementById('service-list'),
        rows = table.rows, rowcount = rows.length, r,
        cells
    var appNames = document.querySelectorAll(".application-name > a");
    for(var nameIndex = 0; nameIndex < appNames.length; nameIndex++) {
        appNames[nameIndex].style.cssText = "color: WHITE;";
    }
    rows[0].cells[2].remove();
    for( r=1; r<rowcount; r++) {
        cells = rows[r].cells;
        var app = cells[0];
        var appName = cells[0].innerText;
        var stagingCell = cells[4];
        var qaCell = cells[3];
        var eteCell = cells[5];
        var devCell = cells[1];
        var prodCell = cells[6];
        var integrationCell = cells[2];
        integrationCell.remove();
        qaCell.style.cssText = "border-top-color: GRAY;";
        eteCell.style.cssText = "border-top-color: GRAY;";
        prodCell.style.cssText = "border-top-color: GRAY;";
        stagingCell.style.cssText = "border-top-color: GRAY;";
        integrationCell.style.cssText = "border-top-color: GRAY;";
        devCell.style.cssText = "border-top-color: GRAY;";
        app.style.cssText = "border-top-color: GRAY;";
        app.style.background = "#27AFDB";
        devCell.style.background = "GREEN";
        devCell.style.color = "WHITE";
        if(devCell.innerText != qaCell.innerText && !appName.includes("stub") && !devCell.innerText == "") {
            qaCell.style.background = "RED";
            qaCell.style.color = "WHITE";
        } else {
            qaCell.style.background = "GREEN";
            qaCell.style.color = "WHITE";
            devCell.style.background = "GREEN";
            devCell.style.color = "WHITE";
        }
        if(stagingCell.innerText != eteCell.innerText && !appName.includes("stub") && !eteCell.innerText == "") {
            eteCell.style.background = "RED";
            eteCell.style.color = "WHITE";
        } else {
            stagingCell.style.background = "GREEN";
            stagingCell.style.color = "WHITE";
            eteCell.style.background = "GREEN";
            eteCell.style.color = "WHITE";
        }
        if(stagingCell.innerText != prodCell.innerText && !appName.includes("stub")) {
            stagingCell.style.background = "GREEN";
            stagingCell.style.color = "WHITE";
            prodCell.style.background = "RED";
            prodCell.style.color = "WHITE";
        } else {
            stagingCell.style.background = "GREEN";
            stagingCell.style.color = "WHITE";
            prodCell.style.background = "GREEN";
            prodCell.style.color = "WHITE";
        }
        if(stagingCell.innerText != eteCell.innerText && !appName.includes("stub") && !eteCell.innerText == "") {
            stagingCell.style.background = "GREEN";
            stagingCell.style.color = "WHITE";
            eteCell.style.background = "RED";
            eteCell.style.color = "WHITE";
        } else {
            stagingCell.style.background = "GREEN";
            stagingCell.style.color = "WHITE";
            eteCell.style.background = "GREEN";
            eteCell.style.color = "WHITE";
        }
        if(stagingCell.innerText != qaCell.innerText && !appName.includes("stub")) {
            stagingCell.style.background = "RED";
            stagingCell.style.color = "WHITE";
        } else {
            stagingCell.style.background = "GREEN";
            stagingCell.style.color = "WHITE";
        }
        if(prodCell.innerText == "") {
            eteCell.style.background = "GREEN";
            eteCell.style.color = "WHITE";
            prodCell.style.background = "GREEN";
            prodCell.style.color = "WHITE";
        }
    }

   setTimeout(function(){ location.reload(); }, 10000);
})();
