function authMiddleware(req,res,next){
    console.log(req.headers)
    const token = req.headers.authmiddleware;
    if(!token){
        return res.status(401).json({error:"Unauthorized"})
    }
    next()
}

module.exports = authMiddleware;