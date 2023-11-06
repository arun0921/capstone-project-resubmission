import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({channelDetail, marginTop}) => 
  (
    <Box sx={{ width:{ xs: '100%', sm: '358px', md:'320px'}, 
    boxShadow: 'none', 
    borderRadius: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '326px',
    margin: 'auto',
    marginTop,
}}
    >
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
            <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center',
                color: '#fff',
            }}>
                <CardMedia
                image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                alt={channelDetail?.snippet?.title}
                sx={{
                    borderRadius: '50%',
                    height: '180px',
                    width: '180px',
                    mb: 2,
                    border: '1px solid #e3e3e3',
                }}
                />
                <Typography variant="h6" fontWeight="bold" color='#fff'>
                    {channelDetail?.snippet?.title}
                    <CheckCircle sx={{fontSize: 14, color: 'gray', ml: '5px'}} />
                </Typography>
                {
                    channelDetail?.statistics?.subscriberCount && (
                        <Typography variant="subtitle2" fontWeight="bold" color='gray'>
                            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
                        </Typography>
                    )
                }
            </CardContent>
        </Link>
    </Box>
  )


export default ChannelCard