import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="relative w-full max-w-md">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Search contacts by name, email, or company..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10 bg-card border-border focus-visible:ring-primary"
      />
    </div>
  );
};
