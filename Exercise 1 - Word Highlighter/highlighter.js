// count the how many time each word appeared in the paragraph
function countWordsAppearance(text) {
    var words = text.toLowerCase().match(/\b\w+\b/g); 
    var wordCount = {};
  
    for (var word of words) {
      wordCount[word] = (wordCount[word] || 0) + 1;
    }
  
    return wordCount;
  }
  
  // Get the 5 most often occurring words from the word count map
  function getTopWords(wordCount) {
    return Object.entries(wordCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(entry => entry[0]);
  }
  
  // Highlight the words in the paragraph using regural expression
  function highlightWords(paragraph, wordsToHighlight) {
    var regex = new RegExp(`\\b(${wordsToHighlight.join('|')})\\b`, 'gi');
    var matches = paragraph.innerHTML.match(regex);
  
    for (var match of matches) {
      var word = match.toLowerCase();
      var isCapitalized = match[0] === match[0].toUpperCase();
      var span = document.createElement('span');
      span.textContent = match;
  
      if (isCapitalized) {
        span.style.textDecoration = 'underline';
        span.style.color = 'blue'
      } else {
        span.style.color = 'blue'
      }
  
      paragraph.innerHTML = paragraph.innerHTML.replace(match, span.outerHTML);
    }
  }
  
  // Get the paragraph DOM element
  var paragraphElement = document.getElementById('myParagraph');
  
  // The paragraph text and count word occurrences using textContent(text node modifier) 
  var paragraphText = paragraphElement.textContent;
  var wordCount = countWordsAppearance(paragraphText);
  
  // Get the 5 most often occurring words
  var topWords = getTopWords(wordCount);
  
  // Highlight and underline the words in the paragraph
  highlightWords(paragraphElement, topWords);
  