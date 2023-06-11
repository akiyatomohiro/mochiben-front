import { loadEnvConfig } from '@next/env';

const initializeEnvConfig = async (): Promise<void> => {
    loadEnvConfig(process.env.PWD || process.cwd());
};

export default initializeEnvConfig;
