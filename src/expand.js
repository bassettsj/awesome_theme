module.exports = function($){
  return $('[data-toggle="expand"]').on('click', function(){
    var $this  = $(this),
    $target = $($this.data('target'));
    if( $target.hasClass('in') ){
      $target.removeClass('in')
    }else{
      $('.expand.in').removeClass('in');
      $this.addClass('in');
    }
  });
}
