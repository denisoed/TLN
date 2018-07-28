import MLab from 'mlab-data-api';

var mLab = MLab({
    key: process.env.MLAB_USER_KEY,
    host: 'https://api.mlab.com', //optional
    uri: '/api',//optional
    version: '1',//optional
    database: 'tln', //optional
    timeout: 10000 //optional
})

function getlistDatabases() {
    mLab.listDatabases()
        .then(function (response) {
            console.log('got', response.data)
        })
        .catch(function (error) {
            console.log('error', error)
        })
}

function getlistCollections(params) {
    mLab.listCollections(params)
        .then(function (response) {
            console.log('got', response.data)
        })
        .catch(function (error) {
            console.log('error', error)
        })
}

function getlistDocuments(params) {
    mLab.listDocuments(params)
        .then(function (response) {
            console.log('got', response.data)
        })
        .catch(function (error) {
            console.log('error', error)
        });
}

function insertDocuments(params) {
    mLab.insertDocuments(params)
        .then(function (response) {
            console.log('got', response.data)
        })
        .catch(function (error) {
            console.log('error', error)
        });
}

function deleteDocuments(params) {
    mLab.deleteDocuments(params)
        .then(function (response) {
            console.log('got', response.data)
        })
        .catch(function (error) {
            console.log('error', error)
        });
}

export default {
    getlistDatabases,
    getlistCollections,
    getlistDocuments,
    insertDocuments,
    deleteDocuments
}