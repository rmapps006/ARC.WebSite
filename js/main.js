// Abdul Rashid Copperware — shared site behavior

(function(){
  var menuBtn = document.querySelector('[data-menu-open]');
  var menuClose = document.querySelector('[data-menu-close]');
  var menu = document.querySelector('[data-mobile-menu]');

  if (menuBtn && menu) {
    menuBtn.addEventListener('click', function(){ menu.classList.add('open'); });
  }
  if (menuClose && menu) {
    menuClose.addEventListener('click', function(){ menu.classList.remove('open'); });
  }
  if (menu) {
    menu.querySelectorAll('a').forEach(function(link){
      link.addEventListener('click', function(){ menu.classList.remove('open'); });
    });
  }
})();

// Custom order form -> builds a WhatsApp deep link from the fields
(function(){
  var form = document.querySelector('[data-custom-order-form]');
  if (!form) return;
  var WHATSAPP_NUMBER = '923004106558';

  form.addEventListener('submit', function(e){
    e.preventDefault();
    var name = form.querySelector('[name="name"]').value.trim();
    var type = form.querySelector('[name="type"]').value;
    var detail = form.querySelector('[name="detail"]').value.trim();

    var message = 'Assalam-o-Alaikum Abdul Rashid Copperware,\n\n' +
      'I would like to request a custom order.\n\n' +
      'Name: ' + (name || '—') + '\n' +
      'Type: ' + type + '\n' +
      'Details: ' + (detail || '—');

    var url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message);
    window.open(url, '_blank', 'noopener');
  });
})();
