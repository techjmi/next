import Link from "next/link";

const getUsers = async () => {
    const res = await fetch(`/api/users`);
    const data = await res.json();
    return data;
    console.log(data)
};

export default  async function GetUsers(){
    const data= await getUsers()
    // console.log(data)
    return(
        <div>
            <h1>this is a users list page
            </h1>
            {data.map((user)=>(
                <div key={user.id}>
                     <Link href={`/users/${user.id}`}>{user.name}</Link>
                </div>
            ))}
        </div>
    )
}