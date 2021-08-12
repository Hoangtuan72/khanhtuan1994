
$(function () {
  $('#infor-button').hover(function () {
      $('.information').css('display', 'block');
      $('.hobbies').css('display', 'none');
      $('.job').css('display', 'none');
      $('.intro').css('display', 'none');

  });
})
$(function () {
  $('#hobbies-button').hover(function () {
      $('.information').css('display', 'none');
      $('.hobbies').css('display', 'block');
      $('.job').css('display', 'none');
      $('.intro').css('display', 'none');

  });
})
$(function () {
  $('#job-button').hover(function () {
      $('.information').css('display', 'none');
      $('.hobbies').css('display', 'none');
      $('.job').css('display', 'block');
      $('.intro').css('display', 'none');

  });
})
$(function () {
  $('#image').hover(function () {
      $('.information').css('display', 'none');
      $('.hobbies').css('display', 'none');
      $('.job').css('display', 'none');
      $('.intro').css('display', 'block');

  });
})