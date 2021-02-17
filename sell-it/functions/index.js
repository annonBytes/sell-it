const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")
('sk_test_51ILY6ACb17RVzvHjN1xP6ai3Hyh7OUtfkaBw9y8Op8rb65WhXl1w4Hjy0CyIFBpEly4Gt1ONdKOs1R7exLh0ZNbF00YpQkBMyf')

//API


//App Config
const app = express();

//Middlewares

app.use(cors({ origin: true }));
app.use(express.json())

//API Routes
app.get('/', (request, response) => response.status(200).send('hello world'))
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received amounts to >>>', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    //okay request and created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

//Listen commands
exports.api = functions.https.onRequest(app)


//(http://localhost:5001/sell-it-9a549/us-central1/api)
