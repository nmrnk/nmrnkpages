$(function () {
  $('.tab > div:not(' + $('a.selected').attr('href') + ')').hide();

  $('#tabPages a').click(function () {
    $('#tabPages a').removeClass('selected');
    $(this).addClass('selected');
    $('.work_page').hide();
    $($(this).attr('href')).show();
    return false;

    // const selectedWork = $(this).data('image');
    // if ($('.work_icon_img').hasClass('selectedWork')) {
    //   this.addClass('scale');
    // }
  });

  // twenty
  $('#twenty').click(function () {
    $('.twentyImg').twentytwenty();
  });

  // modal
  $('.modal-open').each(function () {
    $(this).click(function () {
      const target = $(this).attr('href');
      console.log(target);
      const modal = document.getElementById(target);
      $(modal).fadeIn();
      return false;
    });
    $('.js-modal-close, .modal_bg').click(function () {
      $('.js-modal').fadeOut();
      return false;
    });
  });

  $('#aa').click(function () {
    alert('re');
  });
});
