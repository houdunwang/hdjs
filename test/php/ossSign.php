<?php
include '../vendor/autoload.php';
\houdunwang\config\Config::loadFiles('../config');
echo \houdunwang\oss\Oss::sign();