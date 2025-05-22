export default function getVariableValue(variable) {
  const root = document.documentElement;
  return getComputedStyle(root).getPropertyValue(variable);
}
