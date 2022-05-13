const dbData = require("../../middlewares/queries");

//ingatlanok lekérdezése
module.exports.ingatlanList = () => {
    return (req, res, next) => {
        dbData.ingatlanList((err, data) => {
            if (err) throw err;
            console.log(`Új ${req.method} kérés a /ingatlanok felé`);
            res.json(data);
        });
    };
};

/*
Ha a request method: 
-POST, hozzáad egy ingatlant a DB-hez
-DELETE, töröl egy ingatlant
*/
module.exports.addIngatlan = () => {
    return (req, res, next) => {
        if (req.method === "POST") {
            dbData.addIngatlan(req.body, (err, data) => {
                if (err) {
                    res.json({
                        status: "failed",
                    });
                } else
                console.log(`Új ${req.method} kérés a /ingatlanok felé`);
                    res.json({
                        status: "ok",
                    });
            });
        }
    };
};

module.exports.ingatlanTorles = () => {
    return (req, res, next) => {
        if (req.method === "DELETE") {
                dbData.delIngatlan(req.params.id, (err, data) => {
                    if (err) {
                        res.json({
                            status: "failed",
                        });
                    } else
                    console.log(`Új ${req.method} kérés a /ingatlanok felé`);
                        res.json({
                            status: "ok",
                        });
                });
            };       

    }

}


