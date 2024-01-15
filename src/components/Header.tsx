import Link from "next/link";
import { useRouter } from "next/router";
import React, { ChangeEvent, useState } from "react";

type Props = {};

const Header = (props: Props) => {
  const [searchkey, setSearchKey] = useState<string>()
  const router = useRouter()
  const navigateToSearchPage = () => {
    router.push(`/search?q=${searchkey}`)
  }

  return (
    <section className="max-w-[1274px] mx-auto flex justify-between pt-6">
      <div className="flex items-center gap-[90px]">
        <Link href={"/"} className="text-white text-[32px] font-bold">
          MovieBox
        </Link>
        <ul className="flex justify-center items-center  gap-8">
          <li>
            <Link href="/" className="text-[#868686]">
              Home
            </Link>
          </li>
          <li>
            <Link href="/movie" className="text-[#868686]">
              Movies
            </Link>
          </li>
          <li>
            <Link href="/tv_series" className="text-[#868686]">
              TV series
            </Link>
          </li>
          <li>
            <Link href="/actor" className="text-[#868686]">
              Actors
            </Link>
          </li>
        </ul>
      </div>
      <input
        placeholder="Search movie or tv series"
        value={searchkey}
        className="w-[374px] rounded-[37px] bg-[#374151] placeholder:text-[#868686] 
        placeholder:text-base font-normal focus:outline-none focus:text-white py-2 pl-[18px]"
        onChange={({ target }: ChangeEvent<HTMLInputElement>) => setSearchKey(target.value)}
      />
      <button onClick={navigateToSearchPage}>Tìm kiếm</button>
    </section>
  );
};

export default Header;
