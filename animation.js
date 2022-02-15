var rapid_change = {

    get_random_int : function(max) {
        return Math.floor(Math.random() * max);
      },

    number_scaling : function(selector, speed ,target_num) {

        $({ val : 0}).animate({ val : target_num}, {
            duration: speed,
            easing: "swing",
            step: function() {
                var num = Math.floor(this.val).toString();
                $(selector).text(num);
            },
            complete: function() {
                var num = Math.floor(this.val).toString();
                $(selector).text(num);
            }
        });
    },

    color_change : function(selector) {
            $(selector).attr('stroke', 'white');
    }
}

//히웅's 코드 - 이해 완료
function lotto_result (result) {
    if (! result) {
        var result = [];
    }

    let n = Math.floor(Math.random() * 99);

    if (result.length < 5 && result.indexOf(n) < 0) { //리스트에 다섯 개가 차거나, 랜덤으로 새로 추출된 값이 이미 있는게 아니면 추가
        result.push(n);
        return lotto_result(result);
    }
    else if(result.length>4) {
        return result;
    }
    else
        return lotto_result(result);
}


