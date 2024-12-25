import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../utils/commentSlice";
import Comment from "./Comment";
// const commentsData = [
//   {
//     name: "Vara Prasad",
//     text: "Lorem ipsum dolor sit amet, consectetur adip",
//     replies: [],
//   },
//   {
//     name: "Vara Prasad",
//     text: "Lorem ipsum dolor sit amet, consectetur adip",
//     replies: [
//       {
//         name: "Vara Prasad",
//         text: "Lorem ipsum dolor sit amet, consectetur adip",
//         replies: [],
//       },
//       {
//         name: "Vara Prasad",
//         text: "Lorem ipsum dolor sit amet, consectetur adip",
//         replies: [
//           {
//             name: "Vara Prasad",
//             text: "Lorem ipsum dolor sit amet, consectetur adip",
//             replies: [
//               {
//                 name: "Vara Prasad",
//                 text: "Lorem ipsum dolor sit amet, consectetur adip",
//                 replies: [
//                   {
//                     name: "Vara Prasad",
//                     text: "Lorem ipsum dolor sit amet, consectetur adip",
//                     replies: [
//                       {
//                         name: "Vara Prasad",
//                         text: "Lorem ipsum dolor sit amet, consectetur adip",
//                         replies: [],
//                       },
//                     ],
//                   },
//                   {
//                     name: "Vara Prasad",
//                     text: "Lorem ipsum dolor sit amet, consectetur adip",
//                     replies: [],
//                   },
//                 ],
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: "Vara Prasad",
//     text: "Lorem ipsum dolor sit amet, consectetur adip",
//     replies: [],
//   },
//   {
//     name: "Vara Prasad",
//     text: "Lorem ipsum dolor sit amet, consectetur adip",
//     replies: [],
//   },
//   {
//     name: "Vara Prasad",
//     text: "Lorem ipsum dolor sit amet, consectetur adip",
//     replies: [],
//   },
//   {
//     name: "Vara Prasad",
//     text: "Lorem ipsum dolor sit amet, consectetur adip",
//     replies: [],
//   },
// ];

// const Comment = ({ data }) => {
//   const { name, text } = data;
//   return (
//     <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
//       <img
//         className="w-12 h-12"
//         alt="user"
//         src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
//       />
//       <div className="px-3">
//         <p className="font-bold">{name}</p>
//         <p>{text}</p>
//       </div>
//     </div>
//   );
// };

// const CommentsList = ({ comments }) => {
//   return comments.map((comment) => (
//     <div key={`${comment.name}-${comment.text}`}>
//       <Comment data={comment} />
//       <div className="pl-5 border-l border-black ml-5">
//         {comment.replies.length > 0 && (
//           <CommentsList comments={comment.replies} />
//         )}
//       </div>
//     </div>
//   ));
// };

const CommentsContainer = () => {
  const dispatch = useDispatch();
  const commentValue = useRef();

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const commentText = commentValue.current.value.trim();
    if (commentText) {
      dispatch(addComment(commentText));
      commentValue.current.value = "";
    }
  };

  return (
    <div className="m-5 p-2 h-96 overflow-scroll">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <form onSubmit={handleCommentSubmit} className="mb-4">
        <input
          ref={commentValue}
          className="p-3 border border-indigo-100 w-full"
          type="text"
          placeholder="Add your comment here..."
        />
      </form>
      {/* <CommentsList comments={commentsData} /> */}
      <Comment />
    </div>
  );
};

export default CommentsContainer;
