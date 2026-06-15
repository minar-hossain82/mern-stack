"use strict";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

async function createPost(postData) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(postData),
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
}

async function main() {
  const postPayload = {
    title: "foo",
    body: "bar",
    userId: 1,
  };

  try {
    console.log("Creating post...");

    const createdPost = await createPost(postPayload);

    console.log("Post created successfully:");
    console.log(createdPost);
  } catch (error) {
    console.error("Application error:", error.message);
    process.exitCode = 1;
  }
}

main();
