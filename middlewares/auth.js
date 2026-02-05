let success = true;

export const checkAuth = (req,res,next) => {
    if(success){
        console.log("Auth checked");
        next();
    }
    else{
        console.log("AUTH FAILED");
        res.status(400).json({
            success: false,
            message: "failed auth"
        })
    }
}