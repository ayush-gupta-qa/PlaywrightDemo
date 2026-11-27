import { test, expect } from '@playwright/test';

test.describe('REST API Testing with Playwright', () => {

  // -------------------------------------------------------------
  // 1. GET Request: Fetch posts and verify status + response body
  // -------------------------------------------------------------
  test('1. GET - read single post and verify JSON response', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

    // Check status code is 200 OK
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();

    // Parse response body into a JavaScript object
    const responseBody = await response.json();
    console.log('GET Response:', responseBody);

    // Assert JSON properties
    expect(responseBody.id).toBe(1);
    expect(responseBody.userId).toBe(1);
    expect(typeof responseBody.title).toBe('string');
  });
  });

  // -------------------------------------------------------------
  // 2. POST Request: Create a new resource with a JSON payload
  // -------------------------------------------------------------
  test('2. POST - create new post with payload', async ({ request }) => {
    const newPostPayload = {
      title: 'Learning Playwright API Testing',
      body: 'Playwright handles both UI and API seamlessly.',
      userId: 101,
    };

    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
      data: newPostPayload,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // 201 Created is the standard status code for successful creation
    expect(response.status()).toBe(201);

    const responseBody = await response.json();
    console.log('POST Response:', responseBody);

    // Verify created data matches what we sent
    expect(responseBody.title).toBe(newPostPayload.title);
    expect(responseBody.body).toBe(newPostPayload.body);
    expect(responseBody).toHaveProperty('id');
  });

  // -------------------------------------------------------------
  // 3. PUT Request: Update an existing resource
  // -------------------------------------------------------------
  test('3. PUT - update existing post', async ({ request }) => {
    const updatedData = {
      id: 1,
      title: 'Updated Title',
      body: 'Updated description body',
      userId: 1,
    };

    const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
      data: updatedData,
    });

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody.title).toBe('Updated Title');
  });

  // -------------------------------------------------------------
  // 4. DELETE Request: Remove a resource
  // -------------------------------------------------------------
  test('4. DELETE - delete post by ID', async ({ request }) => {
    const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');

    // Standard success status code for delete (200 or 204)
    expect(response.status()).toBe(200);
  });


