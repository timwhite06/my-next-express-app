export async function serverSideFetch() {
  console.log('this ran');
  try {
    const res = await fetch('http://localhost:3001/api/mockData');
    const result = await res.json();

    const resDb = await fetch('http://localhost:3001/api/data');
    const resultDb = await resDb.json();
    return { mock:  result , db: resultDb};
  } catch (error) {
    console.error('Error fetching data:', error);
    return { props: { repo: null } };
  }
}

export default async function Page() {
  const allMyData = await serverSideFetch()
  return (
    <main>
      <h1>Mock Data Fetch - Server Side</h1>
      {allMyData.mock.data.map((x)=>(<p>{x.name}</p>))}
      <div style={{padding: "30px"}}>--------------------</div>
      <h1>Database Data Fetch - Server Side</h1>
      {allMyData.db.map((x)=>(<p>{x.id}</p>))}
    </main>
  );
}
