// count the how many time each word appeared in the paragraph
function countWordOccurances(text) {
    var words = text.toLowerCase().match(/\b\w+\b/g); 
    var wordCount = {};
  
    for (var word of words) {
      wordCount[word] = (wordCount[word] || 0) + 1;
    }
  
    return wordCount;
  }