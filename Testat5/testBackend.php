<?php
    // Ausgabe: "bool(false)", das sollte aber ein Nachrichtenarray geliefert werden? kp wieso es nicht klappt.
    require("start.php");
    $service = new Utils\BackendService(CHAT_SERVER_URL, CHAT_SERVER_ID);
    //var_dump($service->test());
    var_dump($service->login("Test123", "12345678"));
?>