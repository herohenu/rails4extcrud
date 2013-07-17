/*
 Ext.define('AM.controller.Users', {
 extend: 'Ext.app.Controller',

 init: function() {
 console.log('Initialized Users! This happens before the Application launch function is called');
 }
 });

 */


Ext.define('AM.controller.Users', {
    extend: 'Ext.app.Controller',

    views: [
        'user.List'
    ],

    stores: [
        'Users'
    ],
    models: ['User'],

    init: function() {
        this.control({
            /*  'viewport > panel': {
             render: this.onPanelRendered
             },*/
            'userlist': {
                itemdblclick: this.editUser
            },
            'useredit button[action=save]': {
                click: this.updateUser
            }



        });
    },

    /*onPanelRendered: function() {
     console.log('The panel was rendered');
     }*/

    editUser: function(grid, record) {
        //console.log('Double clicked on ' + record.get('name'));
        var view = Ext.widget('useredit');

        view.down('form').loadRecord(record);
    },

    updateUser: function(button) {
        // console.log('clicked the Save button');
        var win    = button.up('window'),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();

        record.set(values);
        win.close();
    }
});