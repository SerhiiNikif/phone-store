import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_STAGE === "development" ? process.env.REACT_APP_API_URL : process.env.REACT_APP_VERSEL_URL;

const FullPhone = () => {
  const [phone, setPhone] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPhone() {
      try {
        const { data } = await axios.get(`${API_URL}/${id}`);
        setPhone(data);
      } catch (error) {
        alert("Error when receiving phone!");
        navigate("/");
      }
    }

    fetchPhone();
  }, []);

  if (!phone) {
    return "Loading...";
  }

  return (
    <div className="container">
      <div className="full-phone">
        <img src={phone.imageUrl} alt="" />
        <h2>{phone.title}</h2>
        <h3>{phone.price} ₴</h3>
      </div>
    </div>
  );
};

export default FullPhone;
