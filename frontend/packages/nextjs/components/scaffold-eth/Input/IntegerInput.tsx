import { useEffect, useState } from "react";
import { CommonInputProps, InputBase, IntegerVariant, isValidInteger } from "~~/components/scaffold-eth";

type IntegerInputProps = CommonInputProps<string | bigint> & {
  variant?: IntegerVariant;
};

export const IntegerInput = ({
  value,
  onChange,
  name,
  placeholder,
  disabled,
  variant = IntegerVariant.UINT256,
}: IntegerInputProps) => {
  const [inputError, setInputError] = useState(false);

  useEffect(() => {
    if (isValidInteger(variant, value, false)) {
      setInputError(false);
    } else {
      setInputError(true);
    }
  }, [value, variant]);

  return (
    <InputBase
      name={name}
      value={value}
      placeholder={placeholder}
      error={inputError}
      onChange={onChange}
      disabled={disabled}
      width="w-2/12"
    />
  );
};
