     Ext.define('AM.controller.Patients', {
         extend: 'Ext.app.Controller',

         views: [
             //'user.List'
             'patient.List'
         ],

         stores: [
             'Patients'
         ],
         models: ['Patient'],

         init: function() {
             this.control({
                 /*  'viewport > panel': {
                  render: this.onPanelRendered
                  },*/
                 'patientlist': {
                     itemdblclick: this.updatePatient

                 },
                 ' patientadd  button[action=save]': {
//                     click: this.updatePatient
                     click: this.createOrUpdateUser
                 }


/*                 ,
                 'button[action=addPatient]': {
                     click: this.addUser
                 }*/


             });
         },

         /*onPanelRendered: function() {
          console.log('The panel was rendered');
          }*/

/*         editPatient: function(grid, record) {
           //  console.log('Double clicked on ' + record.get('name'));
             var view = Ext.widget('patientedit');
             view.down('form').loadRecord(record);


         },*/


         addPatient: function() {
             var view = Ext.widget('patientadd');
             view.show();

         },

/*         updatePatient: function(button) {
             // console.log('clicked the Save button');
             var win    = button.up('window'),
                 form   = win.down('form'),
                 record = form.getRecord(),
                 values = form.getValues();

             record.set(values);
             win.close();
         },*/

/*         deletePatient: function (){
           var  grid  = this.getPatientlist(),
                record = grid.getSelectionModel().getSelection(),
                store  = this.getPatientsStore;

                store.remove(record),
                    this.getPatientsStore.sync();


         },
         */

         createOrUpdateUser:function(button){
             console.log("点击了保存按钮");

            //  alert(1);
           var win = button.up('window');
             var form = win.down('form');

             //var store = this.getUsersStore();
             var store = this.getPatientsStore();
             var values = form.getValues();

//             var user = Ext.create('AM.model.User', values);
             var patient = Ext.create('AM.model.Patient', values);




             var errors = patient.validate();

             if (errors.isValid()) {
                 var formRecord = form.getRecord();

                 if (formRecord) {
                     // perform update
                     console.log(" form record set values ");
                     //la

                     formRecord.set(values);
                 } else {
                     // perform create
                     //store.add(user);
                     store.add(patient);
                 }

                 store.sync({
                     success: function() {
                         win.close();
                     },
                     failure: function(batch, options) {
                         // extract server side validation errors
                         var serverSideValidationErrors = batch.exceptions[0].error;

                         var errors = new Ext.data.Errors();
                         for (var field in serverSideValidationErrors) {
                             var message = serverSideValidationErrors[field].join(", ");
                             errors.add(undefined, { field: field, message: message });
                         }
                         form.getForm().markInvalid(errors);
                     }
                 });
             } else {
                 form.getForm().markInvalid(errors);
             }
         }



     });