const controller = require('../controllers/song_controller');

const mid = require('../middlewares/validation_list');

module.exports = (app)=>{

    app.post('/relevel/v1/playlist/songs',[mid.valid],controller.createList);

    app.get('/relevel/v1/playlist/songs/:id',controller.getbyId);

    app.get('/charts/getMostPopularSongs',controller.getMostPopular);

    app.get('/charts/getRecentlyAddedSongs',controller.getRecentlyAddedSongs);

}