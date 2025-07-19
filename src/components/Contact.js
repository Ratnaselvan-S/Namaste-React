import { useState } from "react";

const COMMENTS = [
  {
    name: "Ratna",
    message: "I am a super start",
    replies: [
      {
        name: "Ratna",
        message: "I am a super start",
        replies: [
          { name: "Ratna", message: "I am a super start" },
          { name: "Ratna", message: "I am a super start" },
          { name: "Ratna", message: "I am a super start" },
          { name: "Ratna", message: "I am a super start" },
        ],
      },
      { name: "Ratna", message: "I am a super start" },
      { name: "Ratna", message: "I am a super start" },
      {
        name: "Ratna",
        message: "I am a super start",
        replies: [
          {
            name: "Ratna",
            message: "I am a super start",
            replies: [
              {
                name: "Ratna",
                message: "I am a super start",
                replies: [
                  {
                    name: "Ratna",
                    message: "I am a super start",
                    replies: [
                      {
                        name: "Ratna",
                        message: "I am a super start",
                        replies: [
                          {
                            name: "Ratna",
                            message: "I am a super start",
                            replies: [
                              { name: "Ratna", message: "I am a super start" },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              { name: "Ratna", message: "I am a super start" },
            ],
          },
        ],
      },
      { name: "Ratna", message: "I am a super start" },
    ],
  },
  { name: "Ratna", message: "I am a super start" },
  { name: "Ratna", message: "I am a super start" },
];

const Comments = ({ data }) => {
  const { name, message } = data;
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: " rgb(201, 200, 200)",
        margin: "3px",
        width: "50%",
      }}
    >
      <img
        src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
        height={"50px"}
        width={"50px"}
      />
      <div>
        <h3>{name}</h3>
        <p>{message}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  const [showreplies, setShowReplies] = useState(false);
  return comments.map((data, index) => {
    return (
      <div>
        <Comments data={data} />
        <div style={{ borderLeft: "1px solid black", paddingLeft: "20px" }}>
          {data.replies && (
            <div onClick={() => setShowReplies(true)}>
              <p style={{ cursor: "pointer" }}>
                {!showreplies && "Show replies"}
              </p>

              {showreplies && <CommentList comments={data.replies} />}
            </div>
          )}
        </div>
      </div>
    );
  });
};

const Contact = () => {
  return (
    <div>
      <CommentList comments={COMMENTS} />
    </div>
  );
};

export default Contact;
