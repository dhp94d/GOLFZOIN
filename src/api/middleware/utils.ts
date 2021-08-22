import { storage } from '@/api/serverless/firesbaseinit';

export async function getThumbnail(dealiName: any) {
  const { items } = await storage.ref(`thumbnail/${dealiName}`).listAll();
  let thumbnaills: any = [];
  items.map((i) => {
    const { fullPath } = i;
    thumbnaills.push({
      url: storage.ref(fullPath).getDownloadURL(),
      fullPath,
    });
  });
  return thumbnaills;
}

export async function getOneThumbnail(
  path: string,
  dealiName: string,
  file: any
) {
  const url = await storage
    .ref(`${path}/${dealiName}/${file}`)
    .getDownloadURL();

  return url;
}

// 파일 넣기
export const uploadFile = async (
  path: string,
  dealiName: string,
  file: any
) => {
  const ref = await storage
    .ref(`${path}/${dealiName}/${file.name + file.lastModified}`)
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
