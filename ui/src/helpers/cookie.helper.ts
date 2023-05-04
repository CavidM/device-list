export class CookieHelper {

  static find(item: string | undefined) {
    document.cookie
      .split('; ')
      .find((row) => row.startsWith(`${item}=`))
      ?.split("=")[1];
  }
}