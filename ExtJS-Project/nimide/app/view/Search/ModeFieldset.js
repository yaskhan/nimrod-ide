/*
 * File: app/view/Search/ModeFieldset.js
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

Ext.define('MyApp.view.Search.ModeFieldset', {
    extend: 'Ext.form.FieldSet',
    alias: 'widget.searchfieldset',

    height: 130,
    width: 260,
    title: 'Searche mode',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'checkboxgroup',
                    height: 100,
                    layout: {
                        align: 'stretch',
                        type: 'vbox'
                    },
                    items: [
                        {
                            xtype: 'checkboxfield',
                            boxLabel: 'Normal'
                        },
                        {
                            xtype: 'checkboxfield',
                            boxLabel: 'Extended'
                        },
                        {
                            xtype: 'checkboxfield',
                            boxLabel: 'Regex'
                        },
                        {
                            xtype: 'checkboxfield',
                            boxLabel: '. match newline'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});