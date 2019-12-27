const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

//Reference: https://nodejs.dev/get-http-request-body-data-using-nodejs
app.use(
    bodyParser.urlencoded({
      extended: true
    })
)

app.use(bodyParser.json()) //to parse the request body.

//Reference: https://www.digitalocean.com/community/questions/blocked-by-cors-policy-the-access-control-allow-origin-mean-stack
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');  
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
    // Pass to next layer of middleware
    next();
  });

const port = 5000;

const mongoDBpath = 'mongodb+srv://aartidalvi:mongodbpwd@cluster0-ne0fo.mongodb.net/test?retryWrites=true&w=majority';

//Referred to the problem statement to decide the datatype of each field.
var Datamodel = mongoose.model('datamodel', {
    productid: Number,
    category: String,
    price: Number,
    name: String,
    instock: Boolean
} )

/* GET : to get all the entries in the cluster */
app.get('/product/get', (request,response) => {
    Datamodel.find( {}, (error, productlist) => {
        if(error) {
            console.log('Error while getting the data:' + error);
        } else {
            response.send(productlist);
        }
    })
})

/* DELETE : to delete particular product with given id in the cluster */
app.delete('/product/delete/:productid', (request, response) => {
    
    console.log('Product to be deleted:' + request.params.productid);

    Datamodel.deleteOne({ productid: request.params.productid }, error => {
      if (error) {
          console.log('Error while deleting product: ', error)
          response.sendStatus(500);
      }
      else {
        response.sendStatus(200)
      }
    })
  })

/*PUT : to update particular product with given id in the cluster.
For now this method will toggle the instock of the product.*/
app.put('/product/update/:productid', (request, response) => {
    
    console.log('Product to be updated server:' + request.params.productid);

    var found = Datamodel.findOne({ productid: request.params.productid },function(err,obj) {
            console.log('found one') 
            console.log(obj);      
            obj.instock = !obj.instock; //toggle the value of instock
            obj.save();
            response.sendStatus(200);
        })
})

/* POST: to create a new product in the cluster */
app.post('/product/create', (request, response) => {
    var data = new Datamodel({productid: request.body.productid,
        category: request.body.category,
        price: request.body.price,
        name: request.body.name,
        instock: request.body.instock});

    data.save((error) => {
        if (error) {
            console.log('Error is:' + error);
            response.sendStatus(500);
        }
        else {
            response.sendStatus(200);
        }
    })
})

/* Connect to the mongoDB cluster */
mongoose.connect (mongoDBpath, { 
    useUnifiedTopology: true , 
    useNewUrlParser: true } ,(error) => {
    console.log("Error connecting to the databse: " + error);
})

var server = app.listen(port, () => {
    console.log('Server running on port: ' + port);
});