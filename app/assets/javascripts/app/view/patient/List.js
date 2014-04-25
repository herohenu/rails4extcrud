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
    initComponent: function() {
        this.store;

        this.columns = [
            {header: 'id',  dataIndex: 'id',  flex: 1},
            {header: 'patient_ids',  dataIndex: 'patient_ids',  flex: 1},
//            {header: 'spell_code', dataIndex: 'spell_code', flex: 1},
            {header: 'name', dataIndex: 'name', flex: 1}/*,
            {header: 'social_security_number', dataIndex: 'social_security_number', flex: 1},
            {header: 'sex', dataIndex: 'sex', flex: 1},
            {header: 'birthday', dataIndex: 'birthday', flex: 1}*/
        ];

        this.addPatientButton = new Ext.Button({
            text: '添加患者',
            action: 'addPatient'
        });


        this.editPatientButton = new Ext.Button({
            text: '编辑患者',
            action: 'editPatient',
            disabled: true
        });

        this.deletePatientButton = new Ext.Button({
            text: '删除患者',
            action: 'deletePatient',
            disabled: true
        });
        this.tbar = [this.addPatientButton, this.editPatientButton, this.deletePatientButton];


        this.callParent(arguments);
    } ,



    getSelectedPatient: function() {
        return this.getSelectionModel().getSelection()[0];
    },

    enableRecordButtons: function() {
        this.editPatientButton.enable();
        this.deletePatientButton.enable();
    },

    disableRecordButtons: function() {
        this.editPatientButton.disable();
        this.deletePatientButton.disable();
    }




});