<?php

define('CHAT_SERVER_URL', 'https://online-lectures-cs.thi.de/chat');
define('CHAT_SERVER_ID', '...'); # Ihre Collection ID


// session_start();

spl_autoload_register(function($class) {
include str_replace('\\', '/', $class) . '.php';
});

$service = new Utils\BackendService(CHAT_SERVER_URL, CHAT_SERVER_ID);
?>
