import { Select } from "@chakra-ui/react";

interface Props {
  placeHolder?: string;
  options?: number[] | string[];
  val?: number;
}

export default function MySelect({
  // placeHolder = "Lang",
  options = ["JP", "ENG"],
  val = 0,
}: Props) {
  return (
    <Select
      value={options[val]}
      // placeholder={placeHolder}
      size="xs"
    >
      {options.map((val) => (
        <option>{val}</option>
      ))}
    </Select>
  );
}
