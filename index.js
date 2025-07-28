const anim = anime.timeline();

anim
  .add({
    targets: '#hexagon path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutQuart',
    duration: 2000,
    delay: function(el, i) { return i * 250 },
  })
  .add({
    targets: '#hexagon #JB',
    duration: 1000,
    opacity: 1,
    easing: 'easeInOutQuart'
  });
