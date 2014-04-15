/**
 * Created by lyh on 14-4-15.
 */
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
            xtype: 'datefield',
            fieldLabel: 'Start date'
        }, {
            xtype: 'datefield',
            fieldLabel: 'End date'
        }
        ]
        this.callParent(arguments);
    }
});