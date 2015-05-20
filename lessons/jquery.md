# jQuery stuff to know

Here's the shtuffs you should (eventually) know about jQuery!!

## Document ready

What does this do?

    $(function () {
      // Code 'n stuff goes here
    });

## Selecting elements

What do these do?

- $('.menu-container')
- $(':input')
- $('li').first()
- $('li').last()
- $('ul').children()
- $('.menu-action').closest('.menu-container')
- $('textarea[maxlength]').next('.char-count')
- $('.selected-item').prev()
- $('.current-tab').siblings()

To find out, go here:

- http://api.jquery.com/first/
- http://api.jquery.com/last/
- http://api.jquery.com/children/
- http://api.jquery.com/closest/
- http://api.jquery.com/next/
- http://api.jquery.com/prev/
- http://api.jquery.com/jquery/#jQuery-selector-context


## Manipulation

Basic content manipulation:

    $('.user-list').html('<li>Joe Shmo</li>');
    $('.primary-action').text('Click me!');

Class manipulation:

    $('.tab').removeClass('selected-tab');
    $('.tab').addClass('selected-tab');
    $('.tab').hasClass('selected-tab');
    $('.menu').toggleClass('.menu-visible');

Attribute manipulation:

    $('button').attr('disabled');
    $('button').attr('disbled', 'disabled');
    $('button').removeAttr('disabled');

Advanced content manipulation:

    $('input[required]').after('<span class="required-label">*</span>');
    $('.user-list').append('<li>Jane Doe</li>');
    $('<li>Jane Doe</li>').appendTo('.user-list');
    $('.user-list').prepend('<li>Jane Doe</li>');
    $('<li>Jane Doe</li>').prependTo('.user-list');
    $('.user-list').before('<h2>User List:</h2>');
    $('<button>Are you sure?</button>').insertAfter('.delete-action');
    $('<button>Are you sure?</button>').insertBefore('.delete-action');
    $('.main-panel').replaceWith('<div>Main panel is gone!!</div>');
    $('.item').wrap('<div class="container"></div>');
    $('.item').unwrap();
    $('.user-list').clone();
    $('.current-item').remove();

See here for more detail:

- http://api.jquery.com/category/manipulation/

## Interactive element shtuffs

    $('input[name=firstName]').val();
    $('input').focus();
    $('input').select();
    $('form').submit();

## Element positioning/sizing

    $('button').height();
    $('button').outerHeight();
    $('div').width();
    $('div').outerWidth();
    $('.item').offset().top;
    $('.item').position().top;
    $('.item').offset().left;
    $('.item').position().left;

## Events

- click
- dblclick
- focus
- blur
- change
- hover
- keydown
- keypress
- keyup
- mousedown
- mouseup
- mousemove
- mouseenter
- mouseleave
- select
- submit

What does this do?

    $('button').click(function () {
      alert($(this).text());
    });

What does this do?

    $('.container').on('click', 'button', function () {
      alert($(this).text()); // what is $(this) ?
    });

What does this do?

    function myFunc() {
      alert($(this).text());
    }

    $('.container').off('click', 'button', myFunc);

## Style-related functions

Generally, this sort of thing should be done in CSS, and jQuery
should only be used to add/remove CSS classes. However, sometimes
it's just nice to do this quick-and-dirty stuff:

Note, that using these methods generally produces a slower site than
using CSS to do the same things. CSS takes advantage of hardware
acceleration.

    $('.modal').fadeIn()
    $('.modal').fadeOut()
    $('.stuff').show();
    $('button').hide();


## Selector context

Given this HTML:

    <div class="menu-container">
      <button class="menu-action">Menu 1</button>
      <ul class="menu-content">
        <li>Menu item 1</li>
        <li>Menu item 2</li>
      </ul>
    </div>
    <div class="menu-container">
      <button class="menu-action">Menu 2</button>
      <ul class="menu-content">
        <li>Menu item 3</li>
        <li>Menu item 4</li>
      </ul>
    </div>

What might this code be doing?

    $('.menu-action').click(function () {
      // http://api.jquery.com/closest/
      var container = $(this).closest('.menu-container');

      // http://api.jquery.com/jquery/#jQuery-selector-context
      var content = $('.menu-content', container);

      // http://api.jquery.com/toggleclass/
      content.toggleClass('content-visible');
    });
