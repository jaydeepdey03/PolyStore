// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _token_Ids;
    address ContractAddress;

    constructor(address MarketPlaceAddress)
        public
        ERC721("MetaverseToken", "METT")
    {
        ContractAddress = MarketPlaceAddress;
    }

    function CreateToken(string memory tokenURI) public returns (uint256) {
        _token_Ids.increment();
        uint256 newItemId = _token_Ids.current();

        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        setApprovalForAll(ContractAddress, true);
        return newItemId;
    }
}
