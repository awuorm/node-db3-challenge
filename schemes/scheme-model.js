const db = require("../data/db-config");
module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove,
  addStep
};

// function getPosts(userId) {
//     return db('posts as p')
//       .join('users as u', 'u.id', 'p.user_id')
//       .select('p.id', 'u.username', 'p.contents')
//       .where({ 'u.id': userId });
//   }

function addStep(step, scheme_id) {
  return db("steps as st")
    .where({ scheme_id })
    .insert(step)
    .then(ids => findById(ids[0]));
}

function remove(id) {
  return db("schemes as s")
    .where({ id })
    .truncate();
}

function update(changes, id) {
  return db("schemes as s")
    .where({ id })
    .update(changes);
}

function add(scheme) {
  return db("schemes as s")
    .insert(scheme)
    .then(ids => findById(ids[0]));
}

function findSteps(id) {
  return db("steps as st")
    .join("schemes as s", "st.scheme_id", "s.id")
    .select("s.id", "s.scheme_name", "st.step_number")
    .where({ scheme_id: id });
}

function findById(schemesId) {
  return db("schemes as s")
    .where({ id: schemesId })
    .first();
}

function find() {
  return db("schemes as s");
}
