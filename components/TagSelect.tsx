"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import * as React from "react";

import { Button } from "@/components/ui/Button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/Command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover";
import { Badge } from "@/components/ui/Badge";
import { wrapClassNames } from "@/lib/utils";

/**
 * A component that provides a tag selection interface using a dropdown popover.
 *
 * @param {Object} props - The component props.
 * @param {string[]} props.tags - An array of available tags to select from.
 *
 * This component allows users to select and deselect tags, updating the URL query
 * parameters accordingly. Selected tags are displayed as badges, and users can remove
 * them by clicking the close button on each badge. The component uses a popover to
 * display a searchable list of tags, and allows toggling tag selection.
 */

export function TagSelect({ tags }: { tags: string[] }) {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedTags = searchParams.get("tags")?.split(",") || [];

  const toggleTag = (tag: string) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];

    const params = new URLSearchParams(searchParams);
    if (newTags.length > 0) {
      params.set("tags", newTags.join(","));
    } else {
      params.delete("tags");
    }
    params.delete("page");
    router.push(`/blog?${params.toString()}`);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          Select tags...
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search tags..." />
          <CommandEmpty>No tag found.</CommandEmpty>
          <CommandGroup>
            {tags.map((tag) => (
              <CommandItem key={tag} onSelect={() => toggleTag(tag)}>
                <Check
                  className={wrapClassNames(
                    "mr-2 h-4 w-4",
                    selectedTags.includes(tag) ? "opacity-100" : "opacity-0",
                  )}
                />
                {tag}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
      <div className="flex flex-wrap gap-2 mt-2">
        {selectedTags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-sm">
            {tag}
            <button
              className="ml-1 hover:text-destructive"
              onClick={() => toggleTag(tag)}
            >
              ×
            </button>
          </Badge>
        ))}
      </div>
    </Popover>
  );
}
