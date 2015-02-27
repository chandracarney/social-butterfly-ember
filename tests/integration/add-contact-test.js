import Ember from 'ember';
import { test } from 'ember-qunit';
import { module } from 'qunit';
import startApp from '../helpers/start-app';
var App;

module('Integration - Add Contact', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('it has a list of contacts', function(assert) {
  visit('/').then(function() {
    let contactList = find('.contacts-list').length;
    assert.ok(contactList, 'We have a contact list');
  });
});

test('it has first and last name fields for a new contact', function(assert) {
  visit('/').then(function() {
    assert.ok(find('input.first-name').length);
    assert.ok(find('input.last-name').length);
  });
});

test('it has a submit button to submit new contacts', function(assert) {
  visit('/').then(function() {
    assert.ok(find('input[type=submit]').length);
  });
});

test('you can create a new contact', function(assert) {
   visit('/').then(function() {
     fillIn('input.first-name', 'Steve');
     fillIn('input.last-name', 'Kinney');
     find('input[type=submit]').click();
     andThen(function() {
       assert.ok(find('.contacts-list li').length);
     });
   });
 });
