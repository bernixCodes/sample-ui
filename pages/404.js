import Link from "next/Link";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

function NotFound() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="flex flex-col items-center py-60 gap-y-8">
      <h1 className="font-bold text-2xl">Ooooopps...</h1>
      <h2 className="font-bold text-xl">That page cannot be found.</h2>
      <p>
        Go back to the
        <Link href={"/"}>
          <a className="underline text-blue-600"> Homepage</a>
        </Link>
      </p>
    </div>
  );
}

export default NotFound;
