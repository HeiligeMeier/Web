<?php
namespace Model;
use JsonSerializable;
class User implements JsonSerializable {
    protected $username;

    public function __construct($username = null) {
        $this->username = $username;
    }

    public function getUsername() {
        return $this->username;
    }

    public function jsonSerialize() {
        return get_object_vars($this);
    }

    public static function fromJson($data) {
        //missing
        foreach($data as $key => $value) {
            $user->{key} = $value;
        }
    }
}
?>
