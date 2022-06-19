import * as bcrypt from 'bcrypt';

export function openlyHashCompareSync(string: string, hash: string): boolean {
	return bcrypt.compareSync(string, hash);
}
