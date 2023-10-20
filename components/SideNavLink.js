import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

const SideNavLink = ({ blok, full_slug }) => {
  // console.log("sub menu full_slug", full_slug);
  const isActive = full_slug == blok.link.cached_url;
  return (
    <li className="block mb-4">
      <Link
        href={`/${blok.link.cached_url}`}
        className={`menulinks text-lg md:text-base font-medium hover:text-gray-900 ${
          isActive ? "text-[#A82A00]" : "text-black"
        }`}
      >
        <span className="flex xl:items-center space-x-1">
          <FaAngleRight className="mt-[5px] xl:mt-0"/> {blok.name}
        </span>
      </Link>
    </li>
  );
};
export default SideNavLink;
