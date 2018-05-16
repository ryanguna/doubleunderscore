/**
 * Created by Ryan on 5/16/2018.
 */
/**
 * Return the largest word in the string.
 * If there are two or more words that are the same length,
 * return the first word from the string with that length.
 * Ignores punctuation and assume string will not be empty.
 *
 * @params (string)
 *
 */
module.exports = (string) => {
    let removePunctuationMarks = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").split(" ");
    //Map through array of words and get each word lengths
    let getEachWordLength = removePunctuationMarks.map(word => word.length);
    //Get the biggest length in array
    let getLargestLength = Math.max.apply(Math, getEachWordLength);
    //Locate the index of the largest element from the array
    let getLargestWord = getEachWordLength.findIndex(word => word == getLargestLength);
    //return the largest word from removePunctuationMarks array based on the index from getLargestWord
    return removePunctuationMarks[getLargestWord];
}
