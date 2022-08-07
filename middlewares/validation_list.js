const validList = async(req, res, next)=>{
    if(!req.body.songName){
        return res.status(401).send({
            message : "invalid field songName !"
        });
    }
    if(!req.body.singerName){
        return res.status(401).send({
            message : "invalid field singerName !"
        });
    }
    if(!req.body.genre){
        res.status(401).send({
            message : " invalid field genre !"
        });
        return;
    }
    next();
}

module.exports = {
    valid : validList
}