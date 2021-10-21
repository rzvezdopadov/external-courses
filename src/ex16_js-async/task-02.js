window.onload = () => {
  const inputDebouncesFunc = () => {
    let flagEnable = false;

    return function fIn() {
      if (flagEnable) return;

      flagEnable = true;

      setTimeout(() => {
        flagEnable = false;

        document.getElementById('spanDebounces').innerHTML = document.getElementById('inputDebounces').value;
      }, 2000);
    };
  };

  document.getElementById('inputDebounces').addEventListener('input', inputDebouncesFunc());

  document.getElementById('inputRegular').addEventListener('input', () => {
    document.getElementById('spanRegular').innerHTML = document.getElementById('inputRegular').value;
  });
};
