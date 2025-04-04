'use client';

import { Check, Search, X } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import * as React from 'react';

import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/Command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/Popover';
import { wrapClassNames } from '@/lib/utils';

export function TagSelect({ tags }: { tags: string[] }) {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedTags = searchParams.get('tags')?.split(',') || [];

  const clearTags = () => {
    updateUrl([]);
  };

  const toggleTag = (tag: string) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];

    updateUrl(newTags);
  };

  const updateUrl = (newTags: string[]) => {
    const params = new URLSearchParams(searchParams);

    if (newTags.length > 0) {
      params.set('tags', newTags.join(','));
    } else {
      params.delete('tags');
    }

    params.delete('page'); // reset pagination when changing tags

    router.push(`/blog?${params.toString()}`);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="h-auto min-h-[2.5rem] w-full justify-between py-2"
        >
          {selectedTags.length > 0 ? (
            <>
              <div className="flex max-h-[4.5rem] w-full flex-wrap gap-1 overflow-y-auto pr-2">
                {selectedTags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </>
          ) : (
            <span className="text-muted-foreground">Filter Posts</span>
          )}
          {selectedTags.length > 0 ? (
            <Button
              asChild
              className="p-0"
              variant="ghost"
              size="sm"
              onClick={clearTags}
            >
              <X className="h-4 w-4 shrink-0 opacity-50" />
            </Button>
          ) : (
            <Search className="h-4 w-4 shrink-0 opacity-50" />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search tags..." />
          <CommandGroup className="p-2">
            <div className="grid max-h-96 grid-cols-3 gap-2 overflow-scroll">
              {tags.map((tag) => (
                <CommandItem
                  key={tag}
                  onSelect={() => toggleTag(tag)}
                  className="col-span-1 justify-start px-2 py-1"
                >
                  <Check
                    className={wrapClassNames(
                      'mr-1 h-3 w-3',
                      selectedTags.includes(tag) ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                  <span className="truncate">{tag}</span>
                </CommandItem>
              ))}
            </div>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
