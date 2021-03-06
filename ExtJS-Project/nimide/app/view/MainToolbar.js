/*
 * File: app/view/MainToolbar.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.MainToolbar', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.maintoolbar',

    height: 31,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'button',
                    text: 'File',
                    menu: {
                        xtype: 'menu',
                        items: [
                            {
                                xtype: 'menuitem',
                                text: 'New...',
                                listeners: {
                                    click: {
                                        fn: me.onMenuitemClick1,
                                        scope: me
                                    }
                                }
                            },
                            {
                                xtype: 'menuitem',
                                text: 'New from template'
                            },
                            {
                                xtype: 'menuseparator'
                            },
                            {
                                xtype: 'menuitem',
                                text: 'Open'
                            },
                            {
                                xtype: 'menuseparator'
                            },
                            {
                                xtype: 'menuitem',
                                text: 'Save as...'
                            },
                            {
                                xtype: 'menuitem',
                                text: 'Save'
                            },
                            {
                                xtype: 'menuseparator'
                            },
                            {
                                xtype: 'menuitem',
                                text: 'Properties'
                            },
                            {
                                xtype: 'menuseparator'
                            },
                            {
                                xtype: 'menuitem',
                                text: 'Exit'
                            }
                        ]
                    }
                },
                {
                    xtype: 'button',
                    text: 'Edit',
                    menu: {
                        xtype: 'menu',
                        items: [
                            {
                                xtype: 'menuitem',
                                text: 'Undo'
                            },
                            {
                                xtype: 'menuitem',
                                text: 'Redo'
                            },
                            {
                                xtype: 'menuseparator'
                            },
                            {
                                xtype: 'menuitem',
                                text: 'Cut'
                            },
                            {
                                xtype: 'menuitem',
                                text: 'Paste'
                            },
                            {
                                xtype: 'menuitem',
                                text: 'Copy'
                            },
                            {
                                xtype: 'menuseparator'
                            },
                            {
                                xtype: 'menuitem',
                                text: 'Comment'
                            }
                        ]
                    }
                },
                {
                    xtype: 'button',
                    text: 'Navigate',
                    menu: {
                        xtype: 'menu',
                        items: [
                            {
                                xtype: 'menuitem',
                                text: 'Go into'
                            },
                            {
                                xtype: 'menuitem',
                                text: 'Go to'
                            },
                            {
                                xtype: 'menuitem',
                                text: 'Open declaration'
                            },
                            {
                                xtype: 'menuitem',
                                text: 'Go to line'
                            },
                            {
                                xtype: 'menuitem',
                                text: 'Back'
                            }
                        ]
                    }
                },
                {
                    xtype: 'button',
                    text: 'Search',
                    menu: {
                        xtype: 'menu',
                        items: [
                            {
                                xtype: 'menuitem',
                                text: 'Find'
                            },
                            {
                                xtype: 'menuitem',
                                text: 'Replace'
                            },
                            {
                                xtype: 'menuitem',
                                text: 'Searche in file'
                            },
                            {
                                xtype: 'menuitem',
                                text: 'Searche in project'
                            },
                            {
                                xtype: 'menuitem',
                                text: 'Next'
                            },
                            {
                                xtype: 'menuitem',
                                text: 'Previous'
                            }
                        ]
                    }
                },
                {
                    xtype: 'button',
                    text: 'Project',
                    menu: {
                        xtype: 'menu',
                        items: [
                            {
                                xtype: 'menuitem',
                                text: 'Open'
                            },
                            {
                                xtype: 'menuitem',
                                text: 'Close'
                            },
                            {
                                xtype: 'menuseparator'
                            },
                            {
                                xtype: 'menuitem',
                                text: 'Build all'
                            },
                            {
                                xtype: 'menuitem',
                                text: 'Build project'
                            },
                            {
                                xtype: 'menuitem',
                                text: 'Buyld automatically'
                            },
                            {
                                xtype: 'menuseparator'
                            },
                            {
                                xtype: 'menuitem',
                                text: 'Properties'
                            }
                        ]
                    }
                },
                {
                    xtype: 'button',
                    text: 'Run',
                    menu: {
                        xtype: 'menu',
                        items: [
                            {
                                xtype: 'menuitem',
                                text: 'Run'
                            },
                            {
                                xtype: 'menuitem',
                                text: 'Debug'
                            },
                            {
                                xtype: 'menuitem',
                                text: 'Configure'
                            }
                        ]
                    }
                },
                {
                    xtype: 'button',
                    text: 'Help',
                    menu: {
                        xtype: 'menu',
                        items: [
                            {
                                xtype: 'menuitem',
                                text: 'Contents'
                            },
                            {
                                xtype: 'menuitem',
                                text: 'Search'
                            },
                            {
                                xtype: 'menuitem',
                                text: 'About'
                            },
                            {
                                xtype: 'menuseparator'
                            },
                            {
                                xtype: 'menuitem',
                                text: 'Settings'
                            }
                        ]
                    }
                },
                {
                    xtype: 'button',
                    destroyMenu: true,
                    text: 'MyButton'
                }
            ]
        });

        me.callParent(arguments);
    },

    onMenuitemClick1: function(item, e, eOpts) {

    }

});