
function toggleText(card) {
  const defaultText = card.querySelector('.default-text');
  const hiddenText = card.querySelector('.hidden-text');

  if (defaultText.style.display !== 'none') {
    defaultText.style.display = 'none';
    hiddenText.style.display = 'block';
  } else {
    defaultText.style.display = 'block';
    hiddenText.style.display = 'none';
  }
}