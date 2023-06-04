import { useState } from "react";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        background: "rgba(0,0,0,.3)",
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="spinner">
        <FaSpinner />
      </div>
    </div>
  );
};

export default function ProfielScreen() {
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadImg = (e) => {
    setLoading(true);
    const fd = new FormData();
    fd.append("image", e.target.files[0]);
    axios
      .post("http://localhost:8080/files", fd, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setImg(res.data.secure_url);
        setLoading(false);
      });
  };
  return (
    <>
      <div className="container-sm body-container my-5">
        <div
          style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            backgroundColor: "#ccc",
            overflow: "hidden",
            border: "1px solid #f0f0f0",
            position: "relative",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            src={img}
            alt=""
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src =
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIsAAACLCAMAAABmx5rNAAAAMFBMVEXk5ueutLfp6+ymrbCrsbTBxsjT1tjX2tzGyszJzc/a3d6yuLu4vcC7wMPf4eLO0tRx/FlkAAAC+ElEQVR4nO2a0ZKrIAyGIQKCKL7/2y5tbbfbVk2oicws/8XZPTN78c1PEkOCUk1NTU1NTU1NTU1NTU1N/0Vw/wmbf8YvUH2w05g1+Xk4EQeGeeyMMfqq/IuZnDoFB5LVC8ZDxkR/Ckn3SrLgBGmU8ObJL00cRFnsKsmVJshFTVo3ZYGZpFCGbRBJmLSPkmFGEZSd85F0ZkShSAQwbGfQHxjHzOLQKBmGFwXwJJnFc54SeIItGaZnZEmRgpJzic8YCCRbeI2hkWQWy4ZCSaIFho0FX1seLDMXC5Ukiyt6h47OEhMLCrG43MSUSYD9Kv5hYQoYWqFbWCxLwAwlLHrkYSlB0ZqFpS8I3XxIFbF0jeWjmM6oBIWJpaY8IjZ1i3jqS011t6bvUdF3WjN1vBX1L1X1dVX1uzXdA2q6H9HvjYwTzYru01RjOG3JMBRjeOcvxMaBlYQ2r+OcBN1UzxxTYVsHxtLyJFR/Z5h6qFchhvAyrlxh4t6eRAxF1bQ/yqnt1q0xbP3TGsz6vpGtZdmgUT4a8woyzufsqEG56bqX1vd/bX/OfnrB6Wdvpyzr3Zl7+xvNk06lUIObg/fWWu/D7Pok/8ICVMpHM+muuzxneFL+f7TBJbGoSc7HqF9T6CmXTIx2Zq8xAEMYzefC8pbd1nEeWArrdnw0iCvHIRcT6l0tu3P8qw9QYe/bvIpjhyO9gRQIZ/NGo+1xdxOYCz158uaYuNlqDwg0R8RNog86PtOM34YNOHLurNN8+azrIFMWmK+sGY9EuWRUXwgDZUP3TXVlXXkOFQYVzR6gbC3CAQP0OSEWhjyVZ4iVBwyx7KHerRXD0O4tResZvAhTIpi4guUuvDGuYAlBEj5+yxZoNBjk2zvCeLBcEccyCKAgRzT8gXuDwdiSuAN3YUEYIxItFyGmVwJJdBNiLD4L2YJY6MAkhIKIXpCyBXFITB3UR5adrgrEwiVr73V60TuBQu0925cLXb27d4udoHaqHUhqx5empqampqYz9AOGsSRnmF9oWgAAAABJRU5ErkJggg==";
            }}
          />
          <input
            type="file"
            onChange={uploadImg}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              top: 0,
              opacity: 0,
              cursor: "pointer",
            }}
          />
          {loading && <Loading />}
        </div>
      </div>
    </>
  );
}
