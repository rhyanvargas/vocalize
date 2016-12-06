import axios from 'axios';


export const FETCH_POSTS = 'FETCH_POSTS';

const API = 'http://localhost:3000/api';

export function fetchPosts() {
  // TODO: FIX API, REPLACE STATIC WITH THIS CALL INSTEAD
  //const posts = axios.get(API);

  const posts = [
    {
      user: 'randomuser1435',
      audio: 'audio file here',
      date: 'date time',
      upvotes: 12,
      downvotes: 5
    },
    {
      user: 'randomuser2756',
      audio: 'audio file here',
      date: 'date time',
      upvotes: 12,
      downvotes: 5
    },
    {
      user: 'randomuser312',
      audio: 'audio file here',
      date: 'date time',
      upvotes: 12,
      downvotes: 5
    }
  ];

  return {
    type: FETCH_POSTS,
    payload: posts
  }
}
