db.adminCommand({
  renameCollection: "ecommerce.users",
  to: "archive.users_backup"
})


// Example: Capped Collection syntax

// db.createCollection("collectionName", {
//    capped: true,
//    size: <bytes>,
//    max: <optional number of documents>
// })


db.createCollection("students",{
    capped: true,
    size: 100000,
    max: 100
})