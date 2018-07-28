import Dexie from 'dexie';

// Declare Database
var db = new Dexie("tln");
db.version(1).stores({ 
    sprints: "++id",
    actions: '++id'
});

function CreateSprints(data) {
    db.sprints.put(data).then(function () {
        console.log("Success: " + data);
    }).catch(function (error) {
        console.log("Ooops: " + error);
    });
}

export default {
    CreateSprints
};
