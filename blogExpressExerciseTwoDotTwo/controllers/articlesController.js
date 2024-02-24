const articlesController = {
    articlesList: (req, res)  => {
        //Logic to get and show the articles list
        res.status(200).render('article/list', { articles })
    },
    articleDetail: (req, res) => {
        const articleId = req.params.id
        //Logic to get and show the article detail
        res.status(200).render('article/detail', { article })
    }
}

module.exports = articlesController