const { ZodError } = require('zod');

/**
 * Middleware to validate request data using a Zod schema.
 * @param {import('zod').ZodSchema} schema - The Zod schema to validate against.
 * @param {'body' | 'query' | 'params'} source - The property of req to validate (default: 'body').
 */
const validate = (schema, source = 'body') => (req, res, next) => {
    try {
        schema.parse(req[source]);
        next();
    } catch (error) {
        if (error instanceof ZodError) {
            return res.status(400).json({
                success: false,
                message: 'Validation failed',
                errors: error.issues.map((issue) => ({
                    path: issue.path.join('.'),
                    message: issue.message
                }))
            });
        }
        console.error('Validation Middleware Error:', error);
        next(error);
    }
};

module.exports = validate;
