// CRUD

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const id = new ObjectID()


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, (error, client) => {
   if (error) {
      return console.log('unable to connect to database')
   }

   const db = client.db(databaseName)

   // db.collection('users').deleteMany({
   //    age: 333333
   // }).then((result) => {
   //    console.log(result)
   // }).catch((error) => {
   //    console.log(error)
   // })

   db.collection('tasks').deleteOne({
      desc: 'Clean'
   }).then((result) => {
      console.log(result)
   }).catch((error) => {
      console.log(error)
   })
})

