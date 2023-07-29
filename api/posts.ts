import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/';

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export function getPosts(): Promise<Post[]> {
  return axios.get(BASE_URL + 'posts/').then((res) => res.data);
}
export function getPost(id: number): Promise<Post> {
  return axios.get(BASE_URL + 'posts/' + id).then((res) => res.data);
}
