Ext.define('AM.view.patient.List' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.patientlist',

    title : 'All patients',
    store: 'Patients',
    plugins: {
        ptype: 'bufferedrenderer'
    },
    dockedItems: [{
        xtype: 'pagingtoolbar',
        store: 'Patients',   // same store GridPanel is using
        dock: 'bottom',
        displayInfo: true
    }] ,
    tbar: [
       // { xtype: 'button', text: '添加患者',iconUrl:"" }
     /*  {text:'封堵验证',handler:'',iconCls:'block'}
        ,'-',*/
        {text:'刷新',iconCls:'add'        }
    ],
    initComponent: function() {
        /*       this.store = {
         fields: ['name', 'email'],
         data  : [
         {name: 'Ed',    email: 'ed@sencha.com'},
         {name: 'Tommy', email: 'tommy@sencha.com'}
         ]
         };*/

        this.columns = [
            {header: 'patient_ids',  dataIndex: 'patient_ids',  flex: 1},
            {header: 'spell_code', dataIndex: 'spell_code', flex: 1},
            {header: 'name', dataIndex: 'name', flex: 1},
            {header: 'social_security_number', dataIndex: 'social_security_number', flex: 1},
            {header: 'sex', dataIndex: 'sex', flex: 1},
            {header: 'birthday', dataIndex: 'birthday', flex: 1}
        ];

        this.callParent(arguments);
    }
});