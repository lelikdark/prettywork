<?php

/**
 * Class prettyworkMainController
 */
abstract class prettyworkMainController extends modExtraManagerController {
	/** @var prettywork $prettywork */
	public $prettywork;


	/**
	 * @return void
	 */
	public function initialize() {
		$corePath = $this->modx->getOption('prettywork_core_path', null, $this->modx->getOption('core_path') . 'components/prettywork/');
		require_once $corePath . 'model/prettywork/prettywork.class.php';

		$this->prettywork = new prettywork($this->modx);
		$this->addCss($this->prettywork->config['cssUrl'] . 'mgr/main.css');
		$this->addJavascript($this->prettywork->config['jsUrl'] . 'mgr/prettywork.js');
		$this->addHtml('
		<script type="text/javascript">
			prettywork.config = ' . $this->modx->toJSON($this->prettywork->config) . ';
			prettywork.config.connector_url = "' . $this->prettywork->config['connectorUrl'] . '";
		</script>
		');

		parent::initialize();
	}


	/**
	 * @return array
	 */
	public function getLanguageTopics() {
		return array('prettywork:default');
	}


	/**
	 * @return bool
	 */
	public function checkPermissions() {
		return true;
	}
}


/**
 * Class IndexManagerController
 */
class IndexManagerController extends prettyworkMainController {

	/**
	 * @return string
	 */
	public static function getDefaultController() {
		return 'home';
	}
}