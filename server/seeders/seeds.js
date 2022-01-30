const db = require('../config/connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      title: 'Trees',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      price: 50.99,
      quantity: 10
    },
    {
      title: 'Football',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'canned-coffee.jpg',
      price: 35.99,
      quantity: 15
    },
    {
      title: 'Child',
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna.',
      image: 'toilet-paper.jpg',
      price: 47.99,
      quantity: 20
    },
    {
      title: 'Inside House',
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felisl.',
      image: 'soap.jpg',
      price: 18.99,
      quantity: 50
    },
    {
      title: 'Snowflakes',
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Aenean aliquam sagittis rutrum.',
      image: 'wooden-spoons.jpg',
      price: 14.99,
      quantity: 100
    },
    {
      title: 'Baseball',
      description:
        'Vestibulum risus metus, luctus non tortor quis consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'camera.jpg',
      price: 399.99,
      quantity: 30
    },
    {
      title: 'Landscape',
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urnas purusi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'tablet.jpg',
      price: 199.99,
      quantity: 30
    },
    {
      title: 'Family',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elituis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'bedtime-book.jpg',
      price: 69.99,
      quantity: 100
    },
    {
      title: 'Ocean Landscape',
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'spinning-top.jpg',
      price: 15.99,
      quantity: 15
    },
    {
      title: 'Dogs',
      description:
        'Sed a mauris condimentum, elementum enim in, dui. Phasellus lobortis leo odioturpis porta quis.',
      image: 'plastic-horses.jpg',
      price: 24.99,
      quantity: 100
    },
  ]);

  const categories = await Category.insertMany([
    { name: 'Outdoors', products: [products[0]._id, products[1]._id] },
    { name: 'Portraits', products: [products[2]._id, products[3]._id] },
    { name: 'French', products: [products[4]._id, products[5]._id] },
    { name: 'Sports', products: [products[6]._id, products[7]._id] },
    { name: 'Random', products: [products[8]._id, products[9]._id] }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    username: 'Sandra',
    email: 'sandra@testmail.com',
    password: 'password1234'
  });

  await User.create({
    username: 'Peter',
    email: 'pete@testmail.com',
    password: 'password1234'
  });

  console.log('users seeded');

  process.exit();
});

