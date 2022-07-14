# DOKUMENTASI SERVER
- URL:
    - http_method: GET
    - `http://movie-app-g2.herokuapp.com/vehicles`
  - Expected response (status: `200`):
    ```json
      {
        "_id": "...",
        "type_of_vehicle": "...",
        "image": "...",
        "price": "...",
        "status": true/false 
      }
    ```

- URL:
    - http_method: PATCH
    - `http://movie-app-g2.herokuapp.com/vehicles/:id`
    - body: 
        ```json
        { "status": "..." }
        ```
  - Expected response (status: `200`):
    ```json
      {
        "message": "success to updated" 
      }
    ```

# REQUIREMENT
1. Buatlah App React Native dengan mengimplementasikan React Redux dan Redux Thunk
2. Data dapat fetch dari API di atas
3. Pada masing-masing data vehicle, dapat di delete (delete dari state store saja karna tidak ada API untuk DELETE-nya)