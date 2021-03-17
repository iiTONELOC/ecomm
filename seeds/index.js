const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

  await seedProductTags();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0);
};
initializeDatabase=()=>{

  const { spawn } = require('child_process');
  const child = spawn('mysql -u root -p', { shell: true, detached: true });

  child.stdout.on('data', (data) => {
      console.log(`child stdout:\n${data}`);
  });

  child.stderr.on('data', (data) => {
      //console.error(`child stderr:\n${data}`);
  });
  child.on('exit', function (code, signal) {
      console.log('\n Running Seeds...\n');
      seedAll();
  });

}

initializeDatabase();

