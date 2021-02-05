pragma solidity ^0.4.18;

contract Coursetro {
    
string private name = "teste";

    function getName() public view returns (string)
    {
        return name;
    }

    function setName(string newName) public
    {
        name = newName;
    }
}