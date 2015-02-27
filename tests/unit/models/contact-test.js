import {
  moduleForModel,
  test
} from 'ember-qunit';

import DS from 'ember-data';
import Contact from 'social-butterfly/models/contact';

moduleForModel('contact', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

test('it is an Ember Data model', function(assert) {
    assert.ok(this.subject() instanceof DS.Model);
});

test('it has a first name property', function(assert) {
    var property = Contact.metaForProperty('firstName');
      assert.strictEqual(property.type, 'string');
        assert.ok(property.isAttribute);
});

test('it has a first name property', function(assert) {
    var property = Contact.metaForProperty('firstName');
      assert.strictEqual(property.type, 'string');
        assert.ok(property.isAttribute);
});

test('it can compute a full name', function(assert) {
  let person = this.subject({
    firstName: "Rachel",
    lastName: "Warbelow"
  });
  assert.strictEqual(person.get('fullName'), 'Rachel Warbelow');
});

test('it has a meeting count set to 0', function(assert) {
  let count = this.subject({});

  assert.strictEqual(count.get('meetingCount'), 0);
});
