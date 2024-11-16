function findCombinations(N, Sum) {
    const result = [];
  
    function helper(index, currentSum, currentCombo) {
      if (index === N) {
        if (currentSum === Sum) {
          result.push([...currentCombo]);
        }
        return;
      }
  
      for (let i = 0; i <= Sum - currentSum; i++) {
        currentCombo[index] = i;
        helper(index + 1, currentSum + i, currentCombo);
      }
    }
  
    helper(0, 0, Array(N).fill(0));
  
    return result;
  }
  
  // Example usage:
  const N = 2;
  const Sum = 3;
  const combinations = findCombinations(N, Sum);
  
  combinations.forEach(combo => console.log(combo.join(' ')));
  