// Bookmark
'use strict'
function Bookmark (browser) {

  (typeof browser != "undefined") ? (this.appHost = browser, this.toolbar = "toolbar_____") :
    (this.appHost = chrome, this.toolbar = "1")
}

module.exports = Bookmark;

Bookmark.prototype.appHost = () => {
  return this.appHost
}

Bookmark.prototype.toolbar = () => {
  return this.toolbar
}