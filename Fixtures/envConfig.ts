import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

/**
 * Loads environment variables based on the process.env.ENV variable.
 * Order of precedence:
 * 1. .env.<ENV> (e.g. .env.qa, .env.dev, .env.staging, .env.prod)
 * 2. .env (default/fallback)
 *
 * Example usage:
 *   ENV=qa npx playwright test
 *   ENV=dev npx playwright test
 */
export function loadEnvConfig(): string {
  const env = (process.env.ENV || 'qa').toLowerCase();
  const envFilePath = path.resolve(process.cwd(), `.env.${env}`);
  const defaultEnvFilePath = path.resolve(process.cwd(), '.env');

  if (fs.existsSync(envFilePath)) {
    dotenv.config({ path: envFilePath, override: true });
    console.log(`[EnvConfig] Loaded environment: ${env} (${envFilePath})`);
  } else if (fs.existsSync(defaultEnvFilePath)) {
    dotenv.config({ path: defaultEnvFilePath, override: true });
    console.log(`[EnvConfig] Warning: "${envFilePath}" not found. Falling back to .env`);
  } else {
    console.log(`[EnvConfig] Warning: No env file found for environment "${env}".`);
  }

  return env;
}