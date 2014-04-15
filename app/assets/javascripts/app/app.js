Ext.application({
    //今天有人问我，demo运行出错，
    //这里的requires需要是个数组，extjs源码没处理好只有一个requires的情况
    requires: ['Ext.container.Viewport'],
    name: 'AM',
    appFolder: 'assets/app',
    controllers: [
        //'Users'
        'Pages','Patients'
    ],
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [ { region: "west", width:90, title: 'north', collapsible: true },
                { region: "east", width: 90, title: 'north', collapsible: true },
                { region: "center", split: true, border: true, collapsible: true,title:'center',
                    items:[
                        {xtype:'homePage'}
                    ]
                }

            ]
        });
    }
});