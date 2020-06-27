(function() {
  'use strict';

  var section = document.querySelectorAll(".section");
  var sectiontop = {};
  

  Array.prototype.forEach.call(section, function(e) {
    sectiontop[e.id] = e.offsetTop;
  }); 
  window.onscroll = function() {
    const viewScrollTop = document.documentElement.scrollTop||document.body.scrollTop;   
    for (let id in sectiontop) {
      if (sectiontop[id] < viewScrollTop+1) {
        document.querySelector('.active').setAttribute('class', 'menu-item');
        document.querySelector('a[href*=' + id + ']').setAttribute('class', 'menu-item active');
      }
      
    }
  };
})();
