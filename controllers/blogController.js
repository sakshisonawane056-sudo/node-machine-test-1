
let blogs = [
    {
        id: '1792084768877',
        userId: 1,
        title: 'suscipit\nsuscipit rec recusa reprehenderit',
        content: 'quia et suscipit\nsuscipit recusandae quia et suscipit\nsuscipit recusandae est rerum tempore vitae\nsequi sint nihil reprehenderit dolor be',
        createdAt: 1792084768877,
        updatedAt: null,
    },
    {
        id: '1792084788877',
        userId: 2,
        title: 'reprehenderit',
        content: 'nsuscipit recusandae quia et suscipit\nsuscipit recusandae est rerum tempore vitae\nsequi sint nihil reprehenderit dolor be',
        createdAt: 1792084778877,
        updatedAt: null,
    },
];



//fetch all blogs
function getBlogs(req, res){
    try{
        res.status(200).json({
            success : true,
            data : blogs,
            message : "fetch blogs successfully !!"
        })
    }catch(err){
        res.status(500).json({
            success : false,
            err : err.message,
            message : "Error while fetch blogs !!",
        })
    }
}

//fetch single blog
function getBlogById(req, res){
    try{
        const {id} = req.params;
        const blog = blogs.find((b) => b.id === id);

        if(!blog){
            return res.status(404).json({
            success : false,
            message : `blog with id ${blogId} not found`,
        });
        }
        res.status(200).json({
            success : true,
            data : blog,
            message : `blog with id ${blogId} fetch successfully !!`,
        })
    }catch(err){
        res.status(500).json({
            success : false,
            err : err.message,
            message : "Error while fetch blogs !!",
        })
    }
}

//create blog
function createBlog(req,res){
    try{
        const {title,content,userId} = req.body;
        if(!title||!content){
            return res.status(400).json({
                success:false,
                message:"Title and content are required fields !!!"
            })
        }
        const newBlogObj = {
            id: Date.now().toString(),
            userId,
            title,
            content,
            createdAt : Date.now(),
            updatedAt : null
        };
        blogs.unshift(newBlogObj)

        res.status(201).json({
            success : true,
            data : newBlogObj,
            message : `blog with id ${newBlogObj.id} created successfully !!`,
        })
    }catch(err){
            res.status(500).json({
            success : false,
            err : err.message,
            message : "Network Error",
        })
    }
}

//delete blog
function deleteBlog(req, res){
    try{
        const {id} = req.params;
        let index = blogs.findIndex((r) => r.id === id);

        if(index === -1){
            return res.status(404).json({
                success:false,
                message:"blog not found !!!"
            });
        }
        let deletedBlog = blogs.slice(index, 1);
        res.status(200).json({
            success : true,
            message : `blog with id : ${id} is deleted successfully !!`,
            body:deletedBlog[0],
        });
    }catch(err){
        res.status(500).json({
            success:false,
            message : "somthing went wrong",
            err : err.message,
        });
    }
}

//updated post
function updateBlog(req, res){
    try {
        let {id} = req.params;
        let index = blogs.findIndex((u)=> u.id === id);
        if(index === -1){
            return res.status(404).json({
                success:false,
                message : `blog with id ${id} is not found`,
            })
        }

        const updatedObj = {
            ...blogs[index],
            ...req.body,
            updatedAt:Date.now(),
            id:blogs[index].id
        }
        blogs[index] = updatedObj;

        res.status(200).json({
            success:true,
            data : updatedObj,
            message:` the blog with id ${id} is updated successfully!!`
        })
    }catch(err){
        res.status(500).json({
            success : false,
            message:"error while updating blog",
            err : err.message
        })
    }
}

module.exports = {
    getBlogs,
    getBlogById,
    createBlog,
    deleteBlog,
    updateBlog,
};