const getPosts = async() => {
    const resposne = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    const data = await resposne.json();
    return data
}
export default getPosts;