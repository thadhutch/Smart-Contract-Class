//SPDX-License-Identifier: Unlicense
pragma solidity >= 0.7.0 < 0.9.0;

import "hardhat/console.sol";

contract HelloWorld {
    string helloWorld = 'Hello World';

    function justHelloWorld() public view returns (string memory) {
        return helloWorld;
    }

    function showHelloWorld(string memory _name) public view returns (string memory) {
        string memory result = string(abi.encodePacked(helloWorld, ' from ', _name));
        return result;
    }
}
