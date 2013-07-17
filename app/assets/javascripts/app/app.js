Ext.application({
    //今天有人问我，demo运行出错，
    //这里的requires需要是个数组，extjs源码没处理好只有一个requires的情况
    requires: ['Ext.container.Viewport'],
    name: 'AM',

    appFolder: 'app',
    controllers: [
        'Users'
    ],
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'userlist'
                }
            ]
        });
    }
});