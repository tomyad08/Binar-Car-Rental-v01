import axios from "axios";
import react, { useState } from "react";
import { useEffect } from "react";

const baseURL = "http://localhost:3000/keranjangs";

export default function NyobaPost() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    DataNih();
  }, []);

  const DataNih = async () => {
    try {
      const { data } = await axios.get(`${baseURL}`);
      setPost(data);
    } catch (error) {
      console.log("error ambil data nih");
    }
  };

  const updatePost = async () => {
    try {
      await axios.put(`${baseURL}`, {
        nama: "Hello World!",
      });
    } catch (error) {
      console.log("error di put");
    }
  };

  if (!post) return "No post!";
  console.log(post);
  return (
    <div>
      <h1>{JSON.stringify(post)}</h1>
      {/* <p>{post.body}</p> */}
      <button onClick={updatePost}>Update Post</button>
    </div>
  );
}
