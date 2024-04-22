function shiftChar(char, shift) {
    if (char.match(/[a-z]/i)) {
      const base = char.toLowerCase() === char ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
      const charCode = (char.charCodeAt(0) - base + shift) % 26;
      return String.fromCharCode(charCode < 0 ? charCode + 26 + base : charCode + base);
    }
    return char;
  }
  
  function rollingString(s, shifts) {
    const result = s.split('');
    shifts.forEach(shift => {
      const [start, end, shiftAmount] = shift;
      for (let i = start; i <= end; i++) {
        result[i] = shiftChar(result[i], shiftAmount);
      }
    });
    return result.join('');
  }
  
  // Example usage:
  const s = "ABCZ";
  const shifts = [[0, 2, 1], [3, 3, 2]]; // Format: [start_index, end_index, shift_amount]
  console.log(rollingString(s, shifts)); // Output: "BCDA"
  
  // Caesar Cipher