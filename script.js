const suggestions = {
    'Nova Iorque': 'novairq.html',
    'São José de Ribamar': 'sjr.html',
    'Carolina': 'carolina.html'
  };
  
  function handleSelection() {
    const input = document.getElementById('search-bar').value;
    if (suggestions[input]) {
      window.location.href = suggestions[input];
    }
  }
  