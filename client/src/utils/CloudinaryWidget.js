export let openWidget = (event, fn, data = "rec", arr='') => {
  event.preventDefault();
  window.cloudinary.openUploadWidget(
    {
      cloudName: process.env.REACT_APP_CLOUDINARYCLOUD,
      uploadPreset: process.env.REACT_APP_CLOUDINARYPRESET,
      sources: ["local", "url", "facebook", "dropbox"],
      cropping: true,
    },
    (error, result) => {
      if (error) {
        console.log(error);
        throw error;
      }
      if (result.event === "success") {
        fn({ ...arr, [event.target.name]: result.info.public_id });
      }
    }
  );
};
