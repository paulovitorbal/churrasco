<?php
$d = new DateTime('@' . '1503621571');
$d->setTimezone(new DateTimeZone('America/Sao_Paulo'));
var_dump($d);