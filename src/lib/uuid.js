export function uuid() {
  return "xxxxxxxxxxxx".replace(/[xy]/g, () =>
    ((Math.random() * 16) | 0).toString(16)
  );
}

export function genFilePath(filename) {
  return `${uuid()}-${filename}`;
}
