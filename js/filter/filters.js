
/**
*
*  Permet d'afficher du HTML dans la vue
*  http://www.saintsatplay.com/blog/2015/02/parsing-html-data-from-an-array-inside-an-angularjs-view#.Vwz3VSOLT-k
*
*/
app.filter('renderHTMLCorrectly', function($sce)
{
  return function(stringToParse)
  {
    return $sce.trustAsHtml(stringToParse);
  };
});
