Ext.define('AM.view.patient.Form', {
    extend: 'Ext.window.Window',
    alias : 'widget.patientform',

    title : '添加/编辑 患者',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {

        console.log( "init  患者添加窗体");

        this.items = [{
                xtype: 'form',
                items: [{
                        xtype: 'textfield',
                        name : 'patient_ids',
                        fieldLabel: '患者ID'
                    },{
                        xtype: 'textfield',
                        name : 'name',
                        fieldLabel: '姓名'
                    }
                ]
            }
        ];

        this.buttons = [
            {
                text: '保存患者',
                action: 'savepatient'
            },
            {
                text: '取消',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});