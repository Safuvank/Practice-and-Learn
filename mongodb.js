db.collection.aggregation([{ stage1 }, { stage2 }, { stage3 }]);

// $match
//  filteer documents before processing

db.products.aggregate([{ $match: { price: { $gt: 10000 } } }]);

// $group
// used to group documents and perform calculations

db.products.aggregate([
  {
    $group: {
      _id: "$category",
      totalspent: { $sum: "$price" },
    },
  },
]);

// $project
// reshaping data

db.users.aggregate([
  {
    $project: {
      customerName: "$customer",
      totalPrice: { $multiply: ["$price", "$quantity"] },
    },
  },
]);


