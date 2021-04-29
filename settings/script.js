/* grab sliders on page */
const sliders = document.querySelectorAll('input[type="range"]')

/* take a slider element, return a percentage string for use in CSS */
const rangeToPercent = slider => {
  const max = slider.getAttribute('max') || 10;
  const percent = slider.value / max * 100;

  return `${parseInt(percent)}%`;
};

/* on page load, set the fill amount */
sliders.forEach(slider => {
  slider.style.setProperty('--track-fill', rangeToPercent(slider));

  /* when a slider changes, update the fill prop */
  slider.addEventListener('input', e => {
    e.target.style.setProperty('--track-fill', rangeToPercent(e.target));
  })
})
