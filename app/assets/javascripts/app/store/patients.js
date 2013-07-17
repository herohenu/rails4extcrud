Ext.define('AM.store.Patients', {
    extend: 'Ext.data.Store',
    model: 'AM.model.Patient',
    autoLoad: true,

    proxy: {
        type: 'ajax',
        api: {
            read: 'page/patient.json'//,
           // update: 'data/updateUsers.json'
        },
        reader: {
            type: 'json',
            root: 'patients',
            successProperty: 'success'
        }
    }
});