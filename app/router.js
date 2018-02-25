import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('dashboard');
  this.route('about');
  this.route('team');
  this.route('authenticate');
  this.route('fourohfour', { path: "*path"});
});

export default Router;
