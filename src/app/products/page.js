import Link from "next/link";

const fetchProducts = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);
    const data = await res.json();
    return data.result;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export default async function ProductsPage() {
  const data = await fetchProducts();

  return (
    <div className="mx-8">
      <h1 className="text-xl font-bold mb-4 text-center">Products List</h1>
      <table className="border-collapse border border-gray-300 w-full">
        <thead>
          <tr className="bg-gray-200">
            {/* <th className="border border-gray-300 p-2">ID</th> */}
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Price</th>
            <th className="border border-gray-300 p-2">Category</th>
            <th className="border border-gray-300 p-2">Company</th>
            <th className="border border-gray-300 p-2">Edit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <tr key={product._id} className="text-center">
              {/* <td className="border border-gray-300 p-2">{product._id}</td> */}
              <td className="border border-gray-300 p-2">{product.name}</td>
              <td className="border border-gray-300 p-2">${product.price}</td>
              <td className="border border-gray-300 p-2">{product.category}</td>
              <td className="border border-gray-300 p-2">{product.company}</td>
              <td className="border border-gray-300 p-2">
                <Link href={`/products/${product._id}`}>View Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
