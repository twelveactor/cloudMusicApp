/**
[00:00.000] 作曲 : 许嵩
[00:01.000] 作词 : 许嵩
[00:22.240]天空好想下雨
[00:24.380]我好想住你隔壁
[00:26.810]傻站在你家楼下
[00:29.500]抬起头数乌云
[00:31.160]如果场景里出现一架钢琴
[00:33.640]我会唱歌给你听
[00:35.900]哪怕好多盆水往下淋
[00:41.060]夏天快要过去}
 */

// [00:31.160]如果场景里出现一架钢琴
//  / 取中括号中的内容\[(分组 \d{取两位数字}):(\d{2})\.(\d{2,3})\]/;
const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;

export function parseLyric(lyricString) {
  // 按照 \n 返回一个数组
  const lineStrings = lyricString.split("\n");

  const lyrics = [];
  for (let line of lineStrings) {
    // console.log(line)
    if (line) {
      const result = parseExp.exec(line);
      if (!result) continue;
      // 0：[00:31.160]
      // 1：00 =》 分钟 转为 毫秒
      // 2：31 =》 秒 转为 毫秒
      // 3：160 =》 毫秒为3位，如果有两位的要 * 10
      const time1 = result[1] * 60 * 1000;
      const time2 = result[2] * 1000;
      const time3 = result[3].length === 3? result[3]*1: result[3]*10;
      const time = time1 + time2 + time3;
      const content = line.replace(parseExp, "").trim();
      if (content){
        const lineObj = {time, content};
        lyrics.push(lineObj);
      }
    }
  }
  return lyrics;
}