Ext.define('AM.view.patient.Edit', {
    extend: 'Ext.window.Window',
    alias : 'widget.patientedit',

    title : 'Edit Patient',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {

        //console.log( "init  edit form");
        this.items = [
            {
                xtype: 'form',
                items: [
                    {
                        xtype: 'textfield',
                        name : 'patient_ids',
                        fieldLabel: 'patient_ids'
                    },
                    {
                        xtype: 'textfield',
                        name : 'spell_code',
                        fieldLabel: 'spell_code'
                    }
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Save',
                action: 'save'
            },
            {
                text: 'Cancel',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});