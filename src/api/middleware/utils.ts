import { storage } from '@/api/serverless/firesbaseinit';

export async function getOneThumbnail(path: string, name: string, file: any) {
  const url = await storage.ref(`${path}/${name}/${file}`).getDownloadURL();

  return url;
}

// 파일 넣기
export const uploadFile = async (path: string, name: string, file: any) => {
  const ref = await storage
    .ref(`${path}/${name}/${file.name + file.lastModified}`)
    .put(file)
    .on(
      'state_changed',
      (snapshot) => {
        console.log(snapshot);
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('성공');
      }
    );
  console.log(ref);
  return;
};

// 파일 삭제
export function deleteFile(fullPath: any) {
  return storage.ref(fullPath).delete();
}
