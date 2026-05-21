const { z } = require('zod')

const areaSchema = z.object({
  name: z.string().trim().min(1, 'El nombre es requerido'),
  description: z.string().optional(),
})

module.exports = {
  createAreaSchema: areaSchema,
  updateAreaSchema: areaSchema,
}