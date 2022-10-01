import { useEffect, useContext, useState } from "react";
import { userContext } from "../providers/UserProvider";
import axios from "axios";

export default function MyGarden() {
  const { userID } = useContext(userContext);
  const [gardenInfo, setGardenInfo] = useState();
  useEffect(() => {
    axios
      .get(`/api/my_garden/all/${userID}`)
      .then((response) => setGardenInfo(response))
      .then(console.log(gardenInfo));
  }, []);
}
