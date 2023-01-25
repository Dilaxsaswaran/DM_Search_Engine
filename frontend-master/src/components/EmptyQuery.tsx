import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import SearchBox from "./SearchBox"
import Vairam from "../../vairam.png"
const EmptyQuery = () => {
    return (
        <Box
            sx={{
                backgroundImage: `url(${Vairam})`,
                backgroundRepeat: 'no-repeat',
                backgroundBlendMode: "luminosity",
                backgroundSize: "cover",
                backgroundColor: "#333333",
                height:700,
                // display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    paddingY:10,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography
                    sx={{
                        mb: 0.0,
                        fontSize: 50,
                        fontWeight: 800,
                        justifyContent: "center",
                        alignItems: "center",
                    }} color="text.secondary">
                    வைரமுத்து Song Collection
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    paddingY:0,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <SearchBox />
            </Box>
        </Box>
    )
}

export default EmptyQuery
