import React from 'react'
import Post from "./Post"

const posts = [
    {
        id: '123',
        username: 'jimbo',
        userImg: 'https://links.papareact.com/jjm',
        img: 'https://links.papareact.com/jjm',
        caption: "leave a like and subscribe",
    },
    {
        id: '123',
        username: 'jimbo',
        userImg: 'https://links.papareact.com/jjm',
        img: 'https://links.papareact.com/jjm',
        caption: "leave a like and subscribe",
    },
    {
        id: '123',
        username: 'jimbo',
        userImg: 'https://links.papareact.com/jjm',
        img: 'https://links.papareact.com/jjm',
        caption: "leave a like and subscribe",
    }
]
function Posts() {
  return (
    <div>
        {/* Post */}
        {posts.map((post) => (
            <Post key={post.id} id={post.id}
            username={post.username}
            userImg={post.userImg}
            img={post.img}
            caption={post.caption}
            />
        ))}

    </div>
  )
}

export default Posts