App = Ember.Application.create();

App.Router.map(function () {
    // put your routes here
});

App.IndexRoute = Ember.Route.extend({

});
App.ApplicationController=Ember.Controller.extend({
    data:function(){
        return Ember.A(['kartik','singal','abhijeet','kartik','singal','abhijeet','kartik','singal','abhijeet','kartik','singal','abhijeet']);
    }.property()
});