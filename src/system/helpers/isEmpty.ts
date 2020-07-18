export const isObjectEmpty = (object: Object): boolean => {
  if (object.constructor !== Object) {
    throw new Error('This parameter is not Object!')
  }
  return Object.keys(object).length === 0
  && object.constructor === Object
}

export const isArrayEmpty = (array: Array<any>): boolean => {
  if (array.constructor !== Array) {
    throw new Error('This parameter is not Array!')
  }
  return Array.isArray(array) && !!array.length
}