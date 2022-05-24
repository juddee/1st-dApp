// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

/**
 * @title Mood
 * @dev Store & retrieve value in a variable
 */
contract MoodDairy {

    string mood;

    /**
     * @dev Store value in variable
     * @param _mood value to mood
     */

    // this will set the mood
    function setMood (string memory _mood) public {
        mood = _mood;
    }

    /**
     * @dev Return value 
     * @return value of 'mood'
     */
    //  this will get the mood
    function getMood() public view returns (string memory){
        return mood;
    }
}