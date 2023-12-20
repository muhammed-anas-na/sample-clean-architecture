function authMiddleware(req,res,next){
    const token = req.headers.authMiddleware;
    if(!token){
        return res.status(401).json({error:"Unauthorized"})
    }
}

module.exports = authMiddleware;