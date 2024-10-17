import { useState } from "react";
import { Globe, MapPin, X } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import FilterPage from "./FilterPage";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";
import { AspectRatio } from "./ui/aspect-ratio";
import { Card, CardContent, CardFooter } from "./ui/card";

const SearchPage = () => {
  const params = useParams();
  console.log(params);
  const loading = false;

  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <div className="max-w-7xl mx-auto my-10 px-2">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <FilterPage />
      </div>
      <div className="flex-1">
        {/* Search Input Field  */}
        <div className="flex items-center gap-2">
          <Input
            name="search"
            type="text"
            value={searchQuery}
            placeholder="Search by restaurant & cuisine"
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full truncate"
            autoComplete="off"
          />
          <Button onClick={() => {}} className="bg-orange hover:bg-hoverOrange">
            Search
          </Button>
        </div>
        {/* Searched Items display here  */}
        <div>
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-2 my-3">
            <h1 className="font-medium text-lg">(2) Search result found</h1>
            <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
              {["bakso", "pizza", "burger", "noodles"].map(
                (selectedFilter: string, idx: number) => (
                  <div
                    key={idx}
                    className="relative inline-flex items-center max-w-full"
                  >
                    <Badge
                      className="text-[#D19254] rounded-md hover:cursor-pointer pr-6 whitespace-nowrap"
                      variant="outline"
                    >
                      {selectedFilter}
                    </Badge>
                    <X
                      onClick={() => {}}
                      size={18}
                      className="absolute text-[#D19254] right-1 hover:cursor-pointer"
                    />
                  </div>
                )
              )}
            </div>
          </div>

          {/* Restaurant Cards  */}
          <div className="grid md:grid-cols-3 gap-4">
            {loading ? (
              <SearchPageSkeleton />
            ) : !loading && params.text === undefined ? (
              <NoResultFound searchText={params.text!} />
            ) : (
              [1, 2, 3, 4].map((item: number, idx: number) => (
                <Card
                  key={item + idx}
                  className="bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="relative">
                    <AspectRatio ratio={16 / 6}>
                      <img
                        src={"https://picsum.photos/200/300"}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </AspectRatio>
                    <div className="absolute top-2 left-2 bg-white dark:bg-gray-700 bg-opacity-75 rounded-lg px-3 py-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Featured
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                      Kedai Makan
                    </h1>
                    <div className="mt-2 gap-1 flex items-center text-gray-600 dark:text-gray-400">
                      <MapPin size={16} />
                      <p className="text-sm">
                        City: <span className="font-medium">Wakanda Land</span>
                      </p>
                    </div>
                    <div className="mt-2 gap-1 flex items-center text-gray-600 dark:text-gray-400">
                      <Globe size={16} />
                      <p className="text-sm">
                        Country: <span className="font-medium">Konoha</span>
                      </p>
                    </div>
                    <div className="flex gap-2 mt-4 flex-wrap">
                      {["bakso", "pizza", "burger", "noodles"].map(
                        (cuisine: string, idx: number) => (
                          <Badge
                            key={idx}
                            className="font-medium px-2 py-1 rounded-full shadow-sm"
                          >
                            {cuisine}
                          </Badge>
                        )
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 border-t dark:border-t-gray-700 border-t-gray-100 text-white flex justify-end">
                    <Link to={`/restaurant/${""}}`}>
                      <Button className="bg-orange hover:bg-hoverOrange font-semibold py-2 px-4 rounded-full shadow-md transition-colors duration-200">
                        View Menus
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;

const SearchPageSkeleton = () => {
  return (
    <>
      {[...Array(3)].map((_, index) => (
        <Card
          key={index}
          className="bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden"
        >
          <div className="relative">
            <AspectRatio ratio={16 / 6}>
              <Skeleton className="w-full h-full" />
            </AspectRatio>
          </div>
          <CardContent className="p-4">
            <Skeleton className="h-8 w-3/4 mb-2" />
            <div className="mt-2 gap-1 flex items-center text-gray-600 dark:text-gray-400">
              <Skeleton className="h-4 w-1/2" />
            </div>
            <div className="mt-2 flex gap-1 items-center text-gray-600 dark:text-gray-400">
              <Skeleton className="h-4 w-1/2" />
            </div>
            <div className="flex gap-2 mt-4 flex-wrap">
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-6 w-20" />
            </div>
          </CardContent>
          <CardFooter className="p-4  dark:bg-gray-900 flex justify-end">
            <Skeleton className="h-10 w-24 rounded-full" />
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

const NoResultFound = ({ searchText }: { searchText: string }) => {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
        No results found
      </h1>
      <p className="mt-2 text-gray-500 dark:text-gray-400">
        We couldn't find any results for "{searchText}". <br /> Try searching
        with a different term.
      </p>
      <Link to="/">
        <Button className="mt-4 bg-orange hover:bg-orangeHover">
          Go Back to Home
        </Button>
      </Link>
    </div>
  );
};
