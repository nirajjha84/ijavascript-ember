import Controller from '@ember/controller';

export default Controller.extend({
    /**
     @property {String} errorMessage used to show top level error
    */
    errorMessage: null,

    actions: {
        /**
         @method [actions.onLoginSubmit]
        */
        onLoginSubmit: function() {
            var userid = this.get('userid'),
                password = this.get('password');

            // validate form
            // if form fields are empty then it will provide value to top level error property
            if(!userid || !password) {
                this.setProperties({
                    'errorMessage': 'Please enter login credentials to continue'
                });            
                return;
            } else {
                this.callAuthenticateUser();
            }                 
        }

    },

    /**
     * @method [callAuthenticateUser]
     * Method will call Authenticate User API
     * It will call methods to authenticate user based on response and also
     * to handle exception
    */
    callAuthenticateUser() {
        var me = this;
        // connect to store for AuthenticateUser API
        //this.store.findRecord('authenticate', 1).then(function(success, response) {
        //this.transitionToRoute('authenticate').then(function(success, response) {
        Ember.$.getJSON('/stub/AuthenticateUser.json') .then(function(response, success) {
            if(success) {
                me.validateUser();
            } else {
                me.showApiException();
            }
            })
            // check API errors
            .catch(function(reason) {  
                me.showApiException();
            });
    },

    /**
     * @method [validateUser]
     * Method will get response from AuthenticateUser Api
     * It will validate user based on response node isUserAuthenticated
     * if isUserAuthenticated = TRUE it will start dashboard route else
     * it will set value for top level error
     * @param response
    */
    validateUser(response) {
        // check response
        // if authenticated then re-direct to dashboard page
        if(response.isUserAuthenticated) {
            me.transitionToRoute('dashboard');
        } else {
            // show top level error incase not authenticated
            this.setProperties({
                'errorMessage': 'Invalid User Credentials!'
            });
        }
    },

    /**
     * @method [showApiException]
     * Method will get called from onLoginSubmit action method when
     * AutheticateUser api will get technical issue to connect or api connection status will be 200
     * but api will return success as FALSE due to  internal technical exceptions
    */
    showApiException() {
        this.setProperties({
            'errorMessage': 'Sorry, unable to connect to system!'
        });
    }
  
});
