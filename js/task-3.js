function getElementWidth(content, padding, border) {
  const contentValue = parseFloat(content);
  const paddingValue = parseFloat(padding) * 2;
  const borderValue = parseFloat(border) * 2;

  return contentValue + paddingValue + borderValue;
}
