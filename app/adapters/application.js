import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    // HTTP REQUEST HEADERS TO BE INCLUDED IN ALL REQUEST
    headers: {
        'API_KEY': 'secret key',
        'TEST_HEADER': 'Loreum Ipsum'
    }
});
