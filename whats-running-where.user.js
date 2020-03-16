// ==UserScript==
// @name         Highlight Mismatched Releases
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Lewis Mitchell
// @match        */whats-running-where
// @match        */whats-running-where?profile=ggw
// @match        */whats-running-where?profile=auth
// @grant       GM_getValue
// @grant       GM_setValue
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
    document.querySelector(".container").classList.remove("container");
    var spanOverPagination = document.querySelectorAll("#running_apps_paginate > span > a");
    for(var a = 0; a < spanOverPagination.length; a++) {
        if(spanOverPagination[a].classList.contains("current") && GM_getValue('pagination_page', -1) == -1) {
           GM_setValue('pagination_page', a);
        } else {
            spanOverPagination[GM_getValue('pagination_page', -1)].classList.add = "current";
        }
    }
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
        if(integrationCell.innerText != devCell.innerText && !appName.includes("stub") && !integrationCell.innerText == "") {
            devCell.style.background = "GREEN";
            devCell.style.color = "WHITE";
            integrationCell.style.background = "RED";
            integrationCell.style.color = "WHITE";
        } else {
            integrationCell.style.background = "GREEN";
            integrationCell.style.color = "WHITE";
            devCell.style.background = "GREEN";
            devCell.style.color = "WHITE";
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
