const { z } = require('zod')

const prioritySchema = z.enum(['low', 'normal', 'high'])

const statusSchema = z.enum([
  'pending',
  'in_review',
  'approved',
  'rejected',
  'cancelled',
])

const createRequestSchema = z.object({
  title: z.string().trim().min(1, 'El título es requerido'),
  description: z.string().optional(),
  area_id: z.number().int(),
  category_id: z.number().int().nullable().optional(),
  priority: prioritySchema.default('normal'),
})

const updateRequestSchema = z.object({
  title: z.string().trim().min(1, 'El título es requerido').optional(),
  description: z.string().optional(),
  status: statusSchema.optional(),
  area_id: z.number().int().optional(),
  category_id: z.number().int().nullable().optional(),
  priority: prioritySchema.optional(),
})

module.exports = { createRequestSchema, updateRequestSchema }