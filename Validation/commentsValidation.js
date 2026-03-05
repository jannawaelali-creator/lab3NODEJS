import Joi from "joi";


const commetValidationSchema=Joi.object({

    comment:Joi.string().min(3).max(50).required().messages({
         "string.min": "comment must be at least 3 characters long _ From Note APP",
        "string.empty": "comment is required _ From Note APP",
    }),
 
    content:Joi.string().min(3).max(1000).required().messages({
         "string.min": "content must be at least 3 characters long _ From Note APP",
        "string.empty": "content is required _ From Note APP",
    }),
   
})
export default commetValidationSchema