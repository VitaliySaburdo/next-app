export const getPosts = async () => {
    const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  return response.json();  
}