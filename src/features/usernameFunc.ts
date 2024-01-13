export default class UsernameFunc {

    //文字文字列がnullか空かどうかを判定して、空なら匿名のテキストを返す関数
  usernameOrAnonimace(value: string): string {
    const loginText = "ログインしてください";
    return this.isNotNullEmpty(value) ? value : loginText;
  }

  //文字がnullか空かどうかを判定する関数
  isNotNullEmpty(value: string) {
    return value !== null && value !== undefined && value.trim() !== "";
  }
}
