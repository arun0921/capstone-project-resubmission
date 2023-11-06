import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"
import { Videos, ChannelCard } from "./"
import { fetchFromAPI } from "../utils/fetchFromAPI"

const ChannelDetail = () => {
  const [channelDetails, setChannelDetails] = useState(null)
  const [videos, setVideos] = useState([])
  const { id } = useParams()

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetails(data?.items[0]))

      fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) =>
      setVideos(data?.items))
  }, [id])

  return (
    <Box minHeight="95vh">
      <Box>
        <div
        style={{
          backgroundImage: `url(${channelDetails?.snippet?.thumbnails?.high?.url})`,
          zIndex: "1",
          height: "300px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",

        }}
        />
        <ChannelCard channelDetail={channelDetails} marginTop = "-110px" />
      </Box>
      <Box display="flex" p="2">
         <Box sx={{mr:{ sm: "100px"}}} />
          <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail