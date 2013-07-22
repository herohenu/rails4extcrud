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
        {
            text : "添加",
          //  iconCls : 'icon-add',
//            icon-edit

           // iconCls : 'Icon-Refresh',
            handler : function() {

               // mkWindow("new window",[addMenu(grid,pId)]); // 弹出新增栏目框
                //alert("弹出添加窗口");

                var view = Ext.widget('patientadd');
                //创建patients 对象  new_patient_path	 GET	 /patients/new(.:format)	 patients#new
                view.show();


            }
        } ,
        {
            text : "删除",
            iconCls : 'icon-delete',
            handler : function() {
                //判断选中状态的记录  单选  或者多选
                var grid = this.up('grid');
                var secData = grid.getSelectionModel().getSelection(); // 获取到选择的记录


            }
        }


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