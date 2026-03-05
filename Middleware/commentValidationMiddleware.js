import commetValidationSchema from "../Validation/commentsValidation.js";




export const commentvalidationMiddleWare=(req,res,next)=>
{
    const validation =commetValidationSchema.validate(req.body);
    if(validation.error){
        return res.status(422).json({message: validation.error.details[0].message})
    }
    next();
}
 export default commentvalidationMiddleWare