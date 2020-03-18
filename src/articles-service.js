const ArticlesService = {
    getAllArticles(knex) {
        return knex.select('*').from('blogful_articles')
    },
    getById(db, id) {
        return db.select('*').from('blogful_articles').where('blogful_articles.id', '=', id).first()
    }
}

module.exports = ArticlesService