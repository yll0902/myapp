Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/',{template:'main'});

Router.route('/haha',{template:'haha'});
Router.route('/hoho',{template:'hoho'});
Router.route('/detail',{path:'detail/:_id'});
Router.route('/login',{template:'login'});
Router.route('/recommend',{template:'recommend'});