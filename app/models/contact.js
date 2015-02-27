import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  meetingCount: DS.attr('number', { defaultValue: 1 }),

  fullName: function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
    }.property('firstName', 'lastName')
});
