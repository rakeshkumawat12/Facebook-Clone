import React, { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import './feed.css'
import Post from '../post/Post'
import Stories from '../stories/Stories'
import Share from '../share/Share'
import { db } from "../../firebase";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unSub = onSnapshot(collection(db, "posts"), (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
    return () => {
      unSub();
    };
  }, []);

  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Stories />
        <Share />
        {posts
          .sort((a, b) => b.data.timestamp - a.data.timestamp)
          .map((p) => (
            <Post key={p.id} post={p} />
          ))}
      </div>
    </div>
  )
}

export default Feed