<?php

namespace Paulovitorbal;
use Zend\Db\TableGateway\TableGateway;
use Zend\Db\Sql\Sql;
use Zend\Db\Sql\Ddl;
use Zend\Db\Sql\Ddl\Column;
use Zend\Db\Sql\Ddl\Constraint;
class Controller{


	private function verifyIfTableExists($adapter, $tableName){
		$schemas = $adapter->query('show databases', $adapter::QUERY_MODE_EXECUTE)->toArray();
		if (!in_array(["Database"=>"churrasco"], $schemas)){
			$adapter->query('create database churrasco', $adapter::QUERY_MODE_EXECUTE);
		}
		$adapter->query('use churrasco', $adapter::QUERY_MODE_EXECUTE);
		$tables = $adapter->query('show tables', $adapter::QUERY_MODE_EXECUTE)->toArray();
		if (!in_array(["Tables_in_churrasco"=>$tableName], $tables)){
			$table = new Ddl\CreateTable($tableName);
			$column = new Column\Integer('id_churrasco');
			$column->setOption('AUTO_INCREMENT', true);
			$table->addColumn($column);
			$table->addConstraint(new Constraint\PrimaryKey('id_churrasco'));
			$table->addColumn(new Column\Text('txt_convite', 14));
			$table->addColumn(new Column\Datetime('dt_entrada'));
			$table->addColumn(new Column\Integer('nu_seq_usuario'));
			$table->addColumn(new Column\Varchar('no_usuario', 30));
			$sql = new Sql($adapter);
			$adapter->query(
			    $sql->getSqlStringForSqlObject($table),
			    $adapter::QUERY_MODE_EXECUTE
			);
		}
	}
	public function sync($adapter, $convites){


		$this->verifyIfTableExists($adapter, 'convites');
		$table = new TableGateway('convites', $adapter); 

		foreach ($convites as $convite) {
			$d = new \DateTime('@' . floor($convite['time']/1000));
			$d->setTimezone(new \DateTimeZone('America/Sao_Paulo'));
			$data = [
				'txt_convite' => $convite['convite'],
				'dt_entrada' => $d->format('Y-m-d H:i:s'),
				'nu_seq_usuario' => $convite['id'],
				'no_usuario' => $convite['usuario'],
			];
			$table->insert($data);
		}

		$result = $table->select();
		$return = [];
		foreach ($result as $convite) {
			$d = new \DateTime($convite['dt_entrada']);

			$return[] = [
				'convite' => $convite['txt_convite'],
				'time' => $d->getTimestamp() * 1000,
				'id' => $convite['nu_seq_usuario'],
				'sync' => 1
			];
		}
		echo json_encode($return);


	}

}