<?php

/**
 * Enable an Item
 */
class prettyworkItemEnableProcessor extends modObjectProcessor {
	public $objectType = 'prettyworkItem';
	public $classKey = 'prettyworkItem';
	public $languageTopics = array('prettywork');
	//public $permission = 'save';


	/**
	 * @return array|string
	 */
	public function process() {
		if (!$this->checkPermissions()) {
			return $this->failure($this->modx->lexicon('access_denied'));
		}

		$ids = $this->modx->fromJSON($this->getProperty('ids'));
		if (empty($ids)) {
			return $this->failure($this->modx->lexicon('prettywork_item_err_ns'));
		}

		foreach ($ids as $id) {
			/** @var prettyworkItem $object */
			if (!$object = $this->modx->getObject($this->classKey, $id)) {
				return $this->failure($this->modx->lexicon('prettywork_item_err_nf'));
			}

			$object->set('active', true);
			$object->save();
		}

		return $this->success();
	}

}

return 'prettyworkItemEnableProcessor';
