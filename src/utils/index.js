export const forceDownload = (blobUrl, filename) => {
    const a = document.createElement("a");
    a.download = filename;
    a.href = blobUrl;
    document.body.appendChild(a);
    a.click();
    a.remove();
};

export const downloadPhoto = (url, filename) => {
    if (!filename) filename = url.split("\\").pop().split("/").pop();
    fetch(url, {
        headers: new Headers({
            Origin: location.origin,
        }),
        mode: "cors",
    })
        .then((response) => response.blob())
        .then((blob) => {
            const blobUrl = window.URL.createObjectURL(blob);
            forceDownload(blobUrl, filename);
        })
        .catch((e) => console.error(e));
};

export const buildModifiedImageUrl = (publicId) => {
    return `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/remove_background,t_70:blue:purple/${publicId}.jpg`;
  };


export const defaultURL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'