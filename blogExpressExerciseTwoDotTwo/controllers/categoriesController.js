const categoriesController = {
    categoriesList: (req, res)  => {
        //Logic to get and show the categories list
        res.status(200).render('category/list', { categories })
    },
    categoryDetail: (req, res) => {
        const categoryId = req.params.id
        //Logic to get and show the category detail
        res.status(200).render('category/detail', { category })
    }
}

module.exports = categoriesController