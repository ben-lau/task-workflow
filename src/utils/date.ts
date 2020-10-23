const padZero = (value: string | number, length: number) =>
  `${new Array(length).fill('0').join('')}${String(value)}`.substr(-length);

/**
 * 按规则格式化日期：yyyy-MM-dd (HH)hh:mm:ss:SSS
 */
export const dateFormater = (
  _date: Date | number | string,
  rule: string
): string => {
  const date = new Date(_date);
  const rulesMap = {
    'M+': date.getMonth() + 1, //月份
    'd+': date.getDate(), //日
    'h+': date.getHours() % 12 == 0 ? 12 : date.getHours() % 12, //小时
    'H+': date.getHours(), //小时
    'm+': date.getMinutes(), //分
    's+': date.getSeconds(), //秒
    'q+': Math.floor((date.getMonth() + 3) / 3), //季度
    S: date.getMilliseconds(), //毫秒
  };

  if (/(y+)/.test(rule)) {
    rule = rule.replace(
      RegExp.$1,
      String(date.getFullYear()).substr(4 - RegExp.$1.length)
    );
  }
  Object.keys(rulesMap)
    .filter(key => new RegExp(`(${key})`).test(rule))
    .forEach(key => {
      const value = rulesMap[key as keyof typeof rulesMap];
      rule = rule.replace(new RegExp(`(${key})`), padZero(value, 2));
    });
  return rule;
};

export const formatToDateTime = (date: Date | number | string) =>
  dateFormater(date, 'yyyy-MM-dd HH-mm-ss-S');
