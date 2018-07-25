<?php
include __DIR__.'/vendor/autoload.php';
\houdunwang\config\Config::loadFiles(__DIR__.'/config');
$sign =  \houdunwang\oss\Oss::sign();
echo($sign);