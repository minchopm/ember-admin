import DS from 'ember-data';

export default DS.Model.extend({
  resellerId: DS.attr('string'),
  clientId: DS.attr('string'),
  status: DS.attr('string'),
  name: DS.attr('string'),
  businessCategoryId: DS.attr('string'),
  email: DS.attr('string'),
  telephone: DS.attr('string'),
  faxNumber: DS.attr('string'),
  creationDate: DS.attr('number')
});
