"use strict";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const createPost = async (postData) => {
  try {
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

    return await response.json();
  } catch (error) {
    console.error("Error creating post:", error.message);
    throw error;
  }
};

const main = async () => {
  try {
    console.log("Creating post...");

    const postPayload = {
      title: "foo",
      body: "bar",
      userId: 1,
    };

    const createdPost = await createPost(postPayload);

    console.log("Post created successfully:");
    console.log(createdPost);

    console.log("Processing complete.");
  } catch (error) {
    console.error("Application error:", error.message);
  }
};

main();
