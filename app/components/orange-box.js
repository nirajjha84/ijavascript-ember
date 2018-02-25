import Component from '@ember/component';

export default Component.extend({
    /**
     @property {boolean} isOrange used as flag to toggle class name
    */
    isOrange: true,

    actions: {
        /**
         * @method [actions.toggleColor]
         * Method toggle @property isOrange to true || false
         * Value change reflects in the handlebar helper as class name change 
        */
        toggleColor: function (element) {
            this.toggleProperty('isOrange');
        }
    }

});
