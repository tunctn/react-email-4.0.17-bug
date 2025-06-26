import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "staging", "production"]).default("development"),

    RESEND_API_KEY: z.string(),

    TRANSACTIONAL_EMAIL_FROM: z.string(),
    TRANSACTIONAL_EMAIL_FRIENDLY_NAME: z.string(),
  },
  runtimeEnv: process.env,
  skipValidation: process.env["SKIP_ENV_VALIDATION"] === "true",
  emptyStringAsUndefined: true,
});
