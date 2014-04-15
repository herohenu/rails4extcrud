     Ext.define('AM.controller.Patients', {
         extend: 'Ext.app.Controller',

         models: ['Patient'],
         stores: ['Patients'],
         views: [
             'patient.List',
             'patient.Form'
         ],
         refs: [{
             ref: 'list',
             selector: 'patientlist'
         }],

         init: function() {
             this.control({
                 'patientlist': {
                     itemdblclick: this.editPatient,
                     selectionchange: this.selectionChange
                 },
                 ' patientform  button[action=savepatient]': {
                     click: this.createOrUpdatePatient
                 },
                 'button[action=addPatient]': {
                     click: this.addPatient
                 },
                 'button[action=editPatient]': {
                     click: this.editPatient
                 },
                 'button[action=deletePatient]': {
                     click: this.deletePatient
                 }
             });
         },

         addPatient: function() {
             var view = Ext.widget('patientform');
             view.show();
            // alert("点击了添加按钮  船体弹出");
         },

         editPatient: function(button) {
              console.log('clicked the edit  patient');


             var record = this.getList().getSelectedPatient();
             var view = Ext.widget('patientform');
             view.down('form').loadRecord(record);
         },

         deletePatient: function (){
       /*    var  grid  = this.getPatientlist(),
                record = grid.getSelectionModel().getSelection(),
                store  = this.getPatientsStore;

                store.remove(record),
                    this.getPatientsStore.sync();*/
             var record = this.getList().getSelectedPatient();

             if (record) {
                 var store = this.getPatientsStore();
                 store.remove(record);
                 console.log("删除记录的  data id：  " +record.data);
                 store.sync();
                 store.reload();

             }

         },

         createOrUpdatePatient:function(button){
         console.log("点击了save   save按钮");

           var win = button.up('window');
           var form = win.down('form');

           //var store = this.getUsersStore();
           var store = this.getPatientsStore();
           var values = form.getValues();

           var patient = Ext.create('AM.model.Patient', values);
           var errors = patient.validate();

             if (errors.isValid()) {
                 var formRecord = form.getRecord();

                 if (formRecord) {
                     // perform update
                     console.log(" 调用了更新,重新set value ");

                     formRecord.set(values);
                 } else {
                     // perform create
                     //store.add(user);
                     console.log(" 调用了添加, grid 中添加 value ");
                     store.add(patient);
                   //  patient.save();
                     console.log(" 执行了store save 记录 ");
                 }

                 store.sync({
                     success: function() {
                         win.close();
                     },
                     failure: function(batch, options) {
                        console.log("  添加失败了");
                         // extract server side validation errors
                         var serverSideValidationErrors = batch.exceptions[0].error;

                         var errors = new Ext.data.Errors();
                         for (var field in serverSideValidationErrors) {
                           //  var message = serverSideValidationErrors[field].join(", ");
                             //errors.add(undefined, { field: field, message: message });
                         }
                         form.getForm().markInvalid(errors);
                     }
                 });
                 store.reload();
             } else {
                 form.getForm().markInvalid(errors);
             }
         },

         selectionChange: function(selectionModel, selections) {
             var grid = this.getList();

             if (selections.length > 0) {
                 grid.enableRecordButtons();
             } else {
                 grid.disableRecordButtons();
             }
         }



     });