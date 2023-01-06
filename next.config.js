/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "custom",
    imageSizes: [16, 32, 96, 128],
    deviceSizes: [256, 384, 640, 1200],
  },
  env: {
    nextImageExportOptimizer_imageFolderPath: "public/img",
    nextImageExportOptimizer_exportFolderPath: "out",
    nextImageExportOptimizer_quality: 70,
    nextImageExportOptimizer_storePicturesInWEBP: true,
    nextImageExportOptimizer_exportFolderPath: "nextImageExportOptimizer",

    // If you do not want to use blurry placeholder images, then you can set
    // nextImageExportOptimizer_generateAndUseBlurImages to false and pass
    // `placeholder="empty"` to all <ExportedImage> components.
    //
    // If nextImageExportOptimizer_generateAndUseBlurImages is false and you
    // forget to set `placeholder="empty"`, you'll see 404 errors for the missing
    // placeholder images in the console.
    nextImageExportOptimizer_generateAndUseBlurImages: true,
  },
}

module.exports = nextConfig
