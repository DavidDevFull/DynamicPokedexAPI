export const utiliFuncCollisionComponentesTopBottom = (
  componentOne,
  componentTwo
) => {
  let valueScrollComponentOne =
    componentOne.getBoundingClientRect().bottom + window.scrollY;
  let valueScrollComponentTwo =
    componentTwo.getBoundingClientRect().top + window.scrollY;
  const minDistance = 25;

  const calcBottomHeader = valueScrollComponentOne + minDistance;

  if (valueScrollComponentTwo < calcBottomHeader) {
    const newPadding = Math.max(0, valueScrollComponentOne + minDistance - valueScrollComponentTwo);

    componentTwo.style.paddingTop = `${newPadding}px`;
  } else {
    componentTwo.style.paddingTop = `0px`;
  }
};
