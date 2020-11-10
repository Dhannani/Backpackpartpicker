const mongoose = require("mongoose");
const crypto = require("crypto");
//const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;


let source = new Schema (
    {
        "URL": String,
        "Name": String,
        "Brand": String,
        "lowPrice": Number,
        "highPrice": Number,
        "PriceCurrency": String,
        "Rating": Number,
        "NumRatings": Number,

    }

);

let tents  = new Schema(
  {
    name: {
        type: String,
    },

    info: [source],
        

    specs: {
        "Best Use": {
            type: String
        },
        "Seasons": {
            type: Number
        },
        "Sleeping Capacity": {
            type: Number
        },
        "Packaged Weight": {
            type: Number //unit in Oz.
        },
        "Packed Size": {
            type: [Number] //three dimensions, unit in inches
        },
        "Floor Dimensions": {
            type: [Number] //two dimensions, unit in inches
        },
        "Floor Area": {
            type: Number //unit in sq feet
        },
        "Vestibule Area": {
            type: Number //unit in sq feet
        },
        "Peak Height": {
            type: Number //unit in inches
        },
        "Number of Doors": {
            type: Number
        },
        "Number of Poles": {
            type: Number
        },
        "Pole Material": {
            type: String
        },
        "Pole Diameter": {
            type: Number //unit in millimeters
        },
        "Floor Fabric": {
            type: String
        },
        "Rainfly Fabric": {
            type: String
        },
        "Footprint Included": {
            type: Boolean
        },
        "Design Type": {
            type: String
        }

      },
  },
  {
    collection: "tents"
  }
);





module.exports = mongoose.model("tents", tents);