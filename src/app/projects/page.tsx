"use client";

import React, {useState, useMemo} from "react";
import projectsData from "@/data/projects.json";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {FaGithub, FaYoutube, FaSearch} from "react-icons/fa";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ProjectsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 9;

  // Extract all unique categories for tag filtering
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    projectsData.forEach((project) => {
      tagSet.add(project.category);
    });
    return Array.from(tagSet);
  }, []);

  // Filter projects based on search query and selected tags
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTags = selectedTags.length === 0 || selectedTags.includes(project.category);

      return matchesSearch && matchesTags;
    });
  }, [searchQuery, selectedTags]);

  // Calculate pagination values
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const paginatedProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProjects, currentPage]);

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedTags]);

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  };

  return (
    <div className="min-h-screen mx-auto max-w-screen-lg px-4 sm:px-6 md:px-16 py-4 pb-32">
      {/* Page Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 dark:text-white">Project Portfolio</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Explore my portfolio of projects spanning various technologies and domains.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300" />
          <Input
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="self-center text-sm font-medium mr-1 dark:text-gray-300">Filter by:</span>
          {allTags.map((tag) => (
            <Badge
              key={tag}
              variant={selectedTags.includes(tag) ? "default" : "outline"}
              className={`cursor-pointer transition-colors text-sm py-1 px-3 dark:border-gray-600 ${
          selectedTags.includes(tag) ? "dark:bg-gray-600 dark:text-white" : "dark:hover:bg-gray-700 dark:text-white"
              }`}
              onClick={() => toggleTag(tag)}>
              {tag}
            </Badge>
          ))}
          {selectedTags.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedTags([])}
              className="text-xs dark:text-gray-300 dark:hover:bg-gray-800">
              Clear filters
            </Button>
          )}
        </div>
      </div>

      {/* Results count */}
      <div className="my-6 text-sm text-gray-500 dark:text-gray-400 text-center">
        Showing {Math.min(currentPage * ITEMS_PER_PAGE, filteredProjects.length) - (currentPage - 1) * ITEMS_PER_PAGE}{" "}
        of {filteredProjects.length} projects
        {filteredProjects.length !== projectsData.length && ` (filtered from ${projectsData.length} total)`}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.length > 0 ? (
          paginatedProjects.map((project, idx) => (
            <Card
              key={idx}
              className="flex flex-col dark:bg-gray-800 dark:border-gray-700 dark:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <Badge className="self-start mb-1 text-xs py-0.5 px-3 dark:bg-gray-600 dark:text-gray-200">
                  {project.category}
                </Badge>
                <h3 className="text-xl font-bold dark:text-white">{project.title}</h3>
              </CardHeader>
              <CardContent className="py-2 flex-grow">
                <p className="text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
              </CardContent>
              <CardFooter className="pt-2 flex justify-center items-center border-t h-12 p-0 dark:border-gray-700">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full h-full">
                  <Button
                    size="sm"
                    className="w-full h-full flex items-center justify-center gap-2 rounded-none bg-transparent hover:bg-transparent text-black dark:text-white dark:hover:bg-gray-700 transition-colors">
                    {project.link.includes("youtube") ? (
                      <>
                        <FaYoutube className="text-red-600" />
                        <span className="dark:text-white">Channel Link</span>
                      </>
                    ) : (
                      <>
                        <FaGithub className="dark:text-white" />
                        <span className="dark:text-white">View Code</span>
                      </>
                    )}
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 dark:text-gray-300">No projects found matching your criteria.</p>
            <Button
              variant="outline"
              className="mt-4 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
              onClick={() => {
                setSearchQuery("");
                setSelectedTags([]);
              }}>
              Reset filters
            </Button>
          </div>
        )}
      </div>

      {/* Pagination */}
      {filteredProjects.length > 0 && totalPages > 1 && (
        <Pagination className="mt-8 mb-16">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className={`cursor-pointer ${currentPage === 1 ? "pointer-events-none opacity-50" : ""}`}
              />
            </PaginationItem>

            {Array.from({length: totalPages}).map((_, i) => {
              const pageNumber = i + 1;
              // Show first page, last page, and pages around current page
              if (
                pageNumber === 1 ||
                pageNumber === totalPages ||
                (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
              ) {
                return (
                  <PaginationItem key={pageNumber}>
                    <PaginationLink
                      isActive={pageNumber === currentPage}
                      onClick={() => setCurrentPage(pageNumber)}
                      className="cursor-pointer">
                      {pageNumber}
                    </PaginationLink>
                  </PaginationItem>
                );
              }

              // Show ellipsis if there's a gap
              if (
                (pageNumber === 2 && currentPage > 3) ||
                (pageNumber === totalPages - 1 && currentPage < totalPages - 2)
              ) {
                return (
                  <PaginationItem key={pageNumber}>
                    <PaginationEllipsis />
                  </PaginationItem>
                );
              }

              return null;
            })}

            <PaginationItem>
              <PaginationNext
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                className={`cursor-pointer ${currentPage === totalPages ? "pointer-events-none opacity-50" : ""}`}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}

      {/* Adding extra space at the bottom */}
      <div className="h-1"></div>
    </div>
  );
};

export default ProjectsPage;
