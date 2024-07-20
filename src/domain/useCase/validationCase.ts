interface IValidationCase {
  number: string;
  numberString: string;
  initialCount: string;
}

export const validationCase = ({
  number,
  numberString,
  initialCount,
}: IValidationCase): boolean => {
  if (number === initialCount && numberString === initialCount) return false;

  if (number.length >= 16) return false;

  if (number.startsWith('0.') && numberString.includes('.')) return false;

  if( number === initialCount && numberString !== '.' ) return false; 

  return true;
};
