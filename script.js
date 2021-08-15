$(document).ready(function () { //add A page can't be manipulated safely until the document is "ready." jQuery detects this state of readiness for you.
  $(function () {
    $('#infor-button').hover(function () {
      $('.information').css('display', 'block');
      $('.hobbies').css('display', 'none');
      $('.job').css('display', 'none');
      $('.intro').css('display', 'none');

    });

    $('#hobbies-button').hover(function () {
      $('.information').css('display', 'none');
      $('.hobbies').css('display', 'block');
      $('.job').css('display', 'none');
      $('.intro').css('display', 'none');

    });

    $('#job-button').hover(function () {
      $('.information').css('display', 'none');
      $('.hobbies').css('display', 'none');
      $('.job').css('display', 'block');
      $('.intro').css('display', 'none');

    });

    $('#image').hover(function () {
      $('.information').css('display', 'none');
      $('.hobbies').css('display', 'none');
      $('.job').css('display', 'none');
      $('.intro').css('display', 'block');

    });
  });
});
