import { z } from "zod";

const IHeader = z.object({
  title: z
    .string()
    .min(100)
    .max(200)
    .regex(/^[A-z][A-z0-9_]{10, 20}/)
    .maxLength(20),
  description: z.string(),
});

type THeader = z.infer<typeof IHeader>;

export { THeader };
