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

        var  patientAddForm = Ext.create('Ext.form.Panel', {
           // title: 'Simple Form',
            bodyPadding: 5,
            width: 350,

            // The form will submit an AJAX request to this URL when submitted
            // url: 'save-form.php',
            url: 'patients/',
            // Fields will be arranged vertically, stretched to full width
            layout: 'anchor',
            defaults: {
                anchor: '100%'
            },

            // The fields
            defaultType: 'textfield',
            items: [
                {
                    xtype: 'textfield',
                    name : 'patient_ids',
                    fieldLabel: '患者ID'  ,
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    name : 'name',
                    fieldLabel: '姓名',
                    allowBlank: false
                }


            ],

            // Reset and Submit buttons
            buttons: [{
                text: 'Reset',
                handler: function() {
                    this.up('form').getForm().reset();
                }
            }, {
                text: 'Submit',
                formBind: true, //only enabled once the form is valid
                disabled: true,
                handler: function() {
                    var form = this.up('form').getForm();
                    if (form.isValid()) {
                        alert(form.url);
                        form.submit({
                            success: function(form, action) {
                               // Ext.Msg.alert('Success', action.result.msg);
                            },
                            failure: function(form, action) {
                               // Ext.Msg.alert('Failed', action.result.msg);
                            }
                        });
                    }
                }
            }]//,
            //renderTo: Ext.getBody()
        });


        this.items = [ /*patientAddForm*/
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
                    }

                    /*,
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
                    }*/
                ]
            }
        ];

        this.buttons = [
            {
                text: '添加',
                action: 'save'

                /*,
                handler: function() {
                    var form = this.up('form').getForm(), // get the basic form
                        record = form.getRecord(); // get the underlying model instance
                       alert(this.action);
                       // console.log(record);

                    if (form.isValid()) { // make sure the form contains valid data before submitting
                        form.updateRecord(record); // update the record with the form data
                        record.save({ // save the record to the server
                            success: function(user) {
                                Ext.Msg.alert('Success', 'User saved successfully.')
                            },
                            failure: function(user) {
                                Ext.Msg.alert('Failure', 'Failed to save user.')
                            }
                        });
                    } else { // display error alert if the data is invalid
                        Ext.Msg.alert('Invalid Data', 'Please correct form errors.')
                    }

                }
*/
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