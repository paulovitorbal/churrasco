<?php

class View{

	public $layout = 'views/layout.php';
	public $view = 'views/index.php';

	public function render(){
		ob_start();
		require_once($this->layout);
		echo ob_get_clean();

	}

	public function getContents(){
		ob_start();
		require_once($this->view);
		echo ob_get_clean();
	}



}
