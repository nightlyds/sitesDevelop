function pasteAgree2() {
   $('#modal').modal('close')
};

// function checkRadio() {
//
//   if(document.getElementById('test1').checked) {
//     pasteAgree();
//   }
//   else if (document.getElementById('test2').checked) {
//     pasteDisagree();
//   }
//   else {
//     alert("Вы не сделали выбор");
//   }
// }
//
// function checkRadio2() {
//   if(document.getElementById('test3').checked) {
//     pasteAgree2();
//   }
//   else if (document.getElementById('test4').cheked) {
//     pasteAgree2();
//   }
// }
var contentWrapper = document.querySelector('.modal-contentt');
var hiddenAgree = document.getElementById('hiddenAgree');
function pasteAgree() {
  contentWrapper.classList.add('fade');
  setTimeout(function() {
    contentWrapper.innerHTML = "";
    contentWrapper.appendChild(hiddenAgree);
    contentWrapper.classList.remove('fade');
  },(1000*1));
};
function pasteDisagree() {
  contentWrapper.classList.add('fade');
  setTimeout(function() {
    contentWrapper.innerHTML = "";
    contentWrapper.appendChild(hiddenDisagree);
    contentWrapper.classList.remove('fade');
  },(1000*1));
}

function pastePreAgree() {
  var preAgreeWrap = document.getElementById('modal-step2');
  contentWrapper.classList.add('fade');
  setTimeout(function() {
    contentWrapper.innerHTML = "";
    contentWrapper.appendChild(preAgreeWrap);
    contentWrapper.classList.remove('fade');
  },(1000*1));
};


$(document).ready(function() {

	//E-mail Ajax Send
	$("ask").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Сообщение отправлено!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});

//
// function startTimer() {
//   var my_timer = document.getElementById("my_timer");
//   var time = my_timer.innerHTML;
//   var arr = time.split(":");
//   var h = arr[0];
//   var m = arr[1];
//   var s = arr[2];
//   if (s == 0) {
//     if (m == 0) {
//       if (h == 0) {
//         alert("Время вышло");
//         window.location.reload();
//         return;
//       }
//       h--;
//       m = 60;
//       if (h < 10) h = "0" + h;
//     }
//     m--;
//     if (m < 10) m = "0" + m;
//     s = 59;
//   }
//   else s--;
//   if (s < 10) s = "0" + s;
//   document.getElementById("my_timer").innerHTML = h+":"+m+":"+s;
//   setTimeout(startTimer, 1000);
// }
function checkParams() {
    var con = document.getElementById('email').value;
    var conLenght = con.length;
    if( con == '@' || conLenght >= 7) {
      $('#submit').removeAttr('disabled');
  } else {
      $('#submit').attr('disabled', 'disabled');
  }
}

function two(a) {
    return (9 < a ? "" : "0") + a
}
function formatTime(a) {
    a = Math.floor(a / 1E3);
    var c = Math.floor(a / 60),
        d = Math.floor(c / 60);
        t = Math.floor(d / 24);
    a %= 60;
    c %= 60;
    d %= 24;
    return two(t) + " : " + two(d) + " : " + two(c) + " : " + two(a)
}
function Time() {
    var a = new Date, c = [26], d = [], e = a.getDate() + 1, b = 0, m = -300 - a.getTimezoneOffset();
    for (; b < c.length; b++)
    a.setHours(c[b], m, 0, 0),
    3 == b && a.setDate(e),
    d[b] = a.getTime();
    for (b = 0; b < c.length && !(a = d[b] - (new Date).getTime(), 0 < a); b++);
    document.getElementById("show").innerHTML =   formatTime(a);
    window.setTimeout(Time, 1E3)
};
Time()

//
// // Set the date we're counting down to
// var countDownDate = new Date("Dec 23, 2017 19:00:00").getTime();
//
// // Update the count down every 1 second
// var x = setInterval(function() {
//
//   // Get todays date and time
//   var now = new Date().getTime();
//
//   // Find the distance between now an the count down date
//   var distance = countDownDate - now;
//
//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
//
//   // Display the result in the element with id="demo"
//   document.getElementById("demo").innerHTML = days + " : " + hours + " : "
//   + minutes + " : " + second;
//
//   // If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);
