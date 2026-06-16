"use strict";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const DEFAULT_HEADERS = {
  "Content-Type": "application/json; charset=UTF-8",
};

function validatePostPayload(payload) {
  if (!payload || typeof payload !== "object") {
    throw new TypeError("Post payload must be an object.");
  }

  if (typeof payload.title !== "string" || payload.title.trim() === "") {
    throw new TypeError("Post title must be a non-empty string.");
  }

  if (typeof payload.body !== "string" || payload.body.trim() === "") {
    throw new TypeError("Post body must be a non-empty string.");
  }

  if (!Number.isInteger(payload.userId) || payload.userId <= 0) {
    throw new TypeError("userId must be a positive integer.");
  }
}

async function createPost(postData) {
  validatePostPayload(postData);

  let response;

  try {
    response = await fetch(API_URL, {
      method: "POST",
      headers: DEFAULT_HEADERS,
      body: JSON.stringify(postData),
    });
  } catch (error) {
    throw new Error(`Network request failed: ${error.message}`);
  }

  if (!response.ok) {
    throw new Error(
      `API request failed (${response.status} ${response.statusText})`,
    );
  }

  return response.json();
}

async function main() {
  const postPayload = {
    title: "foo",
    body: "bar",
    userId: 1,
  };

  console.info("Creating post...");

  try {
    const createdPost = await createPost(postPayload);

    console.info("Post created successfully.");
    console.dir(createdPost, { depth: null });
  } catch (error) {
    console.error("Failed to create post:", error.message);
    process.exitCode = 1;
  }
}

main();
