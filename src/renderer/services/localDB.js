import Dexie from 'dexie';

// Declare Database
var db = new Dexie("tln");
db.version(1).stores({ 
    sprints: "++id",
    actions: "++id,sprintID"
});

export default {
    CreateSprint: function(data) {
        return db.sprints.put(data);
    },
    
    GetSprint: function(id) {
        return db.sprints.get(id);
    },

    GetSprints: function() {
        return db.sprints.toArray();
    },
    
    DelSprint: function(id) {
        return db.sprints.delete(id);
    },
    
    CreateAction: function(data) {
        return db.actions.put(data);
    },
    
    GetActions: function() {
        return db.actions.toArray();
    },
    
    GetActionsBySprintID: function(sprintID) {
        return db.actions.where('sprintID').equals(sprintID).toArray();
    },
    
    DelAction: function (id) {
        return db.actions.delete(id);
    }
}