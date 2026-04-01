const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  schoole: String,
});

const productSchema = new mongoose.Schema({
  color: String,
  price: Number,
});

const cartSchema = new mongoose.Schema({
  quantity: Number,
  price: Number,
});

const adminSchema = new mongoose.Schema({
  name: String,
  age: Number,
  role: { enum: [user, admin] },
  default: user,
});
