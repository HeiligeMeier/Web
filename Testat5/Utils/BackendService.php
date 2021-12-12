<?php
namespace Utils;

use Model\User;

class BackendService {
    private $id;
    private $base = CHAT_SERVER_URL . "/";

    public function __construct($id, $base) {
        $this->id = $id;
        // $this->base = $base;
    }
 
    // Testfunktion
    public function test() {
        try {
            return HttpClient::get($this->base . '/test.json');
            echo "Try-Block" . "<br>";
        } catch(\Exception $e) {
            error_log($e);
            echo "Catch-Block" . "<br>" . $e;
        }
        echo "Ausgabe" . "<br>";
        return false;
    }

    public function login($username, $password) {
        try {
            // $result = HttpClient::post(CHAT_SERVER_URL . "/" . CHAT_SERVER_ID . "/login", array("username" => "Tom", "password" => "12345678"));
            $result = HttpClient::post(CHAT_SERVER_URL . "/" . CHAT_SERVER_ID . "/login", array("username" => $username, "password" => $password));
            echo "Token: " . $result->token;
        } catch(\Exception $e) {
            echo "Loginprocess failed! / " . "<br>" . $e;
        }
    }

    public function register($username, $password) {
        try {
            // $result = HttpClient::post(CHAT_SERVER_URL . "/" . CHAT_SERVER_ID . "/register", array("username" => "Tom", "password" => "12345678"));
            $result = HttpClient::post(CHAT_SERVER_URL . "/" . CHAT_SERVER_ID . "/register", array("username" => $username, "password" => $password));
            echo "Token: " . $result->token;
        } catch(\Exception $e) {
            echo "Registration failed! / " . "<br>" . $e;
        }
    }

    public function userExists($username) {
        try {
            // HttpClient::get(CHAT_SERVER_URL . "/" . CHAT_SERVER_ID . "/user/Tom");
            HttpClient::get(CHAT_SERVER_URL . "/" . CHAT_SERVER_ID . "/user" . "/" . $username);
            echo "User exists!";
        } catch(\Exception $e) {
            echo "User does not exist!" . "<br>" . $e;
        }
    }

    public function loadUser($user) {
        try {
             $data = HttpClient::get(CHAT_SERVER_URL . "/" . CHAT_SERVER_ID . "/user/Tom",
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVG9tIiwiaWF0IjoxNjI5ODkzNTkwfQ.MRSZeLY8YNGp1dBWoYLUXTfs4ci1v13TkhQmke2nfII");
            // $data = HttpClient::get(CHAT_SERVER_URL . "/" . CHAT_SERVER_ID . "/user" . "/" . $user,
            //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVG9tIiwiaWF0IjoxNjI5ODkzNTkwfQ.MRSZeLY8YNGp1dBWoYLUXTfs4ci1v13TkhQmke2nfII");
            // woher kriegt man das token?
            
            // User::fromJson($data);
            var_dump($data);
        } catch(\Exception $e) {
            echo "User not found!" . "<br>" . $e;
        }
    }

    public function saveUser($user) {
        try {
            // user anstatt Tom , ...?
              HttpClient::post(CHAT_SERVER_URL . "/" . CHAT_SERVER_ID . "/user/Tom",
                array("customA" => "abc", "customB" => "xyz"),
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVG9tIiwiaWF0IjoxNjI5ODkzNTkwfQ.MRSZeLY8YNGp1dBWoYLUXTfs4ci1v13TkhQmke2nfII");
            echo "Saved...";
        } catch(\Exception $e) {
            echo "saveUser not found / " . "<br>" . $e;
        }
    }

    public function listUsers() {
        try {   
            $list = HttpClient::get(CHAT_SERVER_URL . "/" . CHAT_SERVER_ID . "/user",
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVG9tIiwiaWF0IjoxNjI5ODkzNTkwfQ.MRSZeLY8YNGp1dBWoYLUXTfs4ci1v13TkhQmke2nfII");
            var_dump($list);
        } catch(\Exception $e) {
            echo "Error while loading list Users" . "<br>" . $e;
        }
    }

    public function listMessages() {
        try { // Jerry ersetzen durch Friend?
            $list = HttpClient::get(CHAT_SERVER_URL . "/" . CHAT_SERVER_ID . "/message/Jerry",
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVG9tIiwiaWF0IjoxNjI5ODkzNTkwfQ.MRSZeLY8YNGp1dBWoYLUXTfs4ci1v13TkhQmke2nfII");
            var_dump($list);
        } catch(\Exception $e) {
            echo "Error while loading list Messages" . "<br>" . $e;
        }
    }

    public function sendMessage() {
        try {
            $list = HttpClient::post(CHAT_SERVER_URL . "/" . CHAT_SERVER_ID . "/message",
            // Hello, Jerry ersetzen
                array("message" => "Hello?!", "to" => "Jerry"),
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVG9tIiwiaWF0IjoxNjI5ODkzNTkwfQ.MRSZeLY8YNGp1dBWoYLUXTfs4ci1v13TkhQmke2nfII");
            var_dump($list);
        } catch(\Exception $e) {
            echo "Error while sending Message" . "<br>" . $e;
        }
    }

    public function unreadMessageCount() {
        try {
            $data = HttpClient::get(CHAT_SERVER_URL . "/" . CHAT_SERVER_ID . "/unread",
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVG9tIiwiaWF0IjoxNjI5ODkzNTkwfQ.MRSZeLY8YNGp1dBWoYLUXTfs4ci1v13TkhQmke2nfII");
            var_dump($data);
        } catch(\Exception $e) {
            echo "Could not get unreadMessageCount" . "<br>" . $e;
        }
    }

    public function loadFriends() {
        try {
            $data = HttpClient::get(CHAT_SERVER_URL . "/" . CHAT_SERVER_ID . "/friend",
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVG9tIiwiaWF0IjoxNjI5ODkzNTkwfQ.MRSZeLY8YNGp1dBWoYLUXTfs4ci1v13TkhQmke2nfII");
            var_dump($data);
        } catch(\Exception $e) {
            echo "loading Friends failed" . "<br>" . $e;
        }
    }

    public function friendRequest($friend) {
        try { // Jerry durch friend ersetzen
            HttpClient::post(CHAT_SERVER_URL . "/" . CHAT_SERVER_ID . "/friend",
                array("username" => "Jerry"),
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVG9tIiwiaWF0IjoxNjI5ODkzNTkwfQ.MRSZeLY8YNGp1dBWoYLUXTfs4ci1v13TkhQmke2nfII");
            // HttpClient::post(CHAT_SERVER_URL . "/" . CHAT_SERVER_ID . "/friend",
            //     array("username" => // $friend username ?//),
            //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVG9tIiwiaWF0IjoxNjI5ODkzNTkwfQ.MRSZeLY8YNGp1dBWoYLUXTfs4ci1v13TkhQmke2nfII");
            echo "Requested...";
        } catch(\Exception $e) {
            echo "friendRequest failed" . "<br>" . $e;
        }
    }

    public function friendAccept($friend) {
        try {
            HttpClient::put(CHAT_SERVER_URL . "/" . CHAT_SERVER_ID . "/friend/Jerry",
                array("status" => "accepted"),
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVG9tIiwiaWF0IjoxNjI5ODkzNTkwfQ.MRSZeLY8YNGp1dBWoYLUXTfs4ci1v13TkhQmke2nfII");
            
            // HttpClient::put(CHAT_SERVER_URL . "/" . CHAT_SERVER_ID . "/friend" . "/" . $friend,
            //     array("status" => "accepted"),
            //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVG9tIiwiaWF0IjoxNjI5ODkzNTkwfQ.MRSZeLY8YNGp1dBWoYLUXTfs4ci1v13TkhQmke2nfII");
            echo "Accepted...";
        } catch(\Exception $e) {
            echo "Accepting friend failed" . "<br>" . $e;
        }
    }

    public function friendDismiss($friend) {
        try {
            HttpClient::put(CHAT_SERVER_URL . "/" . CHAT_SERVER_ID . "/friend/Jerry",
                array("status" => "dismissed"),
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVG9tIiwiaWF0IjoxNjI5ODkzNTkwfQ.MRSZeLY8YNGp1dBWoYLUXTfs4ci1v13TkhQmke2nfII");
            
            // HttpClient::put(CHAT_SERVER_URL . "/" . CHAT_SERVER_ID . "/friend" . "/" . $friend,
            //     array("status" => "dismissed"),
            //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVG9tIiwiaWF0IjoxNjI5ODkzNTkwfQ.MRSZeLY8YNGp1dBWoYLUXTfs4ci1v13TkhQmke2nfII");
            echo "Dismissed...";
        } catch(\Exception $e) {
            echo "Dismissing friend failed" . "<br>" . $e;
        }
    }

    public function friendRemove($friend) {
        try {
            HttpClient::delete(CHAT_SERVER_URL . "/" . CHAT_SERVER_ID . "/friend/Jerry",
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVG9tIiwiaWF0IjoxNjI5ODkzNTkwfQ.MRSZeLY8YNGp1dBWoYLUXTfs4ci1v13TkhQmke2nfII");
            
            //  HttpClient::delete(CHAT_SERVER_URL . "/" . CHAT_SERVER_ID . "/friend" . "/" . $friend,
            //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVG9tIiwiaWF0IjoxNjI5ODkzNTkwfQ.MRSZeLY8YNGp1dBWoYLUXTfs4ci1v13TkhQmke2nfII");
            echo "Removed...";
        } catch(\Exception $e) {
            echo "FriendRemove Error" . "<br>" . $e;
        }
    }
}

?>
