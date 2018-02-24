import DS from 'ember-data';

export default DS.Model.extend({
    // get current date and time
    createdAt: DS.attr('date', {
        defaultValue() { return new Date(); }
    }),
    client_id: DS.attr('string'),
    user: DS.belongsTo('user')
});