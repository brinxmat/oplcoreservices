// bookmark.spec.js

const mocha = require('mocha')
const expect = require('chai').expect
const chrome = require('sinon-chrome')
const Bookmark = require('../oplcoreservices/scripts/bookmark.js')

before(() => {
  //noinspection JSAnnotator
  global.chrome = chrome
})

describe('Bookmark', () => {
  describe('constructor', () => {
    it('should have a default constructor', () => {
      const bookmark = new Bookmark()
      expect(bookmark.appHost).to.equal(chrome)
      expect(bookmark.toolbar).to.equal('1')
    })
    it('should have a non-default constructor', () => {
      const bookmark = new Bookmark("browser")
      expect(bookmark.appHost).to.equal('browser')
      expect(bookmark.toolbar).to.equal('toolbar_____')
    })
  })
})