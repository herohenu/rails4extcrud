/*
 Ext.define('AM.controller.Users', {
 extend: 'Ext.app.Controller',

 init: function() {
 console.log('Initialized Users! This happens before the Application launch function is called');
 }
 });

 */

Ext.define('AM.controller.Pages', {
    extend: 'Ext.app.Controller',
    views: [
        'main.homePage'
    ],
    init: function() {
        this.control({
            /*  'viewport > panel': {
             render: this.onPanelRendered
             },*/



        });
    }
});