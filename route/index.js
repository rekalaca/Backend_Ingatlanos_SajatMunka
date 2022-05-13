/*

-GET / ingatlanok - összes ingatlan lekérdezése
-POST / ingatlanok - egy új ingatlan hozzáadása
-DELETE /ingatlanok / id - egy ingatlan törlése

*/

function addRoutes(app){

    app.get('/ingatlanok',  ingatlanList()) ; 
    app.post('/ingatlanok', addIngatlan());
    app.delete('/ingatlanok/:id', ingatlanTorles());


}

const {ingatlanList, addIngatlan, ingatlanTorles} = require('../middlewares/ingatlanMWs/ingatlanMW');


module.exports = addRoutes;