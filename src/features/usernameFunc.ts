//文字文字列がnullか空かどうかを判定して、空なら匿名のテキストを返す関数
export function usernameOrAnonimace(value: string, unloginText: string): string {
    return isNotNullEmpty(value) ? value : unloginText;
}

//文字がnullか空かどうかを判定する関数
export function isNotNullEmpty(value: string) {
  return value !== null && value !== undefined && value.trim() !== "";
}

