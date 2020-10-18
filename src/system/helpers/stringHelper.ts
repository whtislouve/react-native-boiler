export class StringHelper {

  static iosPathResolver = (path: string): string => {
    return path.replace('file://', '')
  }

  static findLastMatchTakeSubstring = (string: string, searchString: string) => {
    return string.substring(string.lastIndexOf(searchString) + 1)
  }
  
}