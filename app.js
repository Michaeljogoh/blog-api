const { request } = require("express");
const blogPost = require("./model/blogPost");

const perPage = 2;

const total = await blogPost().count();

const pages = Math.ceil(total / perPage);

const pageNumber = (req.query.page == null) ? 1 : request.query.page;

const startFrom = (pageNumber -1 ) * perPage;
 
const user = await blogPost.find({})
.sort({"id": -1})
.skip(startFrom)
.limit(perPage)
.toArray();
