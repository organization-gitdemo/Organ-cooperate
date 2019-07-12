
/**********************************************表单提交验证开始************************************/
var isSubmit = false;
$(".wsxForm").Validform({
    btnSubmit: '#submitInput', //触发提交的元素
    btnReset: "#btn_reset", //触发重置表单的元素
    // tiptype: 1, //弹出框提示默认为1，可选值为1,2,3和function函数
    tiptype: function (msg, o, cssctl) {
        if (o.type == 3) {
            layer.tips(msg, o.obj);
        }
    },
    ignoreHidden: false, //默认为false，布尔值类型，对hidden的表单元素将不做验证
    dragonfly: false, //默认为false,布尔值类型，值为空时不做验证
    tipSweep: true, //默认false，布尔值类型，各表单元素只会在表单提交时进行触发，表单元素在blur时不会进行触发
    label: ".label", //在没有绑定nullmsg时查找要显示的提示文字，默认查找“.Validform_label”下的文字
    showAllError: false, //默认false，布尔值类型，提交表单时所有错误信息都会显示，一般验证不通过的对象时就会停止，不会进行下一表单的验证，只显示该元素的错误信息
    postonce: true, //默认false，指定是否开启二次提交防御，在数据成功提交后，表单将不能再继续提交。
    ajaxPost: true, //默认false，使用ajax方法进行表单提交方式，将会将数据POST到config方法或表单属性里的action属性设定的地址。
    datatype: {
        "*6-20": /^[^\s]{6,20}$/,
        "z2-4": /^[\u4E00-\u9FA5\uf900-\ufa2d]{2,4}$/,
        "password":/^(\w){6,12}$/,
        // 身份证号
        "card":function (gets) {
            var r = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
            if(r.test(gets)){
                return true;
            }else{
                return "请填写正确的身份证号";
            }
        },
        //电话
        "telphone":function (gets) {
            if(REGEX_WORK_PHONE.test(gets)){
                return true;
            }else{
                return "请填写正确的电话"
            }
        },
        "username": function (gets, obj, curform, regxp) {
            //参数gets是获取到的表单元素值，obj为当前表单元素，curform为当前验证的表单，regxp为内置的一些正则表达式的引用;
            var reg1 = /^[\w\.]{4,16}$/,
                reg2 = /^[\u4E00-\u9FA5\uf900-\ufa2d]{2,8}$/;

            if (reg1.test(gets)) {
                return true;
            }
            if (reg2.test(gets)) {
                return true;
            }
            return false;

            //注意return可以返回true 或 false 或 字符串文字，true表示验证通过，返回字符串表示验证失败，字符串作为错误提示显示，返回false则用errmsg或默认的错误提示;
        },
        "phone": function () {
            // 5.0 版本之后，要实现二选一的验证效果，datatype 的名称 不 需要以 "option_" 开头;
        }
    },
    usePlugin: {
        swfupload: {},
        datepicker: {},
        passwordstrength: {},
        jqtransform: {
            selector: "select,input"
        }
    },
    beforeCheck: function (curform) {
        console.log(curform)
        //在表单提交执行验证之前执行的函数，curform参数是当前表单对象。
        //这里明确return false的话将不会继续执行验证操作;
    },
    beforeSubmit: function (curform) {
        console.log(curform)
        if (isSubmit) {
            return false;
        }
        isSubmit = true;
        return true;
        //在验证成功后，表单提交前执行的函数，curform参数是当前表单对象。
        //这里明确return false的话表单将不会提交;
    },
    callback: function (data) {
//                if (data.success) {
//                    layer.msg("提交成功", function () {
////                    window.open("http://www.baidu.com")
//                    })
//                    isSubmit = false;
//                } else {
        if(data.id){
            $("#p_id").val(data.id);
        }
        layer.msg(data.msg);
        console.log(data)
        //当你在iframe页面关闭自身时
        var index = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
        if(index){ // 判断是否是弹出层 如果是 为了防止重复提交3秒之后才可进行提交
            setTimeout(function () {
                parent.layer.close(index); //为了显示提示信息3秒再执行关闭
                isSubmit = false;
            },3000)

        }else{
            refresh();
            isSubmit = false;
        }
//                }
//         console.log(data)

        //返回数据data是json对象，{"info":"demo info","status":"y"}
        //info: 输出提示信息;
        //status: 返回提交数据的状态,是否提交成功。如可以用"y"表示提交成功，"n"表示提交失败，在ajax_post.php文件返回数据里自定字符，主要用在callback函数里根据该值执行相应的回调操作;
        //你也可以在ajax_post.php文件返回更多信息在这里获取，进行相应操作；
        //ajax遇到服务端错误时也会执行回调，这时的data是{ status:**, statusText:**, readyState:**, responseText:** }；

        //这里执行回调操作;
        //注意：如果不是ajax方式提交表单，传入callback，这时data参数是当前表单对象，回调函数会在表单验证全部通过后执行，然后判断是否提交表单，如果callback里明确return false，则表单不会提交，如果return true或没有return，则会提交表单。
    }
});

/**********************************************表单提交验证结束************************************/


// 保存之后刷新页面
function refresh() {
    $("#fill_Process li").each(function () {
        if($(this).hasClass("active")){
            $(this).click();
            return false;
        }
    })
}