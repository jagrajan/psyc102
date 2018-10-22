import $ from 'jquery';

$(document).ready(() => {
  $( "h2" ).each(function( index ) {

    const id = `section-${index}`;
    $( this ).attr( 'id' , id );
  });
  console.log('Hello jQuery!');
});

