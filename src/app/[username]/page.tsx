
async function UsersPage(UsersProps: {params: Promise<{username: string}>, searchParams: Promise<{model?: string}>}) {
    const params = await UsersProps.params
    const sParams = await UsersProps.searchParams;

    console.log(sParams.model?.toLowerCase(), "props")

    console.log(params.username);
    // Fetch user data from your API here and display it
    // Example:
    // const userData = await fetch(`https://api.example.com/users/${params.username}`)
    //    .then(response => response.json());
    // return (
    //   <div>
    //     <h2>User: {userData.name}</h2>
    //     <p>Email: {userData.email}</p>
    //   </div>
    // );
  return (
   <div>UsersPage</div>
  );
 }

export default UsersPage;