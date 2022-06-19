import {
	generateKeyPairSync,
	KeyPairSyncResult,
	RsaPrivateKey,
	RsaPublicKey,
} from 'crypto';

export function openlyGenerateKeyPairSync(
	passphrase?: string,
	modulusLength = 2048
): KeyPairSyncResult<string, string> {
				return generateKeyPairSync('rsa', {
					modulusLength,
					publicKeyEncoding: {
						type: 'spki',
						format: 'pem',
					},
					privateKeyEncoding: {
						type: 'pkcs8',
						format: 'pem',
						cipher: 'aes-256-cbc',
						passphrase,
					},
				});
}

// interface OpenlyPublicKeyEncoding {
//   type: 'spki' | 'pkcs1';
//   format: 'pem' | 'der';
// }
//
// interface OpenlyPrivateKeyEncoding {
//   type: 'spki' | 'pkcs1' | 'pkcs8';
//   format: 'pem' | 'der';
//   cipher: string;
//   passphrase: string;
// }

// export function openlyGenerateRsaKey(keyType: 'publicKeyEncoding' | 'privateKeyEncoding', passphrase?: string): RsaPublicKey | RsaPrivateKey {
//
//   const publicKeyEncoding: OpenlyPublicKeyEncoding = { type: 'spki', format: 'pem' };
//
//   const privateKeyEncoding: OpenlyPrivateKeyEncoding = { type: 'pkcs8', format: 'pem', cipher: 'aes-256-cbc', passphrase };
//
//   const generatedRsa: KeyPairSyncResult<any, any> = generateKeyPairSync('rsa', {
//     modulusLength: 2048,
//     [keyType]: keyType === 'publicKeyEncoding' ? publicKeyEncoding : privateKeyEncoding
//   });
//
//   return keyType === 'publicKeyEncoding' ? generatedRsa.publicKey : generatedRsa.privateKey;
// }
