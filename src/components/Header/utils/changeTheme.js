export default function changeTheme(theme) {
  const root = document.documentElement;
  root.classList.remove(...root.classList);
  root.classList.add("lenis");
  root.classList.add(theme);
}
