var prettywork = function (config) {
	config = config || {};
	prettywork.superclass.constructor.call(this, config);
};
Ext.extend(prettywork, Ext.Component, {
	page: {}, window: {}, grid: {}, tree: {}, panel: {}, combo: {}, config: {}, view: {}, utils: {}
});
Ext.reg('prettywork', prettywork);

prettywork = new prettywork();