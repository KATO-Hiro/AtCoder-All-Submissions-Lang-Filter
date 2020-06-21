// ==UserScript==
// @name         AtCoder All Submissions Lang Filter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  過去問に対応するコンパイラを選択・フィルタリングすることができます。
// @match        https://atcoder.jp/contests/*/submissions*
// @require      https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.12/js/select2.min.js
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
  const modal = addModal();
})();

function addButton() {
  const buttonHtml = `<p><button type="button" class="btn btn-default btn-sm btn-auto-height" data-toggle="modal" data-target="#submissionsLangFilterModal">言語の選択</button></p>`;
  $('form').append(buttonHtml);
}

function addModal() {
  const modalHtml = `
    <div class="modal fade" id="submissionsLangFilterModal" tabindex="-1" role="dialog" aria-labelledby="submissionsLangFilterModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 class="modal-title" id="submissionsLangFilterModalLabel">言語の選択</h4>
          </div>
          <div class="modal-body" id="submissionsLangFilterModalBody">
              <select id="submissionsLangFilterMultipleSelect" multiple="multiple"></select>
          </div>
          <div class="modal-footer">
              <button type="button" id="submissionsLangFilterSelectAll" class="btn btn-info pull-left">Select All</button>
              <button type="button" id="submissionsLangFilterClear" class="btn btn-danger pull-left">Clear</button>
              <span id="submissionsLangFilterSaveLabel" style="margin-right:20px;"></span>
              <button type="button" id="submissionsLangFilterSave" class="btn btn-success">Save</button>
          </div>
        </div>
      </div>
    </div>`;
  $('body').prepend(modalHtml);
}
