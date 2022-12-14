import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sample UI | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-2xl font-bold">HomePage</h1>
      <p className="pt-5">
        Nulla id velit deserunt ipsum ipsum nostrud veniam labore pariatur.
        Laboris ut officia proident anim consequat sunt esse. Et duis elit
        consectetur consequat non culpa est magna ut commodo. Deserunt consequat
        culpa laboris veniam amet veniam magna quis. Laboris adipisicing est
        dolor veniam duis eiusmod aliqua fugiat excepteur ad minim cupidatat.
        Sint occaecat ut dolor incididunt laboris commodo ut sint et proident
        culpa sit officia. Consequat labore nisi non labore culpa cupidatat anim
        laboris enim eu. Velit dolor qui aliqua ex velit cupidatat. Nulla do
        consequat esse voluptate. Ut nisi laborum nisi quis ullamco est
        consectetur tempor adipisicing dolor fugiat ipsum qui. Esse laborum
        dolore laboris qui id ut reprehenderit laborum. Proident sit ad aute
        cillum nisi esse esse magna magna consequat esse duis voluptate. Non et
        nostrud proident labore fugiat cupidatat elit consequat nostrud
        reprehenderit deserunt. Consectetur irure esse labore eiusmod aute esse
        elit velit enim. Officia officia do dolor cillum pariatur laborum
        mollit. Ullamco enim tempor magna labore nostrud esse consectetur sunt
        do. Irure cillum tempor duis occaecat minim pariatur laborum nostrud et
        magna non laborum. Velit laborum non labore ullamco ipsum veniam mollit
        cillum excepteur in ad. Eiusmod dolor eu adipisicing ad esse nulla enim
        eiusmod adipisicing minim sunt. Veniam ut eiusmod do irure proident
        tempor non aliqua adipisicing aliqua consequat. Sunt culpa magna sint
        veniam cupidatat velit pariatur.
      </p>
      <p className="py-3">
        Incididunt nisi dolore sint laboris eiusmod quis proident Lorem do
        aliqua culpa. Ex in aute in non. Aliqua commodo id sit dolor ea
        excepteur laborum. Eu id Lorem incididunt ullamco. Occaecat in aliqua
        enim ex cillum qui elit ea exercitation eu pariatur elit ex. Est amet
        sunt quis est irure incididunt aute nulla cillum do officia consectetur
        nisi proident. Veniam eu fugiat ipsum velit voluptate eu exercitation
        proident mollit. Adipisicing ipsum deserunt sit ex ipsum ex exercitation
        labore excepteur. Et ipsum anim consectetur ullamco adipisicing proident
        occaecat excepteur culpa veniam est enim cupidatat. Lorem adipisicing
        velit amet officia proident consequat. Sit nulla eiusmod adipisicing
        sint incididunt laborum et sint Lorem voluptate. Tempor tempor qui in
        cupidatat aliqua esse quis magna Lorem qui occaecat minim.
      </p>
      <div className="flex items-center justify-center">
        <Link href={"/postings"}>
          <a className=" py-3 px-6 bg-blue-500 w-fit rounded-full  text-white hover:opacity-50">
            See Postings
          </a>
        </Link>
      </div>
    </div>
  );
}
