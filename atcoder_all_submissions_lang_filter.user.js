// ==UserScript==
// @name         AtCoder All Submissions Lang Filter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  過去問に対応するコンパイラを選択・フィルタリングすることができます。
// @match        https://atcoder.jp/contests/*/submissions*
// @require      https://code.jquery.com/jquery-3.4.1.min.js
// @author       hiro_hiro
// @license      CC0
// @grant        none
// ==/UserScript==

// See:
// https://greasyfork.org/ja/scripts/398148-atcoder-language-filter
// https://greasyfork.org/ja/scripts/390514-autosubmissionssettings-js
$(function() {
  'use strict';

  const button = addButton();
})();

function addButton() {
  const buttonHtml = `<p><button type="button" class="btn btn-default btn-sm btn-auto-height" data-toggle="modal" data-target="#SubmissionsLangFilterModal">言語の選択</button></p>`;
  $('form').append(buttonHtml);
}
