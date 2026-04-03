db.adminCommand({
  renameCollection: "ecommerce.users",
  to: "archive.users_backup"
})


// Example: Capped Collection

db.createCollection("logs", {
  capped: true,
  size: 100000
})