prettywork.window.CreateItem = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'prettywork-item-window-create';
	}
	Ext.applyIf(config, {
		title: _('prettywork_item_create'),
		width: 550,
		autoHeight: true,
		url: prettywork.config.connector_url,
		action: 'mgr/item/create',
		fields: this.getFields(config),
		keys: [{
			key: Ext.EventObject.ENTER, shift: true, fn: function () {
				this.submit()
			}, scope: this
		}]
	});
	prettywork.window.CreateItem.superclass.constructor.call(this, config);
};
Ext.extend(prettywork.window.CreateItem, MODx.Window, {

	getFields: function (config) {
		return [{
			xtype: 'textfield',
			fieldLabel: _('prettywork_item_name'),
			name: 'name',
			id: config.id + '-name',
			anchor: '99%',
			allowBlank: false,
		}, {
			xtype: 'textarea',
			fieldLabel: _('prettywork_item_description'),
			name: 'description',
			id: config.id + '-description',
			height: 150,
			anchor: '99%'
		}, {
			xtype: 'xcheckbox',
			boxLabel: _('prettywork_item_active'),
			name: 'active',
			id: config.id + '-active',
			checked: true,
		}];
	}

});
Ext.reg('prettywork-item-window-create', prettywork.window.CreateItem);


prettywork.window.UpdateItem = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'prettywork-item-window-update';
	}
	Ext.applyIf(config, {
		title: _('prettywork_item_update'),
		width: 550,
		autoHeight: true,
		url: prettywork.config.connector_url,
		action: 'mgr/item/update',
		fields: this.getFields(config),
		keys: [{
			key: Ext.EventObject.ENTER, shift: true, fn: function () {
				this.submit()
			}, scope: this
		}]
	});
	prettywork.window.UpdateItem.superclass.constructor.call(this, config);
};
Ext.extend(prettywork.window.UpdateItem, MODx.Window, {

	getFields: function (config) {
		return [{
			xtype: 'hidden',
			name: 'id',
			id: config.id + '-id',
		}, {
			xtype: 'textfield',
			fieldLabel: _('prettywork_item_name'),
			name: 'name',
			id: config.id + '-name',
			anchor: '99%',
			allowBlank: false,
		}, {
			xtype: 'textarea',
			fieldLabel: _('prettywork_item_description'),
			name: 'description',
			id: config.id + '-description',
			anchor: '99%',
			height: 150,
		}, {
			xtype: 'xcheckbox',
			boxLabel: _('prettywork_item_active'),
			name: 'active',
			id: config.id + '-active',
		}];
	}

});
Ext.reg('prettywork-item-window-update', prettywork.window.UpdateItem);