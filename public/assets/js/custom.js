$(".option input").on("change", function () {
  const $step = $(this).closest("fieldset"); // Find the parent step

  // Remove the "checked" class only within the current step
  $step.find(".option").removeClass("checked");

  if ($(this).is(":checked")) {
    $(this).parent().parent().addClass("checked"); // Add the class to the selected option
  }
});

// next prev
var divs = $(".show-section fieldset");
var Buttons = $(".nextPrev");
var now = 0; // currently shown div
divs.hide().first().show(); // hide all divs except first
Buttons.hide().first().show();

function next() {
  divs.eq(now).hide();
  now = now + 1 < divs.length ? now + 1 : 0;
  divs.eq(now).show(); // show next
  console.log(now);

  $(".stepBar .fill").css("width", now * 25 + "%");

  Buttons.hide().eq(now).show();
}
$(".prev").on("click", function () {
  divs.eq(now).hide();
  now = now > 0 ? now - 1 : divs.length - 1;
  divs.eq(now).show(); // show previous
  console.log(now);

  Buttons.hide().eq(now).show();
  $(".stepBar .fill").css("width", now * 25 + "%");

  $(".optionInner").addClass("animate");
  $(".optionInner").removeClass("animateReverse");
});

// quiz validation
var checkedradio = false;

function radiovalidate(stepnumber) {
  var checkradio = $("#step" + stepnumber + " input")
    .map(function () {
      if ($(this).is(":checked")) {
        return true;
      } else {
        return false;
      }
    })
    .get();

  checkedradio = checkradio.some(Boolean);
}

$(document).ready(function () {
  $(".stepBar .fill").css("width", "0");

  // check step1
  $("#step1btn").on("click", function () {
    radiovalidate(1);

    if (checkedradio == false) {
      (function (el) {
        setTimeout(function () {
          el.children().remove(".reveal");
        }, 3000);
      })(
        $("#error").append(
          '<div class="reveal alert alert-danger">Choose an option!</div>'
        )
      );

      radiovalidate(1);
    } else {
      $("#step1 .optionInner").removeClass("animate");
      $("#step1 .optionInner").addClass("animateReverse");
      setTimeout(function () {
        next();
      }, 900);
      // countresult(1);
    }
  });
  // check step2
  $("#step2btn").on("click", function () {
    radiovalidate(2);

    if (checkedradio == false) {
      (function (el) {
        setTimeout(function () {
          el.children().remove(".reveal");
        }, 3000);
      })(
        $("#error").append(
          '<div class="reveal alert alert-danger">Choose an option!</div>'
        )
      );

      radiovalidate(2);
    } else {
      $("#step2 .optionInner").removeClass("animate");
      $("#step2 .optionInner").addClass("animateReverse");
      setTimeout(function () {
        next();
      }, 900);
      // countresult(1);
    }
  });
  // check step3
  $("#step3btn").on("click", function () {
    radiovalidate(3);

    if (checkedradio == false) {
      (function (el) {
        setTimeout(function () {
          el.children().remove(".reveal");
        }, 3000);
      })(
        $("#error").append(
          '<div class="reveal alert alert-danger">Choose an option!</div>'
        )
      );

      radiovalidate(3);
    } else {
      $("#step3 .optionInner").removeClass("animate");
      $("#step3 .optionInner").addClass("animateReverse");
      setTimeout(function () {
        next();
      }, 900);
      // countresult(1);
    }
  });
  // check step4
  $("#sub").on("click", function () {
    radiovalidate(4);

    if (checkedradio == false) {
      (function (el) {
        setTimeout(function () {
          el.children().remove(".reveal");
        }, 3000);
      })(
        $("#error").append(
          '<div class="reveal alert alert-danger">Choose an option!</div>'
        )
      );

      radiovalidate(4);
    } else {
      showresult();
    }
  });
});
