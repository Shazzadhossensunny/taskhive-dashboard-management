import React, { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { User } from "lucide-react";

const CommentItem = ({ comment }) => {
  const { darkMode } = useAppContext();

  return (
    <div className="flex space-x-3 py-4">
      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
        <User className="text-white" size={16} />
      </div>
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`font-medium text-sm ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {comment.user}
          </span>
          <span
            className={`text-xs ${
              darkMode ? "text-gray-500" : "text-gray-500"
            }`}
          >
            {new Date(comment.timestamp).toLocaleString()}
          </span>
        </div>
        <p className={`mt-1 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
          {comment.text}
        </p>
      </div>
    </div>
  );
};

const CommentSection = ({ comments, onAddComment }) => {
  const [newComment, setNewComment] = useState("");
  const { darkMode } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      onAddComment(newComment.trim());
      setNewComment("");
    }
  };

  return (
    <>
      <h2
        className={`text-lg font-bold mb-4 ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        Comments ({comments.length})
      </h2>

      {/* Add Comment */}
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
            <User className="text-white" size={16} />
          </div>
          <div className="flex-1">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              rows={3}
              className={`w-full px-3 py-2 rounded-lg border ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  : "bg-white border-gray-300 placeholder-gray-500"
              } focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none`}
            />
            <div className="flex justify-end mt-2">
              <button
                type="submit"
                disabled={!newComment.trim()}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  newComment.trim()
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : darkMode
                    ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }`}
              >
                Add Comment
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Comments List */}
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))
        ) : (
          <div className="py-8 text-center">
            <p className={`${darkMode ? "text-gray-500" : "text-gray-400"}`}>
              No comments yet. Be the first to add one!
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default CommentSection;
