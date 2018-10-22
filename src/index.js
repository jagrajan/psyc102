import $ from 'jquery';

$(document).ready(() => {
  $( "h2" ).each(function( index ) {

    const id = `section-${index}`;
    $( this ).attr( 'id' , id );

    const elm = `<li><a href="#${id}">${$(this).text()}</a></li>`;
    const section_list = $( '.section-list' );
    section_list.append( elm );

    let toc = `<ul class="subsection-list">`;

    $( this ).next().find('h3.subsection').each(function ( i ) {
      const sub_id = `${id}-sub-${i}`;
      $( this ).attr( 'id', sub_id );
      const sub_elm = `<li><a href="#${sub_id}">${$(this).text()}</a></li>`;
      toc = toc + sub_elm;
    });

    toc = toc + '</ul>';
    section_list.append( toc );
  });

  $('a[href^="#"]').click(function () {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500);
    return false;
  });
});

