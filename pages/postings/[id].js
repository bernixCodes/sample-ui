import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await result.json();

  const paths = data.map((user) => {
    return {
      params: { id: user.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();
  console.log(data);
  return {
    props: { data: data },
  };
};
const Details = ({ data }) => {
  return (
    <>
      <div className="py-10">
        <h1 className="text-2xl font-bold pb-2">{data.name}</h1>
        <p className="text-xl pb-2">{data.email}</p>
        <p className="text-xl pb-2">{data.website}</p>
        <p className="text-xl pb-2">{data.phone}</p>
      </div>
    </>
  );
};

export default Details;
