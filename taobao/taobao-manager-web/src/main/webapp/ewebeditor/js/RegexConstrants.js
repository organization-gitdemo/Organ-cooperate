//公共校验js
var layer_msg_common = "格式不符，请重新输入！";
/**
 * 验证用户名
 */
var REGEX_USERNAME = /^[a-zA-Z0-9]{3,16}$/;
var REGEX_USERNAME_VALUE = "用户名由3-16位数字或字母组成！";
/**
 * 验证密码
 */
//var REGEX_PASSWORD = /^(?=.*[a-zA-Z])(?=.*\d).{6,12}$|^(?=.*[a-zA-Z])(?=.*[~!@#$%^&*()_+`\-={}:";'<>?,.\/]).{6,12}$|^(?=.*\d)(?=.*[~!@#$%^&*()_+`\-={}:";'<>?,.\/]).{6,12}$|^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+`\-={}:";'<>?,.\/]).{6,12}$/;
//var REGEX_PASSWORD_VALUE = "密码由6-12位数字、字母、特殊字符组成，不能全为数字或字母或特殊字符！";
var REGEX_PASSWORD = /^[a-zA-Z0-9-_·，。、“”‘’；：【】《》（）——？~！￥……{},.;'~!@#$%^&*()+?:]{6,12}$/;
var REGEX_PASSWORD_VALUE = "密码由6-12位数字、字母、特殊字符组成！";
/**
 * 验证手机号
 */
var REGEX_MOBILE_PHONE = /^1[3456789]\d{9}$/;
//var REGEX_MOBILE_PHONE_VALUE = "由1开头的11位数字组成！";
/**
 * 验证电话(允许校验座机)
 */
var REGEX_WORK_PHONE = /^1[3456789]\d{9}|^\d{3,5}-\d{7,8}$/;
/**
 * 验证邮箱
 */
var REGEX_EMAIL = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
/**
 * 验证邮政编码
 */
var REGEX_POSTCODE = /^[0-9]{6}$/;
var REGEX_POSTCODE_VALUE = "由6位数字组成！";
/**
 * 验证传真
 */
var REGEX_FAX = /^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/;
/**
 * 验证姓名 中英文数字,不含空格,非空
 */
var REGEX_NICKNAME = /^[\u4e00-\u9fa5a-zA-Z0-9]{1,8}$/;
var REGEX_NICKNAME_VALUE = "由1-8位数字、字母、中文组成！";
/**
 * 验证单位名称 中英文数字,不含空格,非空
 */
var REGEX_UNITNAME = /^[\u4e00-\u9fa5a-zA-Z0-9]{1,30}$/;
var REGEX_UNITNAME_VALUE = "由1-30位数字、字母、中文组成！";
/**
 * 验证地址 中英文数字,不含空格,中英文符号,非空
 */ 
var REGEX_ADDRESS = /^[\u4e00-\u9fa5a-zA-Z0-9-_·，。、“”‘’；：【】《》（）——？~！￥……{},.;'~!@#$%^&*()+?:]{1,100}$/;
var REGEX_ADDRESS_VALUE = "由1-100位数字、字母、特殊字符、中文组成！";
/**
 * 验证营业执照号码
 */ 
var REGEX_ORGANIZATION = /^[0-9]{1,50}$/;
var REGEX_ORGANIZATION_VALUE = "由1-50位数字组成！";
/**
 * 验证备注 中英文数字,不含空格,中英文符号,换行,可空
 */ 
var REGEX_REMARKS = /^[\u4e00-\u9fa5a-zA-Z0-9-_·，。、“”‘’；：【】《》（）——？~！￥……{},.;'~!@#$%^&*()+?:\n\t\r]{1,200}$|^$/;
var REGEX_REMARKS_VALUE = "由0-200位数字、字母、特殊字符、中文组成！";
/**
 * 验证身份证号，必填
 */
var REGEX_ID_CARD = /^(^[1-9]\d{7}((0[1-9])|(1[0-2]))(0[1-9]{1}|[1-2][0-9]{1}|3[0-1]{1})\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))(0[1-9]{1}|[1-2][0-9]{1}|3[0-1]{1})((\d{4})|\d{3}[Xx])$)$/;
/**
 * 验证银行名称 中英文数字,不含空格,非空
 */
var REGEX_BANK = /^[\u4e00-\u9fa5a-zA-Z0-9]{1,20}$/;
var REGEX_BANK_VALUE = "由1-20位数字、字母、中文组成！";
/**
 * 验证银行卡号 中英文数字,不含空格,非空
 */
var REGEX_BANKNUM = /^([1-9]{1})(\d{15,18})$/;
/**
 * 验证0-100正整数
 */
var REGEX_SCORE = /^(?:0|[1-9][0-9]?|100)$/;












/**
 * 房源楼层，可为负数，不可为0
 *//*
var FY_FLOOR = "^-?[1-9][0-9]*$";
*//**
 * 中英文数字,不含空格,非空
 *//*
var COMMON_CHINESE_ENGLISH_NUM_BASE = "[\\u4e00-\\u9fa5a-zA-Z0-9]";
*//**
 * 中英文数字,不含空格,中英文符号,非空
 *//*
var COMMON_CHINESE_ENGLISH_NUM_FUHAO = "[\\u4e00-\\u9fa5a-zA-Z0-9-_·，。、“”‘’；：【】《》（）——？~！￥……{},.;'~!@#$%^&*()+?:]";
*//**
 * 中英文数字,不含空格,中英文符号,换行,非空
 *//*
var COMMON_CHINESE_ENGLISH_NUM_FUHAO_HUANHANG = "[\\u4e00-\\u9fa5a-zA-Z0-9-_·，。、“”‘’；：【】《》（）——？~！￥……{},.;'~!@#$%^&*()+?:\n\t\r]";
*//**
 * 非空/必填验证
 *//*
var REGEX_REQUIRY_NOT_NULL = "^\\S+$";
*//**江福林 2018/02/06 14:00 需求 383 家天下：工作日志不支持换行和空格，建议支持展示更加直观
 * 非空/必填验证(可输入空格和换行)
 *//*
var REGEX_REQUIRY_NOT_NULL_BLANK = "[\\s\\S]+";
*//**
 * 验证数字
 *//*
var REGEX_REQUIRY_NUMBER = "^\\d+$";
*//**
 * 验证数字，可为空
 *//*
var REGEX_REQUIRY_NUMBER_NULL = "^\\d*$";
*//**
 * 验证数字，可为空，可含有横杠
 *//*
var REGEX_REQUIRY_NUMBER_NULL_HENGGANG = "^[\\d-]*$";
*//**
 * 验证数字，不可为空，可含有横杠
 *//*
var REGEX_REQUIRY_NUMBER_NOT_NULL_HENGGANG = "^[\\d-]+$";
*//**
 * 验证正整数负整数，不可为空
 *//*
var REGEX_REQUIRY_INTEGER_NUMBER = "^-*\\d+$";
*//**
 * 验证正整数(不能以0开头)负整数(负整数的取值范围为1-5)，可为空
 *//*
var REGEX_REQUIRY_INTEGER_NUMBER_NULL = "^-{1}[1-5]{1}$|^[1-9]+[0-9]*$|^$";
*//**
 * 验证数字，整数或者小数(点后只能有两位),不能为0
 *//*
var REGEX_REQUIRY_DOU_OR_INT_NUMBER = "^(?!0+(?:\\.0+)?$)(?:[1-9]\\d*|0)(?:\\.\\d{1,2})?$";
*//**
 * 验证数字，整数或者小数(点后只能有四位),不能为0
 *//*
var REGEX_REQUIRY_DOU_OR_INT_NUMBER_ForContract = "^(?!0+(?:\\.0+)?$)(?:[1-9]\\d*|0)(?:\\.\\d{1,4})?$";
*//**
 * 100以内正整数
 *//*
var REGEX_REQUIRY_DOU_OR_INT_NUMBER_NOTZERO = "^(?:0|[1-9][0-9]?|100)$";
*//**
 * 验证数字，整数或者小数(点后只能有两位),不能为0,可为空
 *//*
var REGEX_REQUIRY_DOU_OR_INT_NUMBERNULL = "^$|^^(?!0+(?:\\.0+)?$)(?:[1-9]\\d*|0)(?:\\.\\d{1,2})?$";
*//**
 * 验证数字，整数或者小数(点后只能有四位),不能为0
 *//*
var REGEX_REQUIRY_DOU_OR_INT_NUMBERNULL_ForContract = "^$|^^(?!0+(?:\\.0+)?$)(?:[1-9]\\d*|0)(?:\\.\\d{1,4})?$";
*//**
 * 验证身份证号，必填
 *//*
var REGEX_REQUIRY_ID_CARD = "^(^[1-9]\\d{7}((0[1-9])|(1[0-2]))(0[1-9]{1}|[1-2][0-9]{1}|3[0-1]{1})\\d{3}$)|(^[1-9]\\d{5}[1-9]\\d{3}((0[1-9])|(1[0-2]))(0[1-9]{1}|[1-2][0-9]{1}|3[0-1]{1})((\\d{4})|\\d{3}[Xx])$)$";
//													
*//**
 * 验证护照号，必填
 *//*
var REGEX_REQUIRY_HZ_CARD = "^[A-Z]\\d{8}$";
*//**
 * 验证身份证号，可为空
 *//*
var REGEX_REQUIRY_ID_CARD_NULL = "^$|^(^[1-9]\\d{7}((0[1-9])|(1[0-2]))(0[1-9]{1}|[1-2][0-9]{1}|3[0-1]{1})\\d{3}$)|(^[1-9]\\d{5}[1-9]\\d{3}((0[1-9])|(1[0-2]))(0[1-9]{1}|[1-2][0-9]{1}|3[0-1]{1})((\\d{4})|\\d{3}[Xx])$)$";
*//**
 * 验证护照号，可为空
 *//*
var REGEX_REQUIRY_HZ_NULL = "^$|^[A-Z]\\d{8}$";
*//**
 * 验证手机号(需要以1开头)
 *//*
var REGEX_REQUIRY_PHONE_NUMBER = "^(1\\d{10}|\\d{13})$";
*//**
 * 验证电话(允许校验座机)
 *//*
var REGEX_REQUIRY_PHONE = "^1\\d{10}$|^\\d{3,5}-\\d{7,8}$";
*//**
 * 验证电话(允许校验座机) 可为空
 *//*
var REGEX_REQUIRY_PHONE_NULL = "^$|^1\\d{10}$|^\\d{3}-\\d{8}$|^\\d{4}-\\d{7}$";
*//**
 * 验证邮箱，必填
 *//*
var REGEX_REQUIRY_EMAIL = "^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$";
*//**
 * 验证邮箱，可为空
 *//*
var REGEX_REQUIRY_EMAIL_NULL = "^$|^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$";
*//**
 * 验证字母和数字出现一次或多次
 *//*
var REGEX_REQUIRY_LETTER_NUMBER = "^[A-Za-z|\\d]+$";
*//**
 * 验证只能输入非空八位字符
 *//*
var REGEX_REQUIRY_CHAR_EIGHT = "^[\\S]{1,8}$";
*//**
 * 验证时间年月日(yyyy-MM-dd)
 *//*
var REGEX_REQUIRY_YMD = "^\\d{4}-\\d{2}-\\d{2}$";
*//**
 * 验证时间年月日(yyyy-MM-dd)(必填)
 *//*
var REGEX_REQUIRY_DATE_YMD = "^[1-9]{1}\\d{3}-(0[1-9]{1}|1[0-2]{1})-(0[1-9]{1}|[1-2][0-9]{1}|3[0-1]{1})$";
*//**
 * 验证时间年月日(yyyy-MM-dd)(可为空)
 *//*
var REGEX_REQUIRY_DATE_YMD_NULL = "^[1-9]{1}\\d{3}-(0[1-9]{1}|1[0-2]{1})-(0[1-9]{1}|[1-2][0-9]{1}|3[0-1]{1})$|^$";
*//**
 * 验证时间年月(yyyy-MM)
 *//*
var REGEX_REQUIRY_YM = "^\\d{4}-\\d{2}$";
*//**
 * 验证时间年月日时分秒(yyyy-MM-dd HH:mm:ss)
 *//*
var REGEX_REQUIRY_YMDHHMMSS = "^\\d{4}-\\d{2}-\\d{2} (0\\d{1}|1\\d{1}|2[0-3]):([0-5]\\d{1}):([0-5]\\d{1})$";
*//**
 * 验证时间年月日时分(yyyy-MM-dd HH:mm)
 *//*
var REGEX_REQUIRY_YMDHHMM = "^\\d{4}-\\d{2}-\\d{2} (0\\d{1}|1\\d{1}|2[0-3]):([0-5]\\d{1})$";
*//**
 * 验证时间时分秒(HH:mm:ss)
 *//*
var REGEX_REQUIRY_HHMMSS = "^(0\\d{1}|1\\d{1}|2[0-3]):([0-5]\\d{1}):([0-5]\\d{1})$";
*//**
 * 验证时间时分(HH:mm)
 *//*
var REGEX_REQUIRY_HHMM = "^(0\\d{1}|1\\d{1}|2[0-3]):([0-5]\\d{1})$";
*//**
 * 验证手机号，座机号，可为空
 *//*
var REGEX_PHONE_NULL = "^1\\d{10}$|^\\d{3}-\\d{8}$|^\\d{4}-\\d{7}$|^$";

*//**
 * 验证数字，整数或者小数(点后只能有两位)，可为空
 *//*
var REGEX_REQUIRY_DOU_OR_INT_NUMBER_NULL = "^\\d+\\.\\d{1,2}$|^\\d+$|^$";
*//**
 * 验证数字，整数或者小数(点后只能有两位)，不为空
 *//*
var REGEX_REQUIRY_DOU_OR_INT_NUMBER_NOTNULL = "^\\d+\\.\\d{1,2}$|^\\d+$";
*//**
 * 验证数字：整数(最多8位)或者小数(点前最多有8位点后最多有两位)，不为空，但可以输入0或者0.0或者0.00但不能输入00.0或者000.00之类的值
 *//*
var REGEX_REQUIRY_DOUBLE_OR_INT_NOTNULL = "^([1-9]{1}\\d{0,7}|0)(\\.\\d{1,2})?$";
*//**
 * 验证数字：整数(最多8位)或者小数(点前最多有8位点后最多有两位)，可以为空，可以输入0或者0.0或者0.00但不能输入00.0或者000.00之类的值
 *//*
var REGEX_REQUIRY_DOUBLE_OR_INT_CANNULL = "^$|^([1-9]{1}\\d{0,7}|0)(\\.\\d{1,2})?$";
*//**
 * 验证数字：整数(最多2位)或者小数(点前最多有2位点后最多有两位)，可以为空，可以输入0或者0.0或者0.00但不能输入00.0或者000.00之类的值
 *//*
//update by wzhh 2018年6月13日11:01:54 bug19219 楼盘详情编辑开发商物业，保存提示数据异常
var REGEX_REQUIRY_DOUBLE_OR_INT_CANNULL = "^$|^([1-9]{1}\\d{0,7}|0)(\\.\\d{1,2})?$";
*//**
 * 验证数字：整数(最多8位)或者小数(点前最多有8位点后最多有两位)，不为空，但可以输入0或者0.0或者0.00但不能输入00.0或者000.00之类的值；可输入负数！但不能输入-0[.0|.00]
 *//*
var REGEX_REQUIRY_DOUBLE_NOTNULL = "^(([1-9]{1}\\d{0,7}|0)(\\.\\d{1,2})?|-?([1-9]{1}\\d{0,7}(\\.\\d{1,2})?|0\\.(\\d{1}[1-9]{1}|[1-9]{1}\\d{0,1})))$";
*//**
 * 验证数字：整数(最多8位)或者小数(点前最多有8位点后最多有两位)，可以为空，可以输入0或者0.0或者0.00但不能输入00.0或者000.00之类的值；可输入负数！但不能输入-0[.0|.00]
 *//*
var REGEX_REQUIRY_DOUBLE_CANNULL = "^$|^(([1-9]{1}\\d{0,7}|0)(\\.\\d{1,2})?|-?([1-9]{1}\\d{0,7}(\\.\\d{1,2})?|0\\.(\\d{1}[1-9]{1}|[1-9]{1}\\d{0,1})))$";
*//**
 * 验证数字，整数或者小数(点后最多有4位)，不为空
 *//*
var REGEX_REQUIRY_DOU_FOUR_OR_INT_NUMBER_NOTNULL = "^(?!0+(?:\\.0+)?$)(?:[1-9]\\d*|0)(?:\\.\\d{1,4})?$";
*//**
 * 验证数字，整数或者小数(点后最多有4位)，可为0，可为空
 *//*
var REGEX_REQUIRY_DOU_FOUR_OR_INT_NUMBER_ZERO_NULL = "^$|^(?:[1-9]\\d*|0)(?:\\.\\d{1,4})?$";
*//**
 * 验证数字，整数或者小数(点后最多有1位)，不为空
 *//*
var REGEX_REQUIRY_DOU_ONE_OR_INT_NUMBER_NOTNULL = "^(?!0+(?:\\.0+)?$)(?:[1-9]\\d*|0)(?:\\.\\d{1,1})?$";

*//**
 * 验证数字，两位数字，片区编号所用
 *//*
var REGEX_PICEAREA_NUMBER = "^[1-9]|^0[1-9]$|^[1-9][0-9]$";
*//**
 * 台胞证
 *//*
var REGEX_TAIWAN_IDCARD = "^[a-zA-Z0-9]{5,21}$";
*//**
 * 验证两位数字可以0开头
 *//*
var REGEX_SERIAL_NUMBER = "^\\d{2}$";
*//**
 * 正整数，可为0，不可为空
 *//*
var REGEX_NUMBER_ZREO_NOTNULL = "^[0-9]\\d*$";
*//**
 * 验证两位数字可以0开头，可为空
 *//*
var REGEX_SERIAL_NUMBER_NULL = "^\\d{2}$|^$";
*//**
 * 验证四位数字可以0开头
 *//*
var REGEX_SERIAL_FOURNUMBER = "^\\d{4}$";
*//**
 * 验证四位数字可以0开头，可为空
 *//*
var REGEX_SERIAL_FOURNUMBER_NULL = "^\\d{4}$|^$";
*//**
 * 验证五位数字可以0开头
 *//*
var REGEX_SERIAL_FIVERNUMBER = "^\\d{5}$";
*//**
 * 验证第一位不能为0的数字
 *//*
var REGEX_POSITION_FORMATION = "^$|^[0]$|^[1-9]\\d*$";

*//**
 * 验证汉字、数字、大小写字母，位数2-10位
 *//*
var REGEX_PICEAREA_NAME = "^[\\u4e00-\\u9fa50-9A-Za-z]{2,10}$";
*//**
 * 验证汉字、数字、大小写字母，位数2-10位(可为空)
 *//*
var REGEX_PICEAREA_NAME_NO = "^$|^[\\u4e00-\\u9fa50-9A-Za-z]{2,10}$";
*//**
 * 验证1 到 4 位的字母 必填
 *//*
var REGEX_HEADER_LOGOGRAM = "^[A-Za-z]{1,4}$";

*//**
 * 验证1 到 4 位的字母 不必填
 *//*
var REGEX_CODE_NOT_NULL = "^[A-Za-z]{0,4}$";

*//**
 * 只能包含大小写字母或数字，位数2-25位
 *//*
var REGEX_ESTATE_SPELL = "^[a-zA-Z0-9]{2,25}$";

*//**
 * 验证汉字、数字、大小写字母、中英文括号以及点，位数2-25位
 *//*
 //江福林 2018/02/01 16:12 17680 家天下（bug）：楼盘字典的楼盘名称放开，不做限制非空即可
//var REGEX_ESTATE_NAME = "^[\\u4e00-\\u9fa50-9A-Za-z()（）·]{2,25}$";
var REGEX_ESTATE_NAME = "^\\S+$";

*//**
 * 验证汉字、数字、大小写字母，位数2-25位，可为空
 *//*
var REGEX_NAME_OR_NULL = "^$|^[\\u4e00-\\u9fa50-9A-Za-z]{2,25}$";
*//**
 * 验证汉字、数字、大小写字母，位数1-8位(部门名称)
 *//*
var REGEX_DEPARTMENT_NAME = "^[\\u4e00-\\u9fa50-9A-Za-z]{1,8}$";
*//**
 * 验证汉字、数字、大小写字母，位数1-10位(岗位名称)
 *//*
var REGEX_POSITION_NAME = "^[\\u4e00-\\u9fa50-9A-Za-z]{1,6}$";
*//**
 * 验证汉字、数字、大小写字母，位数1-20位(员工名称)
 *//*
var REGEX_EMPLYEE_NAME = "^[\\u4e00-\\u9fa50-9A-Za-z]{1,20}$";
*//**
 * 验证数字、大小写字母，位数1-10位(员工编号)
 *//*
var REGEX_EMPLYEE_EMPNO = "^[a-zA-Z0-9]{1,10}$";
*//**
 * 验证汉字、数字、大小写字母，位数1-20位(员工英文名称)
 *//*
var REGEX_EMPLYEE_ENGLISHNAME = "^$|^[A-Za-z\\.]{1,20}$";
*//**
 * 验证汉字、数字、大小写字母，位数2-15位(入职清单项目)
 *//*
var REGEX_ENTRYINFO = "^[\\u4e00-\\u9fa50-9A-Za-z]{2,15}$";
*//**
 * 验证手机号
 * 需求406 songwenpan 2018年3月5日10:38:16 支持中国联通166号段
 *//*
var REGEX_REQUIRY_ALLMOBILPHONE = "^((\\+?86)|(\\+86))?(13[0-9]{9}|15[0-9]{9}|18[0-9]{9}|14[0-9]{9}|17[0-9]{9}|199[0-9]{8}|166[0-9]{8})$";
*//**
 * 验证电话（可填手机）必填，与REGEX_REQUIRY_ALLPHONE_NOTNULL相同
 * 需求406 songwenpan 2018年3月5日10:38:16 支持中国联通166号段
 *//*
var REGEX_REQUIRY_ALLPHONE = "^(((0\\d{2,5}|400|800)|(0\\d{2,5}|400|800)-)\\d{6,8})$|^((\\+?86)|(\\+86))?(13[0-9]{9}|15[0-9]{9}|18[0-9]{9}|14[0-9]{9}|17[0-9]{9}|199[0-9]{8}|166[0-9]{8}|[0-9]{13})$";
*//**
 * 验证网址，可为空
 *//*
var REGEX_URL = "^$|^([\\w-]+\\.)+[\\w-]+(/[\\w-./?%&=]*)?$";

*//**
 * 验证汉字、数字、大小写字母，位数1-3位
 *//*
var REGEX_EXTATETX_OR_NULL = "^[\\u4e00-\\u9fa50-9A-Za-z]{1,3}$";

*//**
 * 验证汉字、数字、大小写字母，位数1-20位(项目值)
 *//*
var REGEX_ITEM_VALUE = "^[\\u4e00-\\u9fa5\\-0-9A-Za-z]{1,20}$";

*//**
 * 验证所有字符，位数0-25位(项目说明)
 *//*
var REGEX_ITEM_INFO = "^.{0,100}$";

*//**
 * 验证汉字、数字、大小写字母，位数2-8位(线路名称)
 *//*
var REGEX_LINENAME = "^[\\u4e00-\\u9fa50-9A-Za-z]{2,8}$";

*//**
 * 验证汉字、数字、大小写字母，位数2-8位(站点名称)
 *//*
var REGEX_STATIONNAME = "^[\\u4e00-\\u9fa50-9A-Za-z]{2,8}$";

*//**
 * 验证电话（可填手机，可为空）与 REGEX_REQUIRY_ALLPHONE_CANNULL 相同
 * 需求406 songwenpan 2018年3月5日10:38:16 支持中国联通166号段
 *//*
var REGEX_REQUIRY_ALLPHONE_NULL = "^$|^(((0\\d{2,5}|400|800)|(0\\d{2,5}|400|800)-)\\d{6,8})$|^((\\+?86)|(\\+86))?(1[0-9]{10}|[0-9]{13})$";
*//**
 * 只能输入汉字
 *//*
var REGEX_CHINESE = "^[\\u4e00-\\u9fa5]{2,6}$";
*//**
 * 客户姓名：只能输入汉字、数字、字母、开头和结尾不能有空格但中间可以有空格、点(中文)(不包含全角数字和字母)(长度2-8位)(不能为空)
 *//*
var REGEX_CUSTNAME_NOTNULL = "^[\\u4e00-\\u9fa5a-zA-Z0-9]{1}[\\u4e00-\\u9fa5a-zA-Z0-9 ·]{0,6}[\\u4e00-\\u9fa5a-zA-Z0-9]{1}$";
var REGEX_CUSTNAME_NOTNULL1 = "^[\\u4e00-\\u9fa5a-zA-Z0-9]{1}[\\u3002\\uff1b\\uff0c\\uff1a\\u201c\\u201d\\uff08\\uff09\\u3001\\uff1f\\u300a\\u300b]{0,6}[\\u4e00-\\u9fa5a-zA-Z0-9]{1}$";

*//**
 * 客户姓名：只能输入汉字、字母、开头和结尾不能有空格但中间可以有空格、点(中文)(不包含全角数字和字母)(长度2-8位)(不能为空，不能为数字)
 *//*
var REGEX_CUSTNAME_NOTNULL_NOT_NUM = "^[\\u4e00-\\u9fa5a-zA-Z]{1}[\\u4e00-\\u9fa5a-zA-Z ·]{0,6}[\\u4e00-\\u9fa5a-zA-Z]{1}$";
*//**
 * 客户地址：只能输入汉字、数字、字母、开头和结尾不能有空格/横杠/点(中文)但中间可以有空格/横杠/点(中文)(不包含全角数字和字母)(长度0-50位)(可以为空)
 *//*
var REGEX_ADDRESS_INPUT_CANNULL = "^$|^[\\u4e00-\\u9fa5a-zA-Z0-9]{1}(^$|[\\u4e00-\\u9fa5a-zA-Z0-9 ·-]{0,48}[\\u4e00-\\u9fa5a-zA-Z0-9]{1})?$";
*//**
 * 备注/跟进/点评信息：只能输入汉字、数字、字母、开头和结尾不能有空格/横杠/点(中文)但中间可以有空格/横杠/点(中文)(不包含全角数字和字母)(长度0-300位)(可以为空)
 *//*
//bug 15007 新增客源备注处，应该允许输入标点符号
var REGEX_TEXTAREA_INPUT_CANNULL = "";
//var REGEX_TEXTAREA_INPUT_CANNULL = "^$|^[\\u4e00-\\u9fa5a-zA-Z0-9]{1}(^$|[\\u4e00-\\u9fa5a-zA-Z0-9 ·-]{0,298}[\\u4e00-\\u9fa5a-zA-Z0-9]{1})?$";
*//**
 * 跟进/点评信息：只能输入汉字、数字、字母、开头和结尾不能有空格/横杠/点(中文)但中间可以有空格/横杠/点(中文)(不包含全角数字和字母)(长度0-300位)(不可以为空)
 *//*
var REGEX_TEXTAREA_INPUT_NOTNULL = "^\\S+$";
//var REGEX_TEXTAREA_INPUT_NOTNULL = "^[\\u4e00-\\u9fa5a-zA-Z0-9]{1}(^$|[\\u4e00-\\u9fa5a-zA-Z0-9 ·-]{0,298}[\\u4e00-\\u9fa5a-zA-Z0-9]{1})?$";

*//**
 * 正整数，不能为0
 *//*
var REGEX_NUMBER_NOT_ZREO = "^[1-9]\\d*$";
*//**
 * 正整数，可为0，可为空
 *//*
var REGEX_NUMBER_ZREO_NULL = "^$|^[0-9]\\d*$";
*//**
 * 正整数，不可为0，可为空
 *//*
var REGEX_NUMBER_NOTZREO_NULL = "^$|^[1-9]\\d*$";
*//**
 * 验证带有5个*的手机号（必填）
 * 需求406 songwenpan 2018年3月5日10:38:16 支持中国联通166号段
 *//*
var REFEX_PHONE_FIVE = "(^((\\+?86)|(\\+86))?(13[0-9]{9}|15[0-9]{9}|18[0-9]{9}|14[0-9]{9}|17[0-9]{9}|199[0-9]{8}|166[0-9]{8})$)|(^(\\d{3}\\*{5}\\d{0,5})$)";
*//**
 * 验证带有5个*的手机号（不必填）
 * 需求406 songwenpan 2018年3月5日10:38:16 支持中国联通166号段
 *//*
var REFEX_PHONE_FIVE_NULL = "(^((0\\d{2,4}-\\d{7,8}))|((\\+?86)|(\\+86))?(13[0-9]{9}|15[0-9]{9}|18[0-9]{9}|14[0-9]{9}|17[0-9]{9}|199[0-9]{8}|166[0-9]{8})$|^$)|(^(\\d{3}\\*{5}\\d{0,5})$)";
*//**
 * 验证不可输入空格和汉字(必填)
 *//*
var REDEX_NOT_SPACEANDCHINE = "^[^\\u4e00-\\u9fa5\\s]{1,30}$";
*//**
 * 验证不可输入空格和汉字(不必填)
 *//*
var REDEX_NOT_SPACEANDCHINE_NULL = "^[^\\u4e00-\\u9fa5\\s]{0,30}$";
*//**
 * 验只能输入汉字字母数字，20以内(必填)
 *//*
var REDEX_NAME_NOTNULL = "^[A-Za-z0-9\\u4e00-\\u9fa5\\.]{1,20}$";

*//**
 * 只能为1-9的数字
 *//*
var REDEX_ONETONINE_NOTNULL = "^[1-9]$";
*//**
 * 验只能输入汉字字母数字，30以内(必填)公司名称
 *//*
var REDEX_COMPANYNAME_NOTNULL = "^[A-Za-z0-9\\u4e00-\\u9fa5]{1,30}$";
*//**
 * 验只能输入汉字字母数字，10以内(必填)公司简称
 *//*
var REDEX_COMPANYNAMEJC_NOTNULL = "^[A-Za-z0-9\\u4e00-\\u9fa5]{1,10}$";
*//**
 * 水印字数限制1-6个(不必填)
 *//*
var REDEX_NOT_WATERMARK_NULL = "^$|^[A-Za-z0-9\\u4e00-\\u9fa5]{1,6}$";
*//**
 * 勘察图片大小0-5之间的整数
 *//*
var REDEX_FYKC_IMAGE_SIZE = "^[1-5]$";
*//**
 * 水印文字透明度0到1之间一位小数(不必填)
 *//*
var REDEX_NOT_WATERMARK_TM_NULL = "^$|^(0\\.([0-9]))$|^1$|^0$";
*//**
 * 100以内不包含0的数字
 *//*
var REDEX_PERFORMANCELEV = "^(([1-9]\\d?)|100)$";
*//**
 * 简历信息：验只能输入汉字字母数字，40以内(必填)
 *//*
var REGEX_RESUME_NOTNULL = "^"+COMMON_CHINESE_ENGLISH_NUM_FUHAO+"{1,40}$";
*//**
 * 简历工作经历的公司名称：4-40个字符，支持中英文、数字(必填)
 *//*
var REGEX_RESUME_WORK_NOTNULL = "^"+COMMON_CHINESE_ENGLISH_NUM_BASE+"{4,40}$";
*//**
 * 简历工作经历的职位：2-20个字符，支持中英文、数字(必填)
 *//*
var REGEX_RESUME_POSITION_NOTNULL = "^"+COMMON_CHINESE_ENGLISH_NUM_BASE+"{2,20}$";
*//**
 * 简历工作经历的的内容：10-300个字符，支持中英文、数字
 *//*
var REGEX_RESUME_WORKEXP_NOTNULL = "^"+COMMON_CHINESE_ENGLISH_NUM_FUHAO_HUANHANG+"{10,300}$";
*//**
 * 简历项目经验的的内容：10-200个字符，支持中英文、数
 *//*
var REGEX_RESUME_PROCONTENT_NOTNULL = "^"+COMMON_CHINESE_ENGLISH_NUM_FUHAO_HUANHANG+"{10,200}$";
*//**
 * 简历教育经历的学校名称：4-20个字符，支持中英文、数字及(必填)
 *//*
var REGEX_RESUME_EDUCATION_NOTNULL = "^"+COMMON_CHINESE_ENGLISH_NUM_BASE+"{4,20}$";
*//**
 * 简历培训经历的培训名称：2-15个字符，支持中英文、数字及(必填)
 *//*
var REGEX_RESUME_TRAIN_NOTNULL = "^"+COMMON_CHINESE_ENGLISH_NUM_BASE+"{2,15}$";
*//**
 * 简历其他资格证书的证书等级：2-10个字符，支持中英文、数字(必填)
 *//*
var REGEX_RESUME_OTHERTIF_NOTNULL = "^"+COMMON_CHINESE_ENGLISH_NUM_BASE+"{2,10}$";
*//**
 * 简历自我评价：10-150个字符，支持中英文、数字
 *//*
var REGEX_RESUME_EVALUATION = "^$|^"+COMMON_CHINESE_ENGLISH_NUM_FUHAO_HUANHANG+"{10,150}$";
*//**
 * 简历面试邀请的联系人：2-20个字符，支持中英文、数字(中文)(必填)
 *//*
var REGEX_RESUME_INVITE_NOTNULL = "^"+COMMON_CHINESE_ENGLISH_NUM_BASE+"{2,20}$";
*//**
 * 简历面试邀请的公司地址：5-32个字符，支持中英文、数字(必填)
 *//*
var REGEX_RESUME_COMPANY_NOTNULL = "^"+COMMON_CHINESE_ENGLISH_NUM_BASE+"{5,32}$";
*//**
 * 只能为0-9的数字(长度1-3位)
 *//*
var REDEX_AGE_NOTNULL = "^[0-9]{1,3}$";
*//**
 * 10-150汉字字母数字
 *//*
var RECRUITPLAN_CONTENT = "^[A-Za-z0-9\\u4e00-\\u9fa5\\.\\、]{10,150}$";

*//**
 * 只能输入10位数字，但第一位不能为0，不能为0，必填
 *//*
var REGEX_REQUIRE_INTEGER_TEN_DIGIT_NOTNULL = "^[1-9]{1}[0-9b]{0,9}$";
//房源房型(几室)
var REGEX_REQUIRE_INTEGER_TEN_DIGIT_NOTNULLByS = "^[0-9]{1}[b0-9B]{0,9}$";
///var REGEX_REQUIRE_INTEGER_TEN_DIGIT_NOTNULL = "(^0*)|([1-9]\\d*)|([b])";

*//**
 * 只能输入10位数字，可以输入0，但第一位不能为0，不必填
 *//*
//171 福州朝阳（需求）：房源新增/编辑页面的房型需要支持1b、2b这样的数据
var REGEX_REQUIRE_INTEGER_TEN_DIGIT_NULL = "^$|^0{1}$|^[0-9]{1}[0-9]{0,9}$";
//房源房型(几室)
var REGEX_REQUIRE_INTEGER_TEN_DIGIT_NULLByS = "^$|^0{1}$|^[0-9]{1}[b0-9B]{0,9}$";
//var REGEX_REQUIRE_INTEGER_TEN_DIGIT_NULL = "(^0*)|([1-9]\\d*)|([b])";
*//**
 * ##BUG 15751 江福林 2017/11/13 15:39 新增出售房源，几室几厅几卫几阳台需要可以输入0
 * 只能输入10位数字，可以输入0，必填
 *//*
var REGEX_REQUIRE_INTEGER_TEN = "^[0-9]{0,10}$";
*//**
 * ##BUG 15751 江福林 2017/11/13 15:39 新增出售房源，几室几厅几卫几阳台需要可以输入0
 * 只能输入10位数字，可以输入0，不必填
 *//*
var REGEX_REQUIRE_INTEGER_TEN_NULL = "^$|^[0-9]{0,10}$";
*//**
 * 输入0-300汉字数字字母
 *//*
var RECORD_SYSREMARK = "^$|^"+COMMON_CHINESE_ENGLISH_NUM_BASE+"{1,300}$";
*//**
 * 5-32个汉字数字字母
 *//*
var RECORD_ADDRESS = "^$|^[A-Za-z0-9\\u4e00-\\u9fa5]{5,32}$";
*//**
 * 微信（可为空）
 *//*
var RECORD_WEIXIN = "^$|^[a-zA-Z]{1}[-_a-zA-Z0-9]{5,19}$";
*//**
 * 微信（可为空）（人资中用）
 *//*
var RECORD_WEIXIN_RZ = "^$|^[a-zA-Z0-9]{2,20}$";

*//**
 * qq（可为空）
 *//*
var RECORD_QQ = "^$|^[1-9]\\d{4,14}$";
*//**
 * 验证汉字、数字、大小写字母，位数2-20位(员工履历联系人)
 *//*
var RECORD_NAME = "^[\\u4e00-\\u9fa50-9A-Za-z\\.]{2,20}$";
*//**
 * 验证汉字、数字、大小写字母，位数4-40（员工履历联系人）
 *//*
var RECORD_CONNECTPTM = "^[\\u4e00-\\u9fa50-9A-Za-z\\-\\_\\（\\）\\(\\)\\s*]{4,40}$";
*//**
 * 验证汉字、数字、大小写字母，位数4-40（员工履历联系人）(可为空)
 *//*
var RECORD_CONNECTPTM_NO = "^$|^[\\u4e00-\\u9fa50-9A-Za-z\\-\\_\\（\\）\\(\\)\\s*]{4,40}$";
*//**
 * 12-19位数字
 *//*
var RECORD_BANKNUM = "^\\d{12,19}$";
*//**
 * 房号：只能输入大小写英文、数字、汉字、横杠，不能为空，横杆不能在首尾
 *//*
var REGEX_HOUSENUM = "^(?!-)(?!.*?-$)[\\u4e00-\\u9fa50-9A-Za-z-]+$";
*//**
 * 7-9位数字
 *//*
var RECORD_SOCIALCOMPUTER = "^\\d{7,9}$";
*//**
 * 9-12位数字
 *//*
var RECORD_RESERVEDFUNDS = "^\\d{9,12}$";
*//**
 * BUG 15886 江福林 2017/11/09 17:44  合同编号限制条件 需要支持汉字
 * .合同编号限制条件，需要支持数字、字母英文大、小写和汉字、横杆 -（横杠不可以在首尾），至少4位，不可为空
 *//*
var REGEX_CONTRACTNO_NOTNULL = "^(?!-)(?!.*?-$)[\\u4e00-\\u9fa50-9A-Za-z-]+$";
*//**
 * BUG 15886 江福林 2017/11/09 17:44  合同编号限制条件 需要支持汉字
 * .合同编号限制条件，需要支持数字、字母英文大、小写和汉字、横杆 -（横杠不可以在首尾），至少4位，可为空
 *//*
var REGEX_CONTRACTNO_CANNULL = "^$|^(?!-)(?!.*?-$)[\\u4e00-\\u9fa50-9A-Za-z-]+$";
*//**
 * 验证汉字、数字、大小写字母，位数4-20（职训记录学校名称）
 *//*
var RECORD_SCHOOLNAME = "^[\\u4e00-\\u9fa50-9A-Za-z\\-\\_\\（\\）\\(\\)\\s*]{4,20}$";
*//**
 * 18位数字数字（职训记录学历编号）
 *//*
var RECORD_EDUCATIONNO = "^[A-Za-z0-9]{16,17}$";
*//**
 * 20汉字数字字母（离职原因）
 *//*
var RECORD_DIMISSIONIDSON= "^$|^[A-Za-z0-9\\u4e00-\\u9fa5]{0,20}$";
*//**
 * 验证汉字、数字、大小写字母，位数1-8位(微信一级菜单)
 *//*
var REGEX_WX_CLASSMENU = "^[\\u4e00-\\u9fa50-9A-Za-z]{1,8}$";
*//**
 * 验证数字、大小写字母(微信(1-40))
 *//*
var REGEX_WX = "^[A-Za-z0-9]{1,40}$";
*//**
 * 试题其他：位数1-200 支持中英文、数字(必填)
 *//*
var REGEX_TEXTAREA_QUESTION_NOTNULL = "^"+COMMON_CHINESE_ENGLISH_NUM_FUHAO_HUANHANG+"{1,200}$";
*//**
 * 试题标题和选项：位数1-30 支持中英文、数字(必填)
 *//*
var REGEX_TEXTAREA_TITLE_NOTNULL = "^"+COMMON_CHINESE_ENGLISH_NUM_FUHAO+"{1,30}$";
*//**
 * 试题解析：位数1-300 支持中英文、数字(不必填)
 *//*
var REGEX_TEXTAREA_ANALYSIS = "^$|^"+COMMON_CHINESE_ENGLISH_NUM_FUHAO_HUANHANG+"{1,300}$";
*//**
 * 试题答案：位数1-10 支持中英文、数字(必填)
 *//*
var REGEX_TEXTAREA_ANSWER_NOTNULL = "^"+COMMON_CHINESE_ENGLISH_NUM_FUHAO+"{1,10}$";
*//**
 * 合同工资：位数1-9验证正整数(不能以0开头)，可为空
 *//*
var REGEX_REQUIRY_CONTRACT_NUMBER_NULL = "^$|^[1-9]{1}[0-9]{0,8}$";
*//**
 * 课程学时：位数1-9验证正整数(不能以0开头)，不可为空
 *//*
var REGEX_COURSE_NUMBER_NOTNULL = "^[1-9]{1}[0-9]{0,8}$";
*//**
 * 课程名称：位数1-50支持中英文、数字(必填)
 *//*
var REGEX_COURSENAME_NOTNULL = "^"+COMMON_CHINESE_ENGLISH_NUM_BASE+"{1,50}$";
*//**
 * 公司/职位：位数1-15 支持中英文、数字(必填)
 *//*
var REGEX_COURSECOMPANY_NOTNULL = "^"+COMMON_CHINESE_ENGLISH_NUM_BASE+"{1,15}$";
*//**
 * 课程简介：位数30-500 支持中英文、数字(必填)
 *//*
var REGEX_COURSEBRIEF_NOTNULL = "^"+COMMON_CHINESE_ENGLISH_NUM_FUHAO_HUANHANG+"{30,500}$";
*//**
 * textarea 1-1000 支持中英文、数字(必填)可以空格
 *//*
var REGEX_TEXTAREA_NOTNULL = "^[\\u4e00-\\u9fa5a-zA-Z0-9 -_·，。、“”‘’；：【】《》（）——？~！￥……{}\n\t\r]{1,1000}$";
*//**
 * 课程考核占比：0-100的整数
 *//*
var REGEX_COURSE_ASSESSRATIO_NOTNULL = "^([1-9]{1}[0-9]{0,1}|0|100)$";
*//**
 * 课程作业分数：0-100的整数 可为空
 *//*
var REGEX_COURSE_TASKPOINT_CANNULL = "^$|^([1-9]{1}[0-9]{0,1}|0|100)$";

//**************房客源新增和编辑电话Start*****************
*//**
 * 验证电话（可填手机，必填）
 * BUG 17169 江福林 2018/01/05 11:35 房客源手机号需要做成支持13 位的，主要针对香港客户
 * 需求335 增加手机号为199开头的电话能保存，之前mfk3能保存，现在也要保存，确实存在199开头的手机号
 * 需求406 songwenpan 2018年3月5日10:38:16 支持中国联通166号段
 *//*
var REGEX_REQUIRY_ALLPHONE_NOTNULL = "^(((0\\d{2,5}|400|800)|(0\\d{2,5}|400|800)-)\\d{6,8})$|^((\\+?86)|(\\+86))?(13[0-9]{9}|15[0-9]{9}|18[0-9]{9}|14[0-9]{9}|17[0-9]{9}|199[0-9]{8}|166[0-9]{8}|[0-9]{13})$";

*//** 
 * 验证电话（可填手机，必填），只做位数限制
 * update by wzh 2018-5-14 14:24:04 bug#18523 佳诺（bug）：新增联系人电话164号段不支持
 *//*
var REGEX_REQUIRY_ALLPHONE_NOTNULL2 = "^(((0\\d{2,5}|400|800)|(0\\d{2,5}|400|800)-)\\d{6,8})$|^((\\+?86)|(\\+86))?(1[0-9]{10}|[0-9]{13})$";
*//**
 * 验证电话（可填手机，可为空）
 * BUG 17169 江福林 2018/01/05 11:35 房客源手机号需要做成支持13 位的，主要针对香港客户
 * 需求335 增加手机号为199开头的电话能保存，之前mfk3能保存，现在也要保存，确实存在199开头的手机号
 * 需求406 songwenpan 2018年3月5日10:38:16 支持中国联通166号段
 *//*
var REGEX_REQUIRY_ALLPHONE_CANNULL = "^$|^(((0\\d{2,5}|400|800)|(0\\d{2,5}|400|800)-)\\d{6,8})$|^((\\+?86)|(\\+86))?(1[0-9]{10}|[0-9]{13})$";

//var REGEX_REQUIRY_ALLPHONE_CANNULL = "^$|^(((0\\d{2,5}|400|800)|(0\\d{2,5}|400|800)-)\\d{6,8})$|^((\\+?86)|(\\+86))?(13[0-9]{9}|15[0-9]{9}|18[0-9]{9}|14[0-9]{9}|17[0-9]{9}|199[0-9]{8}|166[0-9]{8}|[0-9]{13})$";
*//**
 * 验证带有5个*的手机号（必填）
 * BUG 17169 江福林 2018/01/05 11:35 房客源手机号需要做成支持13 位的，主要针对香港客户
 * 需求335 增加手机号为199开头的电话能保存，之前mfk3能保存，现在也要保存，确实存在199开头的手机号
 * 需求406 songwenpan 2018年3月5日10:38:16 支持中国联通166号段
 *//*
var REFEX_PHONE_FIVE_NOTNULL = "^(((0\\d{2,5}|400|800)|(0\\d{2,5}|400|800)-)\\d{6,8})$|(^((\\+?86)|(\\+86))?(1[0-9]{10}|[0-9]{13})$)|(^(\\d{3}\\*{5}\\d{0,5})$)";
//var REFEX_PHONE_FIVE_NOTNULL = "^(((0\\d{2,5}|400|800)|(0\\d{2,5}|400|800)-)\\d{6,8})$|(^((\\+?86)|(\\+86))?(13[0-9]{9}|15[0-9]{9}|18[0-9]{9}|14[0-9]{9}|17[0-9]{9}||199[0-9]{8}|166[0-9]{8}|[0-9]{13})$)|(^(\\d{3}\\*{5}\\d{0,5})$)";
*//**
 * 验证带有5个*的手机号（不必填）
 * BUG 17169 江福林 2018/01/05 11:35 房客源手机号需要做成支持13 位的，主要针对香港客户
 * 需求335 增加手机号为199开头的电话能保存，之前mfk3能保存，现在也要保存，确实存在199开头的手机号
 * 需求406 songwenpan 2018年3月5日10:38:16 支持中国联通166号段
 *//*
var REFEX_PHONE_FIVE_CANNULL = "^$|^(((0\\d{2,5}|400|800)|(0\\d{2,5}|400|800)-)\\d{6,8})$|(^((\\+?86)|(\\+86))?(1[0-9]{10}|[0-9]{13})$)|(^(\\d{3}\\*{5}\\d{0,5})$)";
//var REFEX_PHONE_FIVE_CANNULL = "^$|^(((0\\d{2,5}|400|800)|(0\\d{2,5}|400|800)-)\\d{6,8})$|(^((\\+?86)|(\\+86))?(13[0-9]{9}|15[0-9]{9}|18[0-9]{9}|14[0-9]{9}|17[0-9]{9}|199[0-9]{8}|166[0-9]{8}|[0-9]{13})$)|(^(\\d{3}\\*{5}\\d{0,5})$)";
//**************房客源新增和编辑电话End*******************
*//**
 * 培训学分占比
 *//*
var REGEX_TRAIN_NUMBER_NOTNULL = "^(0|[1-9]{1}[0-9]{0,1}|100)$";

//**************积分系统Start*******************
*//**
 * 积分类型：2~8个字符，支持中英文、数字、符号
 *//*
var REGEX_INTEGRAL_CATEGORY_NOTNULL = "^"+COMMON_CHINESE_ENGLISH_NUM_FUHAO+"{2,8}$";
*//**
 * 积分名称：2~15个字符，支持中英文、数字、符号
 *//*
var REGEX_INTEGRAL_NAME_NOTNULL = "^"+COMMON_CHINESE_ENGLISH_NUM_FUHAO+"{2,15}$";
*//**
 * 验证正整数(不能以0开头)，不可为空
 *//*
var REGEX_REQUIRY_INTEGER_NUMBER_NOTNULL = "^[1-9]+[0-9]*$";
*//**
 * 验证非负整数，不可为空
 *//*
var REGEX_REQUIRY_INTEGER_NUMBER_TWO_NOTNULL = "^[0-9]+$";
*//**
 * 验证整数0-28，不可为空
 *//*
var REGEX_REQUIRY_NUMBER_ONE_NOTNULL = "^([0-9]|1[0-9]|2[0-8])$";
*//**
 * 验证整数0-30，不可为空
 *//*
var REGEX_REQUIRY_NUMBER_TWO_NOTNULL = "^([0-9]|[1-2][0-9]|30)$";
*//**
 * 验证整数0-31，不可为空
 *//*
var REGEX_REQUIRY_NUMBER_THREE_NOTNULL = "^([0-9]|[1-2][0-9]|3[0-1])$";
*//**
 * 验证非负整数，不可为空 1-5位
 *//*
var REGEX_REQUIRY_INTEGRAL_NUMBER_NOTNULL = "^([1-9]{1}\\d{0,4}|0)$";
*//**
 * 积分备注：1~50个字符，支持中英文、数字、符号
 *//*
var REGEX_INTEGRAL_REMARK_NOTNULL = "^"+COMMON_CHINESE_ENGLISH_NUM_FUHAO+"{1,50}$";
*//**
 * 积分备注：0~50个字符，支持中英文、数字、符号，允许为空
 *//*
var REGEX_INTEGRAL_REMARK_NULL = "^"+COMMON_CHINESE_ENGLISH_NUM_FUHAO+"{0,50}$";
*//**
 * 目录名称：2~10个字符，支持中英文、数字、符号
 *//*
var REGEX_CATEGORY_NAME_NOTNULL = "^"+COMMON_CHINESE_ENGLISH_NUM_FUHAO+"{2,10}$";
*//**
 * 事件名称：2~50个字符，支持中英文、数字、符号
 *//*
var REGEX_EVENT_NAME_NOTNULL = "^"+COMMON_CHINESE_ENGLISH_NUM_FUHAO+"{2,50}$";
*//**
 * 事件说明：不超过200个字符，支持中英文、数字、符号
 *//*
var REGEX_EVENTSTATE_NAME_NOTNULL = "^"+COMMON_CHINESE_ENGLISH_NUM_FUHAO+"{0,200}$";
//**************积分系统End*******************
*//**
 * 客源详情改版--客源楼层：1-2位正整数，或-1到-5的负整数，不能为0
 *//*
var REGEX_FLOOR_NOTZERO = "^-{1}[1-5]{1}$|^[1-9][0-9]?$";

*//**
 * 客源详情改版--客源楼层：1-2位正整数，或-1到-5的负整数，可为0
 *//*
var REGEX_FLOOR_ZERO = "^-{1}[1-5]{1}$|^[1-9][0-9]?$|^[0]{1}$|^$";

*//**
 * 客源详情改版--客源房型：数字1-9，可为空
 *//*
var REGEX_COUNTF_NULL = "^[1-9]$|^$";

*//**
 * 客源详情改版--客源房型：数字1-9，不可为空
 *//*
var REGEX_COUNTF_NOTNULL = "^[1-9]$";
*//**
 * 培训内容(职训)：位数5-150 支持中英文、数字(必填)
 *//*
var REGEX_TRAINCONTENT_ZX_NOTNULL = "^"+COMMON_CHINESE_ENGLISH_NUM_FUHAO_HUANHANG+"{5,150}$";
*//**
 * 评估题目：位数2-50支持中英文、数字(必填)
 *//*
var REGEX_EVALUATE_TOPIC_NOTNULL = "^"+COMMON_CHINESE_ENGLISH_NUM_BASE+"{2,50}$";
*//**
 * 评估选项：位数2-200支持中英文、数字(必填)
 *//*
var REGEX_EVALUATE_OPTION_NOTNULL = "^"+COMMON_CHINESE_ENGLISH_NUM_FUHAO+"{2,200}$";
*//**
 * 评估选项分值：1-100的整数 
 *//*
var REGEX_EVALUATE_OPTION_VALUE_NOTNULL = "^([1-9]{1}[0-9]{0,1}|100)$";
*//**
 * 职训记录的培训名称：2-15个字符，支持中英文、数字(必填)
 *//*
var REGEX_TRAINNAME_ZX_NOTNULL = "^"+COMMON_CHINESE_ENGLISH_NUM_FUHAO+"{2,15}$";*/

