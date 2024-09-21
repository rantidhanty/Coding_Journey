function expressionMatter(a, b, c) {
    const hasil1 = a + b + c;
    const hasil2 = a * b * c;
    const hasil3 = a * (b + c);
    const hasil4 = (a + b) * c;
    const hasil5 = a + (b * c);
    const hasil6 = (a * b) + c;
    return Math.max(hasil1, hasil2, hasil3, hasil4, hasil5, hasil6);
  }
  console.log(expressionMatter(10, 5, 2))