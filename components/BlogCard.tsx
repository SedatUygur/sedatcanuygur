import Image from "next/image";
import Link from "next/link";

export function BlogCard() {
  return (
    <article className="p-4 bg-white rounded shadow">
      <Image
        alt="Post Image"
        className="w-full h-auto rounded-md"
        height={200}
        src="/placeholder.svg"
        style={{
          aspectRatio: "300/200",
          objectFit: "cover",
        }}
        width={300}
      />
      <h3 className="text-xl font-bold mt-4">Post Title</h3>
      <p className="text-gray-500">Post Description...</p>
      <Link className="text-blue-500 hover:underline" href="#">
        Read More
      </Link>
    </article>
  );
}
