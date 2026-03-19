const API_URL = "https://jsonplaceholder.typicode.com/posts";

async function createPost() {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error creating post:", error.message);
    throw error;
  }
}

async function main() {
  try {
    console.log("Fetching data...");

    const data = await createPost();
    console.log("Response:", data);

    console.log("Processing complete.");
  } catch (error) {
    console.error("Application error:", error.message);
  }
}

main();
