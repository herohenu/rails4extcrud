/**
 * Created by lyh on 14-4-15.
 */

var department_store = Ext.create('Ext.data.Store', {
    fields: [ {name: "id", type: "int"},
        {name: "name", type: "string"}],
        proxy: {
            type: "rest",
            url: "/departments",
            format: 'json',
            reader: {
                type: "json",
                getData: function (raw) {
                    return raw;
                }
            }}
});
var doctor_store = Ext.create('Ext.data.Store', {
    fields: ['id', 'name'],
    proxy: {
        type: "rest",
        format: 'json',
        reader: {
            type: "json",
            getData: function (raw) {
                return raw;
            }
        }},
    autoload:false
});

Ext.define('AM.view.main.homePage', {
    extend: 'Ext.panel.Panel',
    alias : 'widget.homePage',
    title : '测试工作区',
    layout: 'form',
    width: 200,
    autoShow: true,
    //items: [],
    initComponent: function() {
        console.log( "init homePage ");
        this.items=[{
            xtype: 'combo',
            store: department_store,
            queryMode: 'remote',
            displayField: 'name',
            valueField: 'id',
            fieldLabel: 'deparment',
            listeners: {
                select:{
                    fn:function(combo, records, eOpts){
                        var val = this.value;
                        if (val){
                            console.log(val)
                            Ext.getCmp('doctor_comb').enable();
                            Ext.getCmp('doctor_comb').setValue('');

                            doctor_store.proxy.url = 'doctors?department_id='+ this.getValue();
                            doctor_store.load();

                        }
                    }
                }
    }
        }, {
            xtype: 'combo',
            id:'doctor_comb',
            store:doctor_store,
            queryMode: 'remote',
            displayField: 'name',
            valueField: 'id',
            fieldLabel: 'doctor',listeners:{
                render:function(){
                    this.disable();
                }
            }
        }
        ]
        this.callParent(arguments);
    }
});