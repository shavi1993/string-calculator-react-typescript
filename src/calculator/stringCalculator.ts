export function add(numbers: string): number {
    if (!numbers) return 0;
  
    let delimiter = /,|\n/;
    let numStr = numbers;
  
    if (numbers.startsWith("//")) {
      const parts = numbers.split("\n");
      let customDelimiter = parts[0].slice(2);
  
      // Escape special RegExp characters like "|", "*", "?"
      const escaped = customDelimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  
      delimiter = new RegExp(escaped);
      numStr = parts.slice(1).join("\n");
    }
  
    const tokens = numStr.split(delimiter).map(n => n.trim()).filter(n => n !== "");
  
    const negatives: string[] = tokens.filter(n => Number(n) < 0);
    if (negatives.length) {
      throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
    }
  
    return tokens.reduce((sum, current) => sum + Number(current), 0);
  }
  