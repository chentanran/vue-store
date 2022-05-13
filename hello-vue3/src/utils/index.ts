/**
 * @param str 需要转驼峰的下划线字符串
 * @returns 字符串驼峰
 */
export const underlineToHump = (str: string): string => {
	return str.replace(/\-(\w)/g, (_, letter: string) => {
		return letter.toUpperCase()
	})
}