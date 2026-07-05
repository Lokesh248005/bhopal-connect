"use client";

import { BusinessCard } from "@/components/marketplace/BusinessCard";
import { FilterState, MarketplaceFilters } from "@/components/marketplace/MarketplaceFilters";
import { SearchBar } from "@/components/marketplace/SearchBar";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { businesses } from "@/lib/mock-data";
import { Filter } from "lucide-react";
import { useMemo, useState } from "react";

export default function MarketplacePage() {
    // State
    const [searchQuery, setSearchQuery] = useState("");
    const [filters, setFilters] = useState<FilterState>({
        industries: [],
        sizes: [],
        rating: "all"
    });
    const [sortOption, setSortOption] = useState("rating-desc");

    // Logic
    const filteredBusinesses = useMemo(() => {
        let result = [...businesses];

        // 1. Search
        if (searchQuery) {
            const lowerQuery = searchQuery.toLowerCase();
            result = result.filter(b =>
                b.name.toLowerCase().includes(lowerQuery) ||
                b.industry.toLowerCase().includes(lowerQuery) ||
                b.services.some(s => s.toLowerCase().includes(lowerQuery))
            );
        }

        // 2. Filters
        if (filters.industries.length > 0) {
            result = result.filter(b => filters.industries.includes(b.industry));
        }

        if (filters.sizes.length > 0) {
            result = result.filter(b => filters.sizes.includes(b.size));
        }

        if (filters.rating !== "all") {
            const minRating = parseFloat(filters.rating);
            result = result.filter(b => b.rating >= minRating);
        }

        // 3. Sort
        result.sort((a, b) => {
            switch (sortOption) {
                case "rating-desc":
                    return b.rating - a.rating; // Highest Rated
                case "reviews-desc":
                    return b.reviewCount - a.reviewCount; // Most Reviews
                case "name-asc":
                    return a.name.localeCompare(b.name); // A-Z
                default:
                    return 0;
            }
        });

        return result;
    }, [searchQuery, filters, sortOption]);

    const resetFilters = () => {
        setFilters({ industries: [], sizes: [], rating: "all" });
        setSearchQuery("");
        setSortOption("rating-desc");
    };

    return (
        <div className="container max-w-screen-xl px-4 py-8 md:py-12">
            <div className="flex flex-col gap-8">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div>
                        <h1 className="font-heading text-3xl font-bold tracking-tight">B2B Marketplace</h1>
                        <p className="text-muted-foreground mt-1">Discover {businesses.length}+ verified local businesses and partners.</p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
                        <div className="w-full sm:w-auto flex items-center gap-2">
                            <SearchBar value={searchQuery} onChange={setSearchQuery} />

                            {/* Mobile Filter Trigger */}
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button variant="outline" size="icon" className="md:hidden shrink-0">
                                        <Filter className="h-4 w-4" />
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                                    <div className="py-4">
                                        <h2 className="font-bold text-lg mb-6">Filters</h2>
                                        <MarketplaceFilters
                                            filters={filters}
                                            onFilterChange={setFilters}
                                            onReset={resetFilters}
                                        />
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>

                        {/* Sort Dropdown */}
                        <Select value={sortOption} onValueChange={setSortOption}>
                            <SelectTrigger className="w-full sm:w-[180px]">
                                <SelectValue placeholder="Sort By" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="rating-desc">Highest Rated</SelectItem>
                                <SelectItem value="reviews-desc">Most Reviews</SelectItem>
                                <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Desktop Sidebar */}
                    <aside className="hidden md:block md:col-span-1">
                        <div className="sticky top-24">
                            <MarketplaceFilters
                                filters={filters}
                                onFilterChange={setFilters}
                                onReset={resetFilters}
                            />
                        </div>
                    </aside>

                    {/* Grid */}
                    <main className="md:col-span-3">
                        <div className="mb-4 text-sm text-muted-foreground">
                            Showing {filteredBusinesses.length} result{filteredBusinesses.length !== 1 && 's'}
                        </div>
                        {filteredBusinesses.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredBusinesses.map((business) => (
                                    <BusinessCard key={business.id} business={business} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 bg-muted/20 rounded-xl border border-dashed border-border flex flex-col items-center">
                                <h3 className="text-lg font-bold">No businesses found</h3>
                                <p className="text-muted-foreground mb-4">Try adjusting your filters or search query.</p>
                                <Button variant="outline" onClick={resetFilters}>Clear All Filters</Button>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
}
