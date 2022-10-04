const dotenv = require("dotenv");
const fs = require("fs");
const db = require("./config/db");

// Load ENV variables
dotenv.config({ path: "./config/config.env" });

const Base = require("./base");

// Connect to Mongo Database
db().then();

// Read The JSON files
const schema = JSON.parse(
  fs.readFileSync(`${__dirname}/data/sample.json`, "utf-8")
);

// Import Sample Data In DB
const importData = async () => {
  try {
    await Base.create(schema);
    console.log(`Data successfully imported`);
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

// Delete the data from DB
const deleteData = async () => {
  try {
    await Base.deleteMany();
    console.log(`Data successfully deleted`);
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === "-i") {
  importData().then();
} else if (process.argv[2] === "-d") {
  deleteData().then();
}
