<?php
namespace Utils;
class BackendService {
    private $id;
    private $base;

    public function __construct($id, $base) {
        $this->id = $id;
        $this->base = $base;
    }

    public function login($username, $password) {
        try {
            $result = Utils\HttpClient::post("https://online-lectures-cs.thi.de/chat/56ce2af0-ee84-4e78-85bc-6bba6c51c739/login", array("username" => "Tom", "password" => "12345678"));
            echo "Token: " . $result->token;
        } catch(\Exception $e) {
            echo "Authentification failed";
        }
    }

    public function register($username, $password) {
        try {
            $result = Utils\HttpClient::post("https://online-lectures-cs.thi.de/chat/56ce2af0-ee84-4e78-85bc-6bba6c51c739/register", array("username" => "Tom", "password" => "12345678"));
            echo "Token: " . $result->token;
        } catch(\Exception $e) {
            echo "Authentification failed";
        }
    }

    public function userExists($username) {
        try {
            Utils\HttpClient::get("https://online-lectures-cs.thi.de/chat/56ce2af0-ee84-4e78-85bc-6bba6c51c739/user/Tom");
            echo "Exists";
        } catch(\Exception $e) {
            echo "Does not exist";
        }
    }

    public function loadUser($user) {
        try {
            $data = Utils\HttpClient::get("https://online-lectures-cs.thi.de/chat/56ce2af0-ee84-4e78-85bc-6bba6c51c739/user/Tom",
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVG9tIiwiaWF0IjoxNjI5ODkzNTkwfQ.MRSZeLY8YNGp1dBWoYLUXTfs4ci1v13TkhQmke2nfII");
            var_dump($data);
        } catch(\Exception $e) {
            echo "Not found";
        }
    }

    public function saveUser($user) {
        try {
            Utils\HttpClient::post("https://online-lectures-cs.thi.de/chat/56ce2af0-ee84-4e78-85bc-6bba6c51c739/user/Tom",
                array("customA" => "abc", "customB" => "xyz"),
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVG9tIiwiaWF0IjoxNjI5ODkzNTkwfQ.MRSZeLY8YNGp1dBWoYLUXTfs4ci1v13TkhQmke2nfII");
            echo "Saved...";
        } catch(\Exception $e) {
            echo "Not found";
        }
    }

    public function listUsers() {
        try {
            $list = Utils\HttpClient::get("https://online-lectures-cs.thi.de/chat/56ce2af0-ee84-4e78-85bc-6bba6c51c739/user",
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVG9tIiwiaWF0IjoxNjI5ODkzNTkwfQ.MRSZeLY8YNGp1dBWoYLUXTfs4ci1v13TkhQmke2nfII");
            var_dump($list);
        } catch(\Exception $e) {
            echo "Error while loading list";
        }
    }

    public function listMessages() {
        try {
            $list = Utils\HttpClient::get("https://online-lectures-cs.thi.de/chat/56ce2af0-ee84-4e78-85bc-6bba6c51c739/message/Jerry",
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVG9tIiwiaWF0IjoxNjI5ODkzNTkwfQ.MRSZeLY8YNGp1dBWoYLUXTfs4ci1v13TkhQmke2nfII");
            var_dump($list);
        } catch(\Exception $e) {
            echo "Error while loading list";
        }
    }

    public function sendMessage() {
        try {
            $list = Utils\HttpClient::post("https://online-lectures-cs.thi.de/chat/56ce2af0-ee84-4e78-85bc-6bba6c51c739/message",
                array("message" => "Hello?!", "to" => "Jerry"),
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVG9tIiwiaWF0IjoxNjI5ODkzNTkwfQ.MRSZeLY8YNGp1dBWoYLUXTfs4ci1v13TkhQmke2nfII");
            var_dump($list);
        } catch(\Exception $e) {
            echo "Error while loading list";
        }
    }

    public function unreadMessageCount() {
        try {
            $data = Utils\HttpClient::get("https://online-lectures-cs.thi.de/chat/56ce2af0-ee84-4e78-85bc-6bba6c51c739/unread",
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVG9tIiwiaWF0IjoxNjI5ODkzNTkwfQ.MRSZeLY8YNGp1dBWoYLUXTfs4ci1v13TkhQmke2nfII");
            var_dump($data);
        } catch(\Exception $e) {
            echo "Error...";
        }
    }

    public function loadFriends() {
        try {
            $data = Utils\HttpClient::get("https://online-lectures-cs.thi.de/chat/56ce2af0-ee84-4e78-85bc-6bba6c51c739/friend",
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVG9tIiwiaWF0IjoxNjI5ODkzNTkwfQ.MRSZeLY8YNGp1dBWoYLUXTfs4ci1v13TkhQmke2nfII");
            var_dump($data);
        } catch(\Exception $e) {
            echo "Error...";
        }
    }

    public function friendRequest($friend) {
        try {
            Utils\HttpClient::post("https://online-lectures-cs.thi.de/chat/56ce2af0-ee84-4e78-85bc-6bba6c51c739/friend",
                array("username" => "Jerry"),
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVG9tIiwiaWF0IjoxNjI5ODkzNTkwfQ.MRSZeLY8YNGp1dBWoYLUXTfs4ci1v13TkhQmke2nfII");
            echo "Requested...";
        } catch(\Exception $e) {
            echo "Error...";
        }
    }

    public function friendAccept($friend) {
        try {
            Utils\HttpClient::put("https://online-lectures-cs.thi.de/chat/56ce2af0-ee84-4e78-85bc-6bba6c51c739/friend/Jerry",
                array("status" => "accepted"),
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVG9tIiwiaWF0IjoxNjI5ODkzNTkwfQ.MRSZeLY8YNGp1dBWoYLUXTfs4ci1v13TkhQmke2nfII");
            echo "Accepted...";
        } catch(\Exception $e) {
            echo "Error...";
        }
    }

    public function friendDismiss($friend) {
        try {
            Utils\HttpClient::put("https://online-lectures-cs.thi.de/chat/56ce2af0-ee84-4e78-85bc-6bba6c51c739/friend/Jerry",
                array("status" => "dismissed"),
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVG9tIiwiaWF0IjoxNjI5ODkzNTkwfQ.MRSZeLY8YNGp1dBWoYLUXTfs4ci1v13TkhQmke2nfII");
            echo "Dismissed...";
        } catch(\Exception $e) {
            echo "Error...";
        }
    }

    public function friendRemove($friend) {
        try {
            Utils\HttpClient::delete("https://online-lectures-cs.thi.de/chat/56ce2af0-ee84-4e78-85bc-6bba6c51c739/friend/Jerry",
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiVG9tIiwiaWF0IjoxNjI5ODkzNTkwfQ.MRSZeLY8YNGp1dBWoYLUXTfs4ci1v13TkhQmke2nfII");
            echo "Removed...";
        } catch(\Exception $e) {
            echo "Error...";
        }
    }
}

?>
