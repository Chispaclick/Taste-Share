import { z } from 'zod';

export const loginSchema = z.object({
  name: z.string().min(1, 'El nombre es obligatorio'), // Agregando validación para 'name'
  email: z.string().email('Correo inválido').min(1, 'El correo es obligatorio'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
});

