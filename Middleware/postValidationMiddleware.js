import postValidationSchema from "../Validation/postValidation.js";



 const postvalidationMiddleWare=(req,res,next)=>
{
    const validation =postValidationSchema.validate(req.body);
    if(validation.error){
        return res.status(422).json({message: validation.error.details[0].message})
    }
    next();
}
 export default postvalidationMiddleWare