import { z } from 'zod'

export const contactSchema = z.object({
  name: z
    .string({ error: 'El nombre es obligatorio.' })
    .trim()
    .min(2, 'El nombre debe tener al menos 2 caracteres.')
    .max(60, 'El nombre no puede superar los 60 caracteres.'),
  email: z
    .string({ error: 'El correo electrónico es obligatorio.' })
    .trim()
    .email('Introduce un correo electrónico válido.'),
  message: z
    .string({ error: 'El mensaje es obligatorio.' })
    .trim()
    .min(10, 'El mensaje debe tener al menos 10 caracteres.')
    .max(500, 'El mensaje no puede superar los 500 caracteres.'),
})

export const contactDefaultValues = {
  name: '',
  email: '',
  message: '',
}
