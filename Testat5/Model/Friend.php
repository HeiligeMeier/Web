<?php
namespace Model;
use JsonSerializable;
class Friend implements JsonSerializable {
    protected $username;
    protected $status;

    public function __construct($username = null) {
        $this->username = $username;
    }

    public function getUsername() {
        return $this->username;
    }

    public function getStatus() {
        return $this->status;
    }

    public function setStatusAcc() {
        $this->status = "accepted";
    }

    public function setStatusDis() {
        $this->status = "dismissed";
    }

    public function jsonSerialize() {
        return get_object_vars($this);
    }

    public static function fromJson($data) {
        // missing
        $friend = new Friend();
        foreach ($data as $key => $value) {
            $friend->{$key} = $value;
        }
    }
}
?>