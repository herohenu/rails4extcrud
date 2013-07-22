Ext.define('AM.model.Patient', {
    extend: 'Ext.data.Model',
    //fields: ['id','patient_ids', ' spell_code','name','social_security_number','sex','birthday'] ,
    fields: [
        {name:'id',type:'string'},
        {name:'patient_ids',type:"string"},
        {name:'spell_code',type:'string'},
        {name:'name',type:'string'},
        {name:'social_security_number',type:'string'},
        {name:'sex',type:'string'},
        {name:'birthday',type:'string'}
    ] ,


    idProperty: 'id',
    proxy: {
        url : '/patients',
        type: 'rest',
        format: 'json',

        reader: {
           root: 'patient',
           // record: 'patient',
            successProperty: 'success',
            messageProperty: 'errors'
        },
        writer: {
            getRecordData: function(record) {
//                console.log(" 获取的数据记录是："+ record.data);
               //保存的时候调用这里 写入到server里面
               return { patient: record.data };
            }
        }
    }

});