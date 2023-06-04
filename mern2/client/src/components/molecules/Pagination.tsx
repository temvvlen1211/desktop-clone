import { nanoid } from "nanoid";
import { FC } from "react";
import { PaginationItem } from "../atoms/PaginationItem";
import Link from "next/link";

interface PaginationProps {
  total: number;
  page: number;
  size: number;
  baseUrl: string;
}

export const Pagination: FC<PaginationProps> = (props) => {
  const { total, page, size, baseUrl } = props;
  const totalPages = Math.ceil(total / size);
  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex justify-center w-full items-center -space-x-px">
        {Array.from(Array(totalPages), (el, index) => {
          const thisPage = index + 1;
          const isFirst = index === 0;
          const isLast = index === totalPages - 1;
          return (
            <PaginationItem
              isFirst={isFirst}
              isLast={isLast}
              key={nanoid()}
              active={thisPage === +page}
              as={Link}
              href={`${baseUrl}?size=${size}&page=${thisPage}`}
            >
              {thisPage}
            </PaginationItem>
          );
        })}
      </ul>
    </nav>
  );
};
