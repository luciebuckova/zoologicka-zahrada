module.exports = function(eleventyConfig) {

	// Výchozí výstupní složka: _site

	// Zkopírovat images/ do _site/images
	eleventyConfig.addPassthroughCopy("images");

	// Zkopírovat css/ to _site/css/
	eleventyConfig.addPassthroughCopy("css");

  	// Zkopírovat admin/ to _site/admin/
	eleventyConfig.addPassthroughCopy("admin");

	// Zkopírovat všechny *.js soubory na stejné umístění do _site
	// eleventyConfig.addPassthroughCopy("**/*.js");

  eleventyConfig.addFilter("limit", function(array, limit) {return array.slice(0, limit);});

  return {
    // možné formáty šablon
    templateFormats: ["njk", "html", "md", "liquid"],

    // jako šablonovací jazyk zvolíme Nunjucks
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  }

};
