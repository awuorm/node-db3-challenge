const db = require("../data/db-config");
module.exports  = {
    find,
    // findById,
    // findSteps,
    // add,
    // update,
    // remove,
}

function find() {
    return db("schemes as s");
}

// function getPosts(userId) {
//     return db('posts as p')
//       .join('users as u', 'u.id', 'p.user_id')
//       .select('p.id', 'u.username', 'p.contents')
//       .where({ 'u.id': userId });
//   }