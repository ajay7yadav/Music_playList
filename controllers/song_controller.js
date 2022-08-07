const { findById } = require('../models/playList.Schema');
const PlayList = require('../models/playList.Schema');

// handler for create song playlist
exports.createList = async(req,res)=>{
    const objBody = {
        songName : req.body.songName,
        singerName : req.body.singerName,
        genre : req.body.genre,
    };
    try{
        const playLists = await PlayList.create(objBody);
        res.status(201).send(playLists);
    }catch(err){
        res.status(500).send({
            message : "Internal Error !"
        });
    }
}

// handler by get song by Id;
exports.getbyId = async(req, res)=>{
    let _id = req.params.id;
    try {

        const song = await PlayList.findOne({_id});

        song.popularity++;
        await song.save();

        res.status(200).send(song);

    } catch (err) {
        res.status(500).send({message: `Error occur at ${err}`});
    }
}

// handler for get top popular songs
exports.getMostPopular = async(req,res)=>{

    try{
        const songs = await PlayList.find().sort({popularity : -1});
        if(!songs){
            return res.status(404).send({
                message : "No data found, try different !"
            });
        }
        res.status(200).send(songs);
    }catch(err){
        res.status(500).send({
            message : "Internal Error somthing wrong !"
        });
    }
}

// Handler for recentlyAddedSongs
exports.getRecentlyAddedSongs = async(req,res)=>{

    try{
        const songs = await PlayList.find().sort({createdAt: -1});
        if(!songs){
            return res.status(404).send({
                message : "No data found, try different !"
            });
        }
        res.status(200).send(songs);
    }catch(err){
        res.status(500).send({
            message : "Internal Error while fatching !"
        });
    }
}