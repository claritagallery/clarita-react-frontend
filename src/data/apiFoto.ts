import axios from "axios";
import { useQuery } from "react-query";

const fetchRandomPic = async () => {
  const res = await axios({
    url: "http://placekitten.com/200/300",
  });
  return res.data;
};

const randomQuery = () => {
  return useQuery("random", () => fetchRandomPic());
};

function getRandomPic() {
  return { randomQuery };
}

export default getRandomPic;
