import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getRouteApi, useNavigate } from "@tanstack/react-router";
import { ChevronUp, ChevronDown } from "lucide-react";

interface TeamToolbarProps {
  column: any;
  title: string;
  button?: React.ReactNode;
}

export default function Toolbar({ column, title, button }: TeamToolbarProps) {
  const route = getRouteApi("/_admin/career-apllication/$id");
  const navigate = useNavigate({ from: "/career-apllication/$id" });
  const searchParams = route.useSearch();
  const { searchIn, searchBy, orderBy } = searchParams as any;

  const handleSearchByChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    navigate({ search: (prev) => ({ ...prev, searchBy: e.target.value }) });
  };

  const handleSearchInChange = (value: string) => {
    navigate({
      search: (prev) => ({ ...prev, searchIn: value, sortBy: value }),
    });
  };

  const handleOrderByChange = (direction: "ASC" | "DESC") => {
    navigate({ search: (prev) => ({ ...prev, orderBy: direction }) });
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
