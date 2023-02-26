import { useEffect, useState } from 'react';
import { getComments, createComment } from '../services/Comments';

function Comments(props) {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    const fetchComments = async () => {
      const commentsData = await getComments(props.match.params.postId);
      setComments(commentsData);
    };
    fetchComments();
  }, [props.match.params.postId]);

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    const newComment = await createComment(props.match.params.postId, {
      text: commentText,
    });
    setComments([...comments, newComment]);
    setCommentText('');
  };

  return (
    <div>
      <form onSubmit={handleCommentSubmit}>
        <input
          type="text"
          value={commentText}
          onChange={(event) => setCommentText(event.target.value)}
        />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}

export default Comments;