$(document).ready(()=>{
  var head1 =$('#header1');
  var head2 =$('#header2');

  t1 = new TimelineLite();
  t2 = new TimelineLite();

  t1.from(head1, 1, {
    autoAlpha: 0,
     y: -20,
    ease:Power1.easeNone,
  })
  .to(head1, 4, {
    y: 0,
  })
  .to(head1, 1, {
    autoAlpha: 0,
     y: 40,
    ease:Power1.easeNone,
    onComplete: runComplete
  })

  function runRepeat(){
    TweenLite.set(head1, {autoAlpha: 1})
    t1.from(head1, 1, {
      autoAlpha: 0,
       y: -20,
      ease:Power1.easeNone,
    })
    .to(head1, 6, {

    })
    .to(head1, 1, {
      autoAlpha: 0,
       y: 40,
      ease:Power1.easeNone,
      onComplete: runComplete
    })
  }
  function runComplete() {
    TweenLite.set(head2, {opacity: 1})
    t2.from(head2, 1, {
      autoAlpha: 0,
       y: -30,
      ease:Power1.easeNone,
    })
    .to(head2, 6, {
    })
    .to(head2, 1, {
      autoAlpha: 0,
       y: 20,
      ease:Power1.easeNone,
      onComplete: runRepeat
    })
  }
})
