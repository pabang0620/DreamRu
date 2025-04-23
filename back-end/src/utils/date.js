// utils/date.js
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");
dayjs.extend(utc);
dayjs.extend(timezone);

const toKST = (date = new Date()) =>
  dayjs(date).tz("Asia/Seoul").format("YYYY-MM-DD HH:mm:ss");

module.exports = { toKST };
