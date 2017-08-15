<?php

namespace Paulovitorbal;


class BabelWebpack {
	const BABEL = ".\\node_modules\\.bin\\babel src\\javascript --out-dir lib";
	const WEBPACK = "node_modules\\.bin\\webpack.cmd lib\\app.js --output-filename bundle.js"; 
	public static function watcher(){
		
		echo "Watching js files;\n";
		BabelWebpack::run();
		
		$old = BabelWebpack::getFileList();
		while(true){
			$new = BabelWebpack::getFileList();
			if ($new != $old){
				echo "Rerun babel and webpack\n";
			}
			$old = $new;
			sleep(1);
		}

		return 0;
	}
	public static function run(){
		echo "Executing babel: " . BabelWebpack::BABEL . PHP_EOL;
		echo shell_exec(BabelWebpack::BABEL) . PHP_EOL;
		echo "Executing webpack: " . BabelWebpack::WEBPACK . PHP_EOL;
		echo shell_exec(BabelWebpack::WEBPACK) . PHP_EOL;
		
	}
	public static function getFileList(){

		$tmp = array();
		clearstatcache();
		
		$path = realpath('src\\javascript');
		foreach (new \RecursiveIteratorIterator(new \RecursiveDirectoryIterator($path)) as $key => $filename)
		{
			if (strstr($key, 'bundle.js')) continue;
			if (strstr($key, 'tmp.js')) continue;

			if (is_file($filename)){
				$tmp[$key] = filemtime($key); 
			}
		}
		
		return $tmp;
	}

}
