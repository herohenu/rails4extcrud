Ext.application({
    name: 'HelloExt',
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                /*{
                    title: 'Hello Ext',
                    html : 'Hello! Welcome to Ext JS.'
                }*/
               // panel
                tree
            ]
        });
    }
});

var treestore  = Ext.create('Ext.data.TreeStore', {
    root: {
        text: 'Root',
        expanded: true,
        children: [
            {
                text: 'Child 1',
                leaf: true
            },
            {
                text: 'Child 12',
                leaf: true
            },
            {
                text: 'Child 13',
                leaf: true
            },
            {
                text: 'Child 14',
                leaf: true
            },
            {
                text: 'Child 15',
                leaf: true
            },
            {
                text: 'Child 1',
                leaf: true
            },

            {
                text: 'Child 2',
                leaf: true
            }
]
}
});


var  panel = Ext.create('Ext.tree.Panel', {
    //renderTo: Ext.getBody(),
    title: 'Simple Tree',
    width: 150,
    height: 150,
    store: treestore
  /*  ,
    root: {
        text: 'Root',
        expanded: true,
        children: [
            {
                text: 'Child 1',
                leaf: true
            },
            {
                text: 'Child 2',
                leaf: true
            },
            {
                text: 'Child 3',
                expanded: true,
                children: [
                    {
                        text: 'Grandchild',
                        leaf: true
                    }
                ]
            }
        ]
    }*/
});




//--------------------------------------------------------------------------

var tree = Ext.create('Ext.tree.Panel');
tree.setRootNode({
    text: 'Root',
    expanded: true,
    children: [{
        text: 'Child 1',
        leaf: true
    }, {
        text: 'Child 2',
        leaf: true
    }]
});

var root = tree.getRootNode();

var parent = root.appendChild({
    text: 'Parent 1'
});

parent.appendChild({
    text: 'Child 3',
    leaf: true
});

parent.expand();

var child = parent.insertChild(0, {
    text: 'Child 2.5',
    leaf: true
});

parent.insertBefore({
    text: 'Child 2.75',
    leaf: true
},
    child.nextSibling
);

