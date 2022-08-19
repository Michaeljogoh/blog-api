const comments = require('../model/comment');


const comment = async (req , res ) =>{
    const { comment } = req.body
    if(!comment){
        return res.status(400).json({error:'Please add comment'});
    }

const newComment = await comments.create({comment, blogpost: req.params.id});
 return res.status(200).json({newComment})

}

const fetchComment = async (req , res) =>{
      // query with page limit 
   const {page = 1, limit = 10} = req.query;

   const getComment = await comments.find()
   .limit(limit * 1)
   .skip((page - 1 ) * limit)
   .exec();
   //Get Total documents in blogPost collection
 const count = await comments.countDocuments();
 res.json({getComment, totalPages:Math.ceil(count / limit), currentPage: page}) 
    }



const deleteComment = async (req , res )=>{
    const newComment = await comments.findById(req.params.id)
  if(!newComment){
    return res.status(404).json('Tweet Not Available')
  }
 
   const newDeleteComment= await comments.findByIdAndDelete(req.params.id)
    res.status(200).json({newDeleteComment})
}


module.exports = {comment , fetchComment , deleteComment}