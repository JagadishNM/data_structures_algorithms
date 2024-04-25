function caesarCipher(s, k) {
  let encryptedText = "";
  for (let i = 0; i < s.length; i++) {
      let char = s[i];
      if (char.match(/[a-zA-Z]/)) { // Check if the character is a letter
          let asciNum = s.charCodeAt(i);
          let offset = asciNum >= 65 && asciNum <= 90 ? 65 : 97; // Determine offset for uppercase or lowercase letters
          let encryptedAsciNum = ((asciNum - offset + k) % 26 + 26) % 26 + offset; // Apply Caesar Cipher rotation
          encryptedText += String.fromCharCode(encryptedAsciNum);
      } else {
          encryptedText += char; // Non-alphabetic characters remain unchanged
      }
  }
  return encryptedText;
}

// Example usage:
let s = "Hello, World!";
let k = 3;
let encryptedString = caesarCipher(s, k);
console.log("Encrypted string:", encryptedString); // Output: "Khoor, Zruog!"
