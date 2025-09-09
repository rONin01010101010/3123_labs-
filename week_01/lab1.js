
//1 
function CapitalizeSentence(sentence) {
      return str.split(' ')
                .map(word => word.charAt(0).toUpperCase() +
  word.slice(1).toLowerCase())
                .join(' ');
}

console.log(CapitalizeSentence("the quick brown fox"))
//2 
  function max(a, b, c) {
      if (a >= b && a >= c) {
          return a;
      } else if (b >= a && b >= c) {
          return b;
      } else {
          return c;
      }
  }

console.log(max (1,0,1));
console.log(max (0,-10,-20));
console.log(max (1000,510,440));



  //3
  function right(str) {
      if (str.length < 3) {
          return "String length must be greater than or equal to 3";
      }

      const lastThree = str.slice(-3);
      const remaining = str.slice(0, -3);
      return lastThree + remaining;
  } 

console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));



  //4 
function angle_Type(angle) {
      if (angle < 0 || angle > 180) {
          return "Invalid angle: must be between 0 and 180 degrees";
      }

      if (angle > 0 && angle < 90) {
          return "Acute angle";
      } else if (angle === 90) {
          return "Right angle";
      } else if (angle > 90 && angle < 180) {
          return "Obtuse angle";
      } else if (angle === 180) {
          return "Straight angle";
      } else if (angle === 0) {
          return "Zero angle";
      }
  }

console.log(angle_Type(47))
console.log(angle_Type(90))
console.log(angle_Type(145))
console.log(angle_Type(180))


  //5
function array_max_sum(arr, k) {
      if (k > arr.length || k <= 0) {
          return "Invalid k: must be between 1 and array length";
      }

      // Calculate sum of first k elements
      let currentSum = 0;
      for (let i = 0; i < k; i++) {
          currentSum += arr[i];
      }

      let maxSum = currentSum;

      // Use sliding window technique
      for (let i = k; i < arr.length; i++) {
          currentSum = currentSum - arr[i - k] + arr[i];
          maxSum = Math.max(maxSum, currentSum);
      }

      return maxSum;
  }

  console.log(array_max_sum([1, 2, 3, 14, 5], 2))
console.log(array_max_sum([2, 3, 5, 1, 6], 3))
console.log(array_max_sum([9, 3, 5, 1, 7], 2))

