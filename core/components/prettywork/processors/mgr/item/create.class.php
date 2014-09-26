<?php

/**
 * Create an Item
 */
class prettyworkItemCreateProcessor extends modObjectCreateProcessor {
	public $objectType = 'prettyworkItem';
	public $classKey = 'prettyworkItem';
	public $languageTopics = array('prettywork');
	//public $permission = 'create';


	/**
	 * @return bool
	 */
	public function beforeSet() {
		$name = trim($this->getProperty('name'));
		if (empty($name)) {
			$this->modx->error->addField('name', $this->modx->lexicon('prettywork_item_err_name'));
		}
		elseif ($this->modx->getCount($this->classKey, array('name' => $name))) {
			$this->modx->error->addField('name', $this->modx->lexicon('prettywork_item_err_ae'));
		}

		return parent::beforeSet();
	}

}

return 'prettyworkItemCreateProcessor';