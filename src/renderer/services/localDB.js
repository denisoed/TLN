import Dexie from 'dexie';

// Declare Database
var db = new Dexie("tln");
db.version(1).stores({ 
    sprints: "++id",
    actions: "++id,sprintID"
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

function CreateAction(data) {
    return db.actions.put(data);
}

function getActions() {
    return db.actions.toArray();
}

function getActionsBySprintID(sprintID) {
    return db.actions.where('sprintID').equals(sprintID).toArray();
}

function delAction(id) {
    return db.actions.delete(id);
}

export default {
    CreateSprint,
    getSprints,
    delSprint,
    CreateAction,
    getActions,
    getActionsBySprintID,
    delAction,
};
