  let currentObj = 'color';

  $( function() {
    $( "input" ).checkboxradio({
      icon: false,
    });
  } );

  $('input[name="radio-item"]').click(function(){
    currentObj = (this.id==='radio-1') ? 'color' : 'background-color';
    const rgbArr = ($( ".text" ).css(currentObj)).split(', ');
    const red = rgbArr[0].slice(4);
    const green = rgbArr[1];
    const blue = rgbArr[2].slice(0, -1);
    $( "#slider-red" ).slider( "value", +red);
    $( "#slider-green" ).slider( "value", +green);
    $( "#slider-blue" ).slider( "value", +blue);
  });

  $( "#slider-red, #slider-green, #slider-blue" ).slider({
    orientation: "horizontal",
    range: "min",
    max: 255,
    value: 0,
    slide: changeColor,
    change: changeColor
  });

  function changeColor() {
    const red = $( "#slider-red" ).slider( "value" );
    const green = $( "#slider-green" ).slider( "value" );
    const blue = $( "#slider-blue" ).slider( "value" );
    $( ".text" ).css( currentObj, `rgb(${red},${green},${blue})` );
  }

