(function () {
   
    calc.onclick = function() {
        var myform = this.form,
                        sum = 0
            if (myform.name.value == '1') {
                sum++;
                $("#res1").addClass("check");
            } else  {
                $("#res1").addClass("cross");
            };
            if (myform.name1.value == '1') {
                sum++;
                $("#res2").addClass("check");
            } else  {
                $("#res2").addClass("cross");
            }
            if(myform.name2.value == '1') {
                sum++;
                $("#res3").addClass("check");
            } else  {
                $("#res3").addClass("cross");
            }
            if(myform.name3.value == '1') {
                sum++;
                $("#res4").addClass("check");
            } else {
                $("#res4").addClass("cross");
            }
            if (myform.name4.value == '1') {
                sum++;
                $("#res5").addClass("check");
            } else {
                $("#res5").addClass("cross");
            }

            if ((sum / 5) > 0.9)  {
                $(".test_block span").text("Оценка: 5");
            } else if ((sum / 5) > 0.75 && (sum / 5) < 0.9) {
                $(".test_block span").text("Оценка: 4");
            } else if ((sum / 5) > 0.5 &&  (sum / 5) < 0.75  && (sum / 5) < 0.9) {
                $(".test_block span").text("Оценка: 3");
            } else   {
                console.log("sdsd");
                $(".test_block span").text("Оценка: 2");
            }
            
        }
    })();
