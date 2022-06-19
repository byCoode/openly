import * as crypto from 'crypto';

export function openlyGenerateSecretSync(algorithm = 'sha256'): string {
	return crypto
		.createHash(algorithm)
		.update(crypto.randomBytes(32))
		.digest('hex');
}
