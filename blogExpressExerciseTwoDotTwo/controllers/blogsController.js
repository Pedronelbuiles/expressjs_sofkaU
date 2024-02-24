const blogsController = {
    blogsList: (req, res)  => {
        //Logic to get and show the blogs list
        res.status(200).render('blog/list', { blogs })
    },
    blogDetail: (req, res) => {
        const blogId = req.params.id
        //Logic to get and show the blog detail
        res.status(200).render('blog/detail', { blog })
    }
}

module.exports = blogsController