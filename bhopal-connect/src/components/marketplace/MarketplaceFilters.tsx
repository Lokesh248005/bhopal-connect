"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export interface FilterState {
    industries: string[];
    sizes: string[];
    rating: string;
}

interface MarketplaceFiltersProps {
    filters: FilterState;
    onFilterChange: (filters: FilterState) => void;
    onReset: () => void;
}

export function MarketplaceFilters({ filters, onFilterChange, onReset }: MarketplaceFiltersProps) {
    const toggleIndustry = (industry: string) => {
        const newIndustries = filters.industries.includes(industry)
            ? filters.industries.filter(i => i !== industry)
            : [...filters.industries, industry];
        onFilterChange({ ...filters, industries: newIndustries });
    };

    const toggleSize = (size: string) => {
        const newSizes = filters.sizes.includes(size)
            ? filters.sizes.filter(s => s !== size)
            : [...filters.sizes, size];
        onFilterChange({ ...filters, sizes: newSizes });
    };

    return (
        <div className="space-y-8">
            {/* Industry */}
            <div>
                <h3 className="font-bold mb-4">Industry</h3>
                <div className="space-y-3">
                    {["Manufacturing", "IT Services", "Retail", "Healthcare", "Construction"].map((item) => (
                        <div key={item} className="flex items-center space-x-2">
                            <Checkbox
                                id={`ind-${item}`}
                                checked={filters.industries.includes(item)}
                                onCheckedChange={() => toggleIndustry(item)}
                            />
                            <Label htmlFor={`ind-${item}`}>{item}</Label>
                        </div>
                    ))}
                </div>
            </div>

            {/* Size */}
            <div>
                <h3 className="font-bold mb-4">Company Size</h3>
                <div className="space-y-3">
                    {["1-10", "11-50", "51-200", "201+"].map((item) => (
                        <div key={item} className="flex items-center space-x-2">
                            <Checkbox
                                id={`size-${item}`}
                                checked={filters.sizes.includes(item)}
                                onCheckedChange={() => toggleSize(item)}
                            />
                            <Label htmlFor={`size-${item}`}>{item} Employees</Label>
                        </div>
                    ))}
                </div>
            </div>

            {/* Rating */}
            <div>
                <h3 className="font-bold mb-4">Minimum Rating</h3>
                <RadioGroup
                    value={filters.rating}
                    onValueChange={(val) => onFilterChange({ ...filters, rating: val })}
                >
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="4" id="r4" />
                        <Label htmlFor="r4">4.0 & up</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="3" id="r3" />
                        <Label htmlFor="r3">3.0 & up</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="all" id="rall" />
                        <Label htmlFor="rall">Any Rating</Label>
                    </div>
                </RadioGroup>
            </div>

            <Button variant="outline" className="w-full" onClick={onReset}>Reset Filters</Button>
        </div>
    );
}
