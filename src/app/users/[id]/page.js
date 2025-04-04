import Link from "next/link";

// Function to get user data
const getUsers = async (id) => {
    const res = await fetch(`http://localhost:3001/api/users/${id}`, { cache: "no-store" });
    if (!res.ok) {
        throw new Error("Failed to fetch user");
    }
    return res.json();
};

// Corrected default function
export default async function UserPage({ params }) {
    const userId = parseInt(params.id, 10); 
    if (isNaN(userId)) {
        return <h1>Invalid User ID</h1>;
    }

    const data = await getUsers(userId);

    return (
        <div>
            <h1>This is a user's detail page</h1>
            <h4>{data.name}</h4>
        </div>
    );
}
