import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { ChevronDown, ChevronUp } from "lucide-react";

interface TeamToolbarProps {
  column: any;
  title: string;
  button?: React.ReactNode;
}

export default function TeamToolbar({
  column,
  title,
  button,
}: TeamToolbarProps) {
  const navigate = useNavigate();
  const searchParams = useSearch({ strict: false });
  const { searchIn, searchBy, orderBy } = searchParams as any;

  const handleSearchByChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    navigate({
      search: (prev: any) => ({ ...prev, searchBy: e.target.value }),
    } as never);
  };

  const handleSearchInChange = (value: string) => {
    navigate({
      search: (prev: any) =>
        ({ ...prev, searchIn: value, sortBy: value }) as never,
    });
  };

  const handleOrderByChange = (direction: "ASC" | "DESC") => {
    navigate({
      search: (prev: any) => ({ ...prev, orderBy: direction }),
    } as never);
  };

  return (
    <div className="flex items-center justify-between mb-4">
      <div className="text-primary font-[600]">{title}</div>
      <div className="flex items-center gap-2">
        <Select
          onValueChange={handleSearchInChange}
          defaultValue={searchIn ?? ""}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select column" defaultValue={searchBy} />
          </SelectTrigger>
          <SelectContent>
            {column.map((option: any) => (
              <SelectItem key={option.accessorKey} value={option.accessorKey}>
                {option.header}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          placeholder="Search"
          defaultValue={searchBy}
          onChange={handleSearchByChange}
        />

        <Button
          variant="outline"
          disabled={orderBy === "ASC"}
          size="icon"
          onClick={() => handleOrderByChange("ASC")}
        >
          <ChevronUp />
        </Button>
        <Button
          variant="outline"
          disabled={orderBy === "DESC"}
          size="icon"
          onClick={() => handleOrderByChange("DESC")}
        >
          <ChevronDown />
        </Button>
        {button && <div>{button}</div>}
      </div>
    </div>
  );
}
