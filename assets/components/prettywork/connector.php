<?php
/** @noinspection PhpIncludeInspection */
require_once dirname(dirname(dirname(dirname(__FILE__)))) . '/config.core.php';
/** @noinspection PhpIncludeInspection */
require_once MODX_CORE_PATH . 'config/' . MODX_CONFIG_KEY . '.inc.php';
/** @noinspection PhpIncludeInspection */
require_once MODX_CONNECTORS_PATH . 'index.php';
/** @var prettywork $prettywork */
$prettywork = $modx->getService('prettywork', 'prettywork', $modx->getOption('prettywork_core_path', null, $modx->getOption('core_path') . 'components/prettywork/') . 'model/prettywork/');
$modx->lexicon->load('prettywork:default');

// handle request
$corePath = $modx->getOption('prettywork_core_path', null, $modx->getOption('core_path') . 'components/prettywork/');
$path = $modx->getOption('processorsPath', $prettywork->config, $corePath . 'processors/');
$modx->request->handleRequest(array(
	'processors_path' => $path,
	'location' => '',
));