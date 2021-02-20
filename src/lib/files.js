import { Storage } from "./firebase";
import { genFilePath } from "./uuid";

export async function upload(file) {
  const path = genFilePath(file.name);
  const ref = Storage.ref().child(path);
  await ref.put(file);
  const url = await ref.getDownloadURL();
  return url;
}
