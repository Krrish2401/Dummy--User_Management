export const validateUserId = (req,res,next)=>{
    const {id} = req.params;

    if(!id || id.length < 5){
        return res.status(400).json({
            success: false,
            message: "Invalid user ID"
        });
    }

    next();
}

export const validateUserId_body = (req,res,next) =>{
    if (!req.body || !req.body.id){
        res.status(400).json({
            success: false,
            message: "NO id found in body"
        })
    }

    next();
}