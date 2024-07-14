export const formatNumberPureDecimal = (num: number | string, decimals = 2) => {
  if (Number.isNaN(num)) {
    return 0;
  }
  // const parsedNum = parseFloat(String(num))

  const number = parseFloat(Number(num).toFixed(decimals));
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
export const formatMiniNumDecimal = (num: number | string, decimals = 2) => {
  if (Number.isNaN(num)) {
    return '0';
  }
  const parsedNum = parseFloat(String(num));
  let result = parsedNum.toFixed(decimals);
  if (Math.abs(parsedNum) >= 1) {
    if (Math.abs(parsedNum) >= 1000) {
      result = parseFloat(result).toLocaleString();
    }
  } else {
    result = result.replace(/\.?0+$/, '');
  }
  return result;
};
export const formatNumberDecimal = (num: number | string, decimals = 2) => {
  if (Number.isNaN(num)) {
    return 0;
  }
  const parsedNum = parseFloat(String(num));

  if (parsedNum < 1) {
    return parseFloat(parsedNum.toFixed(decimals || 8));
  }

  if (Number(num) < 1000) {
    const number = parseFloat(Number(num).toFixed(decimals));
    return number;
  } else {
    const number = parseFloat(Number(num).toFixed(decimals));
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
};
export const formatTokenNumDecimal = (num: number | string, decimals = 2) => {
  if (Number.isNaN(num)) {
    return 0;
  }
  const parsedNum = parseFloat(String(num));
  if (parsedNum < 1) {
    return parseFloat(parsedNum.toFixed(decimals || 8));
  }
  const number = parseFloat(Number(num).toFixed(decimals));
  return number;
};

export const convertToScientificNotation = (num: number, precision: number = 2) => {
  const exponent = Math.floor(Math.log10(Math.abs(num)));
  const coefficient = num / Math.pow(10, exponent);
  const roundedCoefficient = parseFloat(coefficient.toPrecision(precision));
  return `${roundedCoefficient}e${exponent}`;
};
const convertScientificToDecimal = (num: number | string, decimals: number) => {
  const scientificToDecimal = (numStr: string) => {
    const [coefficient, exponent] = numStr.split('e-');
    const numZeros = parseInt(exponent, 10) - 1;
    return `0.${'0'.repeat(numZeros)}${coefficient.replace('.', '')}`;
  };

  return Number(num) < 1 && num.toString().includes('e-')
    ? parseFloat(scientificToDecimal(num.toString())).toFixed(decimals)
    : parseFloat(num.toString()).toFixed(decimals);
};

export const formatNumberChart = (num: number | string, decimals = 2, isTooltip?: boolean) => {
  if (Number.isNaN(num) || Number(num) === 0) {
    return 0;
  }

  if (Number(num) >= 1000000000000) {
    const millionValue = parseFloat((Number(num) / 1000000000000).toFixed(decimals));
    return `${millionValue}T`;
  } else if (Number(num) >= 1000000000) {
    const millionValue = parseFloat((Number(num) / 1000000000).toFixed(decimals));
    return `${millionValue}B`;
  } else if (Number(num) >= 1000000) {
    const millionValue = parseFloat((Number(num) / 1000000).toFixed(decimals));
    return `${millionValue}M`;
  } else if (Number(num) >= 1000 && Number(num) < 1000000) {
    const thousandValue = parseFloat((Number(num) / 1000).toFixed(decimals));
    return `${thousandValue}k`;
  } else if (Number(num) < 1) {
    if (isTooltip) {
      return convertScientificToDecimal(Number(num), 8);
    }
    return convertToScientificNotation(Number(num), decimals);
  } else if (Number(num) > 1 && Number(num) < 1000) {
    const number = parseFloat(Number(num).toFixed(decimals));
    return number;
  } else {
    const number = parseFloat(Number(num).toFixed(decimals));
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
};

export const formatNumberScores = (num: number | string) => {
  if (Number.isNaN(num) || Number(num) === 0) {
    return 0;
  }
  if (Number(num) < 100) {
    return parseFloat(Number(num).toFixed(2));
  }
  return Number(num).toFixed(0);
};
