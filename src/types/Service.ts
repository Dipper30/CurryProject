export interface tagType {
  id?: number,
  type: number,
  name_zh_cn: string,
  name_en: string,
}

export interface recordType {
  id?: number,
  good: number,
  total: number,
  uid: number,
  tag: number,
  date: number|string, // unix timestamp
}