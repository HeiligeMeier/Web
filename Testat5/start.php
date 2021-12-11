<?php

define('CHAT_SERVER_URL', 'https://online-lectures-cs.thi.de/chat');
define('CHAT_SERVER_ID', '56ce2af0-ee84-4e78-85bc-6bba6c51c739'); # Ihre Collection ID
// Collection ID (von allen):       56ce2af0-ee84-4e78-85bc-6bba6c51c739
// Collection ID (eigene/neue):     fc34c663-de04-4404-bc1a-9505d9042d55

session_start();

spl_autoload_register(function($class) {
include str_replace('\\', '/', $class) . '.php';
});

$service = new Utils\BackendService(CHAT_SERVER_URL, CHAT_SERVER_ID);
?>
