import Joi from "joi";

const postValidationSchema=Joi.object({

    title:Joi.string().min(3).max(50).required().messages({
         "string.min": "title must be at least 3 characters long _ From Note APP",
        "string.empty": "content is required _ From Note APP",
    }),
 
    content:Joi.string().min(3).max(1000).required().messages({
         "string.min": "content must be at least 3 characters long _ From Note APP",
        "string.empty": "content is required _ From Note APP",
    }),
   
})

export default postValidationSchema