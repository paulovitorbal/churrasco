<?php

namespace Paulovitorbal;


class BabelWebpack {
	const BABEL = ".\\node_modules\\.bin\\babel src\\javascript -o tmp\\bundle.js";
	const WEBPACK = "node_modules\\.bin\\webpack.cmd tmp\\bundle.js --output-filename bundle.js"; 
	public static function test(){
		
		/*echo "Executing babel: " . BabelWebpack::BABEL . PHP_EOL;
		echo shell_exec(BabelWebpack::BABEL) . PHP_EOL;
		echo "Executing webpack: " . BabelWebpack::WEBPACK . PHP_EOL;
		echo shell_exec(BabelWebpack::WEBPACK) . PHP_EOL;*/
		$old = BabelWebpack::getFileList();
		while(true){
			$new = BabelWebpack::getFileList();
			if ($new != $old)
				echo "Rerun babel and webpack\n";
			$old = $new;
			sleep(1);
		}

		return 0;
	}

	public static function getFileList(){
		$files = glob("src/javascript/*");
		$tmp = array();
		clearstatcache();
		foreach ($files as $file) {
			$tmp[$file] = filemtime($file); 
		}
		return $tmp;
	}

}
