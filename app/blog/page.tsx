
async function fetchData(){
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json()
}

export default async function Blog() {
const posts = await fetchData()

  return (<>
  <h1 className="title">Blog</h1>
  <ul>
    {posts.map((post: any)=>{
      <li>
        <link href={`/blog/${post.id}`}></link>
      </li>
    })}
  </ul>
  </>);
}
