const { response } = require("express");
const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const app = express();

app.use(
  session({
    secret: "m7st0r3"
  })
);

mongoose.connect(
  "mongodb+srv://samet:samet1998@cluster0.icf29.mongodb.net/storeappnuxt?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const ProductModel = mongoose.model("Product", {
  title: String,
  price: Number,
  count: Number,
  description: String,
  category: String,
  gender: String,
  image: String
});

const UserModel = mongoose.model("Users", {
  name: String,
  lastName: String,
  email: String,
  password: String,
  userId: String
});

const UserCheckModel = mongoose.model("UserCheck", {
  userId: String,
  cart: [
    {
      title: String,
      image: String,
      countCart: Number,
      category:String,
      price:Number,
      gender:String
    }
  ],
  totalPrice: String,
  date: Date
});

app.get("/get-all", (req, res) => {
  let cart = [];
  if (req.session.cart) {
    cart = req.session.cart;
  }

  let cartTotalPrice = 0.0;
  cart.forEach(item => {
    cartTotalPrice += item.totalPrice;
  });

  ProductModel.find({}, (err, docs) => {
    res.status(200).json({
      docs: docs,
      cart: {
        items: cart,
        totalPrice: cartTotalPrice
      }
    });
  });
});

app.post("/save", (req, res) => {
  const newProductItem = new ProductModel({
    title: req.body.title,
    price: req.body.price,
    count: req.body.count,
    description: req.body.description,
    category: req.body.category,
    gender: req.body.gender,
    image: req.body.image
  });
  newProductItem.save().then(response => {
    res.status(200).json({
      data: response
    });
  });
});

/////////////////SESSİON/////////////////
app.post("/add-to-cart", (req, res) => {
  let product = req.body.product;

  let cart = [];
  if (req.session.cart) {
    console.log("Session Bulundu!");
    cart = req.session.cart;
  }
  if (cart.length > 0) {
    console.log("Sepet Bulundu!");
    let itemIndex = cart.findIndex(item => item._id == product._id);

    if (itemIndex > -1) {
      cart[itemIndex].countCart += product.countCart;
      cart[itemIndex].totalPrice =
        cart[itemIndex].countCart * cart[itemIndex].price;
    } else {
      cart.push({
        ...product,
        totalPrice: product.countCart * product.price
      });
    }
  } else {
    cart.push({
      ...product,
      totalPrice: product.countCart * product.price
    });
  }

  req.session.cart = cart;

  let cartTotalPrice = 0.0;
  cart.forEach(item => {
    cartTotalPrice += item.totalPrice;
  });

  res.status(200).json({
    cart: {
      items: req.session.cart,
      totalPrice: cartTotalPrice
    }
  });
});

app.post("/remove-cart", (req, res) => {
  let product = req.body.product;

  let cart = [];
  if (req.session.cart) {
    cart = req.session.cart;
  }
  let itemIndex = cart.findIndex(item => item._id == product._id);
  if (itemIndex > -1) {
    cart.splice(itemIndex, 1);
  }
  req.session.cart = cart;
  let cartTotalPrice = 0.0;

  cart.forEach(item => {
    cartTotalPrice += item.totalPrice;
  });

  res.status(200).json({
    cart: {
      items: req.session.cart,
      totalPrice: cartTotalPrice
    }
  });
});

app.post("/remove-fullcart", (req, res) => {
  let cart = [];
  if (req.session.cart) {
    cart = [];
  }
  req.session.cart = cart;
  let cartTotalPrice = 0.0;

  res.status(200).json({
    cart: {
      items: req.session.cart,
      totalPrice: cartTotalPrice
    }
  });
});

app.post("/change-count", (req, res) => {
  let product = req.body.product;

  let cart = [];
  if (req.session.cart) {
    cart = req.session.cart;
  }

  if (cart.length > -1) {
    let itemIndex = cart.findIndex(item => item._id == product._id);

    if (itemIndex > -1) {
      cart[itemIndex].countCart = product.countCart;
      cart[itemIndex].totalPrice =
        cart[itemIndex].countCart * cart[itemIndex].price;
    }
  }

  req.session.cart = cart;

  let cartTotalPrice = 0.0;

  cart.forEach(item => {
    cartTotalPrice += item.totalPrice;
  });

  res.status(200).json({
    cart: {
      items: req.session.cart,
      totalPrice: cartTotalPrice
    }
  });
});

app.post("/save-user", (req, res) => {
  const newUser = new UserModel({
    name: req.body.name,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    userId: req.body.userId
  });
  newUser.save().then(response => {
    res.status(200).json({
      data: response
    });
  });
});

app.get("/get-user", (req, res) => {
  UserModel.find({}, (err, docs) => {
    res.status(200).json({
      data: docs
    });
  });
});

app.post("/add-usercheck", (req, res) => {
  let id = req.body.userId;
  UserCheckModel.find({ userId: id }, (err, docs) => {
    if (docs.length > 0) {
      UserCheckModel.findOneAndUpdate(
        { userId: req.body.userId },
        {
          $push: {
            cart: req.body.carts
          }
        }
      ).then(response => {
        res.status(200).json({
          data: response
        });
      });
    } else {
      const newUserCheck = new UserCheckModel({
        userId: req.body.userId,
        cart: req.body.carts,
        totalPrice: req.body.totalPrice,
        date: new Date()
      });

      newUserCheck.save().then(response => {
        res.status(200).json({
          data: response
        });
      });
    }
  });
});

app.get("/get-usercheck", (req, res) => {
  UserCheckModel.find({}, (err, docs) => {
    res.status(200).json({
      data: docs
    });
  });
});

module.exports = {
  path: "/api",
  handler: app
};
