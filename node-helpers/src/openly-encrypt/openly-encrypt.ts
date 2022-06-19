import * as bcrypt from 'bcrypt';
import { openlyGenerateErrorSync } from '@openly/helpers';
import { OpenlyGenerateErrorType } from '@openly/types';
import { OpenlyResponseMessageEnum, OpenlyStatusCodeEnum } from '@openly/enums';

export async function openlyEncrypt(
	text: string,
	salt = 10
): Promise<string | OpenlyGenerateErrorType> {
	return bcrypt.hash(text, await bcrypt.genSalt(salt)).catch(() =>
		openlyGenerateErrorSync({
			statusCode: OpenlyStatusCodeEnum.NoContent,
			message: `${OpenlyResponseMessageEnum.EncryptionPasswordError}`,
		})
	);
}
