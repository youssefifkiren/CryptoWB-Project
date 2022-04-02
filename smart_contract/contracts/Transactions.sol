// SPDX-License-Identifier: UNLICENCED
pragma solidity ^0.8.0;

contract Transactions {
    uint256 transactionsCount;

    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);

    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }
    
    TransferStruct[] transactions;
    function addToBlockChain(address payable receiver, uint amount, string memory message, string memory keyword) public {
        transactionsCount += 1;
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));
        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }
    function GetAllTrans() public view returns (TransferStruct[] memory) {
        return transactions;
    }
    function GetTransCount() public view returns (uint256) {
        return transactionsCount;
    }
    
}