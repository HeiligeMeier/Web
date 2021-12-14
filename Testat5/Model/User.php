<?php
namespace Model;
use JsonSerializable;
class User implements JsonSerializable {
    private $username="herbert"; 
    private $firstname;
    private $lastname;
    private $about;
    private $coffeeOrTea;
    private $chatLayout;
    
    public function __construct($username=null) {
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
        $user = new User(); 
        foreach ($data as $key => $value) {
            $user->{$key} = $value;
        }
        //var_dump($user);
        //return $user;
    } 

    public function getFirstname(){
        return $this->firstname;
    }
    public function setFirstname($firstname){
        $this->firstname = $firstname;
    }

    public function getLastname(){
        return $this->lastname;
    }
    public function setLastname($lastName){
        $this->lastname = $lastName;
    }

    public function getAbout(){
        return $this->about;
    }
    public function setAbout($About){
        $this->about = $About;
    }

    public function getCofferOrTea(){
        return $this->coffeeOrTea;
    }
    public function setCoffeeOrTea($CoffeeOrTea){
        $this->coffeeOrTea = $CoffeeOrTea;
    }

    public function getChatLayout(){
        return $this->chatLayout;
    }
    public function setChatLayout($ChatLayout){
        $this->chatLayout = $ChatLayout;
    }
}
?>
