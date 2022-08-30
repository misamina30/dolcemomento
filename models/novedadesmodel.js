var pool = require('./bd');
async function getnovedades(){
    var query = "select * from novedades order by id desc";
    var rows = await pool.query(query);
    return rows;
}
module.exports = {getnovedades}