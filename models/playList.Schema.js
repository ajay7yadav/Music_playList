const mongoose = require('mongoose');

const playList = new mongoose.Schema({
    songName : {
        type : String,
        required : true,
    },
    singerName : {
        type : String,
        required : true,
    },
    genre : {
        type : String,
        required : true,
    },
    popularity : {
        type : Number,
        default : 0
    },
    createdAt : {
        type : Date,
        immutable :true,
        default : () =>{
            return Date.now()
        }
    },
    updatedAt : {
        type : Date,
        default : () =>{
            return Date.now()
        }
    },
});

module.exports = mongoose.model('playLists',playList);