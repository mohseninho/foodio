"use client";
import { usePathname } from "next/navigation";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { UrlEquivalent } from "@/app/constants/urlEquivalents";

export default function BreadCrumb() {
    const paths = usePathname();
    const pathNames = paths.split("/").filter((path) => path);
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">فودیو</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                    <ChevronLeft />
                </BreadcrumbSeparator>
                {pathNames
                    .filter((item) => item !== "service")
                    .map((path, idx) => (
                        <div
                            key={idx}
                            className="flex justify-between items-center gap-2"
                        >
                            <BreadcrumbItem>
                                <Link
                                    href={`
                                        /${
                                            UrlEquivalent.find(
                                                (item) => item.eng_link === path
                                            )?.link
                                        } `}
                                    className={`transition-colors ${
                                        idx + 1 === paths.length
                                            ? "text-gray-600"
                                            : "text-gray-400"
                                    } hover:text-black`}
                                >
                                    {
                                        UrlEquivalent.find(
                                            (item) => item.eng_link === path
                                        )?.persian_link
                                    }
                                </Link>
                            </BreadcrumbItem>

                            {/* {idx + 1 !== paths.length && (
                            <BreadcrumbSeparator>
                                <ChevronLeft />
                            </BreadcrumbSeparator>
                        )} */}
                        </div>
                    ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
}
