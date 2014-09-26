prettywork.page.Home = function (config) {
	config = config || {};
	Ext.applyIf(config, {
		components: [{
			xtype: 'prettywork-panel-home', renderTo: 'prettywork-panel-home-div'
		}]
	});
	prettywork.page.Home.superclass.constructor.call(this, config);
};
Ext.extend(prettywork.page.Home, MODx.Component);
Ext.reg('prettywork-page-home', prettywork.page.Home);