import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
    willRender() {
        $.getJSON('/stub/team.json').then(data => {
          this.set('team', data);
        });
    }
});
