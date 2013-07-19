/**
 * Created with JetBrains RubyMine.
 * User: git
 * Date: 13-7-17
 * Time: 下午5:00
 * To change this template use File | Settings | File Templates.
 */
Ext.define('AM.view.patient.Add', {
    extend: 'Ext.window.Window',
    alias : 'widget.patientadd',

    title : '添加患者',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {

        console.log( "init  患者添加窗体");
        this.items = [
            {
                xtype: 'form',
                items: [
                    {
                        xtype: 'textfield',
                        name : 'patient_ids',
                        fieldLabel: '患者ID'
                    },
                    {
                        xtype: 'textfield',
                        name : 'name',
                        fieldLabel: '姓名'
                    },
                    {
                        xtype: 'textfield',
                        name : 'spell_code name',
                        fieldLabel: '姓名所写'
                    },
                    {
                        xtype: 'textfield',
                        name : 'social_security_number',
                        fieldLabel: '身份证号码'
                    },
                    {
                        xtype: 'textfield',
                        name : 'residence',
                        fieldLabel: '户籍所在地'
                    },

                    {
                        xtype: 'textfield',
                        name : 'nationality',
                        fieldLabel: '国籍'
                    }
                ]
            }
        ];

        this.buttons = [
            {
                text: '添加',
                action: 'patients/create'
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