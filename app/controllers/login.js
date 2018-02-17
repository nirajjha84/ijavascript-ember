import Controller from '@ember/controller';

export default Controller.extend({
    actions: {

        // on login button click
        onLoginSubmit: function() {
            this.transitionToRoute('dashboard');
        }

    }
});
