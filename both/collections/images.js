var imageStore = new FS.Store.S3("main", {
  bucket: Config.settings.bucket_images_name, //required
  region: Config.settings.bucket_images_region, 
  maxTries: 1,
  transformWrite: function(fileObj, readStream, writeStream) {
    gm(readStream, fileObj.name).strip().resize('1200').interlace("plane").blur('0.05').quality('80').stream().pipe(writeStream);
  }
});

var thumbStore = new FS.Store.S3("thumbs", {
  bucket: Config.settings.bucket_thumbs_name, //required
  region: Config.settings.bucket_thumbs_region, 
  maxTries: 1,
  transformWrite: function(fileObj, readStream, writeStream) {
    gm(readStream, fileObj.name()).resize(140, 140).stream().pipe(writeStream);
  }
});

Images = new FS.Collection("images", {
  stores: [imageStore, thumbStore]
});
/*
 * Add query methods like this:
 *  Images.findPublic = function () {
 *    return Images.find({is_public: true});
 *  }
 */
