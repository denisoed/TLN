import Dexie from 'dexie';

// Declare Database
var db = new Dexie("tln");
db.version(1).stores({ 
    sprints: "++id",
    actions: '++id'
});

function CreateSprint(data) {
    return db.sprints.put(data);
}

function getSprints() {
    return db.sprints.toArray();
}

function delSprint(id) {
    return db.sprints.delete(id);
}

export default {
    CreateSprint,
    getSprints,
    delSprint
};
