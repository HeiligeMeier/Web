<?php
namespace Utils;

use Model\User;
use Model\Friend;

class BackendService {
    private $id;
    private $base;

    public function __construct() {
        $this->id = CHAT_SERVER_ID;
        $this->base = CHAT_SERVER_URL . "/";
    }
 
    // Testfunktion
    public function test() {
        try {
            echo "Try-Block" . "<br>";
            return HttpClient::get($this->base . '/test.json');
        } catch(\Exception $e) {
            error_log($e);
            echo "Catch-Block" . "<br>" . $e;
        }
        echo "Ausgabe" . "<br>";
        return false;
    }

    public function login($username, $password) {
        try {
            $result = HttpClient::post($this->base . $this->id . "/login", array("username" => $username, "password" => $password));
            $_SESSION['chat_token'] = $result->token;
            return true;
        } catch(\Exception $e) {
            // echo "Loginprocess failed! / " . "<br>" . $e;
        }    
    }    


    public function register($username, $password) {
        try {
            $result = HttpClient::post($this->base . $this->id . "/register", array("username" => $username, "password" => $password));
            $_SESSION['chat_token'] = $result->token;
            echo "Token: " . $result->token . "<br>";
        } catch(\Exception $e) {
            echo "Registration failed! / " . "<br>" . $e;
        }
    }

    public function userExists($username) {
        try {
            HttpClient::get($this->base . $this->id . "/user" . "/" . $username);
            //echo "User exists!" . "<br>";
            return true;
        } catch(\Exception $e) {
            // echo "User does not exist!" . "<br>" . $e;
        }
    }

    public function loadUser($username) {
        try {
            return HttpClient::get($this->base . $this->id . "/user" . "/" . $username,
                $_SESSION['chat_token']);
            
        } catch(\Exception $e) {
            echo "User not found!" . "<br>" . $e;
        }
    }

    public function saveUser(User $user) {
        try {
            return HttpClient::post($this->base . $this->id . "/user" . "/" . $user->getUsername(),
                array("firstname" => $user->getFirstName(), "lastname" => $user->getLastName(), "about"=> $user->getAbout(), "coffeeOrTea"=> $user->getCoffeeOrTea(), "chatLayout"=> $user->getChatLayout()),
                $_SESSION['chat_token']);
            echo "Saved..." . "<br>";
        } catch(\Exception $e) {
            echo "saveUser not found / " . "<br>" . $e;
        }
    }

    public function listUsers() {
        try {   
            $list = HttpClient::get($this->base . $this->id . "/user",
                $_SESSION['chat_token']);
            var_dump($list);
        } catch(\Exception $e) {
            echo "Error while loading list Users" . "<br>" . $e;
        }
    }

    public function listMessages(User $user) {
        try { 
            $list = HttpClient::get($this->base . $this->id . "/message" . "/" . $user->getUsername(),
                $_SESSION['chat_token']);
            return $list;
            //var_dump($list);
        } catch(\Exception $e) {
            echo "Error while loading list Messages" . "<br>" . $e;
        }
    }

    public function sendMessage($text, User $receiver) {
        try {
            $list = HttpClient::post($this->base . $this->id . "/message",
                array("message" => $text, "to" => $receiver->getUsername()),
                $_SESSION['chat_token']);
            //var_dump($list);
        } catch(\Exception $e) {
            echo "Error while sending Message" . "<br>" . $e;
        }
    }

    // Später testen
    public function unreadMessageCount() {
        try {
            $data = HttpClient::get($this->base . $this->id . "/unread",
                $_SESSION['chat_token']);
            //     echo "try block messages" . "<br>";
            // var_dump($data);
            return $data;
        } catch(\Exception $e) {
            // echo "Could not get unreadMessageCount" . "<br>" . $e;
        }
    }

    public function loadFriends() {
        try {
            $data = HttpClient::get($this->base . $this->id . "/friend",
                $_SESSION['chat_token']);
            return $data;
        } catch(\Exception $e) {
            echo "loading Friends failed" . "<br>" . $e;
        }
    }

    public function friendRequest(Friend $friend) {
        try { 
            HttpClient::post($this->base . $this->id . "/friend",
                array("username" => $friend->getUsername()),
                $_SESSION['chat_token']);
            echo "Requested...";
        } catch(\Exception $e) {
            echo "friendRequest failed" . "<br>" . $e;
        }
    }
    
    public function friendAccept(Friend $friend) {
        try {
            HttpClient::put($this->base . $this->id . "/friend" . "/" . $friend->getUsername(),
                array("status" => "accepted"),
                $_SESSION['chat_token']);
            echo "Accepted...";
        } catch(\Exception $e) {
            echo "Accepting friend failed" . "<br>" . $e;
        }
    }

    public function friendDismiss(Friend $friend) {
        try {
            HttpClient::put($this->base . $this->id . "/friend" . "/" . $friend->getUsername(),
                array("status" => "dismissed"),
                $_SESSION['chat_token']);
            echo "Dismissed...";
        } catch(\Exception $e) {
            echo "Dismissing friend failed" . "<br>" . $e;
        }
    }

    public function friendRemove(Friend $friend) {
        try {
            HttpClient::delete($this->base . $this->id . "/friend" . "/" . $friend->getUsername(),
                $_SESSION['chat_token']);
            echo "Removed...";
        } catch(\Exception $e) {
            echo "FriendRemove Error" . "<br>" . $e;
        }
    }
}

?>
