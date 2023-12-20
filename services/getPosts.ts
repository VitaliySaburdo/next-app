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

export const getPostsBySearch = async (search: string) => {
  const response = await fetch(
  `https://jsonplaceholder.typicode.com/posts?q=${search}`,
  {
    next: {
      revalidate: 60,
    },
  }
);
return response.json();  
}