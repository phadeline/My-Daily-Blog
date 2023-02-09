const {posts} = require('../models')

const postsData = [
    {
        title: 'today was a great day!',
        content: 'I had the best day of my life. I feel amazing today.',
        user_id: 1
    },
    {
        title: 'I had a salad',
        content: 'I am planning on eating healthier.',
        user_id: 1
    }
]





const seedposts = () => posts.bulkCreate(postsData);

module.exports = seedposts;