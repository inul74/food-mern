import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";

export type FilterOptionsState = {
  id: string;
  label: string;
};

const filterOptions: FilterOptionsState[] = [
  { id: "bakso", label: "Bakso" },
  { id: "pizza", label: "Pizza" },
  { id: "burger", label: "Burger" },
  { id: "friedRice", label: "Fried Rice" },
];

const FilterPage = () => {
  const appliedFilterHandler = (value: string) => {
    console.log(value);
  };

  return (
    <div className="md:w-72">
      <div className="flex items-center justify-between">
        <h1 className="font-medium text-lg">Filter by cuisine.</h1>
        <Button variant={"link"}>Reset</Button>
      </div>
      {filterOptions.map((option) => (
        <div key={option.id} className="flex items-center space-x-2 my-5">
          <Checkbox
            id={option.id}
            className="w-4 h-4"
            onClick={() => appliedFilterHandler(option.label)}
          />
          <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {option.label}
            <input
              name="cuisine"
              type="checkbox"
              value={option.id}
              className="hidden"
            />
          </Label>
        </div>
      ))}
    </div>
  );
};

export default FilterPage;
