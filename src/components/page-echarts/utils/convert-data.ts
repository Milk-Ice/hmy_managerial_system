import { coordinateData } from './coordinate-data'

export function convertData(data: any) {
  const res = [] as any
  for (let i = 0; i < data.length; i++) {
    // 获取坐标数据，如果找不到则使用默认坐标
    const geoCoord: number[] = coordinateData[data[i].name] || [0, 0]

    res.push({
      name: data[i].name,
      value: geoCoord.concat(data[i].value)
    })
  }
  return res
}
