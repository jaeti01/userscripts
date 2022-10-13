// ==UserScript==
// @name         SOC Prime Title Changer
// @namespace    https://github.com/jaeti01/userscripts/
// @version      0.1
// @description  A very simple script that changes page titles within SOC Prime platform to easier identify modules during a demo with multiple tabs open
// @author       till.jaeger@gmail.com
// @match        https://tdm.socprime.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
     var pathname = window.location.pathname.match(/\/(.*)\//);
   //* alert(!pathname[1].startsWith("tdm"));
    if (!pathname[1].startsWith("tdm")) {
         document.title = pathname[1].toUpperCase();
     }
})();
