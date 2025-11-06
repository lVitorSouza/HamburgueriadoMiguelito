function welcomeChaos() {
    alert('Bem-vindo à Horrível Hambúrgueria! Aperte OK para continuar (não faça isso).');
    document.getElementById('popup').style.display = 'block';
   
    setInterval(() => {
      document.title = document.title === 'Horrível Hambúrgueria'
        ? '!! COMPRE AGORA !!'
        : 'Horrível Hambúrgueria';
    }, 700);
   
    setInterval(() => {
      let elems = document.querySelectorAll('button, h1, h2, .rotating');
      elems.forEach(e => {
        e.style.transform = `translate(${Math.random() * 40 - 20}px, ${Math.random() * 20 - 10}px) rotate(${Math.random() * 8 - 4}deg)`;
        e.style.fontSize = `${14 + Math.random() * 40}px`;
      });
    }, 1500);
  }
   
  function surprise() {
    alert('Você pediu um hambúrguer... mas vai ganhar um som de verão!');
    window.open('https://youtu.be/U5TJPXVWYYQ?si=Mzj5GNxDPUF4NJA8', '_blank');
  }
   
  function order(item) {
    alert('Pedido recebido: ' + item + '. Entraremos em contato em uma outra dimensão.');
  }
   
  function toggleShiny() {
    document.body.style.background =
      document.body.style.background
        ? ''
        : 'repeating-linear-gradient(45deg, yellow, orange 30px)';
    window.open('https://www.youtube.com/watch?v=F0mB1U5O5bA', '_blank');
  }
   
  (function annoy() {
    setTimeout(() => {
      var s = document.createElement('span');
      s.innerText = '🍔';
      s.style.position = 'fixed';
      s.style.left = (Math.random() * 90) + '%';
      s.style.top = (Math.random() * 90) + '%';
      s.style.fontSize = '40px';
      document.body.appendChild(s);
      setTimeout(() => s.remove(), 4000);
      annoy();
    }, 800);
  })();
   