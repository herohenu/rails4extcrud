/*
* //= require app/controller/users
* 这个js应该在app.js之前引用
* */
Ext.define('AM.controller.Users', {
    extend: 'Ext.app.Controller',
    stores: [
        'Users'
    ],
    models: ['User'],
/*
    init: function() {
        //console.log('Initialized Users! This happens before the Application launch function is called');
        this.control({
            'viewport > panel': {
                render: this.onPanelRendered
            }
        });
    },

    onPanelRendered: function() {
        console.log('The panel was rendered');
    }  ,
*/

    views: [
        'user.List',
        'user.Edit'
    ],

    init: function() {
     /*   this.control({
            'userlist': {
                itemdblclick: this.editUser
            }
        });*/
        this.control({
            'viewport > userlist': {
                itemdblclick: this.editUser
            },
            'useredit button[action=save]': {
                click: this.updateUser
            }
        });

    },

    editUser: function(grid, record) {
//        console.log('Double clicked on ' + record.get('name'));
        var view = Ext.widget('useredit');

        view.down('form').loadRecord(record);
    },

    updateUser: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();

        record.set(values);
        win.close();
        this.getUsersStore().sync();
    }

});