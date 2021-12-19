const mongoose = require('mongoose');


mongoose.Promise = global.Promise;

// const db = mongoose.connect('mongodb://localhost:27017/customercli');

  
    const URL = `mongodb+srv://user:Shikhar1234%40@inshorts.l8bqa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
      
    mongoose.connect(URL, { useNewUrlParser: true })

const Customer = require('./models/customer');


const addCustomer = (customer) => {
  Customer.create(customer).then(customer => {
    console.info('New Customer Added');
    db.close();
  });
}

const findCustomer = (name) => {

  const search = new RegExp(name, 'i');
  Customer.find({$or: [{firstname: search}, {lastname: search}]})
    .then(customer => {
      console.info(customer);
      console.info(`${customer.length} matches`);
      db.close();
    });
}

const updateCustomer = (_id, customer) => {
  Customer.update({ _id }, customer)
    .then(customer => {
      console.info('Customer Updated');
      db.close();
    });
}

// Remove Customer
const removeCustomer = (_id) => {
  Customer.remove({ _id })
    .then(customer => {
      console.info('Customer Removed');
      db.close();
    });
}

// List Customers
const listCustomers = () => {
  Customer.find()
    .then(customers => {
      console.info(customers);
      console.info(`${customers.length} customers`);
      db.close();
    });
}

// Export All Methods
module.exports = {
  addCustomer,
  findCustomer,
  updateCustomer,
  removeCustomer,
  listCustomers
}
