/*
* All gulpfile configuration options
*/
module.exports = function() {
  var sourceDir = 'source/',
  distDir = 'dist/';

  var config = {
    sourceDir: sourceDir,
    distDir: distDir,
    cleanCSSConfig: {
      keepBreaks: true, // we still want it to be readable
      mediaMerging: true,
      shorthandCompacting: false,
      aggressiveMerging: false,
      removeDuplicates: true,
      compatibility: '*,-properties.colors' // keep 6-digit hex codes
    },
    inlineCSSConfig: {
      applyStyleTags: true,
      applyLinkTags: true,
      removeStyleTags: false, // styles should stay in head
      removeLinkTags: true,
      applyTableAttributes: false, // behaves strangely if true
      applyWidthAttributes: false
    }
  };
  return config;
}
