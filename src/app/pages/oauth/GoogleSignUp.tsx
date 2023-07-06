import React, { useEffect } from 'react';
import api from 'app/api/tiddix';
import { useSearchParams } from 'react-router-dom';

export default function GoogleSignUp() {
  const [searchParams] = useSearchParams();
  const state = searchParams.get('state');
  const code = searchParams.get('code');
  const scope = searchParams.get('scope');
  const authUser = searchParams.get('authuser');
  const prompt = searchParams.get('prompt');

  useEffect(() => {
    const url = `/google/oauthcallback?state=${state}&code=${code}&scope=${scope}&authuser=${authUser}&prompt=${prompt}`;
    const urlParams = window.location.href.split('?');
    const params = urlParams[1];

    api
      .get(`/google/oauthcallback?${params}`)
      .then(() => {
        console.log('SUCCESS');
      })
      .catch(() => {
        console.log('SOMETHING WENT WRONG');
      });
  }, []);
  return <div>Google state</div>;
}
// http://localhost:3000/google/oauthcallback?state=19WlCX3h9aGXUfK9gA7ORCTP9lM8Qc&code=4%2F0AZEOvhX3U2d5vPg816mE0Tm6jt2NZQo60a35WHi7AODdmdZDBXV5lS9zQ9WnxHhcUgBV2Q&scope=email+profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+openid&authuser=0&prompt=consent

// get request endpoint//google/oauthcallback
