import { Storage } from "./firebase";

export async function upload(file) {
  const path = `${uuid()}${file.name}`;
  const ref = Storage.ref().child(path);
  await ref.put(file);
  const url = await ref.getDownloadURL();
  return url;
}
