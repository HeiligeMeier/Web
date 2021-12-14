<?php
    require("start.php");
    $service = new Utils\BackendService(CHAT_SERVER_URL, CHAT_SERVER_ID);
    $user = new Model\User("Anna");
    $friend = new Model\Friend("Kiwi", "");

    // var_dump($service->test());
    // var_dump($service->login("Tom", "12345678"));
    // var_dump($service->register("Quadrat", "12345678"));
    // var_dump($service->userExists("Test123"));
     var_dump($service->loadUser("Tom"));
    // var_dump($service->saveUser($user));
    // var_dump($service->listUsers());
    // var_dump($service->listMessages($user));
    // var_dump($service->sendMessage("******************", $user));
    // var_dump($service->unreadMessageCount());
    // var_dump($service->loadFriends());
    // var_dump($service->friendRequest($friend));
    // var_dump($service->friendAccept($friend));
    // var_dump($service->friendDismiss($friend));
    // var_dump($service->friendRemove($friend));
?>