/*
 * MIT License
 *
 * Copyright (c) 2021 byCoode
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * This is an helper module for resolve folder paths with cross-platform approach.
 * @module dirCurrent
 * @category Helper
 * @author [Roberto Cocco](https://discordapp.com/users/131085605063884800)
 */

import * as path from 'path';

const main: string = require('require-main-filename')({});

/**
 * Return the complete folder path of the file where the variable is used. This approach make the path cross-platform.
 *
 * What to expect:
 *
 * ✔️ `<YOUR_DISK_LETTER>:<PROJECT_CONTAINER>\\Apps\DiscordBots\\byCoodeBoot\\src\\app\\shared\\helpers\\dir-current` (Windows)
 *
 * What not to expect:
 *
 * ❌️ `<YOUR_DISK_LETTER>:<YOUR_FOLDER_PATHS>\\Apps\DiscordBots\\byCoodeBoot\\src\\app\\shared\\helpers\\dir-current\\dir-current.helper.ts` (Windows)
 * @author [Roberto Cocco](https://discordapp.com/users/131085605063884800)
 */
export const dirCurrent: string = path.dirname(main);
