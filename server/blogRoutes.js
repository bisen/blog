// DynamoDB setup
const { AWS } = require('./aws');
const docClient = new AWS.DynamoDB.DocumentClient();

const express = require('express');
const router = express.Router(); // Define the router

// Route for getting all blog entries
router.get('/blogs', (req, res) => {
  const params = {
    TableName: 'blogs', // Replace with your DynamoDB table name
  };

  docClient.scan(params, (err, data) => {
    if (err) {
      res.status(500).json({ message: 'Error fetching blog entries' });
    } else {
      res.json(data.Items);
    }
  });
});

// Route for creating a new blog entry
router.post('/blogs', (req, res) => {
  const { title, content, author } = req.body;

  const params = {
    TableName: 'YourTableName', // Replace with your DynamoDB table name
    Item: {
      title,
      content,
      author,
      // Add other fields based on your DynamoDB table structure
    },
  };

  docClient.put(params, (err) => {
    if (err) {
      res.status(400).json({ message: 'Error creating blog entry' });
    } else {
      res.status(201).json({ message: 'Blog entry created successfully' });
    }
  });
});

module.exports = router;
