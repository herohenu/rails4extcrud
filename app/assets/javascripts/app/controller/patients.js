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
                     itemdblclick: this.addPatient

                 },
                 'patientedit button[action=save]': {
                     click: this.updatePatient
                 }



             });
         },

         /*onPanelRendered: function() {
          console.log('The panel was rendered');
          }*/

         editPatient: function(grid, record) {
           //  console.log('Double clicked on ' + record.get('name'));
             var view = Ext.widget('patientedit');
             view.down('form').loadRecord(record);


         },


         addPatient: function() {
             //  console.log('Double clicked on ' + record.get('name'));
             var view = Ext.widget('patientadd');
             //view.down('form').loadRecord(record);
              view.show();

         },

         updatePatient: function(button) {
             // console.log('clicked the Save button');
             var win    = button.up('window'),
                 form   = win.down('form'),
                 record = form.getRecord(),
                 values = form.getValues();

             record.set(values);
             win.close();
         }
     });