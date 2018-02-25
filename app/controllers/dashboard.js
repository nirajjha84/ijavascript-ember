import Controller from '@ember/controller';

export default Controller.extend({

    /**
     * @method [init]
     * init method to get user data from API
    */
    init: function() {
        this.retrieveUserDetails();
    },

    /**
     * @method [retrieveUserDetails]
     * Method will connect to RetrieveUserDetails API
     * API will have all user specific data which will be used to show data on dashboard screen
    */
    retrieveUserDetails: function() {      
        var me = this;

        // TODO - use ember data and adapters to consume this
        $.ajax({
            data: { customerid: 'IJ101'},
            method: 'POST',
            url: '/stub/RetrieveUserDetails.json'
        }).then((response) => {
            if(response.success) {
               this.set('customer', response.customer);
            } else {
                alert('Retrieve User Details API - SUCCESS False');
            }           
        })
        // check API errors
        .catch(function(reason) {  
            alert('Retrieve User Details API Exeption');
        });   
    },

    actions: {
        checkSubscription: function(sms, newsletter, flyer) {
            //TODO - this method need re-factor
            //TODO - get all data from Form as single object
            var isSMS = sms? 'Yes': 'No',
                isNewsletter = newsletter? 'Yes': 'No',
                isFlyer = flyer? 'Yes': 'No';
            
            alert('User selection - SMS: '+ isSMS + ', Newsletter: ' + isNewsletter + ', Flyer: ' + isFlyer+ '');
        }
    }
});
