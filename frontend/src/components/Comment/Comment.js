import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
    Box,
    Button,
    Modal,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import { useMatch } from "react-router-dom";
import commentApi from "../../api/commentApi";
import { useSelector } from "react-redux";
import { userInfor } from "../../store/Selectors";
import { userid } from "../../store/Selectors";
import "./Comment.css";

// Giao diện modal
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

// Component hiển thị từng comment
const CommentItem = ({ comment, handleReplyComment }) => (
    <Paper className="comment-item">
        <Typography className="comment-author">{comment.author}</Typography>
        <Typography className="comment-date">{comment.date}</Typography>
        <Typography className="comment-content">{comment.content}</Typography>
        <Button className="comment-reply-button" onClick={() => handleReplyComment(comment.author, comment.id)}>
            Trả lời
        </Button>
        {comment.replies?.length > 0 && (
            <Box className="comment-replies">
                {comment.replies.map((reply, index) => (
                    <CommentItem
                        key={index}
                        comment={reply}
                        handleReplyComment={handleReplyComment}
                    />
                ))}
            </Box>
        )}
    </Paper>

);

CommentItem.propTypes = {
    comment: PropTypes.object.isRequired,
    handleReplyComment: PropTypes.func.isRequired,
};

// Component chính: hiển thị và gửi bình luận
function CommentSection({ data }) {
    const match = useMatch("/products/:productId");
    const {
        params: { productId },
    } = match;

    const user = useSelector(userInfor);
    const userId = user?.id;
    const userName = user?.userName|| "Ẩn danh";
    // const userId = useSelector(userid);
    const [commentsData, setCommentsData] = useState(data);
    const [question, setQuestion] = useState("");
    const [question1, setQuestion1] = useState("");
    const [error, setError] = useState("");
    const [error1, setError1] = useState("");
    const [open, setOpen] = useState(false);
    const [author, setAuthor] = useState("");
    const [parentId, setParentId] = useState(null);

    useEffect(() => {
        setCommentsData(data);
    }, [data]);

    const handleClose = () => setOpen(false);

    const handleReplyComment = (author, id) => {
        setOpen(true);
        setAuthor(author);
        setParentId(id);
    };

    const handleInputChange = (event) => {
        setQuestion(event.target.value);
        if (event.target.value) setError("");
    };

    const handleInputChange1 = (event) => {
        setQuestion1(event.target.value);
        if (event.target.value) setError1("");
    };

    const handleSubmitComment = async () => {
        if (!question.trim()) {
            setError("Câu hỏi không được để trống");
            return;
        }
        if (!userId) {
            setError("Yêu cầu đăng nhập");
            return;
        }
        const commentData = {
            content: question,
            productId,
            parentCommentId: "",
            userId,
            author: userName,
        };
        try {
            const res = await commentApi.createComment(commentData);
            if (res.status === "success") {
                const updated = await commentApi.getComments(productId);
                setCommentsData(updated);
                setQuestion("");
            } else {
                alert("Comment thất bại: " + res.message);
            }
        } catch (error) {
            console.error("Lỗi đăng bình luận:", error);
            alert("Đã xảy ra lỗi trong quá trình đăng bình luận");
        }
    };

    const handleSubmitReplyComment = async () => {
        if (!question1.trim()) {
            setError1("Câu trả lời không được để trống");
            return;
        }
        if (!userId) {
            setError1("Yêu cầu đăng nhập");
            return;
        }
        const replyCommentData = {
            content: question1,
            productId,
            parentCommentId: "",
            userId,
            author: userName,
        };
        try {
            const res = await commentApi.replyComment(parentId, replyCommentData);
            if (res.status === "success") {
                const updated = await commentApi.getComments(productId);
                setCommentsData(updated);
                setQuestion1("");
                setOpen(false);
            } else {
                alert("Comment thất bại: " + res.message);
            }
        } catch (error) {
            console.error("Lỗi đăng trả lời:", error);
            alert("Đã xảy ra lỗi trong quá trình đăng trả lời");
        }
    };

    return (
        <Box padding="24px 0px">
            <Box>
                {commentsData &&
                    commentsData.map((comment, index) => (
                        <CommentItem
                            key={index}
                            comment={comment}
                            handleReplyComment={handleReplyComment}
                        />
                    ))}
                <Box className="comment-box">
                    <TextField
                        className="comment-textfield"
                        label="Viết câu hỏi của bạn"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        value={question}
                        onChange={handleInputChange}
                        error={!!error}
                        helperText={error}
                    />
                    <Button
                        className="comment-button"
                        variant="contained"
                        color="primary"
                        onClick={handleSubmitComment}
                    >
                        Gửi câu hỏi
                    </Button>
                </Box>

            </Box>
            <Modal open={open} onClose={handleClose}>
                <Box className="reply-modal">
                    <Typography>Trả lời "{author}"</Typography>
                    <TextField
                        label="Viết câu trả lời của bạn"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        value={question1}
                        onChange={handleInputChange1}
                        error={!!error1}
                        helperText={error1}
                        sx={{ marginTop: '8px' }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ marginTop: "8px" }}
                        onClick={handleSubmitReplyComment}
                    >
                        Gửi trả lời
                    </Button>
                </Box>
            </Modal>

        </Box>
    );
}

CommentSection.propTypes = {
    data: PropTypes.array.isRequired,
};

export default CommentSection;
