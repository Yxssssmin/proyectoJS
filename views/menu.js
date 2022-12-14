export { MenuTemplate };

function MenuTemplate() {
  let menuTemplate = document.createElement('div');
  menuTemplate.id = 'menu';
  menuTemplate.classList.add('container');
  menuTemplate.innerHTML = `


  `;

  return menuTemplate;
}
