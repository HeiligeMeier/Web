<?php
    require("start.php");
    $service = new Utils\BackendService(CHAT_SERVER_URL, CHAT_SERVER_ID);
    $user = new Model\User("Test123");
    $friend = new Model\Friend("Kiwi", "accepted");
    // Testfunktion
    // var_dump($service->test());
    // Funktionen überprüfen
    var_dump($service->login("Test123", "12345678"));
    // var_dump($service->register("Test123", "12345678"));
    // var_dump($service->userExists("Test123"));
    // var_dump($service->loadUser("Test123"));
    // var_dump($service->saveUser($user));
    // var_dump($service->listUsers());
    // var_dump($service->listMessages());
    // var_dump($service->sendMessage());
    // var_dump($service->unreadMessageCount());
    // var_dump($service->loadFriends());
    // var_dump($service->friendRequest($friend));
    // var_dump($service->friendAccept($friend));
    // var_dump($service->friendDismiss($friend));
    // var_dump($service->friendRemove($friend));

// ...
?>