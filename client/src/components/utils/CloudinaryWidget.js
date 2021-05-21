export let openWidget = (event, fn, data = "rec", arr = "") => {
  event.preventDefault();
  console.log("Running");
  window.cloudinary.openUploadWidget(
    {
      cloudName: "dawyijhjw",
      uploadPreset: "recommendation",
      sources: ["local", "url", "facebook", "dropbox"],
      cropping: true,
    },
    (error, result) => {
      if (error) {
        console.log(error);
        throw error;
      }
      console.log(result);
      if (result.event === "success") {
        fn({ ...arr, [event.target.name]: result.info.public_id });
      }
    }
  );
};
