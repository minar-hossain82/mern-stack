"use strict";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const HTTP_METHOD = Object.freeze({
  POST: "POST",
});

const DEFAULT_HEADERS = Object.freeze({
  "Content-Type": "application/json; charset=UTF-8",
});

/**
 * Validate post payload.
 * @param {Object} payload
 */
function validatePostPayload(payload) {
  if (!payload || typeof payload !== "object") {
    throw new TypeError("Post payload must be an object.");
  }

  const { title, body, userId } = payload;

  if (typeof title !== "string" || title.trim().length === 0) {
    throw new TypeError("Post title must be a non-empty string.");
  }

  if (typeof body !== "string" || body.trim().length === 0) {
    throw new TypeError("Post body must be a non-empty string.");
  }

  if (!Number.isInteger(userId) || userId <= 0) {
    throw new TypeError("userId must be a positive integer.");
  }
}

/**
 * Create a new post.
 * @param {Object} postData
 * @returns {Promise<Object>}
 */
async function createPost(postData) {
  validatePostPayload(postData);

  let response;

  try {
    response = await fetch(API_URL, {
      method: HTTP_METHOD.POST,
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

  try {
    return await response.json();
  } catch {
    throw new Error("Failed to parse API response.");
  }
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

void main();
