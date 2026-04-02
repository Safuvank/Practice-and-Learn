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

// $sort
// sort documents

db.users.aggregate({$sort: {totalSpent: -1}})


// $limit and $skip 
// used for pagination

{$limit : 5}
{$skip: 10}


//$unwind
// array handling breaks array into multiple documents

// $lookup
// join collection
// combines data from two collections

// $facet (multiple pipelines)
// run multiple aggregation at once

{
    $facet: {
        totalSales: [{$group: {_id: null, total: {$sum: "$price" }}}],
        avgSales: [{$group: {_id: null, avg: {$avg: "$price"}}}]
    }
}

// $bucket (grouping into ranges)
// useful for analytics price ranges

{
    $bucket: {
        groupBy: "$price",
        boundaries: [0,1000, 5000, 10000],
        default: "other"
    }
}

// $addFields
// adds new field without removing existing ones


// $count
// count documents

