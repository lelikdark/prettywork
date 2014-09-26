prettywork.panel.Home = function (config) {
	config = config || {};
	Ext.apply(config, {
		baseCls: 'modx-formpanel',
		layout: 'anchor',
		/*
		 stateful: true,
		 stateId: 'prettywork-panel-home',
		 stateEvents: ['tabchange'],
		 getState:function() {return {activeTab:this.items.indexOf(this.getActiveTab())};},
		 */
		hideMode: 'offsets',
		items: [{
			html: '<h2>' + _('prettywork') + '</h2>',
			cls: '',
			style: {margin: '15px 0'}
		}, {
			xtype: 'modx-tabs',
			defaults: {border: false, autoHeight: true},
			border: true,
			hideMode: 'offsets',
			items: [{
				title: _('prettywork_items'),
				layout: 'anchor',
				items: [{
					html: _('prettywork_intro_msg'),
					cls: 'panel-desc',
				}, {
					xtype: 'prettywork-grid-items',
					cls: 'main-wrapper',
				}]
			}]
		}]
	});
	prettywork.panel.Home.superclass.constructor.call(this, config);
};
Ext.extend(prettywork.panel.Home, MODx.Panel);
Ext.reg('prettywork-panel-home', prettywork.panel.Home);
