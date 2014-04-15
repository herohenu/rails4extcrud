/*
Ext.define('AM.store.Patients', {
    extend: 'Ext.data.Store',
    model: 'AM.model.Patient',
    autoLoad: true,

    proxy: {
        type: 'ajax',
        api: {

            read: 'patients.json'//,
            //update: 'patients/update',
           // crate:'patients/create'

        },
        reader: {
            type: 'json',
            root: 'patients',
            successProperty: 'success'
        }


    }
});*/


Ext.define('AM.store.Patients', {
    extend: 'Ext.data.Store',
    model: 'AM.model.Patient',
    autoLoad: true,
    autoSync: false,

    listeners: {
        load: function() {
            console.log(arguments);
//            console.log("load  data store store " );

        },
        update: function() {
//            console.log(arguments);
            console.log("update  data store");
        },

        beforesync: function() {
//            console.log(arguments);
            console.log("beforesync  data store");
        }
    }
});