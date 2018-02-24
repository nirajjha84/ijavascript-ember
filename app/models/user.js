import DS from 'ember-data';

export default DS.Model.extend({
    userid: DS.attr('string'),
    password: DS.attr('string')
});
