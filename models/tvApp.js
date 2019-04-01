const db = require('./data');

class TvShows {
    constructor(id, name, season, status){
        this.id = id;
        this.name = name;
        this.season = season;
        this.status = status;
    };
    static getAll(){
        return db.any(`select * from tv_shows`)
            .then((tvShowsDataArray)=>{
                return tvShowsDataArray.map((data)=>{
                    return new TvShows(data.id, data.name, data.season, data.status);
                });
            });
    };

    static getByStatus(name){
        return db.any(`select * from tv_shows where status=$1`,[name])
            .then((tvShowsDataArray)=>{
                return tvShowsDataArray.map((data)=>{
                    return new TvShows(data.id, data.name, data.season, data.status);
                });
            });
    };
};

module.exports = TvShows